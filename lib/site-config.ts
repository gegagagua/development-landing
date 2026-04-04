import type { Metadata } from "next";

export function getSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) {
    const host = vercel.replace(/^https?:\/\//, "").replace(/\/$/, "");
    return `https://${host}`;
  }
  return "https://movedevelopment.com";
}

export const SITE = {
  title: "Piazza Residence — MOVE Development",
  titleTemplate: "%s | MOVE Development",
  shortTitle: "Piazza Residence",
  description:
    "Piazza Residence — პრემიუმ საცხოვრებელი კომპლექსი ბათუმის ისტორიულ ცენტრში. 350 აპარტამენტი, 18 სართული, კერძო პიაცა და საერთაშორისო სტანდარტები. MOVE Development.",
  applicationName: "Piazza Residence",
  keywords: [
    "Piazza Residence",
    "MOVE Development",
    "ბათუმი",
    "Batumi",
    "საცხოვრებელი კომპლექსი",
    "აპარტამენტი ბათუმში",
    "premium residence Batumi",
    "real estate Georgia",
    "ინვესტიცია ბათუმი",
    "საქართველო უძრავი ქონება",
    "პიაცა რეზიდენსი",
  ],
  email: "info@movedevelopment.com",
  streetAddress: "ვახტანგ გორგასლის ქ. 59",
  addressLocality: "ბათუმი",
  addressCountry: "საქართველო",
  addressCountryCode: "GE",
  geoRegion: "GE-AJ",
  latitude: "41.64005",
  longitude: "41.63485",
  localeOg: "ka_GE",
  language: "ka",
  ogImagePath: "/assets/images/hero-main.jpg",
  ogImageAlt:
    "Piazza Residence — პრემიუმ საცხოვრებელი კომპლექსი ბათუმში, MOVE Development",
} as const;

export function buildSiteMetadata(): Metadata {
  const base = getSiteUrl();
  const ogUrl = base + "/";
  const twitterHandle = process.env.NEXT_PUBLIC_TWITTER_SITE?.trim();

  return {
    metadataBase: new URL(base),
    title: {
      default: SITE.title,
      template: SITE.titleTemplate,
    },
    description: SITE.description,
    applicationName: SITE.applicationName,
    authors: [{ name: "MOVE Development", url: base }],
    creator: "MOVE Development",
    publisher: "MOVE Development",
    category: "Real estate",
    keywords: [...SITE.keywords],
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    referrer: "strict-origin-when-cross-origin",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: "/",
      languages: {
        "ka-GE": "/",
      },
    },
    openGraph: {
      type: "website",
      locale: SITE.localeOg,
      alternateLocale: ["en_US"],
      url: ogUrl,
      siteName: SITE.applicationName,
      title: SITE.title,
      description: SITE.description,
      countryName: SITE.addressCountry,
      emails: [SITE.email],
      images: [
        {
          url: SITE.ogImagePath,
          width: 1600,
          height: 900,
          alt: SITE.ogImageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE.title,
      description: SITE.description,
      images: [SITE.ogImagePath],
      ...(twitterHandle
        ? { site: twitterHandle, creator: twitterHandle }
        : {}),
    },
    icons: {
      icon: [{ url: SITE.ogImagePath, type: "image/jpeg" }],
      apple: [{ url: SITE.ogImagePath, type: "image/jpeg" }],
    },
    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      title: SITE.shortTitle,
      statusBarStyle: "black-translucent",
    },
    other: {
      "geo.region": SITE.geoRegion,
      "geo.placename": SITE.addressLocality,
      ICBM: `${SITE.latitude}, ${SITE.longitude}`,
      "contact:email": SITE.email,
    },
  };
}
