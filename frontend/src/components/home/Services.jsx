import { Link } from "react-router-dom";

import omhcImg from "../../assets/services/omhc.jpg";
import prpImg from "../../assets/services/prp.jpg";
import familyImg from "../../assets/services/family.jpg";
import personalImg from "../../assets/about/therapy4.jpg";
import ArrowIcon from "../ui/ArrowIcon";
import { SERVICE_SUMMARIES } from "../../data/siteInfo";

// Title, description and link come from data/siteInfo.js (shared with the chatbot).
const summary = (key) => {
  const { title, desc, link } = SERVICE_SUMMARIES.find((s) => s.key === key);
  return { title, desc, link };
};

const SERVICES_CSS = `
  .home-services__head { align-items: end; margin-bottom: clamp(40px, 5vw, 64px); }

  .home-services__list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--dh-ink); }

  .home-service {
    display: grid;
    grid-template-columns: 112px minmax(0, 1fr);
    gap: 8px 24px;
    align-items: center;
    padding: 22px 0;
    border-bottom: 1px solid var(--dh-line-strong);
    color: inherit;
    text-decoration: none;
    transition: background-color 0.25s var(--dh-ease);
  }

  .home-service__thumb {
    grid-row: span 3;
    width: 112px;
    aspect-ratio: 4 / 3;
    overflow: hidden;
    border-radius: var(--dh-radius-sm);
    background: var(--dh-paper-2);
  }

  .home-service__thumb img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s var(--dh-ease);
  }

  .home-service__title {
    font-size: clamp(1.15rem, 1.05rem + 0.4vw, 1.4rem);
    font-weight: 600;
    letter-spacing: -0.018em;
    line-height: 1.3;
    color: var(--dh-ink);
    transition: color 0.2s;
  }

  .home-service__desc {
    grid-column: 2;
    margin: 0;
    font-size: 15px;
    line-height: 1.65;
    color: var(--dh-ink-2);
  }

  .home-service__more {
    grid-column: 2;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    justify-self: start;
    font-size: 14.5px;
    font-weight: 600;
    white-space: nowrap;
    color: var(--dh-brand);
  }

  .home-service:hover .home-service__title { color: var(--dh-brand); }
  .home-service:hover .home-service__thumb img { transform: scale(1.05); }
  .home-service .dh-arrow { transition: transform 0.25s var(--dh-ease); }
  .home-service:hover .dh-arrow { transform: translateX(4px); }

  @media (min-width: 960px) {
    .home-service {
      grid-template-columns: 168px minmax(0, 4fr) minmax(0, 5fr) auto;
      gap: 40px;
      padding: 28px 0;
    }

    .home-service__thumb { width: 168px; grid-row: auto; }
    .home-service__desc { grid-column: 3; }
    .home-service__more { grid-column: 4; justify-self: end; }
  }

  @media (max-width: 560px) {
    .home-service { grid-template-columns: 88px minmax(0, 1fr); }
    .home-service__thumb { width: 88px; grid-row: auto; }
    .home-service__desc { grid-column: 1 / -1; }
    .home-service__more { grid-column: 1 / -1; }
  }
`;

export default function Services() {
  const services = [
    { ...summary("omhc"), img: omhcImg },
    { ...summary("prp"), img: prpImg },
    { ...summary("family"), img: familyImg },
    { ...summary("personal"), img: personalImg },
  ];

  return (
    <section className="dh-section dh-section--paper">
      <style>{SERVICES_CSS}</style>

      <div className="dh-container">
        <div className="dh-grid home-services__head" data-reveal>
          <div className="dh-col-7">
            <span className="dh-kicker">Our Services</span>
            <h2 className="dh-h2">
              Specialist Mental Health Consultation Services
            </h2>
          </div>
          <p className="dh-lead dh-col-5">
            Comprehensive behavioral healthcare designed to promote recovery,
            emotional resilience, and long-term personal growth.
          </p>
        </div>

        <ul className="home-services__list">
          {services.map((service, i) => (
            <li key={service.title} data-reveal style={{ "--dh-reveal-delay": `${i * 60}ms` }}>
              <Link to={service.link} className="home-service">
                <span className="home-service__thumb">
                  <img src={service.img} alt={service.title} loading="lazy" decoding="async" />
                </span>
                <h3 className="home-service__title">{service.title}</h3>
                <p className="home-service__desc">{service.desc}</p>
                <span className="home-service__more">
                  Read More
                  <ArrowIcon />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
