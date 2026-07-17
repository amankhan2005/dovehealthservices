import { ExternalLink, FileText, ScanLine } from "lucide-react";
import EmployeePasswordGate from "../components/employee/EmployeePasswordGate";
import EmployeeQRCode from "../components/employee/EmployeeQRCode";
import { EMPLOYEE_FORMS } from "../config/employeeConfig";

function EmployeeContent() {
  return (
    <div className="employee-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .employee-page {
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

        .employee-page h1,
        .employee-page h2,
        .employee-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .emp-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .emp-header-glow {
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

        .emp-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .emp-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .emp-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem);
          line-height: 1.15;
          margin: 0;
        }

        .emp-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .emp-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .emp-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .emp-header-sub {
          margin-top: 24px;
          max-width: 560px;
          font-size: 17px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.75);
        }

        /* ── FORMS ── */
        .emp-forms {
          padding: 88px 0;
        }

        .emp-forms-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .emp-forms-head {
          margin-bottom: 44px;
        }

        .emp-forms-head h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.4rem);
          margin: 0 0 16px;
        }

        .emp-forms-head p {
          font-size: 16.5px;
          line-height: 1.75;
          color: #51606E;
          margin: 0;
          max-width: 640px;
        }

        .emp-forms-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        @media (max-width: 900px) {
          .emp-forms-grid { grid-template-columns: 1fr; }
        }

        .emp-card {
          display: flex;
          gap: 26px;
          align-items: center;
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 20px;
          padding: 28px;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.25s ease;
        }

        .emp-card:hover {
          transform: translateY(-4px);
          border-color: var(--blue);
          box-shadow: 0 20px 44px -20px rgba(22, 49, 79, 0.18);
        }

        @media (max-width: 560px) {
          .emp-card {
            flex-direction: column;
            align-items: stretch;
            text-align: center;
            gap: 20px;
          }
        }

        .emp-card-body {
          flex: 1;
          min-width: 0;
        }

        .emp-card-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--peach-tint);
          color: var(--peach-deep);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }

        @media (max-width: 560px) {
          .emp-card-icon { margin: 0 auto 16px; }
        }

        .emp-card-body h3 {
          font-weight: 700;
          font-size: 18px;
          color: var(--navy);
          margin: 0 0 8px;
        }

        .emp-card-body p {
          font-size: 14.5px;
          line-height: 1.65;
          color: #6A7783;
          margin: 0 0 20px;
        }

        .emp-open-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--peach);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          padding: 12px 24px;
          border-radius: 100px;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .emp-open-btn:hover {
          background: var(--peach-deep);
          transform: translateY(-2px);
        }

        .emp-open-btn:focus-visible {
          outline: 2px solid var(--blue);
          outline-offset: 2px;
        }

        /* ── QR ── */
        .emp-qr {
          flex-shrink: 0;
          text-align: center;
        }

        .emp-qr-frame {
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 14px;
          padding: 8px;
          line-height: 0;
        }

        .emp-qr-svg {
          width: 132px;
          height: 132px;
          display: block;
        }

        @media (max-width: 560px) {
          .emp-qr-frame { display: inline-block; }
        }

        .emp-qr-caption {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.4px;
          color: #8A97A2;
          text-transform: uppercase;
        }

        /* ── NOTE ── */
        .emp-note {
          margin-top: 48px;
          background: var(--blue-tint);
          border-left: 4px solid var(--blue);
          border-radius: 12px;
          padding: 20px 24px;
          font-size: 14.5px;
          line-height: 1.7;
          color: #51606E;
        }

        @media (prefers-reduced-motion: reduce) {
          .emp-card, .emp-open-btn { transition: none; }
          .emp-card:hover, .emp-open-btn:hover { transform: none; }
        }
      `}</style>

      {/* HEADER */}
      <section className="emp-header">
        <div className="emp-header-glow" />
        <div className="emp-header-inner">
          <p className="emp-breadcrumb">Dove Healthcare Services, LLC &gt; Employee</p>
          <h1 className="emp-h1">Employee resources</h1>
          <div className="emp-h1-rule">
            <span className="bar" />
            <span className="dot" />
          </div>
          <p className="emp-header-sub">
            Staff forms and intake documents. Open a form in your browser, or scan
            its code to fill it out on a phone or tablet.
          </p>
        </div>
      </section>

      {/* FORMS */}
      <section className="emp-forms">
        <div className="emp-forms-inner">
          <div className="emp-forms-head">
            <h2>Forms</h2>
            <p>
              Each form opens in a new tab. Scanning the code loads the same form on
              a mobile device — useful when completing paperwork with a client.
            </p>
          </div>

          <div className="emp-forms-grid">
            {EMPLOYEE_FORMS.map((form) => (
              <article key={form.id} className="emp-card">
                <div className="emp-card-body">
                  <div className="emp-card-icon">
                    <FileText size={20} />
                  </div>
                  <h3>{form.title}</h3>
                  <p>{form.description}</p>
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="emp-open-btn"
                  >
                    Open form
                    <ExternalLink size={15} />
                  </a>
                </div>

                <div className="emp-qr">
                  <div className="emp-qr-frame">
                    <EmployeeQRCode value={form.url} title={`QR code for ${form.title}`} />
                  </div>
                  <span className="emp-qr-caption">
                    <ScanLine size={12} />
                    Scan to open
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="emp-note">
            Forms are hosted externally and open outside this site. Follow Dove
            Healthcare's privacy procedures when handling completed paperwork.
          </p>
        </div>
      </section>
    </div>
  );
}

export default function Employee() {
  return (
    <EmployeePasswordGate>
      <EmployeeContent />
    </EmployeePasswordGate>
  );
}
