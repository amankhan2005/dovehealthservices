import therapy1 from "../assets/about/therapy1.jpg";
import therapy2 from "../assets/about/therapy2.jpg";
import therapy3 from "../assets/about/achievement1.png";

export default function About() {
  return (
    <div className="about-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .about-page {
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

        .about-page h1,
        .about-page h2 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .about-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .about-header-glow {
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

        .about-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .about-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .about-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem);
          line-height: 1.15;
          margin: 0;
        }

        .about-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .about-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .about-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        /* ── CONTENT SECTIONS ── */
        .about-section {
          padding: 96px 0;
        }

        .about-section.tinted {
          background: var(--blue-tint);
        }

        .about-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-grid.reverse > *:first-child { order: 2; }
        }

        .about-eyebrow-bar {
          width: 44px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin-bottom: 22px;
        }

        .about-section h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.4rem);
          line-height: 1.2;
          margin: 0 0 22px;
        }

        .about-section p {
          color: #51606E;
          font-size: 16.5px;
          line-height: 1.8;
          margin: 0 0 20px;
        }

        .about-section p:last-of-type {
          margin-bottom: 0;
        }

        .about-img-wrap {
          position: relative;
        }

        .about-img-glow {
          position: absolute;
          inset: -6%;
          border-radius: 50%;
          background: var(--blue);
          opacity: 0.1;
          filter: blur(50px);
          z-index: 0;
        }

        .about-img-wrap img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 420px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 24px 56px -24px rgba(22, 49, 79, 0.3);
          transition: transform 0.6s ease;
        }

        .about-img-wrap:hover img {
          transform: scale(1.04);
        }

        /* ── ACCREDITATION ── */
        .accred-panel {
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 24px;
          height: 420px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 20px;
          padding: 32px;
          box-shadow: 0 24px 56px -28px rgba(22, 49, 79, 0.18);
        }

        .accred-panel img {
          max-height: 50%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }

        .accred-panel:hover img {
          transform: scale(1.06);
        }

        .accred-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          font-weight: 600;
          color: var(--blue);
          background: var(--blue-tint);
          padding: 8px 18px;
          border-radius: 100px;
        }

        /* ── MISSION ── */
        .about-mission {
          position: relative;
          padding: 100px 0;
          background: var(--navy-deep);
          text-align: center;
          overflow: hidden;
        }

        .about-mission-glow {
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

        .about-mission-inner {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .about-mission h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.8rem, 1.4rem + 1.6vw, 2.6rem);
          margin: 0 0 22px;
        }

        .about-mission .rule {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin: 0 auto 28px;
        }

        .about-mission p {
          color: rgba(255, 255, 255, 0.78);
          font-size: 17px;
          line-height: 1.8;
          margin: 0;
        }
      `}</style>

      {/* HEADER */}
      <section className="about-header">
        <div className="about-header-glow" />
        <div className="about-header-inner">
          <p className="about-breadcrumb">Dove Healthcare Services, LLC &gt; About us</p>
          <h1 className="about-h1">About Dove Healthcare Services</h1>
          <div className="about-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
        </div>
      </section>

      {/* SECTION 1 — WHO WE ARE */}
      <section className="about-section">
        <div className="about-grid">
          <div>
            <div className="about-eyebrow-bar" />
            <h2>Who we are</h2>
            <p>
              Dove Healthcare Services, LLC is a certified outpatient mental
              health clinic provider approved by the Maryland Department of
              Behavioral Health Administration (BHA). We provide
              comprehensive psychiatric rehabilitation and outpatient mental
              health services to individuals across Maryland.
            </p>
            <p>
              Our mission is to empower individuals facing mental health
              challenges by delivering personalized, compassionate, and
              evidence-based care.
            </p>
          </div>

          <div className="about-img-wrap">
            <div className="about-img-glow" />
            <img src={therapy1} alt="Therapy session at Dove Healthcare Services" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROGRAMS & SERVICES */}
      <section className="about-section tinted">
        <div className="about-grid reverse">
          <div className="about-img-wrap">
            <div className="about-img-glow" />
            <img src={therapy2} alt="Programs and services at Dove Healthcare Services" />
          </div>

          <div>
            <div className="about-eyebrow-bar" />
            <h2>Our programs and services</h2>
            <p>
              We offer Psychiatric Rehabilitation Program (PRP), Outpatient
              Mental Health Clinic (OMHC), and Behavioral Support Services.
            </p>
            <p>
              Our experienced professionals help individuals achieve
              stability, independence, and improved quality of life.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — ACCREDITATION */}
      <section className="about-section">
        <div className="about-grid">
          <div>
            <span className="accred-tag">Joint Commission accredited</span>
            <h2 style={{ marginTop: 22 }}>Joint Commission accreditation</h2>
            <p>
              Dove Healthcare Services has earned accreditation from The
              Joint Commission, the nation's leading healthcare quality
              organization.
            </p>
            <p>
              This reflects our commitment to providing safe, high-quality
              mental health services.
            </p>
          </div>

          <div className="accred-panel">
            <img src={therapy3} alt="Joint Commission accreditation seal" />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="about-mission-glow" />
        <div className="about-mission-inner">
          <h2>Our mission</h2>
          <div className="rule" />
          <p>
            To provide compassionate, high-quality behavioral healthcare
            that empowers individuals to live independent and fulfilling
            lives.
          </p>
        </div>
      </section>
    </div>
  );
}