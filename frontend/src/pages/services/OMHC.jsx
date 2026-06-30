import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown } from "lucide-react";

const SERVICES = [
  {
    title: "Therapy Services",
    summary: "One-on-one, family, and group sessions to talk through what you're going through.",
    what: "Regular talk-therapy sessions with a licensed counselor, either on your own, with your family, or in a small group with others going through similar things.",
    who: "Anyone who wants a safe space to talk through stress, emotions, relationships, or mental health challenges with professional support.",
    expect: "You'll meet with a counselor on a regular schedule, talk openly about what's going on, and work together on ways to feel better and cope.",
  },
  {
    title: "Psychiatric Care",
    summary: "Medical support to help manage symptoms and find the right treatment.",
    what: "Appointments with a psychiatric provider to review how you're doing, adjust or manage any medications, and check in on your overall mental health.",
    who: "People who may benefit from medication as part of their treatment, or who want a professional opinion on what's going on and how to manage it.",
    expect: "A conversation about your symptoms and history, a clear explanation of any treatment options, and regular follow-ups to see how things are working.",
  },
  {
    title: "Support Services",
    summary: "Extra help connecting you to the resources and support you need.",
    what: "Hands-on help connecting you with community resources, support during a crisis, and someone to help coordinate your care.",
    who: "Anyone who needs extra support getting connected to services, navigating a difficult moment, or staying on track with their care.",
    expect: "A dedicated team member who helps you find resources, checks in with you, and is there to help if things become urgent.",
  },
  {
    title: "Child & Adolescent",
    summary: "Specialized support for kids and teens, plus guidance for parents.",
    what: "Age-appropriate counseling for children and teens, including play-based sessions for younger kids, plus guidance to help parents support their child at home.",
    who: "Children and teenagers facing emotional, behavioral, or social challenges, and the parents supporting them.",
    expect: "A comfortable, age-appropriate space for your child to open up, along with regular guidance for you as a parent on how to help at home and at school.",
  },
  {
    title: "Evidence-Based Care",
    summary: "Proven approaches to help you build healthier thoughts and habits.",
    what: "Structured therapy approaches that help you notice unhelpful thinking patterns, manage difficult emotions, and work through past experiences that still affect you today.",
    who: "Anyone working through anxiety, low mood, difficult emotions, or the lasting effects of a hard experience.",
    expect: "Practical sessions with clear tools and techniques you can practice both in session and in everyday life.",
  },
  {
    title: "Recovery Focused",
    summary: "A care plan built around your goals, for the long run.",
    what: "A treatment plan built specifically around your personal goals, with ongoing support to help you keep making progress over time.",
    who: "Anyone working toward greater stability, independence, and a better quality of life, at any stage of their journey.",
    expect: "A plan that's yours — built around what matters to you, reviewed regularly, and adjusted as your needs change.",
  },
];

export default function OMHC() {

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
            Dove Healthcare Services, LLC &gt; Services &gt; OMHC
          </p>
          <h1 className="omhc-h1">
            Outpatient Mental Health Clinic (OMHC)
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
          <h2>Comprehensive Mental Health Care</h2>
          <p>
            Our OMHC program offers therapy, medical support, and recovery
            help to anyone looking to feel more stable, independent, and well.
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
          <h2>Start Your Recovery Today</h2>
          <p>Schedule your consultation with our mental health professionals.</p>

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