import { Check, ShieldCheck } from "lucide-react";
import ArrowIcon from "../ui/ArrowIcon";
import aboutImg from "../../assets/about.jpg";

const ABOUT_CSS = `
  .home-about__grid { align-items: center; }

  .home-about__figure { max-width: 440px; }
  .home-about__figure img { --dh-ratio: 4 / 5; --dh-focus: 50% 30%; }
  @media (max-width: 959px) { .home-about__figure img { --dh-ratio: 4 / 3.6; } }

  .home-about__body { margin-top: 26px; }

  .home-about__credentials {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    margin: 36px 0 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--dh-line);
    border-bottom: 1px solid var(--dh-line);
  }

  .home-about__credentials li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 18px 12px 18px 0;
    font-size: 15px;
    font-weight: 600;
    color: var(--dh-ink);
  }

  .home-about__credentials li + li { padding-left: 18px; border-left: 1px solid var(--dh-line); }
  .home-about__credentials svg { color: var(--dh-brand); flex-shrink: 0; }

  .home-about__foot {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 16px 28px;
    margin-top: 30px;
  }

  .home-about__trust {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: var(--dh-muted);
  }

  .home-about__trust svg { color: var(--dh-dove); flex-shrink: 0; }

  @media (max-width: 520px) {
    .home-about__credentials { grid-template-columns: minmax(0, 1fr); }
    .home-about__credentials li + li { padding-left: 0; border-left: 0; border-top: 1px solid var(--dh-line); }
  }
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

      <div className="dh-container dh-grid home-about__grid">
        {/* IMAGE */}
        <figure className="dh-figure dh-col-5 home-about__figure" data-reveal>
          <img
            src={aboutImg}
            alt="Professional mental health consultation at Dove Health"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Person-centered care</figcaption>
        </figure>

        {/* CONTENT */}
        <div className="dh-col-6 dh-col-start-7" data-reveal style={{ "--dh-reveal-delay": "100ms" }}>
          <span className="dh-kicker">About Dove Health</span>
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

          <ul className="home-about__credentials">
            {credentials.map((c) => (
              <li key={c.label}>
                <Check size={16} strokeWidth={2.4} aria-hidden="true" />
                {c.label}
              </li>
            ))}
          </ul>

          <div className="home-about__foot">
            <a href="/about-us" className="dh-link">
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
