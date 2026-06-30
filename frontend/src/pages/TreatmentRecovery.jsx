import recoveryImg from "../assets/treatment/recovery.webp";
import { Link } from "react-router-dom";

export default function TreatmentRecovery() {
  return (
    <div className="treatment-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .treatment-page {
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

        .treatment-page h1,
        .treatment-page h2 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .treatment-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .treatment-header-glow {
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

        .treatment-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .treatment-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .treatment-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem);
          line-height: 1.15;
          margin: 0;
        }

        .treatment-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .treatment-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .treatment-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        /* ── TEXT SECTIONS ── */
        .treatment-text-section {
          padding: 88px 0;
          max-width: 800px;
          margin: 0 auto;
          padding-left: 24px;
          padding-right: 24px;
        }

        .treatment-eyebrow-bar {
          width: 44px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin-bottom: 22px;
        }

        .treatment-text-section h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.4rem);
          line-height: 1.25;
          margin: 0 0 22px;
        }

        .treatment-text-section p {
          color: #51606E;
          font-size: 16.5px;
          line-height: 1.8;
          margin: 0 0 20px;
        }

        .treatment-text-section p:last-child {
          margin-bottom: 0;
        }

        /* ── IMAGE + TEXT ── */
        .treatment-split-section {
          background: var(--blue-tint);
          padding: 96px 0;
        }

        .treatment-split-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .treatment-split-grid { grid-template-columns: 1fr; gap: 40px; }
        }

        .treatment-split-grid h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.4rem);
          line-height: 1.25;
          margin: 0 0 22px;
        }

        .treatment-split-grid p {
          color: #51606E;
          font-size: 16.5px;
          line-height: 1.8;
          margin: 0 0 20px;
        }

        .treatment-split-grid p:last-of-type {
          margin-bottom: 0;
        }

        .treatment-img-wrap {
          position: relative;
        }

        .treatment-img-glow {
          position: absolute;
          inset: -6%;
          border-radius: 50%;
          background: var(--blue);
          opacity: 0.12;
          filter: blur(50px);
          z-index: 0;
        }

        .treatment-img-wrap img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 24px 56px -24px rgba(22, 49, 79, 0.3);
          transition: transform 0.6s ease;
        }

        .treatment-img-wrap:hover img {
          transform: scale(1.04);
        }

        /* ── CTA ── */
        .treatment-cta {
          position: relative;
          padding: 96px 0;
          background: var(--navy-deep);
          text-align: center;
          overflow: hidden;
        }

        .treatment-cta-glow {
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

        .treatment-cta-inner {
          position: relative;
          max-width: 660px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .treatment-cta h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.8rem, 1.4rem + 1.6vw, 2.5rem);
          margin: 0 0 16px;
        }

        .treatment-cta p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 16.5px;
          line-height: 1.7;
          margin: 0 0 36px;
        }

        .treatment-cta-link {
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

        .treatment-cta-link:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }
      `}</style>

      {/* HEADER */}
      <section className="treatment-header">
        <div className="treatment-header-glow" />
        <div className="treatment-header-inner">
          <p className="treatment-breadcrumb">Dove Healthcare Services, LLC &gt; Treatment &amp; recovery</p>
          <h1 className="treatment-h1">Treatment &amp; recovery</h1>
          <div className="treatment-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="treatment-text-section">
        <div className="treatment-eyebrow-bar" />
        <h2>Welcome to Dove Healthcare Services</h2>
        <p>
          At Dove Healthcare Services, we specialize in providing treatment
          and recovery support for individuals living with serious mental
          health conditions including schizophrenia, schizoaffective
          disorder, bipolar I disorder, and other behavioral health
          challenges.
        </p>
        <p>
          Our comprehensive outpatient programs are designed to help
          individuals manage symptoms, build independence, improve daily
          functioning, and achieve long-term emotional stability.
        </p>
        <p>
          We also provide support, education, and guidance for families and
          caregivers, recognizing their essential role in helping loved ones
          succeed in recovery.
        </p>
      </section>

      {/* PERSONALIZED PLAN */}
      <section className="treatment-split-section">
        <div className="treatment-split-grid">
          <div>
            <div className="treatment-eyebrow-bar" />
            <h2>Creating a personalized recovery plan</h2>
            <p>
              Every client receives an individualized treatment and recovery
              plan tailored to their specific needs, personal strengths, and
              life goals.
            </p>
            <p>
              Our licensed mental health professionals work collaboratively
              with clients to improve coping skills, emotional wellness, and
              daily functioning.
            </p>
            <p>
              Through our Psychiatric Rehabilitation Program (PRP) and
              Outpatient Mental Health Clinic (OMHC), we provide structured
              support to help individuals live independently and
              confidently.
            </p>
          </div>

          <div className="treatment-img-wrap">
            <div className="treatment-img-glow" />
            <img src={recoveryImg} alt="Mental health recovery support" />
          </div>
        </div>
      </section>

      {/* RECOVERY INFO */}
      <section className="treatment-text-section">
        <div className="treatment-eyebrow-bar" />
        <h2>Understanding mental health recovery</h2>
        <p>
          Mental health recovery is an ongoing journey of healing, personal
          growth, and improved quality of life.
        </p>
        <p>
          Recovery focuses on helping individuals develop independence,
          strengthen relationships, and achieve meaningful life goals.
        </p>
        <p>
          With the right treatment, professional support, and dedication,
          individuals can successfully manage their mental health condition.
        </p>
        <p>
          Dove Healthcare Services is committed to helping every individual
          achieve a healthier, stable, and fulfilling future.
        </p>
      </section>

      {/* CTA */}
      <section className="treatment-cta">
        <div className="treatment-cta-glow" />
        <div className="treatment-cta-inner">
          <h2>Start your recovery journey today</h2>
          <p>
            Contact Dove Healthcare Services to learn how our programs can
            help you or your loved one achieve recovery and wellness.
          </p>
          <Link to="/contact-us" className="treatment-cta-link">
            Contact Dove Healthcare Services
          </Link>
        </div>
      </section>
    </div>
  );
}