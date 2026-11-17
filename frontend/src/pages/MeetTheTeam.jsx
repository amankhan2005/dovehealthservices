import { teamMembers, carePhilosophy } from "../data/teamData";
import { Award, Heart, Users } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import ArrowIcon from "../components/ui/ArrowIcon";

const TEAM_CSS = `
  .team-philosophy-head { max-width: 760px; margin: 0 auto clamp(40px, 5vw, 56px); text-align: center; }
  .team-philosophy-head .dh-accent-bar { margin-inline: auto; }
  .team-philosophy-head .dh-lead { margin-top: 18px; }

  .principles-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  @media (min-width: 760px) { .principles-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

  .principle-card { padding: clamp(26px, 3vw, 34px); }
  .principle-card .dh-icon-badge { margin-bottom: 20px; }
  .principle-card p { margin: 10px 0 0; font-size: 15.5px; line-height: 1.7; color: var(--dh-ink-2); }

  .team-section-head { max-width: 720px; margin-bottom: clamp(36px, 5vw, 52px); }
  .team-section-head .dh-lead { margin-top: 14px; }

  .team-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 24px;
  }

  @media (min-width: 700px) { .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1100px) { .team-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

  .team-card { overflow: hidden; display: flex; flex-direction: column; }

  .team-card-img-wrap { position: relative; padding: 10px 10px 0; }

  .team-card-img-wrap img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3.4;
    object-fit: cover;
    border-radius: 20px;
    background: var(--dh-sky-100);
  }

  .team-card-badge {
    position: absolute;
    left: 26px;
    bottom: 16px;
    padding: 7px 12px;
    border-radius: var(--dh-radius-pill);
    background: rgba(255, 255, 255, 0.94);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.04em;
    color: var(--dh-brand);
    box-shadow: var(--dh-shadow-sm);
  }

  .team-card-body { padding: 24px 26px 28px; }

  .team-card-name { font-size: 1.35rem; }

  .team-card-role { margin: 6px 0 18px; font-size: 14.5px; font-weight: 600; color: var(--dh-accent-ink); }

  .team-card-meta-label {
    margin: 14px 0 3px;
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dh-muted);
  }

  .team-card-meta-value { margin: 0; font-size: 14.5px; line-height: 1.55; color: var(--dh-ink); }

  .team-card-bio {
    margin: 18px 0;
    padding: 18px 0;
    border-block: 1px solid var(--dh-line);
    font-size: 14.5px;
    line-height: 1.7;
    color: var(--dh-ink-2);
  }

  .team-card-tags { display: flex; flex-wrap: wrap; gap: 8px; }

  .team-card-tag {
    padding: 6px 11px;
    border-radius: var(--dh-radius-pill);
    background: var(--dh-sky-50);
    font-size: 12.5px;
    font-weight: 500;
    color: var(--dh-brand);
  }
`;

export default function MeetTheTeam() {
  const principleIcons = [Heart, Award, Users];

  return (
    <div className="team-page">
      <style>{TEAM_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb="Dove Health > About" title="Meet our team">
        Experienced, compassionate clinicians dedicated to your recovery
        and well-being.
      </PageHero>

      {/* CARE PHILOSOPHY */}
      <section className="dh-section dh-section--tight">
        <div className="dh-container">
          <div className="team-philosophy-head" data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">{carePhilosophy.title}</h2>
            <p className="dh-lead">{carePhilosophy.description}</p>
          </div>

          <div className="principles-grid">
            {carePhilosophy.principles.map((principle, index) => {
              const Icon = principleIcons[index % 3];
              return (
                <div
                  key={index}
                  className="dh-card dh-card--hover principle-card"
                  data-reveal
                  style={{ "--dh-reveal-delay": `${index * 90}ms` }}
                >
                  <span
                    className={`dh-icon-badge${index % 2 === 0 ? "" : " dh-icon-badge--warm"}`}
                    aria-hidden="true"
                  >
                    <Icon size={20} />
                  </span>
                  <h3 className="dh-h3">{principle.title}</h3>
                  <p>{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="dh-section dh-section--sand">
        <div className="dh-container">
          <div className="team-section-head" data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">Our clinical team</h2>
            <p className="dh-lead">Skilled professionals committed to your journey toward recovery and wellness.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="dh-card team-card">
                <div className="team-card-img-wrap">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 400'%3E%3Crect fill='%23436585' width='400' height='400'/%3E%3Ccircle cx='200' cy='120' r='60' fill='%23fff'/%3E%3Cpath d='M400 320c0-66.3-89.8-120-200-120S0 253.7 0 320v80h400z' fill='%23fff' opacity='0.3'/%3E%3C/svg%3E";
                    }}
                  />
                  <span className="team-card-badge">
                    {member.role.split(" ").slice(-1)[0]}
                  </span>
                </div>

                <div className="team-card-body">
                  <h3 className="dh-h3 team-card-name">{member.name}</h3>
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
      <CtaBand
        title="Ready to start your journey?"
        text="Our experienced team is ready to support you with compassionate, evidence-based care."
      >
        <a href="/book-appointment" className="dh-btn dh-btn--light">
          Book your appointment today
          <ArrowIcon />
        </a>
      </CtaBand>
    </div>
  );
}
