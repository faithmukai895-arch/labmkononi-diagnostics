/**
 * EDITABLE TEST CATALOGUE & WELLNESS PACKAGES
 * -------------------------------------------
 * IMPORTANT: prices, turnaround times, sample types, preparation requirements
 * and included tests must be confirmed by the LabMkononi Diagnostics team
 * before publication. Unconfirmed fields are `null` and the UI displays the
 * "contact us" fallback instead of invented information.
 */

export type Category = {
  slug: string;
  name: string;
  description: string;
};

export type LabTest = {
  slug: string;
  name: string;
  categorySlug: string;
  shortDescription: string;
  /** General, non-diagnostic purpose statement. Requires clinical review. */
  usedFor: string;
  sampleType: string | null;
  price: number | null;
  turnaround: string | null;
  preparation: string | null;
  availability: "available" | "on_request";
  popular?: boolean;
  /** Set true once the LabMkononi clinical team has reviewed the content. */
  clinicallyReviewed: boolean;
};

export const categories: Category[] = [
  {
    slug: "routine-blood-tests",
    name: "Routine Blood Tests",
    description: "Commonly requested general laboratory blood investigations.",
  },
  {
    slug: "haematology",
    name: "Haematology",
    description: "Tests relating to blood cells and blood-forming components.",
  },
  {
    slug: "biochemistry",
    name: "Biochemistry",
    description: "Chemistry-based laboratory investigations.",
  },
  {
    slug: "diabetes-screening",
    name: "Diabetes Screening",
    description: "Blood sugar related laboratory investigations.",
  },
  {
    slug: "liver-function",
    name: "Liver Function",
    description: "Laboratory investigations relating to liver chemistry.",
  },
  {
    slug: "kidney-function",
    name: "Kidney Function",
    description: "Laboratory investigations relating to kidney chemistry.",
  },
  {
    slug: "lipid-cholesterol",
    name: "Lipid / Cholesterol Testing",
    description: "Laboratory investigations relating to blood lipids.",
  },
  {
    slug: "hormonal-tests",
    name: "Hormonal Tests",
    description: "Laboratory investigations relating to hormones.",
  },
  {
    slug: "infectious-disease",
    name: "Infectious Disease Testing",
    description: "Laboratory investigations relating to infections.",
  },
  {
    slug: "urinalysis",
    name: "Urinalysis",
    description: "Laboratory examination of urine samples.",
  },
  {
    slug: "stool-testing",
    name: "Stool Testing",
    description: "Laboratory examination of stool samples.",
  },
  {
    slug: "pregnancy-testing",
    name: "Pregnancy Testing",
    description: "Laboratory investigations relating to pregnancy.",
  },
  {
    slug: "sexual-reproductive-health",
    name: "Sexual & Reproductive Health Testing",
    description: "Confidential laboratory investigations in this area of care.",
  },
  {
    slug: "wellness-screening",
    name: "Wellness Screening",
    description: "Grouped preventive screening investigations.",
  },
  {
    slug: "other-laboratory-tests",
    name: "Other Laboratory Tests",
    description: "Additional laboratory investigations available on request.",
  },
];

/**
 * Catalogue entries are placeholders pending confirmation by LabMkononi.
 * Add/edit entries here, or move this list into the database later.
 */
export const labTests: LabTest[] = [
  {
    slug: "full-haemogram",
    name: "Full Haemogram (Complete Blood Count)",
    categorySlug: "haematology",
    shortDescription: "A general laboratory examination of blood cell components.",
    usedFor:
      "Requested by healthcare professionals as part of general assessment. Results require professional interpretation.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    popular: true,
    clinicallyReviewed: false,
  },
  {
    slug: "blood-sugar-fasting",
    name: "Blood Sugar (Fasting)",
    categorySlug: "diabetes-screening",
    shortDescription: "Measurement of blood glucose in a fasting sample.",
    usedFor:
      "Used within diabetes screening and monitoring programmes as directed by a healthcare professional.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    popular: true,
    clinicallyReviewed: false,
  },
  {
    slug: "hba1c",
    name: "HbA1c",
    categorySlug: "diabetes-screening",
    shortDescription: "A laboratory measurement used in longer-term glucose assessment.",
    usedFor: "Requested by healthcare professionals in diabetes assessment and monitoring.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    popular: true,
    clinicallyReviewed: false,
  },
  {
    slug: "lipid-profile",
    name: "Lipid Profile",
    categorySlug: "lipid-cholesterol",
    shortDescription: "A grouped laboratory measurement of blood lipids.",
    usedFor: "Used in cardiovascular risk assessment by a qualified healthcare professional.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    popular: true,
    clinicallyReviewed: false,
  },
  {
    slug: "liver-function-test",
    name: "Liver Function Test (LFT)",
    categorySlug: "liver-function",
    shortDescription: "A grouped laboratory measurement relating to liver chemistry.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    popular: true,
    clinicallyReviewed: false,
  },
  {
    slug: "kidney-function-test",
    name: "Kidney Function Test (Urea, Creatinine & Electrolytes)",
    categorySlug: "kidney-function",
    shortDescription: "A grouped laboratory measurement relating to kidney chemistry.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    popular: true,
    clinicallyReviewed: false,
  },
  {
    slug: "thyroid-function-test",
    name: "Thyroid Function Test",
    categorySlug: "hormonal-tests",
    shortDescription: "Laboratory measurement of thyroid-related hormones.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    clinicallyReviewed: false,
  },
  {
    slug: "urinalysis",
    name: "Urinalysis",
    categorySlug: "urinalysis",
    shortDescription: "Laboratory examination of a urine sample.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    clinicallyReviewed: false,
  },
  {
    slug: "stool-analysis",
    name: "Stool Analysis",
    categorySlug: "stool-testing",
    shortDescription: "Laboratory examination of a stool sample.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    clinicallyReviewed: false,
  },
  {
    slug: "pregnancy-test",
    name: "Pregnancy Test",
    categorySlug: "pregnancy-testing",
    shortDescription: "Laboratory pregnancy testing.",
    usedFor: "Requested by patients and healthcare professionals for pregnancy assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    clinicallyReviewed: false,
  },
  {
    slug: "hiv-testing",
    name: "HIV Testing",
    categorySlug: "infectious-disease",
    shortDescription: "Confidential laboratory testing with professional counselling support.",
    usedFor:
      "Testing in this area should be accompanied by counselling from a qualified healthcare professional.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "on_request",
    clinicallyReviewed: false,
  },
  {
    slug: "malaria-testing",
    name: "Malaria Testing",
    categorySlug: "infectious-disease",
    shortDescription: "Laboratory testing for malaria parasites.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "available",
    clinicallyReviewed: false,
  },
  {
    slug: "hormonal-profile",
    name: "Hormonal Profile",
    categorySlug: "hormonal-tests",
    shortDescription: "Grouped laboratory measurement of selected hormones.",
    usedFor: "Requested by healthcare professionals as part of clinical assessment.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "on_request",
    clinicallyReviewed: false,
  },
  {
    slug: "other-test-request",
    name: "Other Laboratory Test (By Request)",
    categorySlug: "other-laboratory-tests",
    shortDescription:
      "Request a laboratory test that is not yet listed in the online catalogue.",
    usedFor: "Share your request or referral and our team will confirm availability.",
    sampleType: null,
    price: null,
    turnaround: null,
    preparation: null,
    availability: "on_request",
    clinicallyReviewed: false,
  },
];

export type WellnessPackage = {
  slug: string;
  name: string;
  category: string;
  description: string;
  /** Included tests must be confirmed by LabMkononi before publication. */
  includedTests: string[];
  price: number | null;
  suitableFor: string | null;
};

export const wellnessPackages: WellnessPackage[] = [
  {
    slug: "basic-wellness",
    name: "Basic Wellness Screening",
    category: "Basic Wellness",
    description:
      "A starting-point preventive screening package. The exact tests included are being confirmed by the LabMkononi team.",
    includedTests: [],
    price: null,
    suitableFor: null,
  },
  {
    slug: "executive-wellness",
    name: "Executive Wellness Screening",
    category: "Executive Wellness",
    description:
      "A broader preventive screening package intended for professionals and corporate clients. Contents pending confirmation.",
    includedTests: [],
    price: null,
    suitableFor: null,
  },
  {
    slug: "womens-wellness",
    name: "Women's Wellness Screening",
    category: "Women's Wellness",
    description:
      "A preventive screening package focused on women's health. Contents to be defined by qualified healthcare professionals.",
    includedTests: [],
    price: null,
    suitableFor: null,
  },
  {
    slug: "mens-wellness",
    name: "Men's Wellness Screening",
    category: "Men's Wellness",
    description:
      "A preventive screening package focused on men's health. Contents to be defined by qualified healthcare professionals.",
    includedTests: [],
    price: null,
    suitableFor: null,
  },
  {
    slug: "diabetes-screening-package",
    name: "Diabetes Screening Package",
    category: "Diabetes Screening",
    description:
      "A grouped screening package relating to blood sugar assessment. Contents pending confirmation.",
    includedTests: [],
    price: null,
    suitableFor: null,
  },
  {
    slug: "heart-health-screening",
    name: "Heart Health Screening",
    category: "Heart Health Screening",
    description:
      "A grouped screening package relating to cardiovascular risk assessment. Contents pending confirmation.",
    includedTests: [],
    price: null,
    suitableFor: null,
  },
];

export const faqs: { question: string; answer: string }[] = [
  {
    question: "How do I order a laboratory test?",
    answer:
      "Browse the lab test catalogue or wellness packages, select what you need, choose a collection option, pick a date and time, and submit your request. You can also send us a message on WhatsApp and our team will assist you.",
  },
  {
    question: "Can I request home sample collection?",
    answer:
      "Yes. You can request sample collection at your home or workplace within our supported service area. Choose \"Home\" or \"Workplace\" when placing your request.",
  },
  {
    question: "Where is home collection available?",
    answer:
      "Home and workplace collection is currently available in selected areas of Nairobi. If your location is not covered yet, contact us and we will advise on the nearest option.",
  },
  {
    question: "Is home collection free?",
    answer:
      "Home and workplace sample collection is free within Nairobi. Outside Nairobi, please contact us for current arrangements.",
  },
  {
    question: "How do I pay?",
    answer:
      "The platform is built to support M-Pesa, card payments and other approved payment methods. Payment options currently being activated will be confirmed on your order summary — no payment is ever marked as complete unless it has actually been received.",
  },
  {
    question: "How do I receive my results?",
    answer:
      "Results are delivered digitally to your secure patient area. You will receive a notification when a report is available, then log in to view or download it.",
  },
  {
    question: "Can I collect samples from a partner pharmacy?",
    answer:
      "The platform supports partner collection points. Verified partner outlets will be listed on the Collection Points page as they are onboarded, subject to applicable professional and regulatory requirements.",
  },
  {
    question: "How long do results take?",
    answer:
      "Turnaround time depends on the specific test and the processing laboratory. Contact LabMkononi Diagnostics for current turnaround information for your test.",
  },
  {
    question: "Can healthcare professionals refer patients?",
    answer:
      "Yes. Nurses, clinical officers, doctors, pharmacists and laboratory professionals can register through the Partner With Us page to refer patients for laboratory services.",
  },
  {
    question: "Can companies arrange workplace screening?",
    answer:
      "Yes. Companies, organisations, schools and institutions can request a corporate quote for workplace health screening and employee wellness programmes.",
  },
];

export function categoryName(slug: string) {
  return categories.find((c) => c.slug === slug)?.name ?? "Laboratory Test";
}

export function formatPrice(price: number | null) {
  if (price === null) return null;
  return `KES ${price.toLocaleString("en-KE")}`;
}
