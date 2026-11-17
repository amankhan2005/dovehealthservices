import { Check, ShieldCheck } from "lucide-react";
import ArrowIcon from "../ui/ArrowIcon";
import aboutImg from "../../assets/about.jpg";

const ABOUT_CSS = `
  .home-about__media { max-width: 500px; margin: 0 auto; width: 100%; }
  .home-about__media img { --dh-ratio: 4 / 5; }

  .home-about__body { margin-top: 22px; }

  .home-about__credentials {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 30px;
  }

  .home-about__credentials .dh-chip svg { color: var(--dh-accent); }

  .home-about__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 18px 26px;
    margin-top: 38px;
    padding-top: 30px;
    border-top: 1px solid var(--dh-line);
  }

  .home-about__trust {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 500;
    color: var(--dh-muted);
  }

  .home-about__trust svg { color: var(--dh-brand); flex-shrink: 0; }
`;

export default function About() {
  const credentials = [
    { label: "OMHC" },
    { label: "PRP" },
    { label: "DUI Education" },
  ];

  return (
    <section className="dh-section">
      <style>{ABOUT_CSS}</style>

      <div className="dh-container dh-split">
        {/* IMAGE */}
        <div className="dh-media dh-media--left home-about__media" data-reveal>
          <img
            src={aboutImg}
            alt="Professional mental health consultation at Dove Health"
            loading="lazy"
            decoding="async"
          />
          <div className="dh-float-label">
            <span className="dot" />
            <span>Person-centered care</span>
          </div>
        </div>

        {/* CONTENT */}
        <div data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
          <span className="dh-eyebrow">About Dove Health</span>
          <h2 className="dh-h2">
            Dedicated to mental wellness, <em>recovery</em> & lifelong support
          </h2>
          <p className="dh-lead home-about__body">
            Dove Health is a certified outpatient mental health clinic in
            Maryland providing comprehensive OMHC services,
            Psychiatric Rehabilitation Programs, DUI education, and
            behavioral health support. Our evidence-based approach focuses on
            personalized care, long-term recovery, and empowering individuals
            to live stable and meaningful lives.
          </p>

          <div className="home-about__credentials">
            {credentials.map((c) => (
              <span key={c.label} className="dh-chip">
                <Check size={15} strokeWidth={2.5} aria-hidden="true" />
                {c.label}
              </span>
            ))}
          </div>

          <div className="home-about__cta-row">
            <a href="/about-us" className="dh-btn dh-btn--secondary">
              Learn More
              <ArrowIcon />
            </a>
            <span className="home-about__trust">
              <ShieldCheck size={18} aria-hidden="true" />
              Licensed Maryland behavioral health provider
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
