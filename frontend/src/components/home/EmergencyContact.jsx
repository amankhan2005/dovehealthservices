import { Phone, MessageCircle, AlertTriangle } from "lucide-react";

// Stand-alone "Emergency / Crisis Support" banner.
// Place this directly above <Footer /> in your layout, e.g.:
//   <EmergencyContact />
//   <Footer />
export default function EmergencyContact() {
  return (
    <section className="emergency-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .emergency-section {
          --crisis-red: #C8302B;
          --crisis-red-deep: #A8241F;
          position: relative;
          background: linear-gradient(100deg, var(--crisis-red) 0%, var(--crisis-red-deep) 100%);
          color: #fff;
        }

        .emergency-hairline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: rgba(255, 255, 255, 0.25);
        }

        .emergency-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 44px 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        .emergency-message {
          display: flex;
          align-items: flex-start;
          gap: 18px;
          flex: 1 1 360px;
        }

        .emergency-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.3);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .emergency-text h3 {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: clamp(1.25rem, 1rem + 1vw, 1.6rem);
          line-height: 1.3;
          margin: 0 0 6px;
        }

        .emergency-text p {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.88);
          max-width: 480px;
          margin: 0;
        }

        .emergency-ctas {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          flex: 0 0 auto;
        }

        .emergency-cta {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14.5px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 13px 22px;
          border-radius: 100px;
          white-space: nowrap;
          text-decoration: none;
          transition: transform 0.18s ease, background 0.18s ease, color 0.18s ease;
        }

        .emergency-cta:hover {
          transform: translateY(-2px);
        }

        .emergency-cta.primary {
          background: #fff;
          color: var(--crisis-red);
        }

        .emergency-cta.primary:hover {
          background: #FCEEC9;
        }

        .emergency-cta.secondary {
          background: transparent;
          color: #fff;
          border: 2px solid rgba(255, 255, 255, 0.55);
        }

        .emergency-cta.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: #fff;
        }

        .emergency-cta.tertiary {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          border: 2px solid transparent;
        }

        .emergency-cta.tertiary:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        @media (max-width: 640px) {
          .emergency-inner { padding: 36px 20px; }
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