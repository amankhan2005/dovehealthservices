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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .strategy-page {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: var(--paper);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .strategy-page h1,
        .strategy-page h2,
        .strategy-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .strategy-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .strategy-header-glow {
          position: absolute;
          top: -140px;
          right: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--peach);
          opacity: 0.12;
          filter: blur(100px);
        }

        .strategy-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .strategy-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .strategy-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2rem, 1.4rem + 2.6vw, 3.4rem);
          line-height: 1.18;
          margin: 0;
          max-width: 22ch;
        }

        .strategy-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .strategy-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .strategy-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        /* ── INTRO ── */
        .strategy-intro {
          padding: 88px 0;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        .strategy-eyebrow-bar {
          width: 44px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin-bottom: 22px;
        }

        .strategy-intro h2,
        .strategy-closing h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.6rem, 1.2rem + 1.4vw, 2.2rem);
          line-height: 1.25;
          margin: 0 0 22px;
        }

        .strategy-intro p,
        .strategy-closing p {
          color: #51606E;
          font-size: 16.5px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .strategy-intro p:last-child,
        .strategy-closing p:last-child {
          margin-bottom: 0;
        }

        /* ── CARDS ── */
        .strategy-cards-section {
          background: var(--blue-tint);
          padding: 88px 0;
        }

        .strategy-cards-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 900px) {
          .strategy-cards-grid { grid-template-columns: 1fr; }
        }

        .strategy-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid #EFEAE5;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .strategy-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 44px -20px rgba(22, 49, 79, 0.18);
        }

        .strategy-card-bar {
          width: 36px;
          height: 4px;
          border-radius: 4px;
          margin-bottom: 18px;
        }

        .strategy-card.accent-blue .strategy-card-bar { background: var(--blue); }
        .strategy-card.accent-peach .strategy-card-bar { background: var(--peach); }

        .strategy-card h3 {
          font-weight: 700;
          font-size: 18px;
          color: var(--navy);
          margin: 0 0 14px;
        }

        .strategy-card p {
          font-size: 15px;
          line-height: 1.7;
          color: #5F6E7A;
          margin: 0;
        }

        /* ── CLOSING ── */
        .strategy-closing {
          padding: 88px 0;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        /* ── CTA ── */
        .strategy-cta {
          position: relative;
          padding: 96px 0;
          background: var(--navy-deep);
          text-align: center;
          overflow: hidden;
        }

        .strategy-cta-glow {
          position: absolute;
          bottom: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 480px;
          height: 320px;
          background: var(--peach);
          opacity: 0.14;
          filter: blur(110px);
          border-radius: 50%;
        }

        .strategy-cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .strategy-cta h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.4rem);
          margin: 0 0 14px;
        }

        .strategy-cta p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 16px;
          margin: 0 0 36px;
        }

        .strategy-cta-link {
          display: inline-flex;
          align-items: center;
          background: var(--peach);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 38px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 14px 32px -10px rgba(242, 168, 120, 0.5);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .strategy-cta-link:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }
      `}</style>

      {/* HEADER */}
      <section className="strategy-header">
        <div className="strategy-header-glow" />
        <div className="strategy-header-inner">
          <p className="strategy-breadcrumb">{breadcrumb}</p>
          <h1 className="strategy-h1">{title}</h1>
          <div className="strategy-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="strategy-intro">
        <div className="strategy-eyebrow-bar" />
        <h2>{introTitle}</h2>
        {introParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* CARDS */}
      <section className="strategy-cards-section">
        <div className="strategy-cards-grid">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className={`strategy-card accent-${i % 2 === 0 ? "blue" : "peach"}`}
            >
              <div className="strategy-card-bar" />
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CLOSING */}
      <section className="strategy-closing">
        <div className="strategy-eyebrow-bar" />
        <h2>{closingTitle}</h2>
        {closingParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      {/* CTA */}
      <section className="strategy-cta">
        <div className="strategy-cta-glow" />
        <div className="strategy-cta-inner">
          <h2>{ctaTitle}</h2>
          <p>{ctaSubtitle}</p>
          <a href="/contact-us" className="strategy-cta-link">
            {ctaLabel}
          </a>
        </div>
      </section>
    </div>
  );
}