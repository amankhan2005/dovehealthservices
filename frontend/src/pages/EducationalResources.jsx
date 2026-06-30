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

const categoryIconMap = {
  conditions: Brain,
  warning_signs: ShieldAlert,
  recovery: HeartPulse,
  support: LifeBuoy,
  treatment: Stethoscope,
};

export default function EducationalResources() {
  const [selectedCategory, setSelectedCategory] = useState("conditions");
  const [expandedResource, setExpandedResource] = useState(null);

  const filteredResources = resources.filter((r) => r.category === selectedCategory);
  const category = resourceCategories.find((c) => c.id === selectedCategory);

  return (
    <div className="resources-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .resources-page {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          --crisis-red: #C8302B;
          --crisis-red-tint: #FBE7E6;
          background: var(--paper);
          overflow: hidden;
          font-family: 'Inter', sans-serif;
        }

        .resources-page h1, .resources-page h2, .resources-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .res-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .res-header-glow {
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

        .res-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .res-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .res-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem);
          line-height: 1.15;
          margin: 0;
        }

        .res-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .res-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .res-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .res-header-sub {
          margin-top: 24px;
          max-width: 560px;
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }

        /* ── CRISIS BANNER ── */
        .res-crisis {
          background: var(--crisis-red-tint);
          border-left: 4px solid var(--crisis-red);
          padding: 28px 24px;
        }

        .res-crisis-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: flex-start;
          gap: 16px;
        }

        .res-crisis-inner > svg {
          color: var(--crisis-red);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .res-crisis h3 {
          font-weight: 700;
          font-size: 17px;
          color: #791F1F;
          margin: 0 0 14px;
        }

        .res-crisis-links {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        @media (max-width: 768px) {
          .res-crisis-links { grid-template-columns: 1fr; }
        }

        .res-crisis-link {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 14.5px;
          color: var(--crisis-red);
          text-decoration: none;
        }

        .res-crisis-link:hover {
          color: #791F1F;
        }

        /* ── CATEGORIES ── */
        .res-categories {
          padding: 80px 0;
          background: var(--blue-tint);
        }

        .res-categories-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .res-categories-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        @media (max-width: 980px) {
          .res-categories-grid { grid-template-columns: repeat(2, 1fr); }
        }

        .res-category-btn {
          padding: 24px 18px;
          border-radius: 16px;
          text-align: center;
          background: #fff;
          border: 1px solid #EFEAE5;
          cursor: pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .res-category-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 32px -16px rgba(22, 49, 79, 0.2);
        }

        .res-category-btn.active {
          border-color: var(--blue);
          box-shadow: 0 0 0 2px var(--blue);
        }

        .res-category-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--blue-tint);
          color: var(--blue);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
        }

        .res-category-btn.active .res-category-icon {
          background: var(--blue);
          color: #fff;
        }

        .res-category-btn h3 {
          font-weight: 700;
          font-size: 14px;
          color: var(--navy);
          margin: 0 0 6px;
        }

        .res-category-btn p {
          font-size: 12.5px;
          color: #6A7783;
          margin: 0;
        }

        /* ── RESOURCES CONTENT ── */
        .res-content {
          padding: 88px 0;
        }

        .res-content-inner {
          max-width: 780px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .res-content-head {
          margin-bottom: 44px;
        }

        .res-content-head h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.4rem);
          margin: 0 0 16px;
        }

        .res-content-head p {
          font-size: 16.5px;
          line-height: 1.75;
          color: #51606E;
          margin: 0;
        }

        .res-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .res-item {
          background: #fff;
          border-radius: 16px;
          border: 1px solid #EFEAE5;
          overflow: hidden;
          transition: border-color 0.25s ease;
        }

        .res-item:hover {
          border-color: var(--blue);
        }

        .res-item-trigger {
          width: 100%;
          padding: 24px 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }

        .res-item-trigger h3 {
          font-weight: 700;
          font-size: 17px;
          color: var(--navy);
          margin: 0 0 6px;
        }

        .res-item-trigger p {
          font-size: 14.5px;
          color: #6A7783;
          margin: 0;
        }

        .res-item-trigger svg {
          color: var(--blue);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .res-item-trigger svg.open {
          transform: rotate(180deg);
        }

        .res-item-body {
          border-top: 1px solid #EFEAE5;
          padding: 24px 28px;
          background: var(--paper);
          font-size: 14.5px;
          line-height: 1.8;
          color: #51606E;
          white-space: pre-wrap;
        }

        /* ── GUIDES ── */
        .res-guides {
          padding: 88px 0;
          background: var(--blue-tint);
          text-align: center;
        }

        .res-guides-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .res-guides h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.9rem, 1.4rem + 2vw, 2.6rem);
          margin: 0 0 14px;
        }

        .res-guides > .res-guides-inner > p {
          font-size: 16.5px;
          color: #51606E;
          margin: 0 0 56px;
        }

        .res-guides-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          text-align: left;
        }

        @media (max-width: 900px) {
          .res-guides-grid { grid-template-columns: 1fr; }
        }

        .res-guide-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px 28px;
          border: 1px solid #EFEAE5;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .res-guide-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 44px -20px rgba(22, 49, 79, 0.18);
        }

        .res-guide-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--peach-tint);
          color: var(--peach-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 20px;
        }

        .res-guide-card h3 {
          font-weight: 700;
          font-size: 18px;
          color: var(--navy);
          margin: 0 0 12px;
        }

        .res-guide-card p {
          font-size: 14.5px;
          line-height: 1.7;
          color: #5F6E7A;
          margin: 0 0 20px;
        }

        .res-guide-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-weight: 700;
          font-size: 14px;
          color: var(--blue);
          text-decoration: none;
        }

        .res-guide-link:hover {
          color: #185FA5;
        }

        /* ── CTA ── */
        .res-cta {
          position: relative;
          padding: 96px 0;
          background: var(--navy-deep);
          text-align: center;
          overflow: hidden;
        }

        .res-cta-glow {
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

        .res-cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .res-cta h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.8rem, 1.4rem + 1.6vw, 2.5rem);
          margin: 0 0 16px;
        }

        .res-cta p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 16.5px;
          margin: 0 0 36px;
        }

        .res-cta-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 14px;
        }

        .res-cta-link {
          display: inline-flex;
          align-items: center;
          font-weight: 700;
          font-size: 15px;
          padding: 16px 34px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
        }

        .res-cta-link.primary {
          background: var(--peach);
          color: #fff;
          box-shadow: 0 14px 32px -10px rgba(242, 168, 120, 0.5);
        }

        .res-cta-link.primary:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }

        .res-cta-link.secondary {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255, 255, 255, 0.4);
        }

        .res-cta-link.secondary:hover {
          background: #fff;
          color: var(--navy);
          border-color: #fff;
          transform: translateY(-2px);
        }
      `}</style>

      {/* HEADER */}
      <section className="res-header">
        <div className="res-header-glow" />
        <div className="res-header-inner">
          <p className="res-breadcrumb">Dove Healthcare Services, LLC &gt; Resources</p>
          <h1 className="res-h1">Educational resources</h1>
          <div className="res-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
          <p className="res-header-sub">
            Learn about mental health conditions, recognize warning signs, and
            discover recovery strategies.
          </p>
        </div>
      </section>

      {/* CRISIS BANNER */}
      <section className="res-crisis">
        <div className="res-crisis-inner">
          <AlertCircle size={24} />
          <div>
            <h3>In crisis? Get help now.</h3>
            <div className="res-crisis-links">
              <a href="tel:988" className="res-crisis-link">
                <Phone size={16} />
                Call 988 (24/7)
              </a>
              <a href="sms:988" className="res-crisis-link">
                <MessageCircle size={16} />
                Text 988 (24/7)
              </a>
              <Link to="/book-appointment" className="res-crisis-link">
                <Users size={16} />
                Contact Dove Healthcare
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="res-categories">
        <div className="res-categories-inner">
          <div className="res-categories-grid">
            {resourceCategories.map((cat) => {
              const Icon = categoryIconMap[cat.id] || BookOpen;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`res-category-btn ${isActive ? "active" : ""}`}
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
        <div className="res-content-inner">
          <div className="res-content-head">
            <h2>{category?.name}</h2>
            <p>{category?.description}</p>
          </div>

          <div className="res-list">
            {filteredResources.map((resource) => {
              const isOpen = expandedResource === resource.id;
              return (
                <div key={resource.id} className="res-item">
                  <button
                    onClick={() => setExpandedResource(isOpen ? null : resource.id)}
                    className="res-item-trigger"
                  >
                    <div>
                      <h3>{resource.title}</h3>
                      <p>{resource.description}</p>
                    </div>
                    <ChevronDown size={22} className={isOpen ? "open" : ""} />
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
      <section className="res-guides">
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
      </section>

      {/* CTA SECTION */}
      <section className="res-cta">
        <div className="res-cta-glow" />
        <div className="res-cta-inner">
          <h2>Ready for professional support?</h2>
          <p>
            These resources are educational. For personalized treatment and
            support, our experienced team is here to help.
          </p>
          <div className="res-cta-actions">
            <Link to="/book-appointment" className="res-cta-link primary">
              Book appointment
            </Link>
            <Link to="/meet-the-team" className="res-cta-link secondary">
              Meet our team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}