import { Check } from "lucide-react";
import whyImg from "../../assets/whyus.jpg";

const WHYUS_CSS = `
  .home-why__head { max-width: 720px; margin-bottom: clamp(44px, 6vw, 72px); }

  .home-why__media { max-width: 560px; width: 100%; margin: 0 auto; }
  .home-why__media::before { background: rgba(255, 255, 255, 0.06); }
  .home-why__media img { --dh-ratio: 5 / 4; }

  .home-why__intro {
    margin: 0 0 30px;
    font-size: clamp(1.05rem, 0.98rem + 0.3vw, 1.2rem);
    line-height: 1.75;
    color: rgba(255, 255, 255, 0.8);
  }

  .home-why__list { list-style: none; margin: 0; padding: 0; }

  .home-why__item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    padding: 20px 0;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }

  .home-why__item:last-child { border-bottom: 1px solid rgba(255, 255, 255, 0.12); }

  .home-why__check {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: rgba(242, 180, 142, 0.16);
    color: var(--dh-accent-soft);
  }

  .home-why__item p {
    margin: 4px 0 0;
    font-size: 16.5px;
    font-weight: 500;
    line-height: 1.5;
    color: #fff;
  }
`;

export default function WhyUs() {
  const points = [
    "Personalized, client-centered recovery planning",
    "Licensed and highly experienced mental health specialists",
    "Evidence-based therapeutic approaches",
    "Safe, confidential and supportive care environment",
  ];

  return (
    <section className="dh-section dh-section--night dh-on-dark">
      <style>{WHYUS_CSS}</style>

      <div className="dh-container">
        <div className="home-why__head" data-reveal>
          <span className="dh-eyebrow">Why Choose Us</span>
          <h2 className="dh-h2">
            Excellence in Mental Wellness & Recovery Support
          </h2>
        </div>

        <div className="dh-split">
          <div className="dh-media home-why__media" data-reveal>
            <img src={whyImg} alt="Mental health therapy consultation" loading="lazy" decoding="async" />
            <div className="dh-float-label">
              <span className="dot" />
              <span>Confidential & licensed care</span>
            </div>
          </div>

          <div data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            <p className="home-why__intro">
              We combine clinical expertise with compassionate care to deliver
              comprehensive mental health services designed for long-term
              recovery, emotional resilience, and personal empowerment.
            </p>

            <ul className="home-why__list">
              {points.map((item, index) => (
                <li key={index} className="home-why__item">
                  <span className="home-why__check" aria-hidden="true">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
