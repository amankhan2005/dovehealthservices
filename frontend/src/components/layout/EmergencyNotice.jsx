import { ShieldAlert } from "lucide-react";

/**
 * The site's single emergency / crisis notice, rendered once above the footer
 * on every page (see App.jsx). It is informational only: no call buttons and
 * no tel:/sms: links. The numbers and wording are the ones already published
 * on the site (911 for medical emergencies, 988 for mental health crises).
 */
const NOTICE_CSS = `
  .dh-notice {
    background: var(--dh-crisis-50);
    border-top: 3px solid var(--dh-crisis);
  }

  .dh-notice__panel {
    max-width: calc(var(--dh-container-wide) + var(--dh-gutter) * 2);
    margin: 0 auto;
    padding: clamp(28px, 4vw, 44px) var(--dh-gutter);
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px 64px;
    align-items: center;
  }

  @media (min-width: 900px) {
    .dh-notice__panel { grid-template-columns: minmax(0, 1fr) auto; }
  }

  .dh-notice__message { display: flex; align-items: flex-start; gap: 16px; }

  .dh-notice__icon { flex-shrink: 0; padding-top: 2px; color: var(--dh-crisis); }

  .dh-notice__title {
    margin: 0 0 6px;
    font-size: 1.12rem;
    font-weight: 700;
    letter-spacing: -0.015em;
    color: var(--dh-crisis-700);
  }

  .dh-notice__text {
    margin: 0;
    max-width: 66ch;
    font-size: 15px;
    line-height: 1.65;
    color: var(--dh-ink-2);
  }

  .dh-notice__numbers { display: flex; margin: 0; }

  .dh-notice__number { padding: 0 32px; }
  .dh-notice__number:first-child { padding-left: 0; }
  .dh-notice__number + .dh-notice__number { border-left: 1px solid rgba(180, 35, 24, 0.25); }

  .dh-notice__number dt {
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    letter-spacing: -0.02em;
    font-variant-numeric: tabular-nums;
    color: var(--dh-crisis);
  }

  .dh-notice__number dd {
    margin: 6px 0 0;
    font-size: 13px;
    font-weight: 600;
    color: var(--dh-ink-2);
  }

  @media (max-width: 899px) {
    .dh-notice__numbers { padding-left: 38px; }
  }

  @media (max-width: 420px) {
    .dh-notice__number { padding: 0 20px; }
  }
`;

export default function EmergencyNotice() {
  return (
    <aside className="dh-notice" aria-labelledby="dh-notice-title">
      <style>{NOTICE_CSS}</style>

      <div className="dh-notice__panel">
        <div className="dh-notice__message">
          <span className="dh-notice__icon" aria-hidden="true">
            <ShieldAlert size={22} />
          </span>
          <div>
            <h2 id="dh-notice-title" className="dh-notice__title">
              Need immediate assistance?
            </h2>
            <p className="dh-notice__text">
              If you are experiencing a medical emergency, call 911
              immediately. For mental health crisis support, call or text 988.
              You are not alone. Trained counselors are available 24/7 —
              reach out any time, day or night.
            </p>
          </div>
        </div>

        {/* Plain text only — deliberately not links or buttons. */}
        <dl className="dh-notice__numbers">
          <div className="dh-notice__number">
            <dt>911</dt>
            <dd>Medical emergency</dd>
          </div>
          <div className="dh-notice__number">
            <dt>988</dt>
            <dd>Mental health crisis</dd>
          </div>
        </dl>
      </div>
    </aside>
  );
}
