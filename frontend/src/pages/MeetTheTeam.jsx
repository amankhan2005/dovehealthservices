import { teamMembers, carePhilosophy } from "../data/teamData";
import { Award, Heart, Users } from "lucide-react";

export default function MeetTheTeam() {
  const principleIcons = [Heart, Award, Users];

  return (
    <div className="team-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .team-page {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: var(--paper);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .team-page h1, .team-page h2, .team-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .team-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .team-header-glow {
          position: absolute;
          top: -140px;
          right: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--peach);
          opacity: 0.12;
          filter: blur(100px);
        }

        .team-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .team-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .team-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem);
          line-height: 1.15;
          margin: 0;
        }

        .team-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .team-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .team-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .team-header-sub {
          margin-top: 24px;
          max-width: 560px;
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }

        /* ── PHILOSOPHY ── */
        .philosophy-section {
          padding: 96px 0;
          background: var(--blue-tint);
        }

        .philosophy-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .philosophy-head {
          text-align: center;
          margin-bottom: 64px;
        }

        .philosophy-head h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.9rem, 1.4rem + 2vw, 2.8rem);
          margin: 0 0 18px;
        }

        .philosophy-head p {
          max-width: 640px;
          margin: 0 auto;
          font-size: 16.5px;
          line-height: 1.75;
          color: #51606E;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (max-width: 900px) {
          .principles-grid { grid-template-columns: 1fr; }
        }

        .principle-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid #EFEAE5;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .principle-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 44px -20px rgba(22, 49, 79, 0.18);
        }

        .principle-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 18px;
        }

        .principle-card.accent-blue .principle-icon {
          background: var(--blue-tint);
          color: var(--blue);
        }

        .principle-card.accent-peach .principle-icon {
          background: var(--peach-tint);
          color: var(--peach-deep);
        }

        .principle-card h3 {
          font-weight: 700;
          font-size: 17px;
          color: var(--navy);
          margin: 0 0 12px;
        }

        .principle-card p {
          font-size: 14.5px;
          line-height: 1.7;
          color: #5F6E7A;
          margin: 0;
        }

        /* ── TEAM ── */
        .team-section {
          padding: 96px 0;
        }

        .team-section-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .team-section-head {
          text-align: center;
          margin-bottom: 64px;
        }

        .team-section-head h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.9rem, 1.4rem + 2vw, 2.8rem);
          margin: 0 0 16px;
        }

        .team-section-head p {
          font-size: 16.5px;
          color: #51606E;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }

        @media (max-width: 980px) {
          .team-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .team-grid { grid-template-columns: 1fr; }
        }

        .team-card {
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid #EFEAE5;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 48px -22px rgba(22, 49, 79, 0.2);
        }

        .team-card-img-wrap {
          position: relative;
          height: 240px;
          background: var(--blue-tint);
          overflow: hidden;
        }

        .team-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .team-card:hover .team-card-img-wrap img {
          transform: scale(1.06);
        }

        .team-card-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          background: var(--peach);
          color: #fff;
          font-size: 12.5px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 100px;
        }

        .team-card-body {
          padding: 28px;
        }

        .team-card-name {
          font-weight: 700;
          font-size: 19px;
          color: var(--navy);
          margin: 0 0 4px;
        }

        .team-card-role {
          font-size: 13.5px;
          font-weight: 600;
          color: var(--peach-deep);
          margin: 0 0 18px;
        }

        .team-card-meta-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9AA6AD;
          margin: 0 0 5px;
        }

        .team-card-meta-value {
          font-size: 14px;
          color: var(--navy);
          font-weight: 500;
          margin: 0 0 16px;
        }

        .team-card-bio {
          font-size: 14px;
          line-height: 1.7;
          color: #5F6E7A;
          margin: 0 0 18px;
        }

        .team-card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .team-card-tag {
          background: var(--blue-tint);
          color: var(--blue);
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 100px;
        }

        /* ── CTA ── */
        .team-cta {
          position: relative;
          padding: 96px 0;
          background: var(--navy-deep);
          text-align: center;
          overflow: hidden;
        }

        .team-cta-glow {
          position: absolute;
          bottom: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 480px;
          height: 320px;
          background: var(--peach);
          opacity: 0.14;
          filter: blur(110px);
          border-radius: 50%;
        }

        .team-cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .team-cta h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.8rem, 1.4rem + 1.6vw, 2.5rem);
          margin: 0 0 16px;
        }

        .team-cta p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 16.5px;
          margin: 0 0 36px;
        }

        .team-cta-link {
          display: inline-flex;
          align-items: center;
          background: var(--peach);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 38px;
          border-radius: 100px;
          text-decoration: none;
          box-shadow: 0 14px 32px -10px rgba(242, 168, 120, 0.5);
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .team-cta-link:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }
      `}</style>

      {/* HEADER */}
      <section className="team-header">
        <div className="team-header-glow" />
        <div className="team-header-inner">
          <p className="team-breadcrumb">Dove Healthcare Services, LLC &gt; About</p>
          <h1 className="team-h1">Meet our team</h1>
          <div className="team-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
          <p className="team-header-sub">
            Experienced, compassionate clinicians dedicated to your recovery
            and well-being.
          </p>
        </div>
      </section>

      {/* CARE PHILOSOPHY */}
      <section className="philosophy-section">
        <div className="philosophy-inner">
          <div className="philosophy-head">
            <h2>{carePhilosophy.title}</h2>
            <p>{carePhilosophy.description}</p>
          </div>

          <div className="principles-grid">
            {carePhilosophy.principles.map((principle, index) => {
              const Icon = principleIcons[index % 3];
              return (
                <div
                  key={index}
                  className={`principle-card accent-${index % 2 === 0 ? "blue" : "peach"}`}
                >
                  <div className="principle-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="team-section">
        <div className="team-section-inner">
          <div className="team-section-head">
            <h2>Our clinical team</h2>
            <p>Skilled professionals committed to your journey toward recovery and wellness.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-card-img-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%232F86C6' width='400' height='400'/%3E%3Ccircle cx='200' cy='120' r='60' fill='%23fff'/%3E%3Cpath d='M400 320c0-66.3-89.8-120-200-120S0 253.7 0 320v80h400z' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E";
                    }}
                  />
                  <span className="team-card-badge">
                    {member.role.split(" ").slice(-1)[0]}
                  </span>
                </div>

                <div className="team-card-body">
                  <h3 className="team-card-name">{member.name}</h3>
                  <p className="team-card-role">{member.role}</p>

                  <p className="team-card-meta-label">Qualifications</p>
                  <p className="team-card-meta-value">{member.qualifications}</p>

                  <p className="team-card-meta-label">Experience</p>
                  <p className="team-card-meta-value">{member.experience}</p>

                  <p className="team-card-bio">{member.bio}</p>

                  <p className="team-card-meta-label" style={{ marginBottom: 10 }}>
                    Areas of expertise
                  </p>
                  <div className="team-card-tags">
                    {member.expertise.map((exp, idx) => (
                      <span key={idx} className="team-card-tag">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="team-cta">
        <div className="team-cta-glow" />
        <div className="team-cta-inner">
          <h2>Ready to start your journey?</h2>
          <p>
            Our experienced team is ready to support you with compassionate,
            evidence-based care.
          </p>
          <a href="/book-appointment" className="team-cta-link">
            Book your appointment today
          </a>
        </div>
      </section>
    </div>
  );
}