import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets/about.jpg";

export default function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const credentials = [
    { label: "OMHC" },
    { label: "PRP" },
    { label: "DUI Education" },
  ];

  return (
    <section className="about-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .about-section {
          --navy: #1C2B3A;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: var(--paper);
          padding: 96px 0;
          position: relative;
          overflow: hidden;
        }

        .about-section::before {
          content: "";
          position: absolute;
          top: -120px;
          left: -120px;
          width: 420px;
          height: 420px;
          background: radial-gradient(circle, var(--blue-tint) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .about-img-wrap {
          position: relative;
        }

        .about-img-glow {
          position: absolute;
          inset: -10%;
          border-radius: 50%;
          background: radial-gradient(circle, var(--peach) 0%, transparent 65%);
          opacity: 0.35;
          filter: blur(40px);
          animation: breathe 6s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes breathe {
          0%, 100% { transform: scale(0.92); opacity: 0.25; }
          50% { transform: scale(1.05); opacity: 0.4; }
        }

        .about-img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 100%;
          min-height: 420px;
          object-fit: cover;
          border-radius: 28px 28px 28px 90px;
          box-shadow: 0 24px 60px -20px rgba(28, 43, 58, 0.25);
        }

        .about-badge-float {
          position: absolute;
          bottom: -20px;
          left: -20px;
          z-index: 2;
          background: #fff;
          border-radius: 16px;
          padding: 14px 20px;
          box-shadow: 0 12px 32px -8px rgba(28, 43, 58, 0.18);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .about-badge-float .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: var(--blue);
          flex-shrink: 0;
        }

        .about-badge-float span {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--navy);
        }

        .about-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach-deep);
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .about-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--peach);
          display: inline-block;
        }

        .about-heading {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          line-height: 1.12;
          color: var(--navy);
          font-size: clamp(2.1rem, 1.4rem + 2.6vw, 3.4rem);
          margin-top: 20px;
          letter-spacing: -0.5px;
        }

        .about-heading em {
          font-style: normal;
          color: var(--blue);
        }

        .about-body {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.75;
          color: #51606E;
          margin-top: 24px;
          max-width: 50ch;
        }

        .about-credentials {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 28px;
        }

        .about-credentials span {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          color: var(--blue);
          background: var(--blue-tint);
          padding: 8px 16px;
          border-radius: 100px;
          border: 1px solid rgba(47, 134, 198, 0.15);
        }

        .about-cta-row {
          margin-top: 36px;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .about-cta {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 15px;
          color: #fff;
          background: var(--peach);
          padding: 14px 30px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 10px 26px -8px rgba(242, 168, 120, 0.6);
          transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
        }

        .about-cta:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
          box-shadow: 0 14px 32px -8px rgba(232, 137, 90, 0.55);
        }

        .about-cta svg {
          transition: transform 0.25s ease;
        }

        .about-cta:hover svg {
          transform: translateX(3px);
        }

        .about-trust {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: #7C8A96;
        }

        @media (max-width: 900px) {
          .about-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .about-img {
            min-height: 320px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .about-img-glow {
            animation: none;
          }
        }
      `}</style>

      <div
        ref={ref}
        className="about-inner"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 1s ease, transform 1s ease",
        }}
      >
        {/* IMAGE */}
        <div className="about-img-wrap">
          <div className="about-img-glow" />
          <img
            src={aboutImg}
            alt="Professional mental health consultation at Dove Healthcare Services"
            className="about-img"
          />
          <div className="about-badge-float">
            <span className="dot" />
            <span>Person-centered care</span>
          </div>
        </div>

        {/* CONTENT */}
        <div>
          <span className="about-eyebrow">About Dove Healthcare</span>

          <h2 className="about-heading">
            Dedicated to mental wellness, <em>recovery</em> & lifelong support
          </h2>

          <p className="about-body">
            Dove Healthcare Services, LLC is a certified outpatient mental
            health clinic in Maryland providing comprehensive OMHC services,
            Psychiatric Rehabilitation Programs, DUI education, and
            behavioral health support. Our evidence-based approach focuses on
            personalized care, long-term recovery, and empowering individuals
            to live stable and meaningful lives.
          </p>

          <div className="about-credentials">
            {credentials.map((c) => (
              <span key={c.label}>{c.label}</span>
            ))}
          </div>

          <div className="about-cta-row">
            <a href="/about-us" className="about-cta">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <span className="about-trust">Licensed Maryland behavioral health provider</span>
          </div>
        </div>
      </div>
    </section>
  );
}