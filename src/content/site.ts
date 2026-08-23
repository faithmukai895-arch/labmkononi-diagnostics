/**
 * EDITABLE SITE CONTENT
 * ---------------------
 * Everything the LabMkononi Diagnostics team may want to change lives here.
 * No medical claims, prices, turnaround times, certifications or partnership
 * terms should be invented — leave values as `null` and the UI will show the
 * "contact us for current information" fallback instead.
 */

export const site = {
  name: "LabMkononi Diagnostics",
  shortName: "LabMkononi",
  tagline: "Affordable. Reliable. At Your Doorstep.",
  email: "labmkononidiagnostics1@gmail.com",
  phone: "0707890158",
  phoneIntl: "+254707890158",
  whatsapp: "254707890158",
  /** No verified physical address supplied. Leave null until confirmed. */
  address: null as string | null,
  socials: [] as { label: string; href: string }[],

  /** Service-area configuration (editable). */
  serviceArea: {
    primaryCity: "Nairobi",
    coverageNote: "Currently available in selected areas of Nairobi.",
    /** Confirmed by the business: collection is free within Nairobi. */
    freeCollectionWithinNairobi: true,
    freeCollectionCopy: "Free Home & Workplace Sample Collection within Nairobi.",
    areas: [
      "Nairobi CBD",
      "Westlands",
      "Kilimani",
      "Lavington",
      "Karen",
      "South B & South C",
      "Embakasi",
      "Kasarani",
      "Ruaraka",
      "Langata",
    ],
    futureCounties: ["Kiambu", "Machakos", "Kajiado", "Mombasa", "Kisumu", "Nakuru"],
  },

  /** Partner laboratories shown in the supplied branding (editable). */
  partnerLabs: [
    {
      name: "Xpert Pathlabs",
      note: "Partner laboratory shown in LabMkononi Diagnostics branding.",
    },
    {
      name: "Walaal Diagnostics",
      note: "Partner laboratory shown in LabMkononi Diagnostics branding.",
    },
  ],
  partnershipWording:
    "LabMkononi Diagnostics works in partnership with Xpert Pathlabs and Walaal Diagnostics, and continues to build its own laboratory capacity.",

  /** Collection points. Do not invent locations — add verified partners here. */
  collectionPoints: [] as {
    name: string;
    location: string;
    address: string;
    phone: string;
    hours: string;
    services: string;
    mapsQuery: string;
  }[],

  disclaimer:
    "Laboratory testing should be interpreted in the context of an individual's clinical history and healthcare assessment. Please consult a qualified healthcare professional regarding your health and test results.",
  testInfoNotice:
    "Test information is provided for general informational purposes. Consult a qualified healthcare professional regarding your individual healthcare needs.",
  pricingFallback:
    "Contact LabMkononi Diagnostics for current pricing and preparation requirements.",

  announcement: "Order lab tests online · Sample collection at your home or workplace",
} as const;

export const whatsappMessages = {
  general: "Hello LabMkononi Diagnostics. I would like to order a laboratory test.",
  collection: "Hello LabMkononi. I would like to book home sample collection.",
  wellness: "Hello LabMkononi. I would like information about wellness screening packages.",
  corporate: "Hello LabMkononi. I would like a quote for workplace health screening.",
  partner: "Hello LabMkononi. I would like to become a collection partner.",
  guidance:
    "Hello LabMkononi. I am not sure which laboratory test I need and would like guidance.",
} as const;

export function whatsappLink(message: string = whatsappMessages.general) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const telLink = `tel:${site.phoneIntl}`;
export const mailLink = `mailto:${site.email}`;
