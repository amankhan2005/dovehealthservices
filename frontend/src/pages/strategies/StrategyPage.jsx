import { HeartHandshake, Sprout, Sun } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import CtaBand from "../../components/ui/CtaBand";
import ArrowIcon from "../../components/ui/ArrowIcon";

const STRATEGY_CSS = `
  .strategy-intro {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px 80px;
    align-items: start;
  }

  @media (min-width: 960px) {
    .strategy-intro { grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); }
  }

  .strategy-intro .dh-prose > p:first-child {
    font-size: clamp(1.1rem, 1rem + 0.35vw, 1.25rem);
    color: var(--dh-ink);
  }

  .strategy-cards {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  @media (min-width: 760px) { .strategy-cards { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

  .strategy-card {
    padding: clamp(28px, 3vw, 38px);
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .strategy-card .dh-icon-badge { margin-bottom: 10px; }
  .strategy-card p { margin: 0; font-size: 15.5px; line-height: 1.7; color: var(--dh-ink-2); }

  .strategy-closing { text-align: center; }
  .strategy-closing .dh-accent-bar { margin-inline: auto; }
  .strategy-closing .dh-prose { margin-top: 24px; }
  .strategy-closing .dh-prose > p {
    font-size: clamp(1.08rem, 1rem + 0.35vw, 1.25rem);
    line-height: 1.75;
  }
`;

const CARD_ICONS = [HeartHandshake, Sprout, Sun];

export default function StrategyPage({
  breadcrumb,
  title,
  introTitle,
  introParagraphs,
  cards,
  closingTitle,
  closingParagraphs,
  ctaTitle,
  ctaSubtitle,
  ctaLabel,
}) {
  return (
    <div className="strategy-page">
      <style>{STRATEGY_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb={breadcrumb} title={title} />

      {/* INTRO */}
      <section className="dh-section">
        <div className="dh-container strategy-intro">
          <div data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">{introTitle}</h2>
          </div>
          <div className="dh-prose" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            {introParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CARDS */}
      <section className="dh-section dh-section--sand dh-section--tight">
        <div className="dh-container strategy-cards">
          {cards.map((card, i) => {
            const Icon = CARD_ICONS[i % CARD_ICONS.length];
            return (
              <div
                key={card.title}
                className="dh-card dh-card--hover strategy-card"
                data-reveal
                style={{ "--dh-reveal-delay": `${i * 90}ms` }}
              >
                <span
                  className={`dh-icon-badge${i % 2 === 0 ? "" : " dh-icon-badge--warm"}`}
                  aria-hidden="true"
                >
                  <Icon size={22} />
                </span>
                <h3 className="dh-h3">{card.title}</h3>
                <p>{card.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING */}
      <section className="dh-section">
        <div className="dh-container dh-container--narrow strategy-closing" data-reveal>
          <span className="dh-accent-bar" aria-hidden="true" />
          <h2 className="dh-h2">{closingTitle}</h2>
          <div className="dh-prose">
            {closingParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand title={ctaTitle} text={ctaSubtitle}>
        <a href="/contact-us" className="dh-btn dh-btn--light">
          {ctaLabel}
          <ArrowIcon />
        </a>
      </CtaBand>
    </div>
  );
}
