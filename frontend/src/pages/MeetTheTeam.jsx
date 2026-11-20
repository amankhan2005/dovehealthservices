import { useState } from "react";
import { teamMembers, carePhilosophy } from "../data/teamData";
import { Award, Heart, Users } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import ArrowIcon from "../components/ui/ArrowIcon";

const TEAM_CSS = `
  .team-philosophy { align-items: start; }
  .team-philosophy .dh-lead { margin-top: 22px; }

  .team-principles { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--dh-ink); }

  .team-principle {
    display: grid;
    grid-template-columns: 40px minmax(0, 1fr);
    gap: 4px 16px;
    padding: 24px 0;
    border-bottom: 1px solid var(--dh-line-strong);
  }

  .team-principle svg { grid-row: span 2; color: var(--dh-dove); margin-top: 2px; }
  .team-principle p { margin: 0; font-size: 16px; line-height: 1.65; color: var(--dh-ink-2); }

  .team-section-head { margin-bottom: clamp(40px, 5vw, 64px); align-items: end; }

  .team-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 56px clamp(24px, 3vw, 40px);
  }

  @media (min-width: 700px) { .team-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1100px) { .team-grid { grid-template-columns: repeat(3, minmax(0, 1fr)); } }

  .team-portrait {
    position: relative;
    margin: 0 0 22px;
    aspect-ratio: 4 / 5;
    overflow: hidden;
    border-radius: var(--dh-radius-sm);
    background: var(--dh-paper-2);
  }

  .team-portrait img { display: block; width: 100%; height: 100%; object-fit: cover; }

  .team-portrait__monogram {
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
    background: var(--dh-night);
    font-size: clamp(3rem, 2rem + 3vw, 4.5rem);
    font-weight: 600;
    letter-spacing: -0.02em;
    color: #9fbad6;
  }

  .team-card-badge {
    position: absolute;
    left: 0;
    bottom: 0;
    padding: 8px 14px;
    background: #fff;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--dh-ink);
  }

  .team-card-name { font-size: 1.3rem; }

  .team-card-role { margin: 6px 0 0; font-size: 15px; font-weight: 500; color: var(--dh-brand); }

  .team-card-meta {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    margin: 20px 0 0;
    padding: 18px 0;
    border-top: 1px solid var(--dh-line);
    border-bottom: 1px solid var(--dh-line);
  }

  .team-card-meta-label {
    margin: 0 0 3px;
    font-size: 11.5px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dh-muted);
  }

  .team-card-meta-value { margin: 0; font-size: 14.5px; line-height: 1.5; color: var(--dh-ink); }

  .team-card-bio { margin: 18px 0; font-size: 15px; line-height: 1.7; color: var(--dh-ink-2); }

  .team-card-tags { display: flex; flex-wrap: wrap; gap: 6px; }

  .team-card-tag {
    padding: 5px 10px;
    border: 1px solid var(--dh-line-strong);
    border-radius: var(--dh-radius-sm);
    font-size: 12.5px;
    font-weight: 500;
    color: var(--dh-ink-2);
  }
`;

// Initials shown when a clinician photo is not available yet.
const initials = (name) =>
  name
    .split(",")[0]
    .replace(/^(Dr\.?|Mr\.?|Ms\.?|Mrs\.?)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function TeamPortrait({ member }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="team-portrait">
      {failed ? (
        <span className="team-portrait__monogram" role="img" aria-label={member.name}>
          {initials(member.name)}
        </span>
      ) : (
        <img src={member.image} alt={member.name} loading="lazy" onError={() => setFailed(true)} />
      )}
      <span className="team-card-badge">{member.role.split(" ").slice(-1)[0]}</span>
    </div>
  );
}

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
      <section className="dh-section">
        <div className="dh-container dh-grid team-philosophy">
          <div className="dh-col-5" data-reveal>
            <h2 className="dh-h2">{carePhilosophy.title}</h2>
            <p className="dh-lead">{carePhilosophy.description}</p>
          </div>

          <ul className="dh-col-6 dh-col-start-7 team-principles">
            {carePhilosophy.principles.map((principle, index) => {
              const Icon = principleIcons[index % 3];
              return (
                <li
                  key={index}
                  className="team-principle"
                  data-reveal
                  style={{ "--dh-reveal-delay": `${index * 70}ms` }}
                >
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="dh-h3">{principle.title}</h3>
                  <p>{principle.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* TEAM MEMBERS */}
      <section className="dh-section dh-section--paper">
        <div className="dh-container">
          <div className="dh-grid team-section-head" data-reveal>
            <h2 className="dh-h2 dh-col-6">Our clinical team</h2>
            <p className="dh-lead dh-col-5 dh-col-start-8">Skilled professionals committed to your journey toward recovery and wellness.</p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member) => (
              <article key={member.id} className="team-card" data-reveal>
                <TeamPortrait member={member} />

                <h3 className="dh-h3 team-card-name">{member.name}</h3>
                <p className="team-card-role">{member.role}</p>

                <div className="team-card-meta">
                  <div>
                    <p className="team-card-meta-label">Qualifications</p>
                    <p className="team-card-meta-value">{member.qualifications}</p>
                  </div>
                  <div>
                    <p className="team-card-meta-label">Experience</p>
                    <p className="team-card-meta-value">{member.experience}</p>
                  </div>
                </div>

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
              </article>
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
