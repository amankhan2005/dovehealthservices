import recoveryImg from "../assets/treatment/recovery.webp";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import ArrowIcon from "../components/ui/ArrowIcon";

const TREATMENT_CSS = `
  .treatment-intro .dh-prose > p:first-child {
    font-size: clamp(1.15rem, 1.05rem + 0.4vw, 1.35rem);
    line-height: 1.6;
    color: var(--dh-ink);
  }

  .treatment-plan__head { margin-bottom: clamp(40px, 5vw, 64px); max-width: 22ch; }

  .treatment-plan__cols {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 0 48px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  @media (min-width: 860px) {
    .treatment-plan__cols { grid-template-columns: repeat(3, minmax(0, 1fr)); }
  }

  .treatment-plan__cols li { padding: 24px 0 28px; border-top: 1px solid var(--dh-ink); }

  .treatment-plan__cols p {
    margin: 16px 0 0;
    font-size: 17px;
    line-height: 1.7;
    color: var(--dh-ink-2);
  }

  .treatment-recovery__head { position: sticky; top: calc(var(--dh-header-h) + 32px); align-self: start; }

  .treatment-recovery__list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--dh-line-strong); }

  .treatment-recovery__list li {
    padding: 22px 0;
    border-bottom: 1px solid var(--dh-line);
    font-size: 18px;
    line-height: 1.65;
    color: var(--dh-ink-2);
  }

  .treatment-recovery__list li:last-child { font-weight: 600; color: var(--dh-ink); }
`;

export default function TreatmentRecovery() {
  return (
    <div className="treatment-page">
      <style>{TREATMENT_CSS}</style>

      {/* HEADER */}
      <PageHero
        breadcrumb="Dove Health > Treatment & recovery"
        title="Treatment & recovery"
        image={{ src: recoveryImg, alt: "Mental health recovery support", ratio: "4 / 3", focus: "62% 40%" }}
      />

      {/* INTRO */}
      <section className="dh-section treatment-intro">
        <div className="dh-container dh-grid">
          <div className="dh-col-5" data-reveal>
            <h2 className="dh-h2">Welcome to Dove Health</h2>
          </div>
          <div className="dh-prose dh-col-7" data-reveal style={{ "--dh-reveal-delay": "80ms" }}>
            <p>
              At Dove Health, we specialize in providing treatment
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
          </div>
        </div>
      </section>

      {/* PERSONALIZED PLAN */}
      <section className="dh-section dh-section--paper">
        <div className="dh-container">
          <h2 className="dh-h2 treatment-plan__head" data-reveal>Creating a personalized recovery plan</h2>
          <ol className="treatment-plan__cols">
            <li data-reveal>
              <span className="dh-index" aria-hidden="true">01</span>
              <p>
                Every client receives an individualized treatment and recovery
                plan tailored to their specific needs, personal strengths, and
                life goals.
              </p>
            </li>
            <li data-reveal style={{ "--dh-reveal-delay": "80ms" }}>
              <span className="dh-index" aria-hidden="true">02</span>
              <p>
                Our licensed mental health professionals work collaboratively
                with clients to improve coping skills, emotional wellness, and
                daily functioning.
              </p>
            </li>
            <li data-reveal style={{ "--dh-reveal-delay": "160ms" }}>
              <span className="dh-index" aria-hidden="true">03</span>
              <p>
                Through our Psychiatric Rehabilitation Program (PRP) and
                Outpatient Mental Health Clinic (OMHC), we provide structured
                support to help individuals live independently and
                confidently.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* RECOVERY INFO */}
      <section className="dh-section">
        <div className="dh-container dh-grid">
          <div className="dh-col-5 treatment-recovery__head" data-reveal>
            <h2 className="dh-h2">Understanding mental health recovery</h2>
          </div>
          <ul className="dh-col-7 treatment-recovery__list" data-reveal style={{ "--dh-reveal-delay": "80ms" }}>
            <li>
              Mental health recovery is an ongoing journey of healing, personal
              growth, and improved quality of life.
            </li>
            <li>
              Recovery focuses on helping individuals develop independence,
              strengthen relationships, and achieve meaningful life goals.
            </li>
            <li>
              With the right treatment, professional support, and dedication,
              individuals can successfully manage their mental health condition.
            </li>
            <li>
              Dove Health is committed to helping every individual
              achieve a healthier, stable, and fulfilling future.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <CtaBand
        title="Start your recovery journey today"
        text="Contact Dove Health to learn how our programs can help you or your loved one achieve recovery and wellness."
      >
        <Link to="/contact-us" className="dh-btn dh-btn--light">
          Contact Dove Health
          <ArrowIcon />
        </Link>
      </CtaBand>
    </div>
  );
}
