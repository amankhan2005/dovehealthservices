import { CheckCircle2 } from "lucide-react";
import whyImg from "../../assets/whyus.jpg";

export default function WhyUs() {
  const points = [
    "Personalized, client-centered recovery planning",
    "Licensed and highly experienced mental health specialists",
    "Evidence-based therapeutic approaches",
    "Safe, confidential and supportive care environment",
  ];

  return (
    <section className="whyus-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .whyus-section {
          --navy: #1C2B3A;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          position: relative;
          background: var(--paper);
          padding: 96px 0;
          overflow: hidden;
        }

        .whyus-blob-blue {
          position: absolute;
          top: -120px;
          left: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--blue);
          filter: blur(90px);
          opacity: 0.14;
        }

        .whyus-blob-peach {
          position: absolute;
          bottom: -120px;
          right: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--peach);
          filter: blur(90px);
          opacity: 0.18;
        }

        .whyus-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .whyus-head {
          text-align: center;
          margin-bottom: 72px;
        }

        .whyus-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach-deep);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .whyus-eyebrow::before,
        .whyus-eyebrow::after {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--peach);
        }

        .whyus-heading {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(2rem, 1.4rem + 2.4vw, 3.2rem);
          line-height: 1.15;
          margin-top: 20px;
        }

        .whyus-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: stretch;
        }

        @media (max-width: 900px) {
          .whyus-grid { grid-template-columns: 1fr; gap: 48px; }
        }

        .whyus-img-wrap {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 24px 60px -20px rgba(28, 43, 58, 0.25);
        }

        .whyus-img-wrap img {
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          display: block;
          transition: transform 0.7s ease;
        }

        .whyus-img-wrap:hover img {
          transform: scale(1.06);
        }

        .whyus-img-badge {
          position: absolute;
          bottom: 20px;
          left: 20px;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(6px);
          border-radius: 14px;
          padding: 12px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .whyus-img-badge .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--blue);
        }

        .whyus-img-badge span {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--navy);
        }

        .whyus-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .whyus-intro {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.75;
          color: #51606E;
          margin-bottom: 40px;
          max-width: 52ch;
        }

        .whyus-list {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .whyus-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          padding: 18px 4px;
          border-top: 1px solid #EFEAE5;
          transition: padding-left 0.3s ease;
        }

        .whyus-item:last-child {
          border-bottom: 1px solid #EFEAE5;
        }

        .whyus-item:hover {
          padding-left: 10px;
        }

        .whyus-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 2px;
          transition: transform 0.3s ease;
        }

        .whyus-item:nth-child(odd) .whyus-item-icon {
          background: var(--blue-tint);
          color: var(--blue);
        }

        .whyus-item:nth-child(even) .whyus-item-icon {
          background: var(--peach-tint);
          color: var(--peach-deep);
        }

        .whyus-item:hover .whyus-item-icon {
          transform: scale(1.1);
        }

        .whyus-item p {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.6;
          color: var(--navy);
          font-weight: 500;
        }
      `}</style>

      <div className="whyus-blob-blue" />
      <div className="whyus-blob-peach" />

      <div className="whyus-inner">
        <div className="whyus-head">
          <span className="whyus-eyebrow">Why Choose Us</span>
          <h2 className="whyus-heading">
            Excellence in Mental Wellness & Recovery Support
          </h2>
        </div>

        <div className="whyus-grid">
          <div className="whyus-img-wrap">
            <img src={whyImg} alt="Mental health therapy consultation" />
            <div className="whyus-img-badge">
              <span className="dot" />
              <span>Confidential & licensed care</span>
            </div>
          </div>

          <div className="whyus-content">
            <p className="whyus-intro">
              We combine clinical expertise with compassionate care to deliver
              comprehensive mental health services designed for long-term
              recovery, emotional resilience, and personal empowerment.
            </p>

            <div className="whyus-list">
              {points.map((item, index) => (
                <div key={index} className="whyus-item">
                  <div className="whyus-item-icon">
                    <CheckCircle2 size={18} />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}