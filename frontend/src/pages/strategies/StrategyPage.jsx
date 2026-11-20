import { HeartHandshake, Sprout, Sun } from "lucide-react";
import PageHero from "../../components/ui/PageHero";
import CtaBand from "../../components/ui/CtaBand";
import ArrowIcon from "../../components/ui/ArrowIcon";

const STRATEGY_CSS = `
  .strategy-intro__title { margin-bottom: clamp(28px, 4vw, 44px); }

  .strategy-intro__statement {
    margin: 0;
    font-size: clamp(1.35rem, 1.05rem + 1.1vw, 2.05rem);
    font-weight: 500;
    line-height: 1.4;
    letter-spacing: -0.02em;
    color: var(--dh-ink);
    text-wrap: pretty;
  }

  .strategy-intro__rest { margin-top: clamp(28px, 4vw, 40px); }

  .strategy-pillars {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media (min-width: 860px) {
    .strategy-pillars { grid-template-columns: repeat(3, minmax(0, 1fr)); }
    .strategy-pillar + .strategy-pillar { border-left: 1px solid rgba(255, 255, 255, 0.16); }
    .strategy-pillar { padding: 8px clamp(24px, 3vw, 44px); }
    .strategy-pillar:first-child { padding-left: 0; }
    .strategy-pillar:last-child { padding-right: 0; }
  }

  @media (max-width: 859px) {
    .strategy-pillar { padding: 28px 0; border-top: 1px solid rgba(255, 255, 255, 0.16); }
    .strategy-pillar:first-child { border-top: 0; padding-top: 0; }
  }

  .strategy-pillar svg { color: #9fbad6; margin-bottom: 26px; }
  .strategy-pillar h3 { margin-bottom: 12px; }

  .strategy-pillar p {
    margin: 0;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.74);
  }

  .strategy-closing .dh-prose > p { font-size: 18px; }
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
  const [firstParagraph, ...restParagraphs] = introParagraphs;

  return (
    <div className="strategy-page">
      <style>{STRATEGY_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb={breadcrumb} title={title} />

      {/* INTRO */}
      <section className="dh-section">
        <div className="dh-container">
          <h2 className="dh-h2 strategy-intro__title" data-reveal>{introTitle}</h2>
          <div className="dh-grid">
            <p className="strategy-intro__statement dh-col-8" data-reveal>{firstParagraph}</p>
          </div>
          {restParagraphs.length > 0 && (
            <div className="dh-grid strategy-intro__rest">
              <div className="dh-prose dh-col-6 dh-col-start-7" data-reveal>
                {restParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CARDS */}
      <section className="dh-section dh-section--night dh-on-dark">
        <div className="dh-container">
          <ul className="strategy-pillars">
            {cards.map((card, i) => {
              const Icon = CARD_ICONS[i % CARD_ICONS.length];
              return (
                <li
                  key={card.title}
                  className="strategy-pillar"
                  data-reveal
                  style={{ "--dh-reveal-delay": `${i * 80}ms` }}
                >
                  <Icon size={30} strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="dh-h3">{card.title}</h3>
                  <p>{card.desc}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* CLOSING */}
      <section className="dh-section strategy-closing">
        <div className="dh-container dh-grid">
          <h2 className="dh-h2 dh-col-5" data-reveal>{closingTitle}</h2>
          <div className="dh-prose dh-col-7" data-reveal style={{ "--dh-reveal-delay": "80ms" }}>
            {closingParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CtaBand title={ctaTitle} text={ctaSubtitle} tone="paper">
        <a href="/contact-us" className="dh-btn dh-btn--primary">
          {ctaLabel}
          <ArrowIcon />
        </a>
      </CtaBand>
    </div>
  );
}
