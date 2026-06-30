import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="faq-page"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .faq-page {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: var(--paper);
          font-family: 'Inter', sans-serif;
        }

        .faq-page h1, .faq-page h2 {
          font-family: 'Manrope', sans-serif;
        }

        .faq-inner {
          max-width: 880px;
          margin: 0 auto;
          padding: 96px 24px;
        }

        .faq-head {
          text-align: center;
          margin-bottom: 64px;
        }

        .faq-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach-deep);
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin: 0 0 18px;
        }

        .faq-eyebrow::before,
        .faq-eyebrow::after {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--peach);
        }

        .faq-h1 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(2rem, 1.4rem + 2.4vw, 3rem);
          line-height: 1.2;
          margin: 0 0 18px;
        }

        .faq-h1 span {
          color: var(--blue);
        }

        .faq-head p {
          max-width: 520px;
          margin: 0 auto;
          font-size: 16.5px;
          line-height: 1.7;
          color: #51606E;
        }

        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 80px;
        }

        .faq-item {
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 16px;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }

        .faq-item[open] {
          border-color: var(--blue);
        }

        .faq-item summary {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          padding: 22px 24px;
          cursor: pointer;
          font-weight: 700;
          font-size: 15.5px;
          color: var(--navy);
          list-style: none;
        }

        .faq-item summary::-webkit-details-marker {
          display: none;
        }

        .faq-arrow {
          flex-shrink: 0;
          color: var(--blue);
          transition: transform 0.3s ease;
          font-size: 13px;
        }

        .faq-item[open] .faq-arrow {
          transform: rotate(180deg);
        }

        .faq-answer {
          padding: 0 24px 22px;
        }

        .faq-answer p {
          margin: 0;
          color: #5F6E7A;
          font-size: 14.5px;
          line-height: 1.75;
        }

        .faq-cta {
          position: relative;
          background: var(--navy-deep);
          border-radius: 28px;
          padding: 56px 40px;
          text-align: center;
          overflow: hidden;
        }

        .faq-cta-glow {
          position: absolute;
          bottom: -100px;
          left: 50%;
          transform: translateX(-50%);
          width: 380px;
          height: 260px;
          background: var(--peach);
          opacity: 0.16;
          filter: blur(90px);
          border-radius: 50%;
        }

        .faq-cta-inner {
          position: relative;
        }

        .faq-cta h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.6rem, 1.3rem + 1.2vw, 2.1rem);
          margin: 0 0 14px;
        }

        .faq-cta p {
          color: rgba(255, 255, 255, 0.72);
          max-width: 440px;
          margin: 0 auto 32px;
          font-size: 15.5px;
          line-height: 1.7;
        }

        .faq-cta-actions {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .faq-cta-link {
          display: inline-flex;
          align-items: center;
          font-weight: 700;
          font-size: 14.5px;
          padding: 14px 30px;
          border-radius: 100px;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease, border-color 0.2s ease;
        }

        .faq-cta-link.primary {
          background: var(--peach);
          color: #fff;
        }

        .faq-cta-link.primary:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }

        .faq-cta-link.secondary {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .faq-cta-link.secondary:hover {
          background: #fff;
          color: var(--navy);
          border-color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      <div className="faq-inner">
        {/* HEADER */}
        <div className="faq-head">
          <p className="faq-eyebrow">Dove Healthcare Services Support</p>
          <h1 className="faq-h1">
            Frequently asked <span>questions</span>
          </h1>
          <p>
            Find answers about our outpatient programs, appointments, and
            what to expect from care at Dove Healthcare Services.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="faq-list">
          {faqData.map((item, i) => (
            <details key={i} className="faq-item">
              <summary>
                {item.q}
                <span className="faq-arrow">▼</span>
              </summary>
              <div className="faq-answer">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div className="faq-cta">
          <div className="faq-cta-glow" />
          <div className="faq-cta-inner">
            <h2>Still have questions?</h2>
            <p>Our care team is ready to help you find the right next step.</p>
            <div className="faq-cta-actions">
              <Link to="/contact-us" className="faq-cta-link primary">
                Contact us
              </Link>
              <Link to="/book-appointment" className="faq-cta-link secondary">
                Book an appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* FAQ DATA */
const faqData = [
  {
    q: "What services does Dove Healthcare Services provide?",
    a: "We offer Outpatient Mental Health Clinic (OMHC) services, a Psychiatric Rehabilitation Program (PRP), family counseling, personal counseling, and DUI education for adults and children across Maryland.",
  },
  {
    q: "How do I schedule my first appointment?",
    a: "You can book directly through our Book Appointment page, call our office, or submit a request through the Contact Us form. Our team will follow up to confirm your intake.",
  },
  {
    q: "Are your clinicians licensed and accredited?",
    a: "Yes. Dove Healthcare Services is a certified outpatient mental health clinic approved by the Maryland Department of Behavioral Health Administration and accredited by The Joint Commission.",
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