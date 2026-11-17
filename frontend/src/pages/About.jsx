import { ShieldCheck } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import therapy1 from "../assets/about/therapy1.jpg";
import therapy2 from "../assets/about/therapy2.jpg";
import therapy3 from "../assets/about/accreditation-seal.webp";

const ABOUT_PAGE_CSS = `
  .about-page__media { max-width: 560px; width: 100%; margin: 0 auto; }

  .about-page__accred-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 22px;
    padding: 8px 14px;
    border-radius: var(--dh-radius-pill);
    background: var(--dh-accent-50);
    color: var(--dh-accent-ink);
    font-size: 13px;
    font-weight: 600;
  }

  .about-page__text .dh-prose { margin-top: 22px; }

  .about-page__seal-panel {
    position: relative;
    display: grid;
    place-items: center;
    max-width: 480px;
    width: 100%;
    margin: 0 auto;
    aspect-ratio: 1;
    border-radius: 50%;
    background:
      radial-gradient(circle at 50% 50%, #fff 0%, #fff 52%, var(--dh-sand-50) 53%, var(--dh-sand-50) 70%, var(--dh-sand-100) 71%);
  }

  .about-page__seal-panel::after {
    content: "";
    position: absolute;
    inset: 4%;
    border-radius: 50%;
    border: 1.5px dashed rgba(162, 81, 42, 0.25);
  }

  .about-page__seal-panel img {
    width: 54%;
    height: auto;
    filter: drop-shadow(0 22px 30px rgba(120, 80, 10, 0.28));
  }

  .about-page__mission {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    text-align: center;
  }

  .about-page__mission-mark {
    position: absolute;
    z-index: -1;
    right: -40px;
    bottom: -60px;
    width: clamp(200px, 26vw, 340px);
    background-color: #fff;
    opacity: 0.05;
    transform: rotate(-8deg);
  }

  .about-page__mission h2 { margin: 0 auto; }

  .about-page__mission .dh-rule { justify-content: center; margin: 24px 0 30px; }

  .about-page__mission p {
    max-width: 30ch;
    margin: 0 auto;
    font-family: var(--dh-font-display);
    font-size: clamp(1.5rem, 1.1rem + 1.6vw, 2.4rem);
    font-weight: 400;
    font-style: italic;
    line-height: 1.35;
    letter-spacing: -0.01em;
    color: #fff;
  }
`;

export default function About() {
  return (
    <div className="about-page">
      <style>{ABOUT_PAGE_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb="Dove Health > About us" title="About Dove Health" />

      {/* SECTION 1 — WHO WE ARE */}
      <section className="dh-section">
        <div className="dh-container dh-split">
          <div className="about-page__text" data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">Who we are</h2>
            <div className="dh-prose">
              <p>
                Dove Health (Dove Healthcare Services, LLC) is a certified
                outpatient mental health clinic provider approved by the Maryland Department of
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
          </div>

          <div className="dh-media about-page__media" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            <img src={therapy1} alt="Therapy session at Dove Health" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROGRAMS & SERVICES */}
      <section className="dh-section dh-section--sand">
        <div className="dh-container dh-split dh-split--reverse">
          <div className="about-page__text" data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">Our programs and services</h2>
            <div className="dh-prose">
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

          <div className="dh-media dh-media--left dh-media--sky about-page__media" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            <img src={therapy2} alt="Programs and services at Dove Health" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* SECTION 3 — ACCREDITATION */}
      <section className="dh-section">
        <div className="dh-container dh-split">
          <div className="about-page__text" data-reveal>
            <span className="about-page__accred-tag">
              <ShieldCheck size={16} aria-hidden="true" />
              Joint Commission accredited
            </span>
            <h2 className="dh-h2">Joint Commission accreditation</h2>
            <div className="dh-prose">
              <p>
                Dove Health has earned accreditation from The
                Joint Commission, the nation's leading healthcare quality
                organization.
              </p>
              <p>
                This reflects our commitment to providing safe, high-quality
                mental health services.
              </p>
            </div>
          </div>

          <div className="about-page__seal-panel" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            <img src={therapy3} alt="Joint Commission accreditation seal" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="dh-cta">
        <div className="dh-container">
          <div className="dh-cta__panel about-page__mission" data-reveal>
            <span className="about-page__mission-mark dh-dove-mark" aria-hidden="true" />
            <h2 className="dh-cta__title">Our mission</h2>
            <div className="dh-rule" aria-hidden="true">
              <span className="bar" />
              <span className="dot" />
            </div>
            <p>
              To provide compassionate, high-quality behavioral healthcare
              that empowers individuals to live independent and fulfilling
              lives.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
