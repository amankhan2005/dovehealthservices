import recoveryImg from "../assets/treatment/recovery.webp";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import ArrowIcon from "../components/ui/ArrowIcon";

const TREATMENT_CSS = `
  .treatment-intro { text-align: center; }
  .treatment-intro .dh-accent-bar { margin-inline: auto; }
  .treatment-intro .dh-prose { margin-top: 26px; }
  .treatment-intro .dh-prose > p:first-child {
    font-size: clamp(1.1rem, 1rem + 0.4vw, 1.3rem);
    line-height: 1.7;
    color: var(--dh-ink);
  }

  .treatment-split .dh-prose { margin-top: 22px; }
  .treatment-split__media { max-width: 560px; width: 100%; margin: 0 auto; }
  .treatment-split__media img { --dh-ratio: 4 / 3.4; }

  .treatment-info {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 28px 80px;
  }

  @media (min-width: 960px) {
    .treatment-info { grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr); }
    .treatment-info__head { position: sticky; top: calc(var(--dh-header-h) + 32px); align-self: start; }
  }

  .treatment-info .dh-prose > p {
    padding: 0 0 18px;
    margin: 0 0 18px;
    border-bottom: 1px solid var(--dh-line);
  }

  .treatment-info .dh-prose > p:last-child {
    border-bottom: 0;
    padding-bottom: 0;
    font-weight: 500;
    color: var(--dh-ink);
  }
`;

export default function TreatmentRecovery() {
  return (
    <div className="treatment-page">
      <style>{TREATMENT_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb="Dove Health > Treatment & recovery" title="Treatment & recovery" />

      {/* INTRO */}
      <section className="dh-section">
        <div className="dh-container dh-container--narrow treatment-intro" data-reveal>
          <span className="dh-accent-bar" aria-hidden="true" />
          <h2 className="dh-h2">Welcome to Dove Health</h2>
          <div className="dh-prose">
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
      <section className="dh-section dh-section--sand treatment-split">
        <div className="dh-container dh-split">
          <div data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">Creating a personalized recovery plan</h2>
            <div className="dh-prose">
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
          </div>

          <div className="dh-media dh-media--sky treatment-split__media" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            <img src={recoveryImg} alt="Mental health recovery support" loading="lazy" decoding="async" />
          </div>
        </div>
      </section>

      {/* RECOVERY INFO */}
      <section className="dh-section">
        <div className="dh-container treatment-info">
          <div className="treatment-info__head" data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">Understanding mental health recovery</h2>
          </div>
          <div className="dh-prose" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
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
              Dove Health is committed to helping every individual
              achieve a healthier, stable, and fulfilling future.
            </p>
          </div>
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
