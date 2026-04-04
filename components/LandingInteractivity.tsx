"use client";

import { useEffect } from "react";

const APT_LABELS: Record<string, string> = {
  studio: "სტუდიო",
  one: "ერთსაძინებლიანი",
  two: "ორსაძინებლიანი",
  three: "სამსაძინებლიანი",
};

const PLANS: Record<
  string,
  { type: string; area: string; price: string }
> = {
  studio: {
    type: "სტუდიო",
    area: "35.7 – 49.7 მ²",
    price: "$100,435-დან",
  },
  one: {
    type: "ერთსაძინებლიანი",
    area: "47.5 – 59.5 მ²",
    price: "$142,080-დან",
  },
  two: {
    type: "ორსაძინებლიანი",
    area: "60.2 – 118.7 მ²",
    price: "$166,260-დან",
  },
  three: {
    type: "სამსაძინებლიანი",
    area: "134.0 – 143.3 მ²",
    price: "$365,415-დან",
  },
};

const PLAN_KEYS = ["studio", "one", "two", "three"] as const;

function showHighlight(key: string) {
  document.querySelectorAll(".apt-hl").forEach((g) => {
    (g as HTMLElement).style.display = "none";
  });
  const g = document.getElementById(`hl-${key}`);
  if (g) (g as HTMLElement).style.display = "block";
  const leg = document.getElementById("pl-legend");
  const legTxt = document.getElementById("pl-legend-txt");
  if (leg && legTxt) {
    leg.style.display = "block";
    legTxt.textContent = APT_LABELS[key] ?? "";
  }
}

function plUpdate(type: string, area: string, price: string) {
  (
    [
      ["pl-type", type],
      ["pl-area", area],
      ["pl-price", price],
    ] as const
  ).forEach(([id, value]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  });
}

function plTab(
  el: HTMLElement,
  key: string,
  type: string,
  area: string,
  price: string,
) {
  document.querySelectorAll(".pl-tab").forEach((t) => t.classList.remove("active"));
  el.classList.add("active");
  plUpdate(type, area, price);
  showHighlight(key);
  const rows = document.querySelectorAll(".pl-row");
  rows.forEach((r) => r.classList.remove("active"));
  const idx = (PLAN_KEYS as readonly string[]).indexOf(key);
  if (idx >= 0 && rows[idx]) rows[idx].classList.add("active");
}

function plRow(
  el: HTMLElement,
  type: string,
  area: string,
  price: string,
  key: string,
) {
  document.querySelectorAll(".pl-row").forEach((r) => r.classList.remove("active"));
  el.classList.add("active");
  plUpdate(type, area, price);
  showHighlight(key);
  const idx = Array.from(document.querySelectorAll(".pl-row")).indexOf(el);
  document.querySelectorAll(".pl-tab").forEach((t, i) => {
    t.classList.toggle("active", i === idx);
  });
}

function syncPlanOverlay() {
  const wrap = document.querySelector(".pl-img-wrap");
  const img = document.getElementById("pl-plan-img");
  const svg = document.querySelector(".pl-svg-ov");
  if (!wrap || !img || !svg) return;

  const naturalWidth = (img as HTMLImageElement).naturalWidth || 0;
  const naturalHeight = (img as HTMLImageElement).naturalHeight || 0;
  if (!naturalWidth || !naturalHeight) return;

  const wrapWidth = wrap.clientWidth;
  const wrapHeight = wrap.clientHeight;
  if (!wrapWidth || !wrapHeight) return;

  const scale = Math.min(wrapWidth / naturalWidth, wrapHeight / naturalHeight);
  const drawWidth = naturalWidth * scale;
  const drawHeight = naturalHeight * scale;
  const left = (wrapWidth - drawWidth) / 2;
  const top = (wrapHeight - drawHeight) / 2;

  [img, svg].forEach((el) => {
    const h = el as HTMLElement;
    h.style.left = `${left}px`;
    h.style.top = `${top}px`;
    h.style.width = `${drawWidth}px`;
    h.style.height = `${drawHeight}px`;
  });
}

function initPlanState() {
  const activeTab = document.querySelector(".pl-tab.active");
  const activeRow = document.querySelector(".pl-row.active");
  let key: string = "studio";
  if (activeTab) {
    const tabs = Array.from(document.querySelectorAll(".pl-tab"));
    const i = tabs.indexOf(activeTab as Element);
    key = PLAN_KEYS[i] ?? key;
  } else if (activeRow) {
    const rows = Array.from(document.querySelectorAll(".pl-row"));
    const i = rows.indexOf(activeRow as Element);
    key = PLAN_KEYS[i] ?? key;
  }
  showHighlight(key);
  syncPlanOverlay();
}

function toggleMenu() {
  const ul = document.querySelector(".gnav ul");
  const hb = document.getElementById("hamburger");
  if (!ul || !hb) return;
  ul.classList.toggle("open");
  hb.classList.toggle("open");
}

function closeNavMenu() {
  document.querySelector(".gnav ul")?.classList.remove("open");
  document.getElementById("hamburger")?.classList.remove("open");
}

export function LandingInteractivity() {
  useEffect(() => {
    const ac = new AbortController();
    const { signal } = ac;

    document.querySelectorAll('.gnav a[href^="#"]').forEach((a) => {
      a.addEventListener(
        "click",
        (e) => {
          e.preventDefault();
          const href = a.getAttribute("href");
          const t = href ? document.querySelector(href) : null;
          if (t) t.scrollIntoView({ behavior: "smooth" });
          closeNavMenu();
        },
        { signal },
      );
    });

    document.getElementById("hamburger")?.addEventListener("click", toggleMenu, {
      signal,
    });

    document.querySelectorAll(".faq-q").forEach((q) => {
      q.addEventListener(
        "click",
        () => {
          q.parentElement?.classList.toggle("open");
        },
        { signal },
      );
    });

    document.querySelectorAll(".pl-tab").forEach((tab) => {
      tab.addEventListener(
        "click",
        () => {
          const key = tab.getAttribute("data-plan");
          if (!key || !PLANS[key]) return;
          const p = PLANS[key];
          plTab(tab as HTMLElement, key, p.type, p.area, p.price);
        },
        { signal },
      );
    });

    document.querySelectorAll(".pl-row").forEach((row) => {
      row.addEventListener(
        "click",
        () => {
          const key = row.getAttribute("data-plan");
          if (!key || !PLANS[key]) return;
          const p = PLANS[key];
          plRow(row as HTMLElement, p.type, p.area, p.price, key);
        },
        { signal },
      );
    });

    const img = document.getElementById("pl-plan-img");
    if (img) {
      const onLoad = () => syncPlanOverlay();
      img.addEventListener("load", onLoad, { signal });
      if ((img as HTMLImageElement).complete) syncPlanOverlay();
    }
    initPlanState();

    window.addEventListener("resize", syncPlanOverlay, { signal });

    return () => ac.abort();
  }, []);

  return null;
}
