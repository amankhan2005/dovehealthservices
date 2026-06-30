import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown } from "lucide-react";

const SERVICES = [
  {
    title: "Improved Communication",
    summary: "Helping your family talk to each other more openly and with less tension.",
    what: "We help family members really listen to each other, share their feelings calmly, and talk through tough topics without it turning into an argument.",
    who: "Families who find it hard to talk things through, often misunderstand each other, or avoid bringing up difficult subjects.",
    expect: "You'll sit down with a counselor who guides the conversation, teaches simple ways to talk and listen, and gives you things to practice together at home.",
  },
  {
    title: "Conflict Resolution",
    summary: "Helping your family handle disagreements in a calmer, healthier way.",
    what: "We help families notice the patterns behind repeated arguments and learn simple steps to work through problems together instead of fighting about them.",
    who: "Families dealing with ongoing arguments, tension after a big change at home, or stress that keeps building up.",
    expect: "A calm, guided space where everyone gets to share their side. You'll leave with practical steps you can start using right away at home.",
  },
  {
    title: "Emotional Support",
    summary: "Helping family members feel heard, supported, and closer to one another.",
    what: "We work with your family to rebuild trust, talk through difficult emotions, and support each other through hard times.",
    who: "Families supporting a loved one going through a mental health challenge, recovery, or a major life change.",
    expect: "A caring, judgment-free space where every person in the family gets a chance to share how they're feeling and be heard.",
  },
  {
    title: "Caregiver Guidance",
    summary: "Giving caregivers the tools and support they need.",
    what: "We explain mental health conditions in plain language and share simple, practical ways to support a loved one without burning yourself out.",
    who: "Parents, spouses, or family members who are the main support person for someone in treatment or recovery.",
    expect: "Clear answers to your questions about your loved one's condition and treatment, plus ongoing support so you don't have to do it alone.",
  },
  {
    title: "Collaborative Planning",
    summary: "Bringing your whole family into your loved one's recovery plan.",
    what: "We bring your family together with your loved one's care team to set shared goals and agree on how everyone can help.",
    who: "Families who want to stay involved and informed about a loved one's treatment, working closely with our clinical team.",
    expect: "Regular check-ins with your family and your loved one's care team, with clear next steps everyone understands.",
  },
  {
    title: "Long-Term Wellness",
    summary: "Helping your family stay strong and healthy for the long run.",
    what: "Once things are on track, we offer ongoing sessions that help keep your family's progress steady and help prevent setbacks.",
    who: "Families who've completed counseling and want to keep their progress going and avoid slipping back into old patterns.",
    expect: "Occasional check-in sessions, a simple plan for handling tough moments, and support whenever you need it.",
  },
];

export default function FamilyCounselling() {

  return (

    <div className="omhc-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .omhc-page {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: #fff;
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .omhc-page h1,
        .omhc-page h2,
        .omhc-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .omhc-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .omhc-header-glow {
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

        .omhc-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .omhc-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .omhc-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2rem, 1.3rem + 2.6vw, 3.3rem);
          line-height: 1.18;
          margin: 0;
          max-width: 780px;
        }

        .omhc-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .omhc-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .omhc-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        /* ── INTRO ── */
        .omhc-intro {
          padding: 96px 0 80px;
        }

        .omhc-intro-inner {
          max-width: 760px;
          margin: 0 auto;
          padding: 0 24px;
          text-align: center;
        }

        .omhc-intro-bar {
          width: 44px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin: 0 auto 22px;
        }

        .omhc-intro h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.3rem);
          margin: 0 0 20px;
        }

        .omhc-intro p {
          color: #51606E;
          font-size: 17px;
          line-height: 1.8;
          margin: 0;
        }

        /* ── SERVICES ── */
        .omhc-services {
          position: relative;
          padding: 88px 0 100px;
          background: var(--blue-tint);
          overflow: hidden;
        }

        .omhc-services-blob {
          position: absolute;
          bottom: -140px;
          left: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--peach);
          filter: blur(100px);
          opacity: 0.16;
        }

        .omhc-services-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .omhc-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          align-items: start;
        }

        @media (max-width: 1000px) {
          .omhc-cards-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 640px) {
          .omhc-cards-grid { grid-template-columns: 1fr; }
        }

        /* ── CARD ── */
        .omhc-card {
          position: relative;
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 20px;
          padding: 30px 28px;
          box-shadow: 0 20px 48px -28px rgba(22, 49, 79, 0.2);
          transition: box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .omhc-card:hover {
          border-color: var(--blue);
          box-shadow: 0 28px 56px -24px rgba(47, 134, 198, 0.28);
        }

        .omhc-card-bar {
          width: 40px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin-bottom: 18px;
        }

        .omhc-card h3 {
          font-weight: 800;
          color: var(--navy);
          font-size: 1.15rem;
          margin: 0 0 10px;
        }

        .omhc-card-summary {
          font-size: 14.5px;
          color: #51606E;
          line-height: 1.6;
          margin: 0 0 20px;
        }

        /* ── LEARN MORE TOGGLE ── */
        .omhc-learnmore-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          padding: 0;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 14px;
          color: var(--blue);
          cursor: pointer;
        }

        .omhc-learnmore-btn svg {
          transition: transform 0.25s ease;
        }

        .omhc-learnmore-btn.open svg {
          transform: rotate(180deg);
        }

        .omhc-card-details {
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.35s ease;
        }

        .omhc-card-details.open {
          max-height: 700px;
        }

        .omhc-card-details-inner {
          padding-top: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        /* ── COLORED DETAIL BLOCKS ── */
        .omhc-detail-block {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          border-radius: 14px;
          padding: 16px;
        }

        .omhc-detail-icon {
          width: 28px;
          height: 28px;
          flex-shrink: 0;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 1px;
        }

        .omhc-detail-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          margin: 0 0 5px;
        }

        .omhc-detail-text {
          font-size: 14px;
          line-height: 1.6;
          color: #51606E;
          margin: 0;
        }

        /* What it is — blue */
        .omhc-detail-block.what {
          background: var(--blue-tint);
        }
        .omhc-detail-block.what .omhc-detail-icon {
          background: var(--blue);
          color: #fff;
        }
        .omhc-detail-block.what .omhc-detail-label {
          color: var(--blue);
        }

        /* Who it's for — peach */
        .omhc-detail-block.who {
          background: var(--peach-tint);
        }
        .omhc-detail-block.who .omhc-detail-icon {
          background: var(--peach-deep);
          color: #fff;
        }
        .omhc-detail-block.who .omhc-detail-label {
          color: var(--peach-deep);
        }

        /* What to expect — navy */
        .omhc-detail-block.expect {
          background: #EEF1F5;
        }
        .omhc-detail-block.expect .omhc-detail-icon {
          background: var(--navy);
          color: #fff;
        }
        .omhc-detail-block.expect .omhc-detail-label {
          color: var(--navy);
        }

        /* ── CTA ── */
        .omhc-cta {
          position: relative;
          padding: 100px 0;
          background: var(--navy-deep);
          text-align: center;
          overflow: hidden;
        }

        .omhc-cta-glow {
          position: absolute;
          bottom: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 480px;
          height: 320px;
          background: var(--peach);
          opacity: 0.16;
          filter: blur(110px);
          border-radius: 50%;
        }

        .omhc-cta-inner {
          position: relative;
          max-width: 640px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .omhc-cta h2 {
          color: #fff;
          font-weight: 800;
          font-size: clamp(1.8rem, 1.4rem + 1.6vw, 2.5rem);
          margin: 0 0 18px;
        }

        .omhc-cta p {
          color: rgba(255, 255, 255, 0.75);
          font-size: 17px;
          line-height: 1.7;
          margin: 0 0 34px;
        }

        .omhc-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--peach-deep);
          color: #fff;
          font-weight: 700;
          font-size: 15.5px;
          padding: 16px 38px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .omhc-cta-btn:hover {
          background: var(--peach);
          transform: translateY(-3px);
        }
      `}</style>


      {/* HEADER */}
      <section className="omhc-header">
        <div className="omhc-header-glow" />
        <div className="omhc-header-inner">
          <p className="omhc-breadcrumb">
            Dove Healthcare Services, LLC &gt; Services &gt; Family Counseling
          </p>
          <h1 className="omhc-h1">
            Family Counseling Services
          </h1>
          <div className="omhc-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
        </div>
      </section>


      {/* INTRO */}
      <section className="omhc-intro">
        <div className="omhc-intro-inner">
          <div className="omhc-intro-bar" />
          <h2>Supporting Families Through Recovery</h2>
          <p>
            Our family counseling services help families talk to each other more
            openly, work through disagreements, and build a home life that
            supports everyone's wellbeing.
          </p>
        </div>
      </section>


      {/* SERVICES */}
      <section className="omhc-services">
        <div className="omhc-services-blob" />
        <div className="omhc-services-inner">
          <div className="omhc-cards-grid">
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="omhc-cta">
        <div className="omhc-cta-glow" />
        <div className="omhc-cta-inner">
          <h2>Strengthen Your Family's Recovery</h2>
          <p>Schedule a family counseling session today.</p>

          <Link to="/book-appointment" className="omhc-cta-btn">
            Book Appointment
          </Link>
        </div>
      </section>


    </div>

  );

}


/* SERVICE CARD WITH LEARN MORE TOGGLE */

function ServiceCard({ title, summary, what, who, expect }) {

  const [open, setOpen] = useState(false);

  return (
    <div className="omhc-card">
      <div className="omhc-card-bar" />
      <h3>{title}</h3>
      <p className="omhc-card-summary">{summary}</p>

      <button
        type="button"
        className={`omhc-learnmore-btn${open ? " open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {open ? "Show less" : "Learn More"}
        <ChevronDown size={16} />
      </button>

      <div className={`omhc-card-details${open ? " open" : ""}`}>
        <div className="omhc-card-details-inner">

          <div className="omhc-detail-block what">
            <div className="omhc-detail-icon">
              <CheckCircle2 size={15} />
            </div>
            <div>
              <p className="omhc-detail-label">What it is</p>
              <p className="omhc-detail-text">{what}</p>
            </div>
          </div>

          <div className="omhc-detail-block who">
            <div className="omhc-detail-icon">
              <CheckCircle2 size={15} />
            </div>
            <div>
              <p className="omhc-detail-label">Who it's for</p>
              <p className="omhc-detail-text">{who}</p>
            </div>
          </div>

          <div className="omhc-detail-block expect">
            <div className="omhc-detail-icon">
              <CheckCircle2 size={15} />
            </div>
            <div>
              <p className="omhc-detail-label">What to expect</p>
              <p className="omhc-detail-text">{expect}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );

}