import { ShieldCheck } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import therapy1 from "../assets/about/therapy1.jpg";
import therapy2 from "../assets/about/therapy2.jpg";
import therapy3 from "../assets/about/accreditation-seal.webp";

const ABOUT_PAGE_CSS = `
  /* Who we are — statement layout */
  .about-who__title { position: sticky; top: calc(var(--dh-header-h) + 32px); align-self: start; }

  .about-who__statement {
    margin: 0 0 28px;
    font-size: clamp(1.3rem, 1.05rem + 0.9vw, 1.85rem);
    font-weight: 500;
    line-height: 1.45;
    letter-spacing: -0.016em;
    color: var(--dh-ink);
    text-wrap: pretty;
  }

  .about-who .dh-prose > p { font-size: 18px; }

  /* Mission — pull quote between rules */
  .about-mission { padding-block: clamp(64px, 8vw, 112px); background: var(--dh-paper); }

  .about-mission__inner {
    padding-block: clamp(36px, 5vw, 56px);
    border-top: 1px solid var(--dh-ink);
    border-bottom: 1px solid var(--dh-line-strong);
  }

  .about-mission__label {
    margin: 0;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dh-dove);
  }

  .about-mission__quote {
    margin: 0;
    font-size: clamp(1.6rem, 1.15rem + 1.8vw, 2.7rem);
    font-weight: 500;
    line-height: 1.25;
    letter-spacing: -0.026em;
    color: var(--dh-ink);
    text-wrap: balance;
  }

  /* Programs — image-led split */
  .about-programs { align-items: center; }
  .about-programs__figure img { --dh-ratio: 5 / 4; --dh-focus: 35% 45%; }
  .about-programs .dh-prose { margin-top: 24px; }

  /* Accreditation — credential strip */
  .about-accred {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 32px 64px;
    align-items: center;
    padding: clamp(32px, 4vw, 48px);
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius-lg);
  }

  @media (min-width: 860px) {
    .about-accred { grid-template-columns: 200px minmax(0, 1fr); }
  }

  .about-accred__seal { width: 160px; height: auto; display: block; }

  .about-accred__tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--dh-brand);
  }

  .about-accred .dh-prose { margin-top: 18px; }
`;

export default function About() {
  return (
    <div className="about-page">
      <style>{ABOUT_PAGE_CSS}</style>

      {/* HEADER */}
      <PageHero
        breadcrumb="Dove Health > About us"
        title="About Dove Health"
        image={{ src: therapy2, alt: "Therapy session at Dove Health", ratio: "4 / 3", focus: "62% 35%" }}
      />

      {/* SECTION 1 — WHO WE ARE */}
      <section className="dh-section about-who">
        <div className="dh-container dh-grid">
          <div className="dh-col-4 about-who__title" data-reveal>
            <h2 className="dh-h2">Who we are</h2>
          </div>
          <div className="dh-col-8" data-reveal style={{ "--dh-reveal-delay": "80ms" }}>
            <p className="about-who__statement">
              Dove Health (Dove Healthcare Services, LLC) is a certified
              outpatient mental health clinic provider approved by the Maryland Department of
              Behavioral Health Administration (BHA). We provide
              comprehensive psychiatric rehabilitation and outpatient mental
              health services to individuals across Maryland.
            </p>
            <div className="dh-prose">
              <p>
                Our mission is to empower individuals facing mental health
                challenges by delivering personalized, compassionate, and
                evidence-based care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="about-mission">
        <div className="dh-container">
          <div className="dh-grid about-mission__inner" data-reveal>
            <h2 className="about-mission__label dh-col-4">Our mission</h2>
            <p className="about-mission__quote dh-col-8">
              To provide compassionate, high-quality behavioral healthcare
              that empowers individuals to live independent and fulfilling
              lives.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2 — PROGRAMS & SERVICES */}
      <section className="dh-section">
        <div className="dh-container dh-grid about-programs">
          <figure className="dh-figure dh-col-6 about-programs__figure" data-reveal>
            <img src={therapy1} alt="Programs and services at Dove Health" loading="lazy" decoding="async" />
          </figure>
          <div className="dh-col-5 dh-col-start-8" data-reveal style={{ "--dh-reveal-delay": "80ms" }}>
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
        </div>
      </section>

      {/* SECTION 3 — ACCREDITATION */}
      <section className="dh-section dh-section--tight" style={{ paddingTop: 0 }}>
        <div className="dh-container">
          <div className="about-accred" data-reveal>
            <img className="about-accred__seal" src={therapy3} alt="Joint Commission accreditation seal" loading="lazy" decoding="async" />
            <div>
              <span className="about-accred__tag">
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
          </div>
        </div>
      </section>
    </div>
  );
}
