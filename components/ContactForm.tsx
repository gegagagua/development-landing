"use client";

import { FormEvent, useRef, useState } from "react";
import { z } from "zod";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";

function isValidPhoneFormat(v: string): boolean {
  const d = v.replace(/\D/g, "");
  if (d.length < 9 || d.length > 15) return false;
  if (d.startsWith("995") && !/^9955\d{8}$/.test(d)) return false;
  if (/^9955\d{8}$/.test(d)) return true;
  if (/^5\d{8}$/.test(d)) return true;
  if (/^05\d{8}$/.test(d)) return true;
  if (d.length >= 10 && d.length <= 15 && /^[1-9]\d+$/.test(d)) return true;
  return false;
}

const nameSchema = z.string().trim().min(1).max(200);
const phoneSchema = z
  .string()
  .trim()
  .min(1)
  .max(50)
  .refine(isValidPhoneFormat);
const emailSchema = z
  .string()
  .trim()
  .min(1)
  .max(320)
  .transform((s) => s.toLowerCase())
  .pipe(z.string().email());
const messageSchema = z.string().trim().min(1).max(5000);

const formSchema = z.object({
  name: nameSchema,
  phone: phoneSchema,
  email: emailSchema,
  message: messageSchema,
});

type FieldKey = "name" | "phone" | "email" | "message";

type Status = "idle" | "loading" | "success" | "error";

function computeFieldMessages(raw: Record<FieldKey, string>): Partial<Record<FieldKey, string>> {
  const out: Partial<Record<FieldKey, string>> = {};

  if (!nameSchema.safeParse(raw.name).success) {
    out.name =
      raw.name.trim() === "" ? "შეიყვანეთ სახელი." : "სახელი ძალიან გრძელია.";
  }

  if (!phoneSchema.safeParse(raw.phone).success) {
    out.phone =
      raw.phone.trim() === ""
        ? "შეიყვანეთ ტელეფონი."
        : "+995 5XX XXX XXX, 5XXXXXXXX ან საერთაშორისო 10–15 ციფრი.";
  }

  if (!emailSchema.safeParse(raw.email).success) {
    out.email =
      raw.email.trim() === ""
        ? "შეიყვანეთ ელფოსტა."
        : "მაგ. name@domain.com — სრული ფორმატით.";
  }

  if (!messageSchema.safeParse(raw.message).success) {
    out.message =
      raw.message.trim() === ""
        ? "შეიყვანეთ შეტყობინება."
        : "ტექსტი ძალიან გრძელია.";
  }

  return out;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const validationActiveRef = useRef(false);

  function clearFieldError(key: FieldKey) {
    setFieldErrors((prev) => {
      if (prev[key] === undefined) return prev;
      const next = { ...prev };
      delete next[key];
      if (Object.keys(next).length === 0 && validationActiveRef.current) {
        validationActiveRef.current = false;
        queueMicrotask(() => {
          setStatus("idle");
        });
      }
      return next;
    });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError(null);

    const form = e.currentTarget;
    const fd = new FormData(form);
    const raw: Record<FieldKey, string> = {
      name: String(fd.get("name") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      email: String(fd.get("email") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    const parsed = formSchema.safeParse(raw);
    if (!parsed.success) {
      validationActiveRef.current = true;
      setFieldErrors(computeFieldMessages(raw));
      setStatus("error");
      return;
    }

    const { name, phone, email, message } = parsed.data;
    validationActiveRef.current = false;
    setFieldErrors({});

    const lines = [`ტელეფონი: ${phone}`, `ელ. ფოსტა: ${email}`, "", message];

    const submitBody = new FormData();
    submitBody.append("access_key", WEB3FORMS_ACCESS_KEY);
    submitBody.append("subject", "Piazza Residence — კონტაქტის ფორმა");
    submitBody.append("name", name);
    submitBody.append("email", email);
    submitBody.append("message", lines.join("\n"));

    setStatus("loading");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitBody,
      });
      const text = await res.text();
      let data: { success?: boolean; message?: string } = {};
      try {
        data = text ? (JSON.parse(text) as { success?: boolean; message?: string }) : {};
      } catch {
        setStatus("error");
        setSubmitError(
          "სერვისმა არასწორი პასუხი დააბრუნა. სცადეთ ხელახლა ან შეამოწმეთ ინტერნეტი.",
        );
        return;
      }
      if (!res.ok || !data.success) {
        setStatus("error");
        const hint = data.message?.trim();
        setSubmitError(
          hint
            ? `${hint} — სცადეთ ხელახლა ან შეამოწმეთ Web3Forms-ის გასაღები.`
            : "ვერ გაიგზავნა. შეამოწმეთ ქსელი ან სცადეთ მოგვიანებით.",
        );
        return;
      }
      setStatus("success");
      setSubmitError(null);
      form.reset();
    } catch {
      setStatus("error");
      setSubmitError("ვერ გაიგზავნა. შეამოწმეთ ქსელი ან სცადეთ მოგვიანებით.");
    }
  }

  return (
    <>
      <h2 className="con-h2">დაგვიკავშირდით</h2>
      <form className="con-form" onSubmit={onSubmit} noValidate>
        <div className="con-field-wrap">
          <input
            id="contact-name"
            name="name"
            placeholder="სახელი *"
            type="text"
            autoComplete="name"
            className={fieldErrors.name ? "con-field--err" : undefined}
            aria-invalid={fieldErrors.name ? true : undefined}
            aria-describedby={fieldErrors.name ? "contact-name-err" : undefined}
            onChange={() => clearFieldError("name")}
          />
          {fieldErrors.name ? (
            <p id="contact-name-err" className="con-field-msg" role="alert">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div className="con-field-wrap">
          <input
            id="contact-phone"
            name="phone"
            placeholder="ტელეფონი *"
            type="tel"
            autoComplete="tel"
            className={fieldErrors.phone ? "con-field--err" : undefined}
            aria-invalid={fieldErrors.phone ? true : undefined}
            aria-describedby={fieldErrors.phone ? "contact-phone-err" : undefined}
            onChange={() => clearFieldError("phone")}
          />
          {fieldErrors.phone ? (
            <p id="contact-phone-err" className="con-field-msg" role="alert">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
        <div className="con-field-wrap">
          <input
            id="contact-email"
            name="email"
            placeholder="ელ. ფოსტა *"
            type="email"
            autoComplete="email"
            className={fieldErrors.email ? "con-field--err" : undefined}
            aria-invalid={fieldErrors.email ? true : undefined}
            aria-describedby={fieldErrors.email ? "contact-email-err" : undefined}
            onChange={() => clearFieldError("email")}
          />
          {fieldErrors.email ? (
            <p id="contact-email-err" className="con-field-msg" role="alert">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div className="con-field-wrap">
          <textarea
            id="contact-message"
            name="message"
            placeholder="შეტყობინება *"
            className={fieldErrors.message ? "con-field--err" : undefined}
            aria-invalid={fieldErrors.message ? true : undefined}
            aria-describedby={fieldErrors.message ? "contact-message-err" : undefined}
            onChange={() => clearFieldError("message")}
          />
          {fieldErrors.message ? (
            <p id="contact-message-err" className="con-field-msg" role="alert">
              {fieldErrors.message}
            </p>
          ) : null}
        </div>
        <button className="con-btn" type="submit" disabled={status === "loading"}>
          {status === "loading" ? "იგზავნება…" : "გაგზავნა"}
        </button>
        {status === "success" ? (
          <p className="con-form-msg con-form-msg--ok" role="status">
            გაგზავნილია. მალე დაგიკავშირდებით.
          </p>
        ) : null}
        {submitError ? (
          <p className="con-form-msg con-form-msg--err" role="alert">
            {submitError}
          </p>
        ) : null}
      </form>
    </>
  );
}
