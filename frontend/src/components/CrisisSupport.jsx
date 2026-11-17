import { Phone, AlertCircle, Heart, MessageCircle } from "lucide-react";

// Compact crisis/emergency strip — sits directly under the hero.
export default function CrisisSupport() {
  return (
    <section className="crisis-strip">
      <style>{`
        .crisis-strip {
          position: relative;
          background: var(--dh-crisis);
          color: #fff;
        }
        .crisis-glow { display: none; }
        .crisis-inner {
          max-width: calc(var(--dh-container) + var(--dh-gutter) * 2);
          margin: 0 auto;
          padding: 16px var(--dh-gutter);
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 14px 24px;
        }
        .crisis-message { display: flex; align-items: center; gap: 14px; }
        .crisis-icon {
          display: none;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
        }
        @media (min-width: 640px) { .crisis-icon { display: flex; } }
        .crisis-text h2 {
          font-family: var(--dh-font-sans);
          font-weight: 700;
          font-size: 15.5px;
          line-height: 1.35;
          margin: 0;
        }
        .crisis-text p {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.86);
          margin: 2px 0 0;
        }
        .crisis-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; }
        .crisis-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          min-height: 40px;
          padding: 0 16px;
          border-radius: var(--dh-radius-pill);
          font-weight: 600;
          font-size: 13.5px;
          white-space: nowrap;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s, box-shadow 0.2s;
        }
        .crisis-chip.primary { background: #fff; color: var(--dh-crisis-700); }
        .crisis-chip.primary:hover { background: var(--dh-crisis-50); }
        .crisis-chip.outline {
          background: transparent;
          color: #fff;
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.45);
        }
        .crisis-chip.outline:hover { background: rgba(255, 255, 255, 0.12); box-shadow: inset 0 0 0 1px #fff; }
        .crisis-chip.er { display: none; }
        @media (min-width: 640px) { .crisis-chip.er { display: inline-flex; } }
        @media (max-width: 639px) {
          .crisis-actions { width: 100%; }
          .crisis-chip { flex: 1 1 auto; justify-content: center; }
        }
      `}</style>

      <div className="crisis-glow" />

      <div className="crisis-inner">
        <div className="crisis-message">
          <div className="crisis-icon">
            <AlertCircle size={18} />
          </div>
          <div className="crisis-text">
            <h2>In crisis? We're here to help.</h2>
            <p>Trained support is available 24/7 — call or text 988, any time.</p>
          </div>
        </div>

        <div className="crisis-actions">
          <a href="tel:988" className="crisis-chip primary">
            <Phone size={15} />
            Call 988
          </a>

          <a href="sms:988" className="crisis-chip primary">
            <MessageCircle size={15} />
            Text 988
          </a>

          <a href="tel:911" className="crisis-chip outline">
            <Phone size={15} />
            Call 911
          </a>

          <a
            href="https://www.google.com/maps/search/nearest+emergency+room+Baltimore+MD"
            target="_blank"
            rel="noopener noreferrer"
            className="crisis-chip outline er"
          >
            <Heart size={15} />
            Find ER
          </a>

          <a href="tel:+14109882335" className="crisis-chip outline">
            <Phone size={15} />
            Call Dove
          </a>
        </div>
      </div>
    </section>
  );
}