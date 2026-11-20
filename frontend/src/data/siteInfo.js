// Dove Health — verified business information shared across the site.
//
// These values are the ones already published on the website (footer,
// Contact page, homepage). The chatbot answers ONLY from this file,
// data/faqData.js and data/resourcesData.js, so update them here when the
// business details change.

export const SITE_CONTACT = {
  phone: "+1 (410) 988-2335",
  fax: "410-558-6722",
  email: "careteam@dovehealthservices.com",
  address: "2101 St Paul St, 1st FL, Baltimore MD 21218",
  mapUrl: "https://www.google.com/maps?q=2101+St+Paul+St,+Baltimore+MD+21218",
};

// Homepage service cards (titles, descriptions and page links).
export const SERVICE_SUMMARIES = [
  {
    key: "omhc",
    title: "Outpatient Mental Health Clinic (OMHC)",
    desc: "Comprehensive therapy and psychiatric services for adults and children focused on long-term emotional stability, structured treatment planning, and holistic mental health recovery support.",
    link: "/services/omhc",
  },
  {
    key: "prp",
    title: "Psychiatric Rehabilitation Program (PRP)",
    desc: "Structured rehabilitation services designed to build life skills, enhance independence, improve coping mechanisms, and promote sustainable personal development in daily living.",
    link: "/services/prp",
  },
  {
    key: "family",
    title: "Family Counseling",
    desc: "Guided therapeutic sessions that strengthen communication, resolve interpersonal conflicts, rebuild trust, and restore emotional harmony within families.",
    link: "/services/family-counselling",
  },
  {
    key: "personal",
    title: "Personal Counseling",
    desc: "Individualized therapy sessions tailored to emotional well-being, resilience building, trauma recovery, and long-term personal growth strategies.",
    link: "/services/personal-counselling",
  },
];

// From the homepage "About Dove Health" section and the About page.
export const ABOUT_SUMMARY =
  "Dove Health is a certified outpatient mental health clinic in Maryland providing comprehensive OMHC services, Psychiatric Rehabilitation Programs, DUI education, and behavioral health support. Our evidence-based approach focuses on personalized care, long-term recovery, and empowering individuals to live stable and meaningful lives.";

export const ACCREDITATION_SUMMARY =
  "Dove Health has earned accreditation from The Joint Commission, the nation's leading healthcare quality organization.";

export const MISSION =
  "To provide compassionate, high-quality behavioral healthcare that empowers individuals to live independent and fulfilling lives.";

// Same wording as the site's emergency notice above the footer.
export const EMERGENCY_TEXT =
  "If you are experiencing a medical emergency, call 911 immediately. For mental health crisis support, call or text 988.";

export const EMERGENCY_SUPPORT_TEXT =
  "You are not alone. Trained counselors are available 24/7 — reach out any time, day or night.";
