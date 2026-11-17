import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

// Stand-alone "Emergency / Crisis Support" banner.
// Place this directly above <Footer /> in your layout, e.g.:
//   <EmergencyContact />
//   <Footer />
export default function EmergencyContact() {
  return (
    <section className="emergency-section">
      <style>{`
        .emergency-section {
          position: relative;
          padding: clamp(40px, 6vw, 72px) var(--dh-gutter);
          background: #fff;
          border-top: 1px solid var(--dh-line);
        }
        .emergency-hairline { display: none; }
        .emergency-inner {
          position: relative;
          overflow: hidden;
          max-width: var(--dh-container);
          margin: 0 auto;
          padding: clamp(28px, 4vw, 44px) clamp(24px, 4vw, 48px);
          border-radius: var(--dh-radius-lg);
          background:
            radial-gradient(600px 260px at 100% 0%, rgba(255, 255, 255, 0.12), transparent 60%),
            linear-gradient(110deg, var(--dh-crisis) 0%, var(--dh-crisis-700) 100%);
          color: #fff;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 28px 40px;
          box-shadow: 0 30px 60px -36px rgba(143, 28, 19, 0.6);
        }
        .emergency-message { display: flex; align-items: flex-start; gap: 18px; flex: 1 1 380px; }
        .emergency-icon {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.14);
          box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.25);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .emergency-text h3 {
          font-family: var(--dh-font-display);
          font-weight: 500;
          font-size: clamp(1.4rem, 1.1rem + 1vw, 1.85rem);
          line-height: 1.2;
          letter-spacing: -0.01em;
          margin: 0 0 8px;
          color: #fff;
        }
        .emergency-text p {
          font-size: 15.5px;
          line-height: 1.65;
          color: rgba(255, 255, 255, 0.88);
          max-width: 50ch;
          margin: 0;
        }
        .emergency-ctas { display: flex; flex-wrap: wrap; gap: 10px; flex: 0 1 auto; }
        .emergency-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 50px;
          padding: 0 22px;
          border-radius: var(--dh-radius-pill);
          font-weight: 600;
          font-size: 14.5px;
          white-space: nowrap;
          text-decoration: none;
          transition: background-color 0.2s, color 0.2s, box-shadow 0.2s, transform 0.25s var(--dh-ease);
        }
        .emergency-cta:hover { transform: translateY(-1px); }
        .emergency-cta.primary { background: #fff; color: var(--dh-crisis-700); }
        .emergency-cta.primary:hover { background: var(--dh-crisis-50); }
        .emergency-cta.secondary { background: transparent; color: #fff; box-shadow: inset 0 0 0 1.5px rgba(255, 255, 255, 0.55); }
        .emergency-cta.secondary:hover { background: rgba(255, 255, 255, 0.1); box-shadow: inset 0 0 0 1.5px #fff; }
        .emergency-cta.tertiary { background: rgba(255, 255, 255, 0.14); color: #fff; }
        .emergency-cta.tertiary:hover { background: rgba(255, 255, 255, 0.22); }
        @media (max-width: 640px) {
          .emergency-ctas { width: 100%; flex-direction: column; }
          .emergency-cta { width: 100%; }
        }
      `}</style>

      <div className="emergency-hairline" />

      <div className="emergency-inner">
        <div className="emergency-message">
          <div className="emergency-icon">
            <AlertTriangle size={24} color="#FFE08A" />
          </div>
          <div className="emergency-text">
            <h3>In crisis or need immediate support?</h3>
            <p>
              You are not alone. Trained counselors are available 24/7 —
              reach out any time, day or night.
            </p>
          </div>
        </div>

        <div className="emergency-ctas">
          <a href="tel:988" className="emergency-cta primary">
            <Phone size={18} />
            <span>Call 988</span>
          </a>
          <a href="sms:988" className="emergency-cta tertiary">
            <MessageCircle size={18} />
            <span>Text 988</span>
          </a>
          <a href="tel:911" className="emergency-cta secondary">
            <Phone size={18} />
            <span>Call 911 (Emergency)</span>
          </a>
        </div>
      </div>
    </section>
  );
}