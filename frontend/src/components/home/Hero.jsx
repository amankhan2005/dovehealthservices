import { useState, useEffect } from "react";
import heroVideo from "../../assets/hero.mp4";
import heroPoster from "../../assets/hero.png";

export default function Hero() {
  const slides = [
    {
      label: "Welcome to Dove Healthcare Services",
      title: "Mind wellness,\nlife success",
      desc: "We are a dedicated recovery center specializing in mental health and substance use treatment. Our comprehensive services include personalized, evidence-based care.",
    },
    {
      label: "Welcome to Dove Healthcare Services",
      title: "Empowering minds,\ntransforming lives",
      desc: "We provide professional outpatient mental health services including OMHC, PRP programs, and personalized counseling support.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .hero-section {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --peach: #F2A878;
          --peach-deep: #E8895A;
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .hero-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .hero-video-fade {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(
            100deg,
            var(--navy-deep) 0%,
            var(--navy-deep) 32%,
            rgba(14, 33, 56, 0.85) 46%,
            rgba(14, 33, 56, 0.35) 64%,
            rgba(14, 33, 56, 0.08) 100%
          );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 140px 24px 100px;
        }

        @media (max-width: 900px) {
          .hero-video-fade {
            background: linear-gradient(
              180deg,
              var(--navy-deep) 0%,
              var(--navy-deep) 38%,
              rgba(14, 33, 56, 0.88) 58%,
              rgba(14, 33, 56, 0.5) 78%,
              rgba(14, 33, 56, 0.2) 100%
            );
          }
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .hero-label .line {
          width: 40px;
          height: 2px;
          background: var(--peach);
          flex-shrink: 0;
        }

        .hero-label p {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach);
          margin: 0;
        }

        .hero-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.4rem, 1.6rem + 3.2vw, 4.4rem);
          line-height: 1.1;
          white-space: pre-line;
          margin: 0;
          max-width: 16ch;
        }

        .hero-desc {
          margin-top: 28px;
          max-width: 46ch;
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.78);
        }

        .hero-ctas {
          margin-top: 40px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
        }

        .hero-cta {
          display: inline-flex;
          align-items: center;
          padding: 16px 36px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
        }

        .hero-cta.primary {
          background: var(--peach);
          color: #fff;
          box-shadow: 0 14px 32px -10px rgba(242, 168, 120, 0.5);
        }

        .hero-cta.primary:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }

        .hero-cta.secondary {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .hero-cta.secondary:hover {
          background: #fff;
          color: var(--navy);
          border-color: #fff;
          transform: translateY(-2px);
        }

        .hero-dots {
          position: absolute;
          z-index: 2;
          left: 24px;
          bottom: 36px;
          display: flex;
          gap: 8px;
        }

        @media (min-width: 1280px) {
          .hero-dots { left: calc((100vw - 1280px) / 2 + 24px); }
        }

        .hero-dot {
          width: 28px;
          height: 3px;
          border-radius: 3px;
          background: rgba(255, 255, 255, 0.3);
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .hero-dot.active {
          background: var(--peach);
        }
      `}</style>

      <video
        className="hero-video"
        src={heroVideo}
        poster={heroPoster}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="hero-video-fade" />

      <div className="hero-content">
        <div className="hero-label">
          <span className="line" />
          <p>{slides[index].label}</p>
        </div>

        <h1 className="hero-title">{slides[index].title}</h1>

        <p className="hero-desc">{slides[index].desc}</p>

        <div className="hero-ctas">
          <a href="/book-appointment" className="hero-cta primary">
            Book appointment
          </a>
          <a href="tel:+14109882335" className="hero-cta secondary">
            Call us now
          </a>
        </div>
      </div>

      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`hero-dot ${i === index ? "active" : ""}`}
            aria-label={`Show slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}