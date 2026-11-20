import whyImg from "../../assets/whyus.jpg";

const WHYUS_CSS = `
  .home-why__grid { align-items: center; }

  .home-why__figure img { --dh-ratio: 4 / 5; --dh-focus: 38% 40%; }

  @media (min-width: 960px) and (max-width: 1199px) {
    .home-why__figure img { --dh-ratio: 3 / 4; }
  }

  @media (max-width: 959px) {
    .home-why__figure img { --dh-ratio: 3 / 2; --dh-focus: 40% 35%; }
  }

  .home-why__intro {
    margin: 24px 0 0;
    font-size: clamp(1.05rem, 1rem + 0.25vw, 1.18rem);
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.78);
  }

  .home-why__list {
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid rgba(255, 255, 255, 0.18);
  }

  .home-why__item {
    display: grid;
    grid-template-columns: 44px minmax(0, 1fr);
    align-items: baseline;
    padding: 20px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.18);
  }

  .home-why__item .dh-index { color: var(--dh-accent-soft); }

  .home-why__item p {
    margin: 0;
    font-size: 17px;
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

      <div className="dh-container dh-grid home-why__grid">
        <figure className="dh-figure dh-col-5 home-why__figure" data-reveal>
          <img src={whyImg} alt="Mental health therapy consultation" loading="lazy" decoding="async" />
          <figcaption>Confidential & licensed care</figcaption>
        </figure>

        <div className="dh-col-6 dh-col-start-7" data-reveal style={{ "--dh-reveal-delay": "100ms" }}>
          <span className="dh-kicker">Why Choose Us</span>
          <h2 className="dh-h2">
            Excellence in Mental Wellness & Recovery Support
          </h2>
          <p className="home-why__intro">
            We combine clinical expertise with compassionate care to deliver
            comprehensive mental health services designed for long-term
            recovery, emotional resilience, and personal empowerment.
          </p>

          <ol className="home-why__list">
            {points.map((item, index) => (
              <li key={index} className="home-why__item">
                <span className="dh-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{item}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
