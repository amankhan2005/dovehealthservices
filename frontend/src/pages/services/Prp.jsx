import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, ChevronDown } from "lucide-react";

const SERVICES = [
  {
    title: "Life Skills Development",
    summary: "Building everyday habits that make daily life easier to manage.",
    what: "We help you build steady daily routines — things like personal care, managing your time, and keeping your home running smoothly.",
    who: "Anyone who finds it hard to keep up with everyday tasks or wants more structure and confidence in daily life.",
    expect: "Hands-on practice with simple routines, with a counselor checking in regularly to see what's working and adjust as needed.",
  },
  {
    title: "Social Skills Enhancement",
    summary: "Feeling more comfortable connecting with people around you.",
    what: "We work on practical ways to communicate clearly, build healthy relationships, and feel more at ease being part of your community.",
    who: "Anyone who feels isolated, struggles in social situations, or wants to reconnect with people and activities.",
    expect: "Supportive practice through real conversations and activities, building confidence one step at a time.",
  },
  {
    title: "Emotional Support",
    summary: "Tools to help you manage stress and stay steady through hard moments.",
    what: "We teach simple ways to manage stress, stay calm under pressure, and work through problems instead of feeling overwhelmed by them.",
    who: "Anyone dealing with ongoing stress, strong emotions, or difficulty staying calm in tough situations.",
    expect: "A supportive space to learn and practice coping tools you can use anytime things start to feel like too much.",
  },
  {
    title: "Career Support",
    summary: "Getting ready and feeling confident to find a job.",
    what: "We help you get ready for work — from building a resume and practicing interviews to figuring out what kind of job might be a good fit.",
    who: "Anyone looking to find a job, return to work, or explore what career path might work for them.",
    expect: "One-on-one guidance through every step, from preparing for interviews to thinking through long-term career goals.",
  },
  {
    title: "Educational Support",
    summary: "Help building new skills and continuing your education.",
    what: "We connect you with training programs and educational resources, and support you in building new skills at your own pace.",
    who: "Anyone interested in finishing school, learning a trade, or building new skills to support their goals.",
    expect: "Guidance finding the right program for you, plus ongoing support to help you stick with it and succeed.",
  },
  {
    title: "Independent Living",
    summary: "Practical skills to help you live more independently.",
    what: "We help with the everyday basics of independent living — getting around town, managing money, and speaking up for what you need.",
    who: "Anyone working toward living more independently and confidently managing day-to-day responsibilities.",
    expect: "Practical, real-world practice with transportation, budgeting, and self-advocacy, with support every step of the way.",
  },
];

export default function Prp() {

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
            Dove Healthcare Services, LLC &gt; Services &gt; PRP
          </p>
          <h1 className="omhc-h1">
            Psychiatric Rehabilitation Program (PRP)
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
          <h2>Building Skills for Independent Living</h2>
          <p>
            Our Psychiatric Rehabilitation Program helps you build everyday
            life skills, feel more confident around others, and work toward
            greater independence.
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
          <h2>Start PRP Services Today</h2>
          <p>Take the first step toward independence and recovery.</p>

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