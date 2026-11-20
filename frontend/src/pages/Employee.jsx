import { ExternalLink, FileText, ScanLine, ShieldCheck } from "lucide-react";
import PageHero from "../components/ui/PageHero";
import EmployeePasswordGate from "../components/employee/EmployeePasswordGate";
import EmployeeQRCode from "../components/employee/EmployeeQRCode";
import { EMPLOYEE_FORMS } from "../config/employeeConfig";

const EMPLOYEE_CSS = `
  .emp-forms-head { margin-bottom: 40px; }
  .emp-forms-head .dh-lead { margin-top: 0; }

  .emp-forms-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }

  @media (min-width: 900px) { .emp-forms-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }

  .emp-card {
    display: flex;
    gap: 24px;
    padding: clamp(22px, 3vw, 32px);
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius-lg);
    background: #fff;
  }

  .emp-card-body { display: flex; flex: 1; min-width: 0; flex-direction: column; align-items: flex-start; }

  .emp-card-body .emp-card-icon { color: var(--dh-dove); margin-bottom: 18px; }
  .emp-card-body h3 { font-size: 1.2rem; }

  .emp-card-body p {
    margin: 8px 0 22px;
    font-size: 15px;
    line-height: 1.65;
    color: var(--dh-ink-2);
  }

  .emp-card-body .dh-btn { margin-top: auto; min-height: 44px; padding: 0 18px; font-size: 14px; }

  .emp-qr { display: flex; flex-direction: column; align-items: center; gap: 10px; flex-shrink: 0; }

  .emp-qr-frame { padding: 8px; border: 1px solid var(--dh-line); border-radius: var(--dh-radius); background: #fff; }

  .emp-qr-svg { display: block; width: 124px; height: 124px; }

  .emp-qr-caption {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--dh-muted);
  }

  @media (max-width: 520px) {
    .emp-card { flex-direction: column; }
    .emp-qr { align-self: stretch; padding-top: 18px; border-top: 1px solid var(--dh-line); }
  }

  .emp-note {
    display: flex;
    gap: 12px;
    align-items: flex-start;
    margin: 32px 0 0;
    padding: 18px 0 0;
    border-top: 1px solid var(--dh-line);
    font-size: 14.5px;
    line-height: 1.65;
    color: var(--dh-ink-2);
  }

  .emp-note svg { flex-shrink: 0; margin-top: 2px; color: var(--dh-dove); }
`;

function EmployeeContent() {
  return (
    <div className="employee-page">
      <style>{EMPLOYEE_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb="Dove Health > Employee" title="Employee resources">
        Staff forms and intake documents. Open a form in your browser, or scan
        its code to fill it out on a phone or tablet.
      </PageHero>

      {/* FORMS */}
      <section className="dh-section dh-section--tight dh-section--paper">
        <div className="dh-container">
          <div className="dh-grid emp-forms-head" data-reveal>
            <h2 className="dh-h2 dh-col-5">Forms</h2>
            <p className="dh-lead dh-col-7">
              Each form opens in a new tab. Scanning the code loads the same form on
              a mobile device — useful when completing paperwork with a client.
            </p>
          </div>

          <div className="emp-forms-grid">
            {EMPLOYEE_FORMS.map((form) => (
              <article key={form.id} className="emp-card">
                <div className="emp-card-body">
                  <FileText className="emp-card-icon" size={24} strokeWidth={1.6} aria-hidden="true" />
                  <h3 className="dh-h3">{form.title}</h3>
                  <p>{form.description}</p>
                  <a
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dh-btn dh-btn--primary"
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
            <ShieldCheck size={18} aria-hidden="true" />
            <span>
              Forms are hosted externally and open outside this site. Follow Dove
              Health's privacy procedures when handling completed paperwork.
            </span>
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
