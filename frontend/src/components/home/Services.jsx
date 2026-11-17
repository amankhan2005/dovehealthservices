import { Link } from "react-router-dom";

import omhcImg from "../../assets/services/omhc.jpg";
import prpImg from "../../assets/services/prp.jpg";
import familyImg from "../../assets/services/family.jpg";
import personalImg from "../../assets/about/therapy4.jpg";
import ArrowIcon from "../ui/ArrowIcon";

const SERVICES_CSS = `
  .home-services__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 22px;
  }

  @media (min-width: 680px) { .home-services__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1200px) { .home-services__grid { grid-template-columns: repeat(4, minmax(0, 1fr)); } }

  .home-service {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 26px;
  }

  .home-service__media {
    overflow: hidden;
    border-radius: 18px;
    background: var(--dh-sand-100);
  }

  .home-service__media img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    transition: transform 0.7s var(--dh-ease);
  }

  .home-service:hover .home-service__media img { transform: scale(1.05); }

  .home-service__body {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 0 16px 16px;
  }

  .home-service__icon {
    position: relative;
    z-index: 1;
    margin: -26px 0 18px;
    width: 52px;
    height: 52px;
    display: grid;
    place-items: center;
    border-radius: 16px;
    border: 4px solid #fff;
    background: var(--dh-brand);
    color: #fff;
    box-shadow: var(--dh-shadow-sm);
  }

  .home-service.accent-peach .home-service__icon { background: var(--dh-accent); }

  .home-service__title { font-size: 1.28rem; }

  .home-service__desc {
    margin: 12px 0 22px;
    font-size: 15px;
    line-height: 1.7;
    color: var(--dh-ink-2);
  }

  .home-service__link { margin-top: auto; align-self: flex-start; }

  /* Make the whole card clickable while keeping a single link */
  .home-service__stretch { position: absolute; inset: 0; border-radius: 26px; }
  .home-service { cursor: pointer; }
`;

export default function Services() {
  const services = [
    {
      title: "Outpatient Mental Health Clinic (OMHC)",
      desc: "Comprehensive therapy and psychiatric services for adults and children focused on long-term emotional stability, structured treatment planning, and holistic mental health recovery support.",
      img: omhcImg,
      link: "/services/omhc",
      accent: "blue",
      icon: (
        <path
          d="M12 21s-7-4.5-9.5-9C.5 8 2 4 6 4c2 0 3.5 1.2 4 2.5C10.5 5.2 12 4 14 4c4 0 5.5 4 3.5 8-2.5 4.5-9.5 9-9.5 9Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "Psychiatric Rehabilitation Program (PRP)",
      desc: "Structured rehabilitation services designed to build life skills, enhance independence, improve coping mechanisms, and promote sustainable personal development in daily living.",
      img: prpImg,
      link: "/services/prp",
      accent: "peach",
      icon: (
        <path
          d="M4 19V9l8-5 8 5v10M4 19h16M9 19v-6h6v6"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      ),
    },
    {
      title: "Family Counseling",
      desc: "Guided therapeutic sessions that strengthen communication, resolve interpersonal conflicts, rebuild trust, and restore emotional harmony within families.",
      img: familyImg,
      link: "/services/family-counselling",
      accent: "blue",
      icon: (
        <path
          d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 20c0-3 2.7-5 6-5s6 2 6 5M12 20c.3-2.7 2.7-4.6 5.5-4.6 2.5 0 4.6 1.6 5 4"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ),
    },
    {
      title: "Personal Counseling",
      desc: "Individualized therapy sessions tailored to emotional well-being, resilience building, trauma recovery, and long-term personal growth strategies.",
      img: personalImg,
      link: "/services/personal-counselling",
      accent: "peach",
      icon: (
        <path
          d="M12 3v3M12 18v3M5 12H3M21 12h-2M6.3 6.3 4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      ),
    },
  ];

  return (
    <section className="dh-section dh-section--sand">
      <style>{SERVICES_CSS}</style>

      <div className="dh-container">
        <div className="dh-section-head" data-reveal>
          <span className="dh-eyebrow dh-eyebrow--center">Our Services</span>
          <h2 className="dh-h2">
            Specialist Mental Health Consultation Services
          </h2>
          <p className="dh-lead">
            Comprehensive behavioral healthcare designed to promote recovery,
            emotional resilience, and long-term personal growth.
          </p>
        </div>

        <div className="home-services__grid">
          {services.map((service, i) => (
            <article
              key={service.title}
              className={`dh-card dh-card--hover home-service accent-${service.accent}`}
              data-reveal
              style={{ "--dh-reveal-delay": `${i * 80}ms` }}
            >
              <div className="home-service__media">
                <img src={service.img} alt={service.title} loading="lazy" decoding="async" />
              </div>
              <div className="home-service__body">
                <div className="home-service__icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    {service.icon}
                  </svg>
                </div>
                <h3 className="dh-h3 home-service__title">{service.title}</h3>
                <p className="home-service__desc">{service.desc}</p>
                <Link to={service.link} className="dh-link home-service__link">
                  Read More
                  <ArrowIcon />
                  <span className="home-service__stretch" aria-hidden="true" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
