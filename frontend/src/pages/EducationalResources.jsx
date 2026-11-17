import { useState } from "react";
import { resourceCategories, resources, crisisResources } from "../data/resourcesData";
import {
  ChevronDown,
  AlertCircle,
  Phone,
  MessageCircle,
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
  .res-crisis { padding: clamp(28px, 4vw, 44px) 0 0; }

  .res-crisis-inner {
    display: flex;
    align-items: flex-start;
    gap: 18px;
    padding: 22px clamp(20px, 3vw, 28px);
    border: 1px solid rgba(180, 35, 24, 0.18);
    border-radius: 22px;
    background: var(--dh-crisis-50);
  }

  .res-crisis-icon {
    width: 46px;
    height: 46px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: var(--dh-crisis);
    color: #fff;
  }

  .res-crisis-body { flex: 1; min-width: 0; }

  .res-crisis-body h3 {
    margin: 2px 0 14px;
    font-size: 17px;
    font-weight: 700;
    color: var(--dh-crisis-700);
  }

  .res-crisis-links { display: flex; flex-wrap: wrap; gap: 8px; }

  .res-crisis-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    min-height: 42px;
    padding: 0 16px;
    border-radius: var(--dh-radius-pill);
    background: #fff;
    box-shadow: inset 0 0 0 1px rgba(180, 35, 24, 0.25);
    font-size: 14px;
    font-weight: 600;
    color: var(--dh-crisis-700);
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
  }

  .res-crisis-link:hover,
  .res-crisis-link.primary { background: var(--dh-crisis); color: #fff; box-shadow: none; }
  .res-crisis-link.primary:hover { background: var(--dh-crisis-700); }

  .res-categories { padding: clamp(40px, 5vw, 64px) 0 0; }

  .res-categories-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 14px;
  }

  @media (min-width: 640px) { .res-categories-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
  @media (min-width: 1100px) { .res-categories-grid { grid-template-columns: repeat(5, minmax(0, 1fr)); } }

  .res-category-btn {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    padding: 22px;
    border: 1.5px solid var(--dh-line);
    border-radius: 22px;
    background: #fff;
    font-family: var(--dh-font-sans);
    text-align: left;
    cursor: pointer;
    transition: border-color 0.25s, box-shadow 0.3s var(--dh-ease), transform 0.3s var(--dh-ease), background-color 0.25s;
  }

  .res-category-btn:hover { transform: translateY(-2px); box-shadow: var(--dh-shadow-sm); border-color: var(--dh-sky-200); }

  .res-category-btn.active {
    border-color: var(--dh-brand);
    background: var(--dh-sky-50);
    box-shadow: 0 0 0 4px rgba(11, 64, 119, 0.08);
  }

  .res-category-icon {
    width: 42px;
    height: 42px;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: var(--dh-sky-50);
    color: var(--dh-brand);
    transition: background-color 0.25s, color 0.25s;
  }

  .res-category-btn.active .res-category-icon { background: var(--dh-brand); color: #fff; }

  .res-category-btn h3 {
    margin: 4px 0 0;
    font-family: var(--dh-font-display);
    font-size: 1.08rem;
    font-weight: 500;
    line-height: 1.3;
    color: var(--dh-ink);
  }

  .res-category-btn p { margin: 0; font-size: 13.5px; line-height: 1.6; color: var(--dh-muted); }

  .res-content { padding: clamp(56px, 7vw, 96px) 0 clamp(24px, 4vw, 48px); }

  .res-content-head { margin-bottom: 36px; }
  .res-content-head .dh-lead { margin-top: 14px; }

  .res-list { display: grid; gap: 12px; }

  .res-item {
    overflow: hidden;
    border: 1px solid var(--dh-line);
    border-radius: 20px;
    background: #fff;
    transition: box-shadow 0.3s var(--dh-ease), border-color 0.3s;
  }

  .res-item.is-open { border-color: transparent; box-shadow: var(--dh-shadow-md); }

  .res-item-trigger {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 22px clamp(18px, 3vw, 28px);
    border: 0;
    background: transparent;
    font-family: var(--dh-font-sans);
    text-align: left;
    cursor: pointer;
  }

  .res-item-trigger h3 {
    margin: 0 0 4px;
    font-family: var(--dh-font-display);
    font-size: 1.2rem;
    font-weight: 500;
    color: var(--dh-ink);
  }

  .res-item-trigger p { margin: 0; font-size: 14.5px; line-height: 1.6; color: var(--dh-muted); }

  .res-item-chevron {
    width: 38px;
    height: 38px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--dh-sky-50);
    color: var(--dh-brand);
    transition: background-color 0.25s, color 0.25s;
  }

  .res-item-chevron svg { transition: transform 0.3s var(--dh-ease); }
  .res-item-chevron svg.open { transform: rotate(180deg); }
  .res-item.is-open .res-item-chevron { background: var(--dh-brand); color: #fff; }

  .res-item-body {
    margin: 0 clamp(18px, 3vw, 28px) 24px;
    padding: 22px 0 0;
    border-top: 1px solid var(--dh-line);
    font-size: 15.5px;
    line-height: 1.8;
    color: var(--dh-ink-2);
    white-space: pre-wrap;
    animation: res-open 0.35s var(--dh-ease);
  }

  @keyframes res-open {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: none; }
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

      {/* CRISIS BANNER */}
      <section className="res-crisis">
        <div className="dh-container">
          <div className="res-crisis-inner">
            <span className="res-crisis-icon" aria-hidden="true">
              <AlertCircle size={22} />
            </span>
            <div className="res-crisis-body">
              <h3>In crisis? Get help now.</h3>
              <div className="res-crisis-links">
                <a href="tel:988" className="res-crisis-link primary">
                  <Phone size={16} />
                  Call 988 (24/7)
                </a>
                <a href="sms:988" className="res-crisis-link">
                  <MessageCircle size={16} />
                  Text 988 (24/7)
                </a>
                <Link to="/book-appointment" className="res-crisis-link">
                  <Users size={16} />
                  Contact Dove Health
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="res-categories">
        <div className="dh-container">
          <div className="res-categories-grid">
            {resourceCategories.map((cat) => {
              const Icon = categoryIconMap[cat.id] || BookOpen;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`res-category-btn ${isActive ? "active" : ""}`}
                  aria-pressed={isActive}
                >
                  <div className="res-category-icon">
                    <Icon size={20} />
                  </div>
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* RESOURCES CONTENT */}
      <section className="res-content">
        <div className="dh-container dh-container--narrow">
          <div className="res-content-head">
            <span className="dh-accent-bar" aria-hidden="true" />
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
                      <ChevronDown size={20} className={isOpen ? "open" : ""} />
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
