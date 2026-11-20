import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import CtaBand from "../../components/ui/CtaBand";
import ArrowIcon from "../../components/ui/ArrowIcon";

const SERVICE_PAGE_CSS = `
  .svc-layout { align-items: start; }

  .svc-intro { position: sticky; top: calc(var(--dh-header-h) + 32px); }
  .svc-intro .dh-lead { margin-top: 20px; }

  .svc-list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--dh-ink); }

  .svc-item { border-bottom: 1px solid var(--dh-line-strong); }

  .svc-item__row {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    gap: 4px 12px;
    padding: 26px 0;
  }

  .svc-item__row .dh-index { padding-top: 4px; }

  .svc-item__title { margin: 0; font-size: 1.25rem; }

  .svc-item__summary {
    grid-column: 2;
    margin: 8px 0 0;
    max-width: 58ch;
    font-size: 16px;
    line-height: 1.65;
    color: var(--dh-ink-2);
  }

  .svc-toggle {
    grid-column: 2;
    justify-self: start;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    margin-top: 14px;
    padding: 4px 0;
    border: 0;
    background: transparent;
    font-family: var(--dh-font-sans);
    font-size: 14.5px;
    font-weight: 600;
    color: var(--dh-brand);
    text-decoration: underline;
    text-decoration-color: rgba(11, 64, 119, 0.3);
    text-underline-offset: 5px;
    cursor: pointer;
  }

  .svc-toggle:hover { text-decoration-color: currentColor; }
  .svc-toggle svg { transition: transform 0.3s var(--dh-ease); }
  .svc-toggle.open svg { transform: rotate(180deg); }

  .svc-details {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.35s var(--dh-ease);
  }

  .svc-details.open { grid-template-rows: 1fr; }
  .svc-details__inner { overflow: hidden; }

  .svc-details__list {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 20px 32px;
    margin: 0 0 28px 56px;
    padding: 22px 24px;
    border-radius: var(--dh-radius);
    background: var(--dh-paper);
  }

  @media (min-width: 760px) {
    .svc-details__list { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  @media (max-width: 520px) {
    .svc-details__list { margin-left: 0; }
  }

  .svc-detail__label {
    margin: 0 0 6px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dh-dove);
  }

  .svc-detail__text { margin: 0; font-size: 15px; line-height: 1.65; color: var(--dh-ink-2); }
`;

/**
 * Shared layout for the four service pages (OMHC, PRP, Family and Personal
 * counseling). Each page passes its own wording, service list and photo.
 */
export default function ServicePage({
  breadcrumb,
  title,
  introTitle,
  introText,
  services,
  ctaTitle,
  ctaText,
  image,
}) {
  return (
    <div className="service-page">
      <style>{SERVICE_PAGE_CSS}</style>

      {/* HEADER */}
      <PageHero
        breadcrumb={breadcrumb}
        title={title}
        image={image ? { src: image.src, alt: title, ratio: "4 / 3", focus: image.focus } : undefined}
      />

      {/* INTRO + SERVICES */}
      <section className="dh-section">
        <div className="dh-container dh-grid svc-layout">
          <div className="dh-col-4 svc-intro" data-reveal>
            <h2 className="dh-h2">{introTitle}</h2>
            <p className="dh-lead">{introText}</p>
          </div>

          <ol className="dh-col-8 svc-list">
            {services.map((service, index) => (
              <ServiceItem key={index} index={index} {...service} />
            ))}
          </ol>
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

/* SERVICE ROW WITH LEARN MORE TOGGLE */
function ServiceItem({ index, title, summary, what, who, expect }) {
  const [open, setOpen] = useState(false);
  const id = `svc-details-${index}`;

  return (
    <li className="svc-item" data-reveal style={{ "--dh-reveal-delay": `${(index % 3) * 60}ms` }}>
      <div className="svc-item__row">
        <span className="dh-index" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h3 className="dh-h3 svc-item__title">{title}</h3>
        <p className="svc-item__summary">{summary}</p>
        <button
          type="button"
          className={`svc-toggle${open ? " open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls={id}
        >
          {open ? "Show less" : "Learn More"}
          <ChevronDown size={16} />
        </button>
      </div>

      <div id={id} className={`svc-details${open ? " open" : ""}`} aria-hidden={!open}>
        <div className="svc-details__inner">
          <div className="svc-details__list">
            <div>
              <p className="svc-detail__label">What it is</p>
              <p className="svc-detail__text">{what}</p>
            </div>
            <div>
              <p className="svc-detail__label">Who it's for</p>
              <p className="svc-detail__text">{who}</p>
            </div>
            <div>
              <p className="svc-detail__label">What to expect</p>
              <p className="svc-detail__text">{expect}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
