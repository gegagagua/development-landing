"use client";

import { FormEvent, useRef, useState } from "react";
import { z } from "zod";
import { getPlanCopy, type PlanKey } from "@/lib/plans";
import { WEB3FORMS_ACCESS_KEY } from "@/lib/web3forms";

type Locale = "ka" | "en" | "ru";

const copy = {
  ka: {
    errors: {
      nameEmpty: "შეიყვანეთ სახელი.",
      nameLong: "სახელი ძალიან გრძელია.",
      phoneEmpty: "შეიყვანეთ ტელეფონი.",
      phoneInvalid: "+995 5XX XXX XXX, 5XXXXXXXX ან საერთაშორისო 10–15 ციფრი.",
      emailEmpty: "შეიყვანეთ ელფოსტა.",
      emailInvalid: "მაგ. name@domain.com — სრული ფორმატით.",
      messageEmpty: "შეიყვანეთ შეტყობინება.",
      messageLong: "ტექსტი ძალიან გრძელია.",
      badResponse:
        "სერვისმა არასწორი პასუხი დააბრუნა. სცადეთ ხელახლა ან შეამოწმეთ ინტერნეტი.",
      retryWeb3:
        "სცადეთ ხელახლა ან შეამოწმეთ Web3Forms-ის გასაღები.",
      sendFailed: "ვერ გაიგზავნა. შეამოწმეთ ქსელი ან სცადეთ მოგვიანებით.",
    },
    labels: {
      title: "დაგვიკავშირდით",
      name: "სახელი *",
      phone: "ტელეფონი *",
      email: "ელ. ფოსტა *",
      message: "შეტყობინება *",
      sending: "იგზავნება…",
      submit: "გაგზავნა",
      success: "გაგზავნილია. მალე დაგიკავშირდებით.",
    },
    submit: {
      phone: "ტელეფონი",
      email: "ელ. ფოსტა",
      subject: "Piazza Residence — კონტაქტის ფორმა",
      bookingSubject: "Piazza Residence — დაჯავშნის მოთხოვნა",
      plan: "არჩეული გეგმარება",
      area: "ფართი",
      price: "ფასი",
    },
    booking: {
      label: "არჩეული გეგმარება",
      clear: "გასუფთავება",
    },
  },
  en: {
    errors: {
      nameEmpty: "Please enter your name.",
      nameLong: "Name is too long.",
      phoneEmpty: "Please enter a phone number.",
      phoneInvalid: "Use +995 5XX XXX XXX, 5XXXXXXXX, or 10–15 international digits.",
      emailEmpty: "Please enter an email address.",
      emailInvalid: "Use full format, e.g. name@domain.com.",
      messageEmpty: "Please enter a message.",
      messageLong: "Message is too long.",
      badResponse:
        "The service returned an invalid response. Try again or check your connection.",
      retryWeb3: "Try again or check your Web3Forms key.",
      sendFailed: "Could not send. Check your network or try again later.",
    },
    labels: {
      title: "Contact Us",
      name: "Name *",
      phone: "Phone *",
      email: "Email *",
      message: "Message *",
      sending: "Sending…",
      submit: "Send",
      success: "Sent successfully. We will contact you soon.",
    },
    submit: {
      phone: "Phone",
      email: "Email",
      subject: "Piazza Residence — Contact Form",
      bookingSubject: "Piazza Residence — Booking Request",
      plan: "Selected layout",
      area: "Area",
      price: "Price",
    },
    booking: {
      label: "Selected layout",
      clear: "Clear",
    },
  },
  ru: {
    errors: {
      nameEmpty: "Введите имя.",
      nameLong: "Имя слишком длинное.",
      phoneEmpty: "Введите номер телефона.",
      phoneInvalid: "Используйте +995 5XX XXX XXX, 5XXXXXXXX или 10–15 международных цифр.",
      emailEmpty: "Введите email.",
      emailInvalid: "Используйте полный формат, например name@domain.com.",
      messageEmpty: "Введите сообщение.",
      messageLong: "Сообщение слишком длинное.",
      badResponse:
        "Сервис вернул некорректный ответ. Попробуйте снова или проверьте интернет.",
      retryWeb3: "Попробуйте снова или проверьте ключ Web3Forms.",
      sendFailed: "Не удалось отправить. Проверьте сеть или попробуйте позже.",
    },
    labels: {
      title: "Свяжитесь с нами",
      name: "Имя *",
      phone: "Телефон *",
      email: "Email *",
      message: "Сообщение *",
      sending: "Отправка…",
      submit: "Отправить",
      success: "Отправлено. Мы скоро с вами свяжемся.",
    },
    submit: {
      phone: "Телефон",
      email: "Email",
      subject: "Piazza Residence — Контактная форма",
      bookingSubject: "Piazza Residence — Запрос на бронь",
      plan: "Выбранная планировка",
      area: "Площадь",
      price: "Цена",
    },
    booking: {
      label: "Выбранная планировка",
      clear: "Очистить",
    },
  },
} as const;

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

function computeFieldMessages(
  raw: Record<FieldKey, string>,
  locale: Locale,
): Partial<Record<FieldKey, string>> {
  const out: Partial<Record<FieldKey, string>> = {};
  const t = copy[locale].errors;

  if (!nameSchema.safeParse(raw.name).success) {
    out.name = raw.name.trim() === "" ? t.nameEmpty : t.nameLong;
  }

  if (!phoneSchema.safeParse(raw.phone).success) {
    out.phone = raw.phone.trim() === "" ? t.phoneEmpty : t.phoneInvalid;
  }

  if (!emailSchema.safeParse(raw.email).success) {
    out.email = raw.email.trim() === "" ? t.emailEmpty : t.emailInvalid;
  }

  if (!messageSchema.safeParse(raw.message).success) {
    out.message = raw.message.trim() === "" ? t.messageEmpty : t.messageLong;
  }

  return out;
}

export function ContactForm({
  locale,
  bookedPlan,
  onClearBooking,
}: {
  locale: Locale;
  bookedPlan?: PlanKey | null;
  onClearBooking?: () => void;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [fieldErrors, setFieldErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const validationActiveRef = useRef(false);
  const t = copy[locale];
  const plan = bookedPlan ? getPlanCopy(bookedPlan, locale) : null;

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
      setFieldErrors(computeFieldMessages(raw, locale));
      setStatus("error");
      return;
    }

    const { name, phone, email, message } = parsed.data;
    validationActiveRef.current = false;
    setFieldErrors({});

    const lines: string[] = [];
    if (plan) {
      lines.push(
        `${t.submit.plan}: ${plan.type}`,
        `${t.submit.area}: ${plan.area}`,
        `${t.submit.price}: ${plan.price}`,
        "",
      );
    }
    lines.push(
      `${t.submit.phone}: ${phone}`,
      `${t.submit.email}: ${email}`,
      "",
      message,
    );

    const subject = plan
      ? `${t.submit.bookingSubject}: ${plan.type}`
      : t.submit.subject;

    const submitBody = new FormData();
    submitBody.append("access_key", WEB3FORMS_ACCESS_KEY);
    submitBody.append("subject", subject);
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
        setSubmitError(t.errors.badResponse);
        return;
      }
      if (!res.ok || !data.success) {
        setStatus("error");
        const hint = data.message?.trim();
        setSubmitError(
          hint ? `${hint} — ${t.errors.retryWeb3}` : t.errors.sendFailed,
        );
        return;
      }
      setStatus("success");
      setSubmitError(null);
      form.reset();
    } catch {
      setStatus("error");
      setSubmitError(t.errors.sendFailed);
    }
  }

  return (
    <>
      <h2 className="con-h2">{t.labels.title}</h2>
      <div className="con-info">
        <a href="tel:+995593222228" className="con-info-item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>593 22 22 28</span>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61589174859876"
          target="_blank"
          rel="noopener noreferrer"
          className="con-info-item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
          <span>Facebook</span>
        </a>
        <a
          href="https://www.instagram.com/move.development/"
          target="_blank"
          rel="noopener noreferrer"
          className="con-info-item"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
          <span>Instagram</span>
        </a>
      </div>
      {plan ? (
        <div className="con-booked" role="status" aria-live="polite">
          <div className="con-booked-info">
            <div className="con-booked-lbl">{t.booking.label}</div>
            <div className="con-booked-val">
              <span className="con-booked-type">{plan.type}</span>
              <span className="con-booked-meta">
                {plan.area} · {plan.price}
              </span>
            </div>
          </div>
          {onClearBooking ? (
            <button
              type="button"
              className="con-booked-clear"
              onClick={onClearBooking}
              aria-label={t.booking.clear}
            >
              ×
            </button>
          ) : null}
        </div>
      ) : null}
      <form className="con-form" onSubmit={onSubmit} noValidate>
        <div className="con-field-wrap">
          <input
            id="contact-name"
            name="name"
            placeholder={t.labels.name}
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
            placeholder={t.labels.phone}
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
            placeholder={t.labels.email}
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
            placeholder={t.labels.message}
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
          {status === "loading" ? t.labels.sending : t.labels.submit}
        </button>
        {status === "success" ? (
          <p className="con-form-msg con-form-msg--ok" role="status">
            {t.labels.success}
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
