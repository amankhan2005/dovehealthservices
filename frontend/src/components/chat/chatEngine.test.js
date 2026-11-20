// Run with: npm test   (uses Node's built-in test runner, no extra dependencies)
import { test } from "node:test";
import assert from "node:assert/strict";
import { getResponse, normalize } from "./chatEngine.js";
import { INTENTS } from "../../data/chatbotKnowledge.js";
import { SITE_CONTACT, SERVICE_SUMMARIES } from "../../data/siteInfo.js";

const expectIntent = (id, questions) => {
  for (const q of questions) {
    assert.equal(getResponse(q).id, id, `"${q}" should match "${id}"`);
  }
};

test("normalize lowercases, strips punctuation and joins phone digits", () => {
  assert.equal(normalize("  WHERE are you?!  "), "where are you");
  assert.equal(normalize("Call 410-988-2335"), "call 4109882335");
  assert.equal(normalize("What's your e-mail"), "whats your email");
});

test("A. contact information", () => {
  expectIntent("contact", [
    "What is your contact number?",
    "How can I contact Dove Health?",
    "What is your email?",
    "How can I reach your team?",
    "phone number please",
    "WHAT IS YOUR EMIAL",
    "can i talk to someone",
    "contct details",
  ]);
});

test("B. address & location", () => {
  expectIntent("location", [
    "Where are you located?",
    "What is your address?",
    "How can I find your office?",
    "adress?",
    "where r u",
    "directions to the clinic",
    "Location",
  ]);
});

test("C. services (overview and specific)", () => {
  expectIntent("services", [
    "What services do you offer?",
    "Tell me about your services.",
    "what do you offer",
    "Do you provide counseling?",
    "servises",
  ]);
  expectIntent("service-family", ["Do you provide family counseling?", "family counselling", "can my family be involved"]);
  expectIntent("service-prp", ["Tell me about PRP", "psychiatric rehabilitation program", "Do you help with life skills?"]);
  expectIntent("service-omhc", ["What is OMHC?", "do you offer medication management", "outpatient mental health clinic"]);
  expectIntent("service-personal", ["Do you offer personal counseling?", "one on one therapy", "individual therapy"]);
  expectIntent("service-dui", ["Do you provide DUI education?", "dui classes"]);
});

test("D. appointments", () => {
  expectIntent("appointment", [
    "How can I book an appointment?",
    "How do I schedule an appointment?",
    "Where can I find the appointment form?",
    "How can I get started?",
    "apointment",
    "i want to book a session",
    "shedule a consultation",
  ]);
  expectIntent("first-visit", ["What should I expect at my first visit?"]);
  expectIntent("insurance", ["Do you accept insurance?", "is medicaid covered", "how much does it cost"]);
});

test("E. about Dove Health", () => {
  expectIntent("about", ["Tell me about Dove Health.", "Who are you?", "What does Dove Health do?", "what is your mission"]);
  expectIntent("accreditation", ["Are your clinicians licensed?", "Is Dove Health accredited by the Joint Commission?"]);
});

test("safety: crisis language always gets the emergency guidance", () => {
  for (const q of ["I want to kill myself", "this is an emergency", "I am in crisis", "suicidal thoughts", "how do I book an appointment, I'm in crisis"]) {
    const r = getResponse(q);
    assert.equal(r.id, "crisis", q);
    assert.ok(r.answer.text.join(" ").includes("911") && r.answer.text.join(" ").includes("988"));
    assert.ok(!r.answer.links, "crisis answer must not contain links or buttons");
  }
  // the clinic's own phone number must not trigger the crisis intent
  assert.notEqual(getResponse("is your number 410-988-2335?").id, "crisis");
});

test("safety: no diagnoses or medication advice", () => {
  expectIntent("medical-advice", ["What medication should I take for anxiety?", "Do I have depression?", "can you diagnose me", "what dosage is safe"]);
});

test("fallback for questions the website does not answer", () => {
  for (const q of ["What's the weather like?", "asdfgh", "", "Do you sell shoes"]) {
    assert.equal(getResponse(q).id, "fallback", q);
  }
});

test("everyday words are not fuzzy-corrected into keywords", () => {
  // "your" must not become "hour", "there" must not become "where"
  assert.notEqual(getResponse("is there parking for your patients").id, "hours");
  assert.equal(getResponse("hello there").id, "greeting");
});

test("answers only use verified site data", () => {
  const all = JSON.stringify(INTENTS);
  assert.ok(all.includes(SITE_CONTACT.email) && all.includes(SITE_CONTACT.phone) && all.includes(SITE_CONTACT.address));
  for (const s of SERVICE_SUMMARIES) assert.ok(all.includes(s.title), s.title);
  // no other email addresses or phone numbers
  const emails = new Set(all.match(/[\w.+-]+@[\w-]+\.[\w.]+/g));
  assert.deepEqual([...emails], [SITE_CONTACT.email]);
  const phones = (all.match(/\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}/g) || []).map((p) => p.replace(/\D/g, ""));
  for (const p of phones) assert.ok(["4109882335", "4105586722"].includes(p), p);
});
