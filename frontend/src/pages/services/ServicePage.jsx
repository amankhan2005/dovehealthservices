import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown, Users, Compass } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import CtaBand from "../../components/ui/CtaBand";
import ArrowIcon from "../../components/ui/ArrowIcon";

const SERVICE_PAGE_CSS = `
  .svc-intro { text-align: center; }
  .svc-intro .dh-accent-bar { margin-inline: auto; }
  .svc-intro .dh-lead { margin-top: 22px; }

  .svc-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
    align-items: start;
  }

  @media (min-width: 700px) { .svc-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1100px) { .svc-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

  .svc-card {
    display: flex;
    flex-direction: column;
    padding: clamp(26px, 3vw, 34px);
  }

  .svc-card .dh-icon-badge { margin-bottom: 22px; }
  .svc-card .dh-h3 { font-size: 1.3rem; }

  .svc-card__summary {
    margin: 12px 0 22px;
    font-size: 15.5px;
    line-height: 1.7;
    color: var(--dh-ink-2);
  }

  .svc-toggle {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    min-height: 42px;
    padding: 0 16px;
    border: 1.5px solid rgba(11, 64, 119, 0.22);
    border-radius: var(--dh-radius-pill);
    background: transparent;
    font-family: var(--dh-font-sans);
    font-size: 14px;
    font-weight: 600;
    color: var(--dh-brand);
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
  }

  .svc-toggle:hover { background: var(--dh-sky-50); border-color: var(--dh-brand); }
  .svc-toggle svg { transition: transform 0.3s var(--dh-ease); }
  .svc-toggle.open svg { transform: rotate(180deg); }

  .svc-details {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.4s var(--dh-ease);
  }

  .svc-details.open { grid-template-rows: 1fr; }
  .svc-details__inner { overflow: hidden; }

  .svc-details__list {
    display: grid;
    gap: 16px;
    margin-top: 22px;
    padding-top: 22px;
    border-top: 1px solid var(--dh-line);
  }

  .svc-detail { display: flex; gap: 12px; align-items: flex-start; }

  .svc-detail__icon {
    width: 28px;
    height: 28px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--dh-sky-50);
    color: var(--dh-brand);
  }

  .svc-detail.who .svc-detail__icon { background: var(--dh-accent-50); color: var(--dh-accent-ink); }
  .svc-detail.expect .svc-detail__icon { background: var(--dh-success-50); color: var(--dh-success); }

  .svc-detail__label {
    margin: 3px 0 4px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dh-muted);
  }

  .svc-detail__text { margin: 0; font-size: 15px; line-height: 1.65; color: var(--dh-ink-2); }
`;

const CARD_ICONS = [CheckCircle2, Users, Compass];

/**
 * Shared layout for the four service pages (OMHC, PRP, Family and Personal
 * counseling). Each page passes its own wording and service list unchanged.
 */
export default function ServicePage({
  breadcrumb,
  title,
  introTitle,
  introText,
  services,
  ctaTitle,
  ctaText,
}) {
  return (
    <div className="service-page">
      <style>{SERVICE_PAGE_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb={breadcrumb} title={title} />

      {/* INTRO */}
      <section className="dh-section dh-section--tight">
        <div className="dh-container dh-container--narrow svc-intro" data-reveal>
          <span className="dh-accent-bar" aria-hidden="true" />
          <h2 className="dh-h2">{introTitle}</h2>
          <p className="dh-lead">{introText}</p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="dh-section dh-section--sand dh-section--tight">
        <div className="dh-container svc-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} index={index} {...service} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CtaBand title={ctaTitle} text={ctaText}>
        <Link to="/book-appointment" className="dh-btn dh-btn--light">
          Book Appointment
          <ArrowIcon />
        </Link>
      </CtaBand>
    </div>
  );
}

/* SERVICE CARD WITH LEARN MORE TOGGLE */
function ServiceCard({ index, title, summary, what, who, expect }) {
  const [open, setOpen] = useState(false);
  const Icon = CARD_ICONS[index % CARD_ICONS.length];

  return (
    <div
      className="dh-card svc-card"
      data-reveal
      style={{ "--dh-reveal-delay": `${(index % 3) * 80}ms` }}
    >
      <span
        className={`dh-icon-badge${index % 2 === 0 ? "" : " dh-icon-badge--warm"}`}
        aria-hidden="true"
      >
        <Icon size={22} />
      </span>
      <h3 className="dh-h3">{title}</h3>
      <p className="svc-card__summary">{summary}</p>

      <button
        type="button"
        className={`svc-toggle${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "Show less" : "Learn More"}
        <ChevronDown size={16} />
      </button>

      <div className={`svc-details${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="svc-details__inner">
          <div className="svc-details__list">
            <div className="svc-detail what">
              <div className="svc-detail__icon">
                <CheckCircle2 size={15} />
              </div>
              <div>
                <p className="svc-detail__label">What it is</p>
                <p className="svc-detail__text">{what}</p>
              </div>
            </div>

            <div className="svc-detail who">
              <div className="svc-detail__icon">
                <CheckCircle2 size={15} />
              </div>
              <div>
                <p className="svc-detail__label">Who it's for</p>
                <p className="svc-detail__text">{who}</p>
              </div>
            </div>

            <div className="svc-detail expect">
              <div className="svc-detail__icon">
                <CheckCircle2 size={15} />
              </div>
              <div>
                <p className="svc-detail__label">What to expect</p>
                <p className="svc-detail__text">{expect}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
