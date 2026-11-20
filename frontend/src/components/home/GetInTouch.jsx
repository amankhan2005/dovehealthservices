// GetInTouch.jsx
import { useRef, useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import MathCaptcha from "./MathCaptcha.jsx";
import ArrowIcon from "../ui/ArrowIcon";

const CONTACT_CSS = `
  .home-contact__grid { align-items: start; }

  .home-contact__intro { margin-top: 24px; max-width: 46ch; }

  .home-contact__channels {
    margin: 40px 0 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--dh-line);
  }

  .home-channel {
    display: grid;
    grid-template-columns: 24px minmax(0, 1fr) auto;
    gap: 16px;
    align-items: start;
    padding: 20px 0;
    border-bottom: 1px solid var(--dh-line);
    color: var(--dh-ink);
    text-decoration: none;
  }

  .home-channel__icon { padding-top: 2px; color: var(--dh-dove); }

  .home-channel__text {
    display: flex;
    flex-direction: column;
    gap: 4px;
    min-width: 0;
    font-size: 16.5px;
    font-weight: 600;
    line-height: 1.45;
    overflow-wrap: break-word;
    transition: color 0.2s;
  }

  .home-channel__label {
    font-size: 12.5px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--dh-muted);
  }

  .home-channel__go { padding-top: 22px; color: var(--dh-muted); transition: transform 0.25s var(--dh-ease), color 0.2s; }
  .home-channel:hover .home-channel__text { color: var(--dh-brand); }
  .home-channel:hover .home-channel__go { color: var(--dh-brand); transform: translateX(3px); }

  @media (max-width: 520px) {
    .home-channel { grid-template-columns: 22px minmax(0, 1fr); }
    .home-channel__go { display: none; }
    .home-channel__text { font-size: 15px; }
  }

  .home-contact__card {
    padding: clamp(24px, 3.5vw, 44px);
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius-lg);
    background: var(--dh-paper);
  }

  .home-contact__form-title {
    margin-bottom: 26px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--dh-line);
    font-size: 1.35rem;
  }
`;

export default function GetInTouch() {
  const API_BASE =
    import.meta.env.VITE_API_URL ||
    "https://dovehealthservices.onrender.com";

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");
  const captchaRef = useRef(null);
  const [captchaOk, setCaptchaOk] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading || !captchaOk) return;

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch(`${API_BASE}/api/enquiry`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Request failed");

      setForm({ name: "", email: "", phone: "", message: "" });
      setStatus("success");
      captchaRef.current?.regenerate();
      setCaptchaOk(false);
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="dh-section home-contact">
      <style>{CONTACT_CSS}</style>

      <div className="dh-container dh-grid home-contact__grid">
        {/* LEFT CONTENT */}
        <div className="dh-col-5" data-reveal>
          <span className="dh-kicker">Get in Touch</span>
          <h2 className="dh-h2">
            Need immediate mental health support?
          </h2>
          <p className="dh-lead home-contact__intro">
            If you or your loved one is facing an urgent mental health
            concern, our experienced professionals are ready to provide
            guidance, reassurance, and compassionate care.
          </p>

          <div className="home-contact__channels">
            <a href="mailto:careteam@dovehealthservices.com" className="home-channel">
              <div className="home-channel__icon">
                <Mail size={20} />
              </div>
              <span className="home-channel__text">
                <span className="home-channel__label">Email</span>
                careteam@dovehealthservices.com
              </span>
              <span className="home-channel__go" aria-hidden="true"><ArrowIcon /></span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=2101+St+Paul+St+Baltimore+MD+21218"
              target="_blank"
              rel="noopener noreferrer"
              className="home-channel"
            >
              <div className="home-channel__icon">
                <MapPin size={20} />
              </div>
              <span className="home-channel__text">
                <span className="home-channel__label">Visit us</span>
                2101 St Paul St, 1st FL, Baltimore MD 21218
              </span>
              <span className="home-channel__go" aria-hidden="true"><ArrowIcon /></span>
            </a>
          </div>

        </div>

        {/* RIGHT FORM */}
        <div className="dh-col-6 dh-col-start-7 home-contact__card" data-reveal style={{ "--dh-reveal-delay": "100ms" }}>
          <h3 className="dh-h3 home-contact__form-title">Request an appointment</h3>

          <form onSubmit={handleSubmit} noValidate className="dh-form">
            <div className="dh-field">
              <label className="dh-label" htmlFor="gi-name">Full name</label>
              <input
                id="gi-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full name"
                required
                className="dh-input"
              />
            </div>

            <div className="dh-form-row">
              <div className="dh-field">
                <label className="dh-label" htmlFor="gi-email">Email address</label>
                <input
                  id="gi-email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email address"
                  required
                  className="dh-input"
                />
              </div>

              <div className="dh-field">
                <label className="dh-label" htmlFor="gi-phone">Phone number</label>
                <input
                  id="gi-phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone number"
                  className="dh-input"
                />
              </div>
            </div>

            <div className="dh-field">
              <label className="dh-label" htmlFor="gi-message">How can we help you?</label>
              <textarea
                id="gi-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="4"
                className="dh-input"
              />
            </div>

            <MathCaptcha
              ref={captchaRef}
              onValidChange={setCaptchaOk}
              className="dh-field"
            />

            <button
              type="submit"
              className="dh-btn dh-btn--primary dh-btn--block"
              disabled={loading || !captchaOk}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} />
                  Get appointment
                </>
              )}
            </button>

            {status === "success" && (
              <p className="dh-alert dh-alert--success" role="status">
                <CheckCircle2 size={16} />
                Thanks! We've received your request and will reach out shortly.
              </p>
            )}

            {status === "error" && (
              <p className="dh-alert dh-alert--error" role="alert">
                <AlertCircle size={16} />
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
