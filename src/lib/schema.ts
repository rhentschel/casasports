import { siteConfig } from "@/data/site";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | { [k: string]: JsonLdValue | JsonLdValue[] | undefined }
  | JsonLdValue[];

export type JsonLd = Record<string, JsonLdValue | JsonLdValue[] | undefined>;

const GEO = { lat: 51.631, lng: 7.3 } as const;

const openingHours = [
  { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "21:30" },
  { days: ["Saturday", "Sunday"], opens: "10:00", closes: "14:00" },
];

export function healthClubSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": ["HealthClub", "LocalBusiness"],
    "@id": `${siteConfig.url}#business`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: `${siteConfig.url}/images/casasports-hero-1.webp`,
    logo: `${siteConfig.url}/images/casa-sports-logo.webp`,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.zip,
      addressLocality: siteConfig.address.city,
      addressCountry: "DE",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.lat,
      longitude: GEO.lng,
    },
    openingHoursSpecification: openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.rating.score,
      bestRating: siteConfig.rating.max,
      ratingCount: 127,
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Fitnessbereich" },
      { "@type": "LocationFeatureSpecification", name: "Gruppenkurse" },
      { "@type": "LocationFeatureSpecification", name: "KLAFS Sauna" },
      { "@type": "LocationFeatureSpecification", name: "Infrarotkabine" },
      { "@type": "LocationFeatureSpecification", name: "Wellness-Bereich" },
      { "@type": "LocationFeatureSpecification", name: "Personal Training" },
      { "@type": "LocationFeatureSpecification", name: "Ernaehrungsberatung" },
      { "@type": "LocationFeatureSpecification", name: "Parkplatz" },
    ],
  };
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "de-DE",
    publisher: { "@id": `${siteConfig.url}#business` },
  };
}

export type FAQItem = { question: string; answer: string };

export function faqSchema(items: FAQItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function blogPostingSchema(post: {
  title: string;
  excerpt?: string;
  slug: string;
  publishedAt?: string | Date;
  updatedAt?: string | Date;
  image?: string;
  author?: string;
}): JsonLd {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const iso = (d?: string | Date) =>
    d ? (typeof d === "string" ? d : d.toISOString()) : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    image: post.image ? `${siteConfig.url}${post.image}` : undefined,
    datePublished: iso(post.publishedAt),
    dateModified: iso(post.updatedAt) || iso(post.publishedAt),
    inLanguage: "de-DE",
    author: {
      "@type": "Organization",
      name: post.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/casa-sports-logo.webp`,
      },
    },
  };
}

export function contactPageSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Kontakt - Casa Sports",
    url: `${siteConfig.url}/kontakt`,
    mainEntity: { "@id": `${siteConfig.url}#business` },
  };
}

export function serviceCatalogSchema(): JsonLd {
  const services = [
    {
      name: "Fitness-Training",
      description: "Kraft-, Ausdauer- und Functional-Training auf modernen Geräten mit persönlicher Betreuung.",
      url: `${siteConfig.url}/fitness`,
    },
    {
      name: "Gruppenkurse",
      description: "Power, Cycling, Zirkel, Functional und Cardio - live im Kursplan buchbar.",
      url: `${siteConfig.url}/kurse`,
    },
    {
      name: "Wellness & Sauna",
      description: "KLAFS Sauna und Röger Infrarotkabine für Regeneration und Entspannung.",
      url: `${siteConfig.url}/wellness`,
    },
    {
      name: "Ernährungsberatung",
      description: "Individuelle Beratung und Coaching rund um Ernährung und Stoffwechsel.",
      url: `${siteConfig.url}/ernaehrung`,
    },
    {
      name: "Mein Neues Ich - 12-Wochen-Programm",
      description: "Strukturiertes 12-Wochen-Programm aus Training, Ernährung und Betreuung.",
      url: `${siteConfig.url}/mein-neues-ich`,
    },
  ];
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Angebote - Casa Sports",
    url: siteConfig.url,
    provider: { "@id": `${siteConfig.url}#business` },
    itemListElement: services.map((s, i) => ({
      "@type": "Offer",
      position: i + 1,
      itemOffered: {
        "@type": "Service",
        name: s.name,
        description: s.description,
        url: s.url,
        provider: { "@id": `${siteConfig.url}#business` },
        areaServed: {
          "@type": "Place",
          name: `${siteConfig.address.city} und Umgebung`,
        },
      },
    })),
  };
}

const PAGE_LABELS: Record<string, string> = {
  "/fitness": "Fitness",
  "/kurse": "Kurse",
  "/wellness": "Wellness",
  "/ernaehrung": "Ernährung",
  "/mein-neues-ich": "Mein Neues Ich",
  "/blog": "Blog",
  "/jobs": "Jobs",
  "/kontakt": "Kontakt",
  "/mitglied-werden": "Mitglied werden",
  "/impressum": "Impressum",
  "/datenschutz": "Datenschutz",
};

export function breadcrumbsForPath(path: string): JsonLd {
  const label = PAGE_LABELS[path] ?? path.replace(/^\//, "");
  return breadcrumbSchema([
    { name: "Start", url: siteConfig.url },
    { name: label, url: `${siteConfig.url}${path}` },
  ]);
}
