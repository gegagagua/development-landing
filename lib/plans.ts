export type PlanKey = "studio" | "one" | "two" | "three";

type Locale = "ka" | "en" | "ru";

type PlanCopy = {
  type: string;
  area: string;
  price: string;
};

export const PLAN_KEYS: PlanKey[] = ["studio", "one", "two", "three"];

const PLAN_COPY: Record<PlanKey, Record<Locale, PlanCopy>> = {
  studio: {
    ka: { type: "სტუდიო", area: "35.7 – 49.7 მ²", price: "$100,435-დან" },
    en: { type: "Studio", area: "35.7 – 49.7 m²", price: "from $100,435" },
    ru: { type: "Студия", area: "35.7 – 49.7 м²", price: "от $100,435" },
  },
  one: {
    ka: {
      type: "ერთსაძინებლიანი",
      area: "47.5 – 59.5 მ²",
      price: "$142,080-დან",
    },
    en: {
      type: "One-bedroom",
      area: "47.5 – 59.5 m²",
      price: "from $142,080",
    },
    ru: {
      type: "С одной спальней",
      area: "47.5 – 59.5 м²",
      price: "от $142,080",
    },
  },
  two: {
    ka: {
      type: "ორსაძინებლიანი",
      area: "60.2 – 118.7 მ²",
      price: "$166,260-დან",
    },
    en: {
      type: "Two-bedroom",
      area: "60.2 – 118.7 m²",
      price: "from $166,260",
    },
    ru: {
      type: "С двумя спальнями",
      area: "60.2 – 118.7 м²",
      price: "от $166,260",
    },
  },
  three: {
    ka: {
      type: "სამსაძინებლიანი",
      area: "134.0 – 143.3 მ²",
      price: "$365,415-დან",
    },
    en: {
      type: "Three-bedroom",
      area: "134.0 – 143.3 m²",
      price: "from $365,415",
    },
    ru: {
      type: "С тремя спальнями",
      area: "134.0 – 143.3 м²",
      price: "от $365,415",
    },
  },
};

export function getPlanCopy(key: PlanKey, locale: Locale): PlanCopy {
  return PLAN_COPY[key][locale];
}
