"use client";

import { ContactForm } from "@/components/ContactForm";
import { LandingInteractivity } from "@/components/LandingInteractivity";
import type { PlanKey } from "@/lib/plans";
import { scrollToId } from "@/lib/smooth-scroll";
import { useEffect, useState } from "react";

type Locale = "ka" | "en" | "ru";

export default function Home() {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window === "undefined") return "ka";
    const saved = window.localStorage.getItem("locale");
    if (saved === "ka" || saved === "en" || saved === "ru") return saved;

    const preferred = navigator.language.toLowerCase();
    if (preferred.startsWith("ru")) return "ru";
    if (preferred.startsWith("en")) return "en";
    return "ka";
  });

  useEffect(() => {
    document.documentElement.lang = locale;
    window.localStorage.setItem("locale", locale);
  }, [locale]);

  const t = (ka: string, en: string, ru: string): string => {
    if (locale === "en") return en;
    if (locale === "ru") return ru;
    return ka;
  };

  const [bookedPlan, setBookedPlan] = useState<PlanKey | null>(null);

  const scrollToSection = (id: string) => {
    scrollToId(id, -64);
  };

  const handleBookPlan = (plan: PlanKey) => {
    setBookedPlan(plan);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollToId("s-book", -80);
      });
    });
  };

  return (
    <>
      <LandingInteractivity locale={locale} />
      <nav className="gnav">
        <div>
          <svg
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 1047.76 160.69"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
      .cls-1 {
        fill: #f5f4f3;
      }
    `}
              </style>
            </defs>
            <path
              className="cls-1"
              d="M136.07,83.16c-13.24,19.29-26.39,38.64-39.63,57.94L34.2,50.06v110.61H0V.08h79.27c18.93,27.69,37.87,55.39,56.8,83.08Z"
            />
            <path
              className="cls-1"
              d="M300.53.08v160.59h-68.11l.22-102.6c-23.4,34.2-46.79,68.4-70.19,102.6h-39.79C159.28,107.13,195.91,53.6,232.53.06c22.67,0,45.33.01,68,.02Z"
            />
            <path
              className="cls-1"
              d="M503.35,0h-121.5c-35.55,0-63.7,25.73-63.7,56.52v48.29c0,30.8,28.92,55.86,64.47,55.86h121.5c35.55,0,64.47-25.06,64.47-55.86v-48.29c0-30.79-29.69-56.52-65.24-56.52ZM500.48,116.91c0,7.72-7.86,14.57-17.52,14h-79.17c-9.66.56-17.52-6.28-17.52-14V43.35c0-7.72,7.86-13.53,17.52-13.53h79.17c9.66,0,17.52,5.81,17.52,13.53v73.56Z"
            />
            <g>
              <path
                className="cls-1"
                d="M736.73,141.2c-4.44,6.49-8.89,12.98-13.33,19.47h-52.62C634.18,107.15,597.57,53.64,560.96.12v-.04h79.26c32.17,47.04,64.35,94.08,96.52,141.12Z"
              />
              <path
                className="cls-1"
                d="M833.21.08c-25.56,37.38-51.13,74.77-76.69,112.15-6.62-9.69-13.25-19.39-19.87-29.08,18.95-27.69,37.89-55.38,56.84-83.07h39.73Z"
              />
            </g>
            <polygon
              className="cls-1"
              points="1047.76 130.94 1047.76 160.69 850.4 160.69 850.4 160.64 850.97 160.64 850.97 .08 1047.72 .08 1047.72 29.83 919.09 29.83 919.09 65.51 1047.72 65.51 1047.72 95.26 919.09 95.26 919.09 130.94 1047.76 130.94"
            />
          </svg>
        </div>
        <ul>
          <li>
            <a href="#s-hero">{t("მთავარი", "Home", "Главная")}</a>
          </li>
          <li>
            <a href="#s-features">{t("პროექტი", "Project", "Проект")}</a>
          </li>
          <li>
            <a href="#s-gallery">{t("გალერეა", "Gallery", "Галерея")}</a>
          </li>
          <li>
            <a href="#s-plans">{t("გეგმარება", "Layouts", "Планировки")}</a>
          </li>
          <li>
            <a href="#s-location">{t("ლოკაცია", "Location", "Локация")}</a>
          </li>
          <li>
            <a href="#s-contact">{t("კონტაქტი", "Contact", "Контакты")}</a>
          </li>
        </ul>
        <div className="nav-actions">
          <a
            href="https://rtsp.me/embed/HR36KsYH/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-live"
            aria-label={t("ლაივ კამერა", "Live camera", "Прямая трансляция")}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/9/92/Point_rouge.gif"
              alt=""
              width="14"
              height="14"
              className="nav-live-dot"
            />
            <span>LIVE</span>
          </a>
          <button
            type="button"
            className="nav-cta"
            onClick={() => scrollToId("s-book", -80)}
          >
            {t("მოითხოვე ზარი", "Request a call", "Заказать звонок")}
          </button>
          <div className="nav-langs">
            {(["ka", "en", "ru"] as const).map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => setLocale(lang)}
                className={`nav-lang${locale === lang ? " nav-lang--active" : ""}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="hamburger" id="hamburger">
          <span />
          <span />
          <span />
        </div>
      </nav>
      <a
        href="https://wa.me/995593222228"
        target="_blank"
        rel="noopener noreferrer"
        className="wa-fab"
        aria-label={t(
          "ვოთსაფი +995 593 22 22 28",
          "WhatsApp +995 593 22 22 28",
          "WhatsApp +995 593 22 22 28",
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="wa-fab-num">+995 593 22 22 28</span>
      </a>
      <section id="s-hero">
        <div className="h-bg" />
        <div className="h-ov" />
        <div className="h-ey">
          <div className="h-ey-text">
            MOVE DEVELOPMENT{" "}
            <span style={{ color: "rgba(245,244,243,0.75)" }}>
              {t("წარმოგიდგენთ", "presents", "представляет")}
            </span>
          </div>
          <div className="h-ey-line" />
        </div>
        <h1 className="h-title">Piazza Residence</h1>
        <p className="h-sub">
          {t(
            "პრემიუმ საცხოვრებელი კომპლექსი ბათუმის ისტორიულ ცენტრში",
            "Premium residential complex in the historic center of Batumi",
            "Премиальный жилой комплекс в историческом центре Батуми",
          )}
        </p>
        <div className="h-btns">
          <button
            type="button"
            className="btn btn-p"
            onClick={() => scrollToSection("s-features")}
          >
            {t("მეტის გაგება", "Learn more", "Узнать больше")}
          </button>
          <button
            type="button"
            className="btn btn-o"
            onClick={() => scrollToId("s-book", -80)}
          >
            {t("დაგვიკავშირდით", "Contact us", "Связаться с нами")}
          </button>
        </div>
      </section>
      <section id="s-features">
        <div className="f-left">
          <div className="f-top">
            <div className="ey">
              <span>{t("პროექტის შესახებ", "About the project", "О проекте")}</span>
            </div>
            <h2 className="s-h2">
              {t("ძირითადი", "Key", "Основные")}
              <br />
              {t("მახასიათებლები", "features", "характеристики")}
            </h2>
          </div>
          <div className="f-mid">
            <p className="f-desc">
              {t(
                "PIAZZA Residence — MOVE Development-ისა და Tower Group-ის კოლაბორაციით შექმნილი პრემიუმ კლასის საცხოვრებელი კომპლექსი ბათუმის ისტორიულ ცენტრში, სადაც თანამედროვე არქიტექტურა 119 წლის კულტურული მემკვიდრეობის შენობას ერწყმის.",
                "PIAZZA Residence — a premium-class residential complex created in collaboration between MOVE Development and Tower Group, located in the historic center of Batumi, where modern architecture blends with a 119-year-old cultural heritage building.",
                "PIAZZA Residence — премиальный жилой комплекс, созданный в сотрудничестве MOVE Development и Tower Group, расположенный в историческом центре Батуми, где современная архитектура сочетается со 119-летним зданием культурного наследия.",
              )}
            </p>
          </div>
          <div className="f-bot">
            <div className="stats">
              <div className="stat">
                <div className="st-num">25</div>
                <div className="st-lbl">{t("სართული", "Floors", "Этажей")}</div>
                <div className="st-dsc">
                  {t(
                    "ბათუმის ისტორიულ ცენტრში",
                    "In Batumi's historic center",
                    "В историческом центре Батуми",
                  )}
                </div>
              </div>
              <div className="stat">
                <div className="st-num">375</div>
                <div className="st-lbl">{t("აპარტამენტი", "Apartments", "Апартаментов")}</div>
                <div className="st-dsc">
                  {t("სტუდიოდან 3-ოთახიანამდე", "From studio to 3-bedroom", "От студий до 3-спальных")}
                </div>
              </div>
              <div className="stat">
                <div className="st-num">75M</div>
                <div className="st-lbl">{t("მილიონი დოლარი", "Million USD", "Миллионов долларов")}</div>
                <div className="st-dsc">
                  {t("საერთაშორისო სტანდარტის", "International standard", "Международный стандарт")}
                </div>
              </div>
            </div>
          </div>
          <div className="tgl">
            <span>
              {t(
                "არქიტექტურა, რომელიც რჩება",
                "Architecture that remains",
                "Архитектура, которая остается",
              )}
            </span>
          </div>
        </div>
        <div className="f-right">
          <img
            alt="Piazza Residence"
            src="/assets/images/dziritadi.jpeg"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />
          <div className="f-ov" />
          <div className="f-lbl">
            <div className="f-lbl-p">
              Piazza
              <br />
              Residence
            </div>
            <div className="f-lbl-l">
              Batumi
              <br />
              Georgia
            </div>
          </div>
        </div>
      </section>
      <div className="s-div">
        <div className="s-div-line" />
        <div className="s-div-txt">
          {t(
            "MOVE Development · Piazza Residence · ბათუმი, 2028",
            "MOVE Development · Piazza Residence · Batumi, 2028",
            "MOVE Development · Piazza Residence · Батуми, 2028",
          )}
        </div>
        <div className="s-div-line" />
      </div>
      <section id="s-project">
        <div className="p-left">
          <div className="p-ey">
            <span>MOVE Development · Piazza Residence</span>
          </div>
          <h2 className="s-h2">
            {t("პროექტის", "Project", "О проекте")}
            <br />
            {t("შესახებ", "Overview", "обзор")}
          </h2>
          <p className="p-sub">
            {t(
              "არქიტექტურა, კომფორტი და ისტორია ერთ სივრცეში",
              "Architecture, comfort, and history in one place",
              "Архитектура, комфорт и история в одном пространстве",
            )}
          </p>
          <div className="p-list">
            <div className="p-item">
              <span className="p-num">01</span>
              <span className="p-txt">
                {t(
                  "119 წლის კულტურული ძეგლი — რესტავრირებული და ინტეგრირებული",
                  "119-year cultural monument restored and integrated",
                  "119-летний памятник культуры — отреставрирован и интегрирован",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">02</span>
              <span className="p-txt">
                {t(
                  "კერძო პიაცა ვენეციური შადრევნებით",
                  "Private piazza with Venetian fountains",
                  "Частная пьяцца с венецианскими фонтанами",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">03</span>
              <span className="p-txt">
                {t(
                  "13–მეტრიანი კოლონადები, ბუნებრივი ქვის ფასადი",
                  "13-meter colonnades and natural stone facade",
                  "13-метровые колоннады и фасад из натурального камня",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">04</span>
              <span className="p-txt">
                {t(
                  "მაღალჭერიანი, ნათელი, ფუნქციურად განლაგებული ინტერიერი",
                  "High-ceiling, bright, and functional interiors",
                  "Высокие потолки, светлые и функциональные интерьеры",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">05</span>
              <span className="p-txt">
                {t(
                  "ზღვის, მთის და ქალაქის ხედები — ყველა აპარტამენტს აქვს აივანი",
                  "Sea, mountain, and city views; every apartment has a balcony",
                  "Виды на море, горы и город — у каждого апартамента есть балкон",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">06</span>
              <span className="p-txt">
                {t(
                  "კონსიერჟ–სერვისი, 24/7 დაცვა და ვიდეომონიტორინგი",
                  "Concierge service, 24/7 security, and video surveillance",
                  "Консьерж-сервис, охрана 24/7 и видеонаблюдение",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">07</span>
              <span className="p-txt">
                {t(
                  "ქონების მართვა და გაქირავების სერვისი",
                  "Property management and rental service",
                  "Управление недвижимостью и сервис аренды",
                )}
              </span>
            </div>
            <div className="p-item">
              <span className="p-num">08</span>
              <span className="p-txt">
                {t(
                  "TBC Bank–ის სრული დაფინანსება",
                  "Full financing by TBC Bank",
                  "Полное финансирование от TBC Bank",
                )}
              </span>
            </div>
          </div>
        </div>
        <div className="p-right">
          <img
            alt="Piazza Residence Courtyard"
            src="/assets/images/progress-courtyard.jpg"
            loading="lazy"
            decoding="async"
          />
          <div className="p-ov" />
        </div>
      </section>
      <section id="s-gallery">
        <div className="g-hdr">
          <div>
            <div className="g-ey">
              <span>
                {t(
                  "Piazza Residence · ბათუმი",
                  "Piazza Residence · Batumi",
                  "Piazza Residence · Батуми",
                )}
              </span>
            </div>
            <h2 className="g-h2">{t("გალერეა", "Gallery", "Галерея")}</h2>
          </div>
          <div className="g-cnt">{t("07 სურათი", "07 images", "07 изображений")}</div>
        </div>
        <div className="g-grid-wrap">
          <div className="g-grid">
            <div className="g-img g-img-1">
              <img
                alt={t(
                  "შესასვლელი · საღამოს განათება",
                  "Entrance · evening lighting",
                  "Вход · вечерняя подсветка",
                )}
                src="/assets/images/new2.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">
                  {t("შესასვლელი · საღამო", "Entrance · evening", "Вход · вечер")}
                </div>
                <div className="g-lbl-num">01</div>
              </div>
            </div>
            <div className="g-img g-img-2">
              <img
                alt={t(
                  "PIAZZA Residence · ხედი ზემოდან",
                  "PIAZZA Residence · top view",
                  "PIAZZA Residence · вид сверху",
                )}
                src="/assets/images/2.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">{t("სრული ხედი", "Full view", "Общий вид")}</div>
                <div className="g-lbl-num">02</div>
              </div>
            </div>
            <div className="g-img g-img-3">
              <img
                alt={t("ეზო · ფასადი", "Courtyard · facade", "Двор · фасад")}
                src="/assets/images/new4.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">
                  {t("ეზო · სივრცე", "Courtyard · space", "Двор · пространство")}
                </div>
                <div className="g-lbl-num">03</div>
              </div>
            </div>
            <div className="g-img g-img-4">
              <img
                alt="Piazza Residence"
                src="/assets/images/5.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">PIAZZA Residence</div>
                <div className="g-lbl-num">04</div>
              </div>
            </div>
            <div className="g-img g-img-5">
              <img
                alt="Piazza Residence"
                src="/assets/images/6.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">PIAZZA Residence</div>
                <div className="g-lbl-num">05</div>
              </div>
            </div>
            <div className="g-img g-img-6">
              <img
                alt="Piazza Residence"
                src="/assets/images/7.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">PIAZZA Residence</div>
                <div className="g-lbl-num">06</div>
              </div>
            </div>
            <div className="g-img g-img-7">
              <img
                alt="Piazza Residence"
                src="/assets/images/4.jpeg"
                loading="lazy"
                decoding="async"
              />
              <div className="g-img-ov" />
              <div className="g-img-lbl">
                <div className="g-lbl-txt">PIAZZA Residence</div>
                <div className="g-lbl-num">07</div>
              </div>
            </div>
          </div>
        </div>
        <div className="g-bot">
          <div className="g-tgl">
            <span>
              {t(
                "არქიტექტურა, რომელიც რჩება",
                "Architecture that remains",
                "Архитектура, которая остается",
              )}
            </span>
          </div>
          <div className="g-loc">
            {t(
              "ბათუმი · საქართველო · 2028",
              "Batumi · Georgia · 2028",
              "Батуми · Грузия · 2028",
            )}
          </div>
        </div>
      </section>
      <section id="s-plans">
        <div className="pl-hdr">
          <div>
            <div className="pl-ey">
              <span>
                {t(
                  "Piazza Residence · ბათუმი",
                  "Piazza Residence · Batumi",
                  "Piazza Residence · Батуми",
                )}
              </span>
            </div>
            <h2 className="pl-h2">{t("გეგმარება", "Layouts", "Планировки")}</h2>
          </div>
          <p
            style={{
              fontSize: "11px",
              color: "rgba(15,19,34,0.52)",
              letterSpacing: "0.04em",
              paddingBottom: "4px",
            }}
          >
            {t("შეარჩიეთ თქვენი სივრცე", "Choose your space", "Выберите свое пространство")}
          </p>
        </div>
        <div className="pl-tabs">
          <div className="pl-tab" data-plan="studio">
            {t("სტუდიო", "Studio", "Студия")}
          </div>
          <div className="pl-tab" data-plan="one">
            {t("ერთსაძინებლიანი", "One-bedroom", "С одной спальней")}
          </div>
          <div className="pl-tab" data-plan="two">
            {t("ორსაძინებლიანი", "Two-bedroom", "С двумя спальнями")}
          </div>
          <div className="pl-tab active" data-plan="three">
            {t("სამსაძინებლიანი", "Three-bedroom", "С тремя спальнями")}
          </div>
          <button
            type="button"
            className="pl-tab-book"
            onClick={() => {
              const active = document.querySelector<HTMLElement>(".pl-tab.active");
              const key = (active?.dataset.plan as PlanKey | undefined) ?? "studio";
              handleBookPlan(key);
            }}
          >
            {t("დაჯავშნა", "Book", "Забронировать")}
          </button>
        </div>
        <div className="pl-main">
          <div className="pl-table">
            <div className="pl-strip">
              <div className="pl-si">
                <div className="pl-si-lbl">{t("ტიპი", "Type", "Тип")}</div>
                <div className="pl-si-val" id="pl-type">
                  {t("სამსაძინებლიანი", "Three-bedroom", "С тремя спальнями")}
                </div>
              </div>
              <div className="pl-si">
                <div className="pl-si-lbl">{t("ფართი", "Area", "Площадь")}</div>
                <div className="pl-si-val" id="pl-area">
                  {t("134.0 – 143.3 მ²", "134.0 – 143.3 m²", "134.0 – 143.3 м²")}
                </div>
              </div>
              <div className="pl-si">
                <div className="pl-si-lbl">{t("ფასი", "Price", "Цена")}</div>
                <div className="pl-si-val" id="pl-price">
                  {t("$365,415-დან", "from $365,415", "от $365,415")}
                </div>
              </div>
            </div>
            <div className="pl-legend">
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#4a9eff"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                {t("სტუდიო", "Studio", "Студия")}
              </div>
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#34d399"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                {t("1 საძინებელი", "1 bedroom", "1 спальня")}
              </div>
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#a78bfa"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                {t("2 საძინებელი", "2 bedrooms", "2 спальни")}
              </div>
              <div className="pl-legend-item">
                <svg className="pl-legend-dot" viewBox="0 0 10 10">
                  <rect
                    fill="#fb923c"
                    fillOpacity="0.7"
                    height="10"
                    rx="1"
                    width="10"
                  />
                </svg>
                {t("3 საძინებელი", "3 bedrooms", "3 спальни")}
              </div>
            </div>
            <div className="pl-tw">
              <div className="pl-th">
                <div className="pl-thc">{t("ტიპი", "Type", "Тип")}</div>
                <div className="pl-thc">{t("ფართი", "Area", "Площадь")}</div>
                <div className="pl-thc">{t("ფასი", "Price", "Цена")}</div>
                <div className="pl-thc pl-thc--act">{t("მოქმედება", "Action", "Действие")}</div>
              </div>
              <div className="pl-row" data-plan="studio">
                <div className="pl-td n">{t("სტუდიო", "Studio", "Студия")}</div>
                <div className="pl-td">{t("35.7 – 49.7 მ²", "35.7 – 49.7 m²", "35.7 – 49.7 м²")}</div>
                <div className="pl-td n">{t("$100,435-დან", "from $100,435", "от $100,435")}</div>
                <div className="pl-td pl-td--act">
                  <button
                    type="button"
                    className="pl-book"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookPlan("studio");
                    }}
                  >
                    {t("დაჯავშნა", "Book", "Забронировать")}
                  </button>
                </div>
              </div>
              <div className="pl-row" data-plan="one">
                <div className="pl-td n">{t("ერთსაძინებლიანი", "One-bedroom", "С одной спальней")}</div>
                <div className="pl-td">{t("47.5 – 59.5 მ²", "47.5 – 59.5 m²", "47.5 – 59.5 м²")}</div>
                <div className="pl-td n">{t("$142,080-დან", "from $142,080", "от $142,080")}</div>
                <div className="pl-td pl-td--act">
                  <button
                    type="button"
                    className="pl-book"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookPlan("one");
                    }}
                  >
                    {t("დაჯავშნა", "Book", "Забронировать")}
                  </button>
                </div>
              </div>
              <div className="pl-row" data-plan="two">
                <div className="pl-td n">{t("ორსაძინებლიანი", "Two-bedroom", "С двумя спальнями")}</div>
                <div className="pl-td">{t("60.2 – 118.7 მ²", "60.2 – 118.7 m²", "60.2 – 118.7 м²")}</div>
                <div className="pl-td n">{t("$166,260-დან", "from $166,260", "от $166,260")}</div>
                <div className="pl-td pl-td--act">
                  <button
                    type="button"
                    className="pl-book"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookPlan("two");
                    }}
                  >
                    {t("დაჯავშნა", "Book", "Забронировать")}
                  </button>
                </div>
              </div>
              <div className="pl-row active" data-plan="three">
                <div className="pl-td n">{t("სამსაძინებლიანი", "Three-bedroom", "С тремя спальнями")}</div>
                <div className="pl-td">{t("134.0 – 143.3 მ²", "134.0 – 143.3 m²", "134.0 – 143.3 м²")}</div>
                <div className="pl-td n">{t("$365,415-დან", "from $365,415", "от $365,415")}</div>
                <div className="pl-td pl-td--act">
                  <button
                    type="button"
                    className="pl-book"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookPlan("three");
                    }}
                  >
                    {t("დაჯავშნა", "Book", "Забронировать")}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="pl-img-col show-three" id="pl-img-col">
            <div
              className="pl-img-wrap"
              style={{ position: "relative", width: "100%", height: "100%" }}
            >
              <img
                alt={t("სართულის გეგმარება", "Floor plan", "План этажа")}
                className="pl-floorplan-img"
                id="pl-plan-img"
                src="/assets/images/floorplan.png"
                loading="lazy"
                decoding="async"
              />
              <svg
                className="pl-svg-ov"
                preserveAspectRatio="none"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "none",
                }}
                viewBox="0 0 2000 1584"
              >
                <g className="apt-hl" id="hl-studio" style={{ display: "none" }}>
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="302"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="132"
                    x="414"
                    y="602"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="302"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="136"
                    x="548"
                    y="602"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="302"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="142"
                    x="686"
                    y="602"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="316"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="148"
                    x="1110"
                    y="256"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="326"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="138"
                    x="1454"
                    y="264"
                  />
                  <rect
                    fill="rgba(59,130,246,0.34)"
                    height="128"
                    stroke="rgba(59,130,246,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="222"
                    x="1186"
                    y="862"
                  />
                </g>
                <g className="apt-hl" id="hl-one" style={{ display: "none" }}>
                  <polygon
                    fill="rgba(34,197,94,0.30)"
                    points="130,824 210,824 210,904 298,904 298,1062 130,1062"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                  />
                  <rect
                    fill="rgba(34,197,94,0.30)"
                    height="334"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="180"
                    x="1272"
                    y="254"
                  />
                  <rect
                    fill="rgba(34,197,94,0.30)"
                    height="296"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="228"
                    x="1374"
                    y="642"
                  />
                  <rect
                    fill="rgba(34,197,94,0.30)"
                    height="298"
                    stroke="rgba(34,197,94,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="198"
                    x="922"
                    y="962"
                  />
                </g>
                <g className="apt-hl" id="hl-two" style={{ display: "none" }}>
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="212"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="217"
                    x="118"
                    y="1038"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="288"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="268"
                    x="422"
                    y="962"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="384"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="306"
                    x="1594"
                    y="202"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="346"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="292"
                    x="1604"
                    y="586"
                  />
                  <rect
                    fill="rgba(167,139,250,0.28)"
                    height="260"
                    stroke="rgba(167,139,250,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                    width="304"
                    x="1110"
                    y="1000"
                  />
                </g>
                <g className="apt-hl" id="hl-three" style={{ display: "none" }}>
                  <polygon
                    fill="rgba(249,115,22,0.28)"
                    points="808,258 1118,258 1118,530 1140,530 1140,650 808,650"
                    stroke="rgba(249,115,22,0.95)"
                    strokeLinejoin="round"
                    strokeWidth="6"
                  />
                </g>
              </svg>
              <div className="pl-badge">
                <div className="pl-badge-dot" />
                <div className="pl-badge-txt" id="plan-badge-text">
                  {t(
                    "სრული სართულის გეგმარება",
                    "Full floor plan",
                    "Полная планировка этажа",
                  )}
                </div>
              </div>
              <div
                className="pl-legend"
                id="pl-legend"
                style={{
                  position: "absolute",
                  bottom: "12px",
                  right: "12px",
                  background: "rgba(15, 19, 34, 0.82)",
                  padding: "8px 12px",
                  display: "block",
                }}
              >
                <div
                  id="pl-legend-txt"
                  style={{
                    fontFamily: "BPG,sans-serif",
                    fontSize: "8px",
                    letterSpacing: "0.14em",
                    color: "rgba(245,244,243,0.9)",
                    textTransform: "uppercase",
                  }}
                >
                  {t("სტუდიო", "Studio", "Студия")}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pl-tgl">
          <span>
            {t(
              "არქიტექტურა, რომელიც რჩება",
              "Architecture that remains",
              "Архитектура, которая остается",
            )}
          </span>
        </div>
      </section>
      <section id="s-location">
        <div className="lo-hdr">
          <div>
            <div className="lo-ey">
              <span>
                {t(
                  "Piazza Residence · ბათუმი",
                  "Piazza Residence · Batumi",
                  "Piazza Residence · Батуми",
                )}
              </span>
            </div>
            <h2 className="lo-h2">{t("ლოკაცია", "Location", "Локация")}</h2>
          </div>
          <p className="lo-desc">
            {t(
              "ბათუმის ისტორიულ ცენტრში —",
              "In the historic center of Batumi —",
              "В историческом центре Батуми —",
            )}
            <br />
            {t(
              "სადაც ყველაფერი ხელმისაწვდომია",
              "where everything is within reach",
              "где все находится рядом",
            )}
          </p>
        </div>
        <div className="lo-map">
          <iframe
            allowFullScreen
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.openstreetmap.org/export/embed.html?bbox=41.6285%2C41.6370%2C41.6415%2C41.6465&amp;layer=mapnik&amp;marker=41.64005%2C41.63485"
            style={{
              border: 0,
              display: "block",
              background: "#dfe6ec",
            }}
            title={t(
              "Piazza Residence location map",
              "Piazza Residence location map",
              "Карта расположения Piazza Residence",
            )}
            width="100%"
          />
          <a
            href="https://www.google.com/maps/search/?api=1&amp;query=41.64005,41.63485"
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
              background: "rgba(15,19,34,0.85)",
              color: "rgba(245,244,243,0.85)",
              fontFamily: "BPG,sans-serif",
              fontSize: "8px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "7px 12px",
              display: "block",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("რუკის გახსნა ↗", "Open map ↗", "Открыть карту ↗")}
          </a>
          <div className="lo-map-badge">
            <div className="lo-map-dot" />
            <div className="lo-map-txt">
              {t(
                "Piazza Residence · ვახტანგ გორგასლის 59",
                "Piazza Residence · 59 Vakhtang Gorgasali",
                "Piazza Residence · Вахтанга Горгасали 59",
              )}
            </div>
          </div>
        </div>
        <div className="lo-stats">
          <div className="lo-stat">
            <div className="lo-st-lbl">{t("ზღვამდე", "To sea", "До моря")}</div>
            <div className="lo-st-val">{t("300მ", "300 m", "300 м")}</div>
            <div className="lo-st-dsc">{t("ფეხით 4 წუთი", "4 min walk", "4 минуты пешком")}</div>
          </div>
          <div className="lo-stat">
            <div className="lo-st-lbl">{t("ბულვარამდე", "To boulevard", "До бульвара")}</div>
            <div className="lo-st-val">{t("5 წთ", "5 min", "5 мин")}</div>
            <div className="lo-st-dsc">{t("ფეხით", "walk", "пешком")}</div>
          </div>
          <div className="lo-stat">
            <div className="lo-st-lbl">{t("აეროპორტამდე", "To airport", "До аэропорта")}</div>
            <div className="lo-st-val">{t("15 წთ", "15 min", "15 мин")}</div>
            <div className="lo-st-dsc">{t("მანქანით", "by car", "на машине")}</div>
          </div>
          <div className="lo-stat">
            <div className="lo-st-lbl">
              {t("ისტორიული ცენტრი", "Historic center", "Исторический центр")}
            </div>
            <div className="lo-st-val">{t("0 კმ", "0 km", "0 км")}</div>
            <div className="lo-st-dsc">{t("ცენტრში, პირდაპირ", "right in the center", "прямо в центре")}</div>
          </div>
        </div>
        <div className="lo-bot">
          <div className="lo-addr">
            <div className="lo-addr-lbl">{t("მისამართი", "Address", "Адрес")}</div>
            <div className="lo-addr-txt">
              {t("ვახტანგ გორგასლის ქ. 59", "59 Vakhtang Gorgasali St.", "ул. Вахтанга Горгасали, 59")}
              <br />
              {t("ბათუმი, საქართველო", "Batumi, Georgia", "Батуми, Грузия")}
            </div>
          </div>
          <div className="lo-tgl">
            <span>
              {t(
                "არქიტექტურა, რომელიც რჩება",
                "Architecture that remains",
                "Архитектура, которая остается",
              )}
            </span>
          </div>
        </div>
      </section>
      <section id="s-contact">
        <div className="pr-section">
          <div className="pr-hdr">
            <div className="pr-ey">
              <span>
                {t(
                  "Piazza Residence · მშენებლობის სტატუსი",
                  "Piazza Residence · Construction status",
                  "Piazza Residence · Статус строительства",
                )}
              </span>
            </div>
            <h2 className="pr-h2">{t("პროგრესი & განახლებები", "Progress & Updates", "Прогресс и обновления")}</h2>
            <p className="pr-sub">
              {t(
                "მშენებლობის მიმდინარე სტატუსი",
                "Current construction status",
                "Текущий статус строительства",
              )}
            </p>
          </div>
          <div className="timeline">
            <div className="tl-line" />
            <div className="tl-prog" style={{ width: "50%" }} />
            <div className="tl-step">
              <div className="tl-dot active" />
              <div className="tl-lbl">{t("ფუნდამენტი", "Foundation", "Фундамент")}</div>
              <div className="tl-yr">2025</div>
            </div>
            <div className="tl-step">
              <div className="tl-dot active" />
              <div className="tl-lbl">{t("მშენებლობა", "Construction", "Строительство")}</div>
              <div className="tl-yr">2026</div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" />
              <div className="tl-lbl">{t("ფასადი", "Facade", "Фасад")}</div>
              <div className="tl-yr">2027</div>
            </div>
            <div className="tl-step">
              <div className="tl-dot" />
              <div className="tl-lbl">{t("ჩაბარება", "Handover", "Сдача")}</div>
              <div className="tl-yr">2028</div>
            </div>
          </div>
        </div>
        <div className="pn-section">
          <div className="pn-hdr">
            <div className="pn-ey">
              <span>{t("პარტნიორები", "Partners", "Партнёры")}</span>
            </div>
            <h2 className="pn-h2">
              {t("ჩვენი", "Our", "Наши")}
              <br />
              {t("პარტნიორები", "partners", "партнёры")}
            </h2>
            <p className="pn-sub">
              {t(
                "სანდო ბრენდები, რომლებიც PIAZZA Residence-ის უმაღლეს ხარისხს უზრუნველყოფენ",
                "Trusted brands ensuring the highest quality of PIAZZA Residence",
                "Надёжные бренды, обеспечивающие высокое качество PIAZZA Residence",
              )}
            </p>
          </div>
          <div className="pn-grid">
            <div className="pn-item pn-item--tbc">
              <img alt="TBC" src="/assets/images/tbc.svg" loading="lazy" decoding="async" />
            </div>
            <div className="pn-item pn-item--zeta">
              <img
                alt="Zeta"
                src="/assets/images/zetashi.PNG"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--doka">
              <img
                alt="Doka"
                src="/assets/images/doka.JPG.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--sika">
              <img
                alt="Sika"
                src="/assets/images/sika.PNG"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--gulf">
              <img
                alt="Gulf News"
                src="/assets/images/gulf.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--arch">
              <img
                alt="ArchDaily"
                src="/assets/images/arch.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--worldarch">
              <img
                alt="World Architecture Festival"
                src="/assets/images/worldarch.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--adesign">
              <img
                alt="A' Design Award"
                src="/assets/images/adesign.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--iconic">
              <img
                alt="Iconic Awards"
                src="/assets/images/iconic.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--luxury">
              <img
                alt="Luxury Lifestyle Awards"
                src="/assets/images/luxury.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="pn-item pn-item--afc">
              <img
                alt="ADC"
                src="/assets/images/afc.jpeg"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="fc-section">
          <div className="faq-col">
            <div className="faq-ey">
              <span>FAQ</span>
            </div>
            <h2 className="faq-h2">
              {t("ხშირად დასმული", "Frequently asked", "Часто задаваемые")}
              <br />
              {t("კითხვები", "questions", "вопросы")}
            </h2>
            <p className="faq-sub">
              {t("გაქვთ კითხვა? პასუხები ქვემოთ.", "Have a question? Answers below.", "Есть вопрос? Ответы ниже.")}
            </p>
            <div className="faq-list">
              <div className="faq-item">
                <div className="faq-q">
                  <span className="faq-q-txt">
                    {t(
                      "როდის ჩაბარდება კომპლექსი?",
                      "When will the complex be completed?",
                      "Когда комплекс будет сдан?",
                    )}
                  </span>
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-in">
                    {t(
                      "Piazza Residence-ის მშენებლობა დასრულდება 2028 წლის ბოლოს. ამჟამად მიმდინარეობს ფუნდამენტის სამუშაოები.",
                      "Construction of Piazza Residence will be completed by the end of 2028. Foundation work is currently in progress.",
                      "Строительство Piazza Residence завершится к концу 2028 года. Сейчас ведутся фундаментные работы.",
                    )}
                  </div>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="faq-q-txt">
                    {t(
                      "რა ტიპის ბინებია ხელმისაწვდომი?",
                      "What apartment types are available?",
                      "Какие типы апартаментов доступны?",
                    )}
                  </span>
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-in">
                    {t(
                      "კომპლექსი გთავაზობთ სტუდიოდან 3-ოთახიან აპარტამენტებამდე. სულ 375 აპარტამენტი 25 სართულზე.",
                      "The complex offers apartments from studios to 3-bedroom units. In total, 375 apartments across 25 floors.",
                      "Комплекс предлагает апартаменты от студий до 3-спальных. Всего 375 апартаментов на 25 этажах.",
                    )}
                  </div>
                </div>
              </div>
              <div className="faq-item">
                <div className="faq-q">
                  <span className="faq-q-txt">
                    {t(
                      "რა არის გადახდის პირობები?",
                      "What are the payment terms?",
                      "Какие условия оплаты?",
                    )}
                  </span>
                  <div className="faq-icon">+</div>
                </div>
                <div className="faq-a">
                  <div className="faq-a-in">
                    {t(
                      "Piazza Residence გთავაზობთ მოქნილ გადახდის პირობებს. დეტალური ინფორმაციისთვის დაგვიკავშირდით.",
                      "Piazza Residence offers flexible payment terms. Contact us for detailed information.",
                      "Piazza Residence предлагает гибкие условия оплаты. Свяжитесь с нами для подробной информации.",
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="con-col" id="s-book">
            <ContactForm
              locale={locale}
              bookedPlan={bookedPlan}
              onClearBooking={() => setBookedPlan(null)}
            />
          </div>
        </div>
      </section>
      <footer className="footer">
        <div>
          <svg
            data-name="Layer 1"
            id="Layer_1_2"
            viewBox="0 0 1047.76 160.69"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>
                {`
      .cls-1 {
        fill: #f5f4f3;
      }
    `}
              </style>
            </defs>
            <path
              className="cls-1"
              d="M136.07,83.16c-13.24,19.29-26.39,38.64-39.63,57.94L34.2,50.06v110.61H0V.08h79.27c18.93,27.69,37.87,55.39,56.8,83.08Z"
            />
            <path
              className="cls-1"
              d="M300.53.08v160.59h-68.11l.22-102.6c-23.4,34.2-46.79,68.4-70.19,102.6h-39.79C159.28,107.13,195.91,53.6,232.53.06c22.67,0,45.33.01,68,.02Z"
            />
            <path
              className="cls-1"
              d="M503.35,0h-121.5c-35.55,0-63.7,25.73-63.7,56.52v48.29c0,30.8,28.92,55.86,64.47,55.86h121.5c35.55,0,64.47-25.06,64.47-55.86v-48.29c0-30.79-29.69-56.52-65.24-56.52ZM500.48,116.91c0,7.72-7.86,14.57-17.52,14h-79.17c-9.66.56-17.52-6.28-17.52-14V43.35c0-7.72,7.86-13.53,17.52-13.53h79.17c9.66,0,17.52,5.81,17.52,13.53v73.56Z"
            />
            <g>
              <path
                className="cls-1"
                d="M736.73,141.2c-4.44,6.49-8.89,12.98-13.33,19.47h-52.62C634.18,107.15,597.57,53.64,560.96.12v-.04h79.26c32.17,47.04,64.35,94.08,96.52,141.12Z"
              />
              <path
                className="cls-1"
                d="M833.21.08c-25.56,37.38-51.13,74.77-76.69,112.15-6.62-9.69-13.25-19.39-19.87-29.08,18.95-27.69,37.89-55.38,56.84-83.07h39.73Z"
              />
            </g>
            <polygon
              className="cls-1"
              points="1047.76 130.94 1047.76 160.69 850.4 160.69 850.4 160.64 850.97 160.64 850.97 .08 1047.72 .08 1047.72 29.83 919.09 29.83 919.09 65.51 1047.72 65.51 1047.72 95.26 919.09 95.26 919.09 130.94 1047.76 130.94"
            />
          </svg>
        </div>
        <div className="footer-copy">
          {t(
            "© 2026 MOVE Development. ყველა უფლება დაცულია.",
            "© 2026 MOVE Development. All rights reserved.",
            "© 2026 MOVE Development. Все права защищены.",
          )}
        </div>
        <div className="footer-links">
          <a href="tel:+995593222228">593 22 22 28</a>
          <a
            href="https://www.facebook.com/profile.php?id=61589174859876"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://www.instagram.com/move.development/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </>
  );
}
