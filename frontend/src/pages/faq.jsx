import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import ArrowIcon from "../components/ui/ArrowIcon";
import { faqData } from "../data/faqData";

const FAQ_CSS = `
  .faq-page { background: linear-gradient(to right, var(--dh-paper) 0 50%, #fff 50% 100%); }

  .faq-layout { align-items: start; }

  .faq-aside {
    position: sticky;
    top: calc(var(--dh-header-h) + 40px);
    padding-block: clamp(48px, 7vw, 104px);
  }

  .faq-aside .dh-lead { margin-top: 24px; max-width: 40ch; }

  .faq-help {
    margin-top: clamp(40px, 6vw, 72px);
    padding-top: 28px;
    border-top: 1px solid var(--dh-line-strong);
  }

  .faq-help h2 { margin: 0; font-size: 1.25rem; font-weight: 600; letter-spacing: -0.015em; color: var(--dh-ink); }
  .faq-help p { margin: 8px 0 22px; font-size: 15.5px; line-height: 1.6; color: var(--dh-ink-2); }
  .faq-help__actions { display: flex; flex-wrap: wrap; gap: 10px; }

  .faq-main { padding-block: clamp(32px, 7vw, 104px); }

  .faq-list { border-top: 1px solid var(--dh-ink); }

  .faq-item { border-bottom: 1px solid var(--dh-line-strong); }

  .faq-item summary {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding: 26px 0;
    font-size: clamp(1.05rem, 1rem + 0.25vw, 1.18rem);
    font-weight: 600;
    line-height: 1.45;
    letter-spacing: -0.012em;
    color: var(--dh-ink);
    list-style: none;
    cursor: pointer;
    transition: color 0.2s;
  }

  .faq-item summary::-webkit-details-marker { display: none; }
  .faq-item summary:hover { color: var(--dh-brand); }

  .faq-arrow {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border: 1px solid var(--dh-line-strong);
    border-radius: 50%;
    color: var(--dh-ink);
    transition: transform 0.3s var(--dh-ease), background-color 0.2s, color 0.2s, border-color 0.2s;
  }

  .faq-item[open] .faq-arrow { transform: rotate(45deg); background: var(--dh-ink); border-color: var(--dh-ink); color: #fff; }

  .faq-answer { padding: 0 54px 28px 0; animation: faq-open 0.3s var(--dh-ease); }
  .faq-answer p { margin: 0; max-width: 62ch; font-size: 16.5px; line-height: 1.75; color: var(--dh-ink-2); }

  @keyframes faq-open {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 959px) {
    .faq-page { background: #fff; }
    .faq-aside { position: static; padding-bottom: 40px; margin-inline: calc(var(--dh-gutter) * -1); padding-inline: var(--dh-gutter); background: var(--dh-paper); border-bottom: 1px solid var(--dh-line); }
    .faq-answer { padding-right: 0; }
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

      <div className="dh-container dh-grid faq-layout">
        {/* HEADER + NEXT STEP */}
        <div className="dh-col-5 faq-aside">
          <p className="dh-kicker">Dove Health Support</p>
          <h1 className="dh-h1">
            Frequently asked <span className="dh-em">questions</span>
          </h1>
          <p className="dh-lead">
            Find answers about our outpatient programs, appointments, and
            what to expect from care at Dove Health.
          </p>

          <div className="faq-help">
            <h2>Still have questions?</h2>
            <p>Our care team is ready to help you find the right next step.</p>
            <div className="faq-help__actions">
              <Link to="/contact-us" className="dh-btn dh-btn--primary">
                Contact us
                <ArrowIcon />
              </Link>
              <Link to="/book-appointment" className="dh-btn dh-btn--secondary">
                Book an appointment
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="dh-col-6 dh-col-start-7 faq-main">
          <div className="faq-list">
            {faqData.map((item, i) => (
              <details key={i} className="faq-item">
                <summary>
                  {item.q}
                  <span className="faq-arrow" aria-hidden="true">
                    <Plus size={16} />
                  </span>
                </summary>
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
