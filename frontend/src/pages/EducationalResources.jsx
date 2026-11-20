import { useState } from "react";
import { resourceCategories, resources } from "../data/resourcesData";
import {
  ChevronDown,
  Users,
  ClipboardList,
  ShieldAlert,
  Wind,
  BookOpen,
  Brain,
  HeartPulse,
  LifeBuoy,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import CtaBand from "../components/ui/CtaBand";
import ArrowIcon from "../components/ui/ArrowIcon";

const categoryIconMap = {
  conditions: Brain,
  warning_signs: ShieldAlert,
  recovery: HeartPulse,
  support: LifeBuoy,
  treatment: Stethoscope,
  symptoms: ShieldAlert,
  prevention: LifeBuoy,
  struggling: Users,
};

const RESOURCES_CSS = `
  .res-layout { align-items: start; }

  .res-nav { position: sticky; top: calc(var(--dh-header-h) + 32px); }

  .res-nav__list { margin: 0; padding: 0; list-style: none; border-top: 1px solid var(--dh-ink); }
  .res-nav__list li { border-bottom: 1px solid var(--dh-line); }

  .res-category-btn {
    display: grid;
    grid-template-columns: 22px minmax(0, 1fr);
    gap: 4px 14px;
    width: 100%;
    padding: 18px 12px 18px 14px;
    border: 0;
    border-left: 2px solid transparent;
    background: transparent;
    font-family: var(--dh-font-sans);
    text-align: left;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
  }

  .res-category-btn:hover { background: var(--dh-paper); }

  .res-category-btn.active { border-left-color: var(--dh-brand); background: var(--dh-paper); }

  .res-category-icon { grid-row: span 2; padding-top: 1px; color: var(--dh-dove); }
  .res-category-btn.active .res-category-icon { color: var(--dh-brand); }

  .res-category-btn h3 {
    margin: 0;
    font-size: 15.5px;
    font-weight: 600;
    line-height: 1.4;
    color: var(--dh-ink);
  }

  .res-category-btn p { margin: 0; font-size: 13.5px; line-height: 1.55; color: var(--dh-muted); }

  .res-content-head { margin-bottom: 32px; }
  .res-content-head .dh-lead { margin-top: 14px; }

  .res-list { border-top: 1px solid var(--dh-line-strong); }
  .res-item { border-bottom: 1px solid var(--dh-line); }

  .res-item-trigger {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
    padding: 24px 0;
    border: 0;
    background: transparent;
    font-family: var(--dh-font-sans);
    text-align: left;
    cursor: pointer;
  }

  .res-item-trigger h3 {
    margin: 0 0 6px;
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: -0.012em;
    color: var(--dh-ink);
    transition: color 0.2s;
  }

  .res-item-trigger:hover h3 { color: var(--dh-brand); }

  .res-item-trigger p { margin: 0; font-size: 15px; line-height: 1.6; color: var(--dh-muted); }

  .res-item-chevron {
    flex-shrink: 0;
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border: 1px solid var(--dh-line-strong);
    border-radius: 50%;
    color: var(--dh-ink);
    transition: background-color 0.2s, border-color 0.2s, color 0.2s;
  }

  .res-item-chevron svg { transition: transform 0.3s var(--dh-ease); }
  .res-item-chevron svg.open { transform: rotate(180deg); }
  .res-item.is-open .res-item-chevron { background: var(--dh-ink); border-color: var(--dh-ink); color: #fff; }

  .res-item-body {
    max-width: 68ch;
    padding: 0 0 30px;
    font-size: 16px;
    line-height: 1.8;
    color: var(--dh-ink-2);
    white-space: pre-wrap;
    animation: res-open 0.3s var(--dh-ease);
  }

  @keyframes res-open {
    from { opacity: 0; transform: translateY(-4px); }
    to { opacity: 1; transform: none; }
  }

  @media (max-width: 959px) {
    .res-nav { position: static; }
  }
`;

export default function EducationalResources() {
  const [selectedCategory, setSelectedCategory] = useState("conditions");
  const [expandedResource, setExpandedResource] = useState(null);

  const filteredResources = resources.filter((r) => r.category === selectedCategory);
  const category = resourceCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="resources-page">
      <style>{RESOURCES_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb="Dove Health > Resources" title="Educational resources">
        Learn about mental health conditions, recognize warning signs, and
        discover recovery strategies.
      </PageHero>

      <section className="dh-section">
        <div className="dh-container dh-grid res-layout">
          {/* CATEGORIES */}
          <nav className="dh-col-4 res-nav" aria-label="Resource categories">
            <ul className="res-nav__list">
              {resourceCategories.map((cat) => {
                const Icon = categoryIconMap[cat.id] || BookOpen;
                const isActive = selectedCategory === cat.id;
                return (
                  <li key={cat.id}>
                    <button
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`res-category-btn ${isActive ? "active" : ""}`}
                      aria-pressed={isActive}
                    >
                      <div className="res-category-icon" aria-hidden="true">
                        <Icon size={20} strokeWidth={1.75} />
                      </div>
                      <h3>{cat.name}</h3>
                      <p>{cat.description}</p>
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* RESOURCES CONTENT */}
          <div className="dh-col-8">
            <div className="res-content-head">
              <h2 className="dh-h2">{category?.name}</h2>
              <p className="dh-lead">{category?.description}</p>
            </div>

            <div className="res-list">
              {filteredResources.map((resource) => {
                const isOpen = expandedResource === resource.id;
                return (
                  <div key={resource.id} className={`res-item${isOpen ? " is-open" : ""}`}>
                    <button
                      onClick={() => setExpandedResource(isOpen ? null : resource.id)}
                      className="res-item-trigger"
                      aria-expanded={isOpen}
                    >
                      <div>
                        <h3>{resource.title}</h3>
                        <p>{resource.description}</p>
                      </div>
                      <span className="res-item-chevron" aria-hidden="true">
                        <ChevronDown size={18} className={isOpen ? "open" : ""} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="res-item-body">{resource.content}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* DOWNLOADABLE GUIDES */}
      {/* <section className="res-guides">
        <div className="res-guides-inner">
          <h2>More resources</h2>
          <p>Additional materials to support your mental health journey.</p>

          <div className="res-guides-grid">
            <div className="res-guide-card">
              <div className="res-guide-icon">
                <ClipboardList size={22} />
              </div>
              <h3>Self-care checklist</h3>
              <p>A daily guide for maintaining your mental and physical wellness.</p>
              <a href="#" className="res-guide-link">
                Download
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="res-guide-card">
              <div className="res-guide-icon">
                <ShieldAlert size={22} />
              </div>
              <h3>Crisis action plan</h3>
              <p>Create your personalized plan for when you're in crisis.</p>
              <a href="#" className="res-guide-link">
                Download
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="res-guide-card">
              <div className="res-guide-icon">
                <Wind size={22} />
              </div>
              <h3>Mindfulness guide</h3>
              <p>Simple mindfulness and meditation techniques for daily practice.</p>
              <a href="#" className="res-guide-link">
                Download
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA SECTION */}
      <CtaBand
        title="Ready for professional support?"
        text="These resources are educational. For personalized treatment and support, our experienced team is here to help."
      >
        <Link to="/book-appointment" className="dh-btn dh-btn--light">
          Book appointment
          <ArrowIcon />
        </Link>
        <Link to="/meet-the-team" className="dh-btn dh-btn--outline-light">
          Meet our team
        </Link>
      </CtaBand>
    </div>
  );
}
