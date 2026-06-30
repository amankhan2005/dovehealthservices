import { Link } from "react-router-dom";

import omhcImg from "../../assets/services/omhc.jpg";
import prpImg from "../../assets/services/prp.jpg";
import familyImg from "../../assets/services/family.jpg";
import personalImg from "../../assets/services/personal.jpeg";

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
    <section className="services-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .services-section {
          --navy: #1C2B3A;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: var(--paper);
          padding: 96px 0;
        }

        .services-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .services-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach-deep);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .services-eyebrow::before,
        .services-eyebrow::after {
          content: "";
          width: 24px;
          height: 2px;
          background: var(--peach);
          display: inline-block;
        }

        .services-heading {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(2rem, 1.4rem + 2.4vw, 3.2rem);
          line-height: 1.15;
          margin-top: 20px;
        }

        .services-sub {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          line-height: 1.7;
          color: #51606E;
          max-width: 560px;
          margin: 20px auto 0;
        }

        .services-grid {
          margin-top: 64px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 28px;
          text-align: left;
        }

        @media (max-width: 1100px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .services-grid { grid-template-columns: 1fr; }
        }

        .service-card {
          background: #fff;
          border-radius: 24px;
          padding: 16px 16px 28px;
          display: flex;
          flex-direction: column;
          border: 1px solid #EFEAE5;
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -20px rgba(28, 43, 58, 0.18);
          border-color: transparent;
        }

        .service-img-wrap {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          height: 200px;
        }

        .service-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .service-card:hover .service-img-wrap img {
          transform: scale(1.07);
        }

        .service-icon {
          position: absolute;
          bottom: -18px;
          left: 18px;
          width: 44px;
          height: 44px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #fff;
          box-shadow: 0 8px 20px -6px rgba(28, 43, 58, 0.25);
        }

        .service-card.accent-blue .service-icon { color: var(--blue); }
        .service-card.accent-peach .service-icon { color: var(--peach-deep); }

        .service-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 17px;
          color: var(--navy);
          line-height: 1.35;
          margin: 36px 4px 0;
        }

        .service-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: #65737E;
          margin: 12px 4px 0;
          flex-grow: 1;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .service-link {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          margin: 20px 4px 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          width: fit-content;
          transition: gap 0.25s ease;
        }

        .service-card.accent-blue .service-link { color: var(--blue); }
        .service-card.accent-peach .service-link { color: var(--peach-deep); }

        .service-link:hover { gap: 12px; }

        .service-link .arrow {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
        }

        .service-card.accent-blue .arrow { background: var(--blue); }
        .service-card.accent-peach .arrow { background: var(--peach-deep); }
      `}</style>

      <div className="services-inner">
        <span className="services-eyebrow">Our Services</span>

        <h2 className="services-heading">
          Specialist Mental Health Consultation Services
        </h2>

        <p className="services-sub">
          Comprehensive behavioral healthcare designed to promote recovery,
          emotional resilience, and long-term personal growth.
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.title} className={`service-card accent-${service.accent}`}>
              <div className="service-img-wrap">
                <img src={service.img} alt={service.title} />
                <div className="service-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    {service.icon}
                  </svg>
                </div>
              </div>

              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>

              <Link to={service.link} className="service-link">
                Read More
                <span className="arrow">→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}