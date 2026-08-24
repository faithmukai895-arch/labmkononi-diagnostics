import { site } from "@/content/site";

type MetaArg = {
  title: string;
  description: string;
  path: string;
  type?: string;
};

/** Builds per-route head metadata (title, description, OG, Twitter, canonical). */
export function pageHead({ title, description, path, type = "website" }: MetaArg) {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { property: "og:site_name", content: site.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path,
    })),
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: site.name,
  slogan: site.tagline,
  email: site.email,
  telephone: site.phoneIntl,
  areaServed: { "@type": "City", name: site.serviceArea.primaryCity },
  address: { "@type": "PostalAddress", addressLocality: "Nairobi", addressCountry: "KE" },
  description:
    "Digital diagnostics platform offering online laboratory test ordering, home and workplace sample collection and secure digital results in Nairobi, Kenya.",
};
