import { getSiteUrl, SITE } from "@/lib/site-config";

export function StructuredData() {
  const base = getSiteUrl();
  const url = `${base}/`;

  const graph = [
    {
      "@type": "Organization",
      "@id": `${base}/#organization`,
      name: "MOVE Development",
      url: base,
      email: SITE.email,
      logo: `${base}${SITE.ogImagePath}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.streetAddress,
        addressLocality: SITE.addressLocality,
        addressCountry: SITE.addressCountryCode,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${base}/#website`,
      url,
      name: SITE.shortTitle,
      description: SITE.description,
      inLanguage: "ka-GE",
      publisher: { "@id": `${base}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: SITE.title,
      description: SITE.description,
      isPartOf: { "@id": `${base}/#website` },
      about: { "@id": `${base}/#residence` },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${base}${SITE.ogImagePath}`,
      },
    },
    {
      "@type": "ApartmentComplex",
      "@id": `${base}/#residence`,
      name: SITE.shortTitle,
      description: SITE.description,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.streetAddress,
        addressLocality: SITE.addressLocality,
        addressCountry: SITE.addressCountryCode,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: SITE.latitude,
        longitude: SITE.longitude,
      },
      brand: { "@id": `${base}/#organization` },
    },
  ];

  const json = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
