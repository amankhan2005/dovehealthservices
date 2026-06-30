import { Phone, AlertCircle, Heart, MessageCircle } from "lucide-react";

// Compact crisis/emergency strip — sits directly under the hero.
export default function CrisisSupport() {
  return (
    <section className="crisis-strip">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .crisis-strip {
          --crisis-red: #C8302B;
          --crisis-red-deep: #A8241F;
          position: relative;
          background: linear-gradient(100deg, var(--crisis-red) 0%, var(--crisis-red-deep) 100%);
          color: #fff;
          overflow: hidden;
        }

        .crisis-glow {
          position: absolute;
          top: -40px;
          right: 40px;
          width: 200px;
          height: 200px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          filter: blur(50px);
          pointer-events: none;
        }

        .crisis-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .crisis-message {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .crisis-icon {
          display: none;
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.28);
        }

        @media (min-width: 640px) {
          .crisis-icon { display: flex; }
        }

        .crisis-text h2 {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          font-size: 15.5px;
          line-height: 1.35;
          margin: 0;
        }

        .crisis-text p {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.85);
          margin: 2px 0 0;
        }

        .crisis-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .crisis-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 13px;
          padding: 9px 16px;
          border-radius: 100px;
          white-space: nowrap;
          text-decoration: none;
          transition: background 0.18s ease, transform 0.18s ease, border-color 0.18s ease;
        }

        .crisis-chip:hover {
          transform: translateY(-1px);
        }

        .crisis-chip.primary {
          background: #fff;
          color: var(--crisis-red);
        }

        .crisis-chip.primary:hover {
          background: #FCEEC9;
        }

        .crisis-chip.outline {
          background: rgba(255, 255, 255, 0.12);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.32);
        }

        .crisis-chip.outline:hover {
          background: rgba(255, 255, 255, 0.2);
          border-color: rgba(255, 255, 255, 0.55);
        }

        .crisis-chip.er {
          display: none;
        }

        @media (min-width: 640px) {
          .crisis-chip.er { display: inline-flex; }
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