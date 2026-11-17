// GetInTouch.jsx
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";
import MathCaptcha from "./MathCaptcha.jsx";

const CONTACT_CSS = `
  .home-contact__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(44px, 6vw, 80px);
    align-items: start;
  }

  @media (min-width: 1024px) {
    .home-contact__grid { grid-template-columns: minmax(0, 1fr) minmax(0, 0.92fr); }
  }

  .home-contact__intro { margin-top: 20px; max-width: 54ch; }

  .home-contact__channels {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: 12px;
    margin-top: 36px;
  }

  @media (min-width: 640px) {
    .home-contact__channels { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  }

  .home-channel {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 18px;
    border: 1px solid var(--dh-line);
    border-radius: 18px;
    background: #fff;
    color: var(--dh-ink);
    text-decoration: none;
    transition: transform 0.3s var(--dh-ease), box-shadow 0.3s var(--dh-ease), border-color 0.3s;
  }

  .home-channel:hover { transform: translateY(-2px); box-shadow: var(--dh-shadow-sm); border-color: var(--dh-sky-200); }

  .home-channel--wide { grid-column: 1 / -1; }

  .home-channel__icon {
    width: 42px;
    height: 42px;
    flex-shrink: 0;
    display: grid;
    place-items: center;
    border-radius: 12px;
    background: var(--dh-sky-50);
    color: var(--dh-brand);
  }

  .home-channel.urgent .home-channel__icon { background: var(--dh-crisis-50); color: var(--dh-crisis); }
  .home-channel.warn .home-channel__icon { background: var(--dh-accent-50); color: var(--dh-accent-ink); }

  .home-channel__text {
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 0;
    font-size: 15px;
    font-weight: 600;
    line-height: 1.45;
    overflow-wrap: anywhere;
  }

  .home-channel__label {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--dh-muted);
  }

  .home-contact__disclaimer {
    margin: 26px 0 0;
    padding-left: 16px;
    border-left: 2px solid var(--dh-accent);
    font-size: 14px;
    line-height: 1.65;
    color: var(--dh-muted);
  }

  .home-contact__card {
    padding: clamp(26px, 4vw, 44px);
    border-radius: var(--dh-radius-lg);
    background: #fff;
    border: 1px solid var(--dh-line);
    box-shadow: var(--dh-shadow-lg);
  }

  .home-contact__form-title { font-size: 1.6rem; margin-bottom: 26px; }
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
    <section className="dh-section dh-section--sky home-contact">
      <style>{CONTACT_CSS}</style>

      <div className="dh-container home-contact__grid">
        {/* LEFT CONTENT */}
        <div data-reveal>
          <span className="dh-eyebrow">Get in Touch</span>
          <h2 className="dh-h2">
            Need immediate mental health support?
          </h2>
          <p className="dh-lead home-contact__intro">
            If you or your loved one is facing an urgent mental health
            concern, our experienced professionals are ready to provide
            guidance, reassurance, and compassionate care.
          </p>

          <div className="home-contact__channels">
            <a href="tel:911" className="home-channel urgent">
              <div className="home-channel__icon">
                <Phone size={19} />
              </div>
              <span className="home-channel__text">
                <span className="home-channel__label">Medical emergency</span>
                Call 911
              </span>
            </a>

            <a href="tel:988" className="home-channel warn">
              <div className="home-channel__icon">
                <Phone size={19} />
              </div>
              <span className="home-channel__text">
                <span className="home-channel__label">Mental health crisis</span>
                Call or text 988
              </span>
            </a>

            <a href="mailto:careteam@dovehealthservices.com" className="home-channel brand home-channel--wide">
              <div className="home-channel__icon">
                <Mail size={19} />
              </div>
              <span className="home-channel__text">
                <span className="home-channel__label">Email</span>
                careteam@dovehealthservices.com
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=2101+St+Paul+St+Baltimore+MD+21218"
              target="_blank"
              rel="noopener noreferrer"
              className="home-channel brand home-channel--wide"
            >
              <div className="home-channel__icon">
                <MapPin size={19} />
              </div>
              <span className="home-channel__text">
                <span className="home-channel__label">Visit us</span>
                2101 St Paul St, 1st FL, Baltimore MD 21218
              </span>
            </a>
          </div>

          <p className="home-contact__disclaimer">
            If you are experiencing a medical emergency, call 911
            immediately. For mental health crisis support, call or text 988.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="home-contact__card" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
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
