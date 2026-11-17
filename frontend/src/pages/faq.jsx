import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import ArrowIcon from "../components/ui/ArrowIcon";

const FAQ_CSS = `
  .faq-list { display: grid; gap: 12px; }

  .faq-item {
    border: 1px solid var(--dh-line);
    border-radius: 20px;
    background: #fff;
    transition: box-shadow 0.3s var(--dh-ease), border-color 0.3s;
  }

  .faq-item[open] { border-color: transparent; box-shadow: var(--dh-shadow-md); }

  .faq-item summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 22px clamp(18px, 3vw, 28px);
    font-family: var(--dh-font-display);
    font-size: clamp(1.08rem, 1rem + 0.3vw, 1.22rem);
    font-weight: 500;
    line-height: 1.4;
    color: var(--dh-ink);
    list-style: none;
    cursor: pointer;
  }

  .faq-item summary::-webkit-details-marker { display: none; }

  .faq-arrow {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--dh-sky-50);
    color: var(--dh-brand);
    transition: transform 0.3s var(--dh-ease), background-color 0.25s, color 0.25s;
  }

  .faq-item[open] .faq-arrow { transform: rotate(180deg); background: var(--dh-brand); color: #fff; }

  .faq-answer {
    margin: 0 clamp(18px, 3vw, 28px);
    padding: 0 0 24px;
    border-top: 1px solid var(--dh-line);
    animation: faq-open 0.35s var(--dh-ease);
  }

  .faq-answer p { margin: 20px 0 0; font-size: 15.5px; line-height: 1.8; color: var(--dh-ink-2); }

  @keyframes faq-open {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: none; }
  }
`;

export default function FAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="faq-page"
    >
      <style>{FAQ_CSS}</style>

      {/* HEADER */}
      <PageHero
        eyebrow="Dove Health Support"
        title={
          <>
            Frequently asked <span className="dh-em">questions</span>
          </>
        }
      >
        Find answers about our outpatient programs, appointments, and
        what to expect from care at Dove Health.
      </PageHero>

      {/* FAQ LIST */}
      <div className="dh-section">
        <div className="dh-container dh-container--narrow faq-list">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>
                {item.q}
                <span className="faq-arrow" aria-hidden="true">
                  <ChevronDown size={18} />
                </span>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <CtaBand
        title="Still have questions?"
        text="Our care team is ready to help you find the right next step."
      >
        <Link to="/contact-us" className="dh-btn dh-btn--light">
          Contact us
          <ArrowIcon />
        </Link>
        <Link to="/book-appointment" className="dh-btn dh-btn--outline-light">
          Book an appointment
        </Link>
      </CtaBand>
    </motion.section>
  );
}

/* FAQ DATA */
const faqData = [
  {
    q: "What services does Dove Health provide?",
    a: "We offer Outpatient Mental Health Clinic (OMHC) services, a Psychiatric Rehabilitation Program (PRP), family counseling, personal counseling, and DUI education for adults and children across Maryland.",
  },
  {
    q: "How do I schedule my first appointment?",
    a: "You can book directly through our Book Appointment page, call our office, or submit a request through the Contact Us form. Our team will follow up to confirm your intake.",
  },
  {
    q: "Are your clinicians licensed and accredited?",
    a: "Yes. Dove Health (Dove Healthcare Services, LLC) is a certified outpatient mental health clinic approved by the Maryland Department of Behavioral Health Administration and accredited by The Joint Commission.",
  },
  {
    q: "What is PRP and who is it for?",
    a: "The Psychiatric Rehabilitation Program helps individuals build life skills, independence, and coping strategies for sustainable daily functioning as part of long-term recovery.",
  },
  {
    q: "Do you accept insurance?",
    a: "Coverage varies by plan. Contact our care team with your insurance details and we'll confirm what's accepted before your first visit.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "Your first visit includes an intake assessment with a clinician to understand your needs and goals, which helps us build a personalized treatment plan from there.",
  },
  {
    q: "What if I'm in crisis right now?",
    a: "If you're experiencing a medical emergency, call 911. For a mental health crisis, call or text 988, available 24/7. Our office can also be reached directly during business hours.",
  },
  {
    q: "Can family members be involved in treatment?",
    a: "Yes. We offer family counseling and encourage involving caregivers and loved ones where appropriate, since their support plays an important role in recovery.",
  },
];