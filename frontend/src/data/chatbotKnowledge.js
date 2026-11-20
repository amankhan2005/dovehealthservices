// Dove Health chatbot — knowledge base (rule-based, no AI).
//
// Every answer is assembled from content already published on the website:
//   - data/siteInfo.js      contact details, service summaries, About text
//   - data/faqData.js       FAQ answers
//   - data/resourcesData.js resource categories
// Do not add facts here that are not on the website. To change an answer,
// update the source data above (or the wording below) and the chatbot follows.
//
// Intent format
//   keywords: { word: weight }   matched against individual words (after
//                                 normalising, singularising and typo-fixing)
//   phrases:  { "a phrase": weight } matched against the whole message
//   answer:   { text?, list?, facts?, links?, tone? }
//   suggestions: follow-up questions shown as chips after the answer
//
// The engine (components/chat/chatEngine.js) scores every intent and picks the
// highest; intents marked `override` win whenever they match at all.

import {
  SITE_CONTACT,
  SERVICE_SUMMARIES,
  ABOUT_SUMMARY,
  ACCREDITATION_SUMMARY,
  MISSION,
  EMERGENCY_TEXT,
  EMERGENCY_SUPPORT_TEXT,
} from "./siteInfo.js";
import { faqData } from "./faqData.js";
import { resourceCategories } from "./resourcesData.js";

const faq = (startsWith) => {
  const item = faqData.find((f) => f.q.startsWith(startsWith));
  if (!item) throw new Error(`FAQ entry not found: ${startsWith}`);
  return item.a;
};

const service = (key) => SERVICE_SUMMARIES.find((s) => s.key === key);

const CONTACT_FACTS = [
  { label: "Phone", value: SITE_CONTACT.phone },
  { label: "Email", value: SITE_CONTACT.email, href: `mailto:${SITE_CONTACT.email}` },
];

const CONTACT_PAGE_LINK = { label: "Contact us", to: "/contact-us" };
const BOOK_LINK = { label: "Book an appointment", to: "/book-appointment" };

export const SUGGESTED_QUESTIONS = [
  "What services do you offer?",
  "How do I book an appointment?",
  "Where are you located?",
  "How can I contact you?",
  "Do you accept insurance?",
  "Tell me about Dove Health",
];

export const WELCOME_MESSAGE = {
  text: [
    "Hi there! I'm the Dove Health virtual assistant.",
    "I can help with our services, appointments, location and contact details. What would you like to know?",
  ],
  note: "Automated assistant — I can't provide medical advice.",
};

export const FALLBACK_ANSWER = {
  text: [
    "Sorry, I couldn't find an answer to that on our website. Our care team will be glad to help:",
  ],
  facts: CONTACT_FACTS,
  links: [CONTACT_PAGE_LINK],
};

export const FALLBACK_SUGGESTIONS = [
  "What services do you offer?",
  "How do I book an appointment?",
  "How can I contact you?",
];

export const INTENTS = [
  // ── Safety first ────────────────────────────────────────────────────────
  {
    id: "crisis",
    override: true,
    keywords: {
      suicide: 3, suicidal: 3, crisis: 3, emergency: 3, overdose: 3,
      selfharm: 3, "988": 3, "911": 3,
    },
    phrases: {
      "kill myself": 3, "end my life": 3, "hurt myself": 3, "harm myself": 3,
      "self harm": 3, "want to die": 3, "in danger": 3, "not safe": 3,
    },
    answer: {
      tone: "alert",
      text: [EMERGENCY_TEXT, EMERGENCY_SUPPORT_TEXT],
    },
    suggestions: ["How can I contact you?"],
  },
  {
    id: "medical-advice",
    keywords: { diagnose: 3, diagnosis: 3, dosage: 3, dose: 2, prescribe: 3, prescription: 3 },
    phrases: {
      "should i take": 3, "what medication": 3, "which medication": 3,
      "what medicine": 3, "do i have": 3, "am i depressed": 3, "is it normal": 2,
      "how do i treat": 3, "how to treat": 3, "how to cure": 3, "medical advice": 3,
      "what should i do": 2, "is something wrong with me": 3,
    },
    answer: {
      text: [
        "I'm an automated assistant, so I can't give medical advice, diagnoses or treatment recommendations.",
        faq("What should I expect at my first visit?"),
        EMERGENCY_TEXT,
      ],
      links: [BOOK_LINK, CONTACT_PAGE_LINK],
    },
    suggestions: ["How do I book an appointment?", "What services do you offer?"],
  },

  // ── Contact & location ──────────────────────────────────────────────────
  {
    id: "contact",
    keywords: {
      contact: 2, phone: 3, number: 2, call: 2, telephone: 3, email: 3, mail: 2,
      fax: 3, reach: 2, talk: 1, speak: 1, human: 2, person: 1, team: 1, staff: 1,
    },
    phrases: {
      "get in touch": 3, "contact number": 3, "phone number": 3, "email address": 3,
      "reach your team": 3, "talk to someone": 3, "speak to someone": 3, "real person": 3,
    },
    answer: {
      text: ["You can reach the Dove Health care team here:"],
      facts: [...CONTACT_FACTS, { label: "Fax", value: SITE_CONTACT.fax }],
      links: [CONTACT_PAGE_LINK],
      footnote: "You can also send us a message through the Contact Us form.",
    },
    suggestions: ["Where are you located?", "How do I book an appointment?"],
  },
  {
    id: "location",
    keywords: {
      address: 3, location: 3, located: 3, where: 1, office: 2, direction: 3,
      map: 2, visit: 1, baltimore: 2, maryland: 1, clinic: 1, find: 1,
    },
    phrases: {
      "where are you": 3, "find your office": 3, "how do i get there": 3,
      "how to get there": 3, "your office": 2,
    },
    answer: {
      text: ["Dove Health is located at:"],
      facts: [{ label: "Address", value: SITE_CONTACT.address }],
      links: [
        { label: "Open in Google Maps", href: SITE_CONTACT.mapUrl, external: true },
        CONTACT_PAGE_LINK,
      ],
    },
    suggestions: ["How can I contact you?", "How do I book an appointment?"],
  },

  // ── Appointments ────────────────────────────────────────────────────────
  {
    id: "appointment",
    keywords: {
      appointment: 3, book: 3, booking: 3, schedule: 3, scheduling: 3,
      consultation: 2, session: 1, intake: 2, register: 2, enroll: 2, form: 1, request: 1,
    },
    phrases: {
      "get started": 3, "getting started": 3, "first appointment": 3,
      "make an appointment": 3, "see someone": 2, "sign up": 2, "become a client": 3,
    },
    answer: {
      text: [faq("How do I schedule my first appointment?")],
      facts: [{ label: "Phone", value: SITE_CONTACT.phone }],
      links: [BOOK_LINK, { label: "Contact Us form", to: "/contact-us" }],
    },
    suggestions: ["What should I expect at my first visit?", "Do you accept insurance?"],
  },
  {
    id: "first-visit",
    keywords: { expect: 3, assessment: 2 },
    phrases: { "first visit": 3, "first session": 3, "what happens": 2 },
    answer: {
      text: [faq("What should I expect at my first visit?")],
      links: [BOOK_LINK],
    },
    suggestions: ["How do I book an appointment?", "Do you accept insurance?"],
  },
  {
    id: "insurance",
    keywords: {
      insurance: 3, insured: 3, coverage: 3, cover: 2, covered: 2, medicaid: 3,
      medicare: 3, cost: 2, price: 2, fee: 2, pay: 2, payment: 2, afford: 2,
    },
    phrases: { "how much": 3 },
    answer: {
      text: [faq("Do you accept insurance?")],
      facts: CONTACT_FACTS,
      links: [CONTACT_PAGE_LINK],
    },
    suggestions: ["How do I book an appointment?", "What services do you offer?"],
  },
  {
    id: "hours",
    keywords: { hour: 3, open: 2, opening: 3, closing: 3, close: 1, timing: 3, weekend: 3, saturday: 3, sunday: 3 },
    phrases: { "what time": 3, "business hours": 3, "office hours": 3, "when are you": 3 },
    answer: {
      text: [
        "Our website doesn't list office hours, so I can't confirm them here. Please contact our care team and they'll be glad to help:",
      ],
      facts: CONTACT_FACTS,
      links: [CONTACT_PAGE_LINK],
    },
    suggestions: ["Where are you located?", "How do I book an appointment?"],
  },

  // ── Services ────────────────────────────────────────────────────────────
  {
    id: "services",
    keywords: {
      service: 3, offer: 2, provide: 2, program: 2, treatment: 2, therapy: 1,
      help: 1, care: 1, support: 1,
    },
    phrases: { "what do you offer": 3, "what can you help": 3, "kind of help": 2, "types of": 1 },
    answer: {
      text: [faq("What services does Dove Health provide?")],
      list: SERVICE_SUMMARIES.map(({ title, link }) => ({ title, to: link })),
    },
    suggestions: ["Tell me about PRP", "How do I book an appointment?"],
  },
  {
    id: "service-omhc",
    keywords: { omhc: 4, outpatient: 3, psychiatric: 2, psychiatrist: 2, medication: 3, clinic: 1 },
    phrases: { "outpatient mental health": 4, "mental health clinic": 3 },
    answer: {
      title: service("omhc").title,
      text: [service("omhc").desc],
      links: [{ label: "Learn more about OMHC", to: service("omhc").link }, BOOK_LINK],
    },
    suggestions: ["What other services do you offer?", "How do I book an appointment?"],
  },
  {
    id: "service-prp",
    keywords: { prp: 4, rehabilitation: 4, rehab: 3, independence: 2, independent: 2, job: 1, career: 1 },
    phrases: { "psychiatric rehabilitation": 4, "life skills": 3 },
    answer: {
      title: service("prp").title,
      text: [service("prp").desc, faq("What is PRP and who is it for?")],
      links: [{ label: "Learn more about PRP", to: service("prp").link }, BOOK_LINK],
    },
    suggestions: ["What other services do you offer?", "How do I book an appointment?"],
  },
  {
    id: "service-family",
    keywords: { family: 4, families: 4, parent: 2, caregiver: 2, relative: 2, marriage: 2, couple: 2 },
    phrases: { "family counseling": 5, "loved one": 2, "family members": 3 },
    answer: {
      title: service("family").title,
      text: [service("family").desc, faq("Can family members be involved in treatment?")],
      links: [{ label: "Learn more about family counseling", to: service("family").link }, BOOK_LINK],
    },
    suggestions: ["What other services do you offer?", "How do I book an appointment?"],
  },
  {
    id: "service-personal",
    keywords: { personal: 3, individual: 3, counseling: 2, counselor: 2, therapist: 2, trauma: 2, resilience: 2 },
    phrases: { "personal counseling": 5, "one on one": 3, "individual therapy": 4, "talk therapy": 3 },
    answer: {
      title: service("personal").title,
      text: [service("personal").desc],
      links: [{ label: "Learn more about personal counseling", to: service("personal").link }, BOOK_LINK],
    },
    suggestions: ["What other services do you offer?", "How do I book an appointment?"],
  },
  {
    id: "service-dui",
    keywords: { dui: 4, dwi: 4 },
    phrases: { "dui education": 5, "drunk driving": 3 },
    answer: {
      text: [
        "DUI education is one of the services Dove Health offers, alongside OMHC, PRP and counseling. For details, please contact our care team:",
      ],
      facts: CONTACT_FACTS,
      links: [CONTACT_PAGE_LINK],
    },
    suggestions: ["What services do you offer?", "How do I book an appointment?"],
  },

  // ── About ───────────────────────────────────────────────────────────────
  {
    id: "about",
    keywords: { about: 1, company: 3, organization: 3, mission: 3, history: 2, dove: 1 },
    phrases: {
      "who are you": 4, "who is dove": 4, "tell me about": 1, "what is dove health": 4,
      "what does dove health do": 5, "what do you do": 4, "about dove health": 3,
      "about you": 3, "about your company": 4,
    },
    answer: {
      text: [ABOUT_SUMMARY, ACCREDITATION_SUMMARY, `Our mission: ${MISSION}`],
      links: [{ label: "About Dove Health", to: "/about-us" }],
    },
    suggestions: ["What services do you offer?", "Are your clinicians licensed?"],
  },
  {
    id: "accreditation",
    keywords: {
      licensed: 3, license: 3, accredited: 3, accreditation: 3, certified: 3,
      qualified: 2, approved: 2, credential: 2,
    },
    phrases: { "joint commission": 4 },
    answer: {
      text: [faq("Are your clinicians licensed and accredited?")],
      links: [{ label: "About Dove Health", to: "/about-us" }],
    },
    suggestions: ["Tell me about Dove Health", "What services do you offer?"],
  },
  {
    id: "resources",
    keywords: {
      resource: 3, article: 2, learn: 2, education: 1, depression: 2, anxiety: 2,
      ptsd: 2, bipolar: 2, symptom: 2, sign: 1, condition: 2, wellness: 1,
    },
    phrases: { "warning signs": 3, "mental health information": 3 },
    answer: {
      text: [
        "Our Educational Resources page covers:",
      ],
      list: resourceCategories.map((c) => ({ title: c.name })),
      links: [{ label: "Open Educational Resources", to: "/resources" }],
      footnote:
        "These resources are educational. For personalized treatment and support, our experienced team is here to help.",
    },
    suggestions: ["How do I book an appointment?", "What services do you offer?"],
  },

  // ── Small talk ──────────────────────────────────────────────────────────
  {
    id: "greeting",
    keywords: { hi: 2, hello: 2, hey: 2, hiya: 2, greetings: 2 },
    phrases: { "good morning": 2, "good afternoon": 2, "good evening": 2 },
    answer: { text: ["Hello! How can I help you today?"] },
    suggestions: SUGGESTED_QUESTIONS.slice(0, 4),
  },
  {
    id: "thanks",
    keywords: { thanks: 2, thank: 2, thx: 2, appreciate: 2 },
    answer: { text: ["You're welcome! Is there anything else I can help you with?"] },
    suggestions: SUGGESTED_QUESTIONS.slice(0, 3),
  },
  {
    id: "goodbye",
    keywords: { bye: 2, goodbye: 2 },
    phrases: { "see you": 2, "that's all": 2, "thats all": 2 },
    answer: { text: ["Take care! If you have more questions later, I'm right here."] },
    suggestions: [],
  },
];
