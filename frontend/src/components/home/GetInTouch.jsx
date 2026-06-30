 import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function GetInTouch() {
  const API_BASE = import.meta.env.VITE_API_URL;

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (loading) return;

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
    } catch (err) {
      console.log(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="contact-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .contact-section {
          --navy: #1C2B3A;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          --crisis-red: #C8302B;
          --warn-amber: #B97A12;
          --warn-amber-tint: #FCEFDB;
          position: relative;
          background: var(--paper);
          padding: 96px 0;
          overflow: hidden;
        }

        .contact-blob-blue {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: var(--blue);
          filter: blur(90px);
          opacity: 0.12;
        }

        .contact-blob-peach {
          position: absolute;
          bottom: -100px;
          left: -100px;
          width: 380px;
          height: 380px;
          border-radius: 50%;
          background: var(--peach);
          filter: blur(90px);
          opacity: 0.16;
        }

        .contact-inner {
          position: relative;
          z-index: 1;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        @media (max-width: 980px) {
          .contact-inner { grid-template-columns: 1fr; gap: 48px; }
        }

        .contact-eyebrow {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach-deep);
          display: inline-flex;
          align-items: center;
          gap: 10px;
        }

        .contact-eyebrow::before {
          content: "";
          width: 28px;
          height: 2px;
          background: var(--peach);
        }

        .contact-heading {
          font-family: 'Manrope', sans-serif;
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(2rem, 1.4rem + 2.4vw, 3.1rem);
          line-height: 1.15;
          margin-top: 20px;
        }

        .contact-intro {
          font-family: 'Inter', sans-serif;
          font-size: 16px;
          line-height: 1.75;
          color: #51606E;
          margin-top: 20px;
          max-width: 48ch;
        }

        .contact-channels {
          margin-top: 36px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .contact-channel {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 14px 4px;
          text-decoration: none;
          border-bottom: 1px solid #EFEAE5;
          transition: padding-left 0.25s ease;
        }

        .contact-channel:hover {
          padding-left: 8px;
        }

        .contact-channel-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .contact-channel.urgent .contact-channel-icon {
          background: #FBE7E6;
          color: var(--crisis-red);
        }

        .contact-channel.warn .contact-channel-icon {
          background: var(--warn-amber-tint);
          color: var(--warn-amber);
        }

        .contact-channel.brand .contact-channel-icon {
          background: var(--blue-tint);
          color: var(--blue);
        }

        .contact-channel-text {
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          font-weight: 500;
          color: var(--navy);
        }

        .contact-channel-label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          color: #8A968F;
          margin-bottom: 2px;
        }

        .contact-channel.urgent .contact-channel-label { color: var(--crisis-red); }
        .contact-channel.warn .contact-channel-label { color: var(--warn-amber); }

        .contact-disclaimer {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          line-height: 1.6;
          color: #8A968F;
          margin-top: 20px;
          padding-top: 16px;
        }

        .contact-form-card {
          background: #fff;
          border-radius: 24px;
          border: 1px solid #EFEAE5;
          box-shadow: 0 24px 60px -28px rgba(28, 43, 58, 0.2);
          padding: 40px;
        }

        @media (max-width: 480px) {
          .contact-form-card { padding: 28px 24px; }
        }

        .contact-form-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 20px;
          color: var(--navy);
          margin: 0 0 28px;
        }

        .contact-field {
          margin-bottom: 18px;
        }

        .contact-field label {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
        }

        .contact-field input,
        .contact-field textarea {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--navy);
          padding: 13px 16px;
          border-radius: 12px;
          border: 1px solid #E3DFD9;
          background: var(--paper);
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          box-sizing: border-box;
        }

        .contact-field textarea {
          resize: none;
        }

        .contact-field input:focus,
        .contact-field textarea:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(47, 134, 198, 0.15);
        }

        .contact-submit {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15px;
          color: #fff;
          background: var(--peach);
          border: none;
          border-radius: 100px;
          padding: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }

        .contact-submit:hover:not(:disabled) {
          background: var(--peach-deep);
          transform: translateY(-1px);
        }

        .contact-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .contact-status {
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          margin-top: 16px;
        }

        .contact-status.success { color: #2F8F5B; }
        .contact-status.error { color: var(--crisis-red); }
      `}</style>

      <div className="contact-blob-blue" />
      <div className="contact-blob-peach" />

      <div className="contact-inner">
        {/* LEFT CONTENT */}
        <div>
          <span className="contact-eyebrow">Get in Touch</span>

          <h2 className="contact-heading">
            Need immediate mental health support?
          </h2>

          <p className="contact-intro">
            If you or your loved one is facing an urgent mental health
            concern, our experienced professionals are ready to provide
            guidance, reassurance, and compassionate care.
          </p>

          <div className="contact-channels">
            <a href="tel:911" className="contact-channel urgent">
              <div className="contact-channel-icon">
                <Phone size={19} />
              </div>
              <span className="contact-channel-text">
                <span className="contact-channel-label">Medical emergency</span>
                Call 911
              </span>
            </a>

            <a href="tel:988" className="contact-channel warn">
              <div className="contact-channel-icon">
                <Phone size={19} />
              </div>
              <span className="contact-channel-text">
                <span className="contact-channel-label">Mental health crisis</span>
                Call or text 988
              </span>
            </a>

            <a href="mailto:careteam@dovehealthservices.com" className="contact-channel brand">
              <div className="contact-channel-icon">
                <Mail size={19} />
              </div>
              <span className="contact-channel-text">
                <span className="contact-channel-label">Email</span>
                careteam@dovehealthservices.com
              </span>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=2101+St+Paul+St+Baltimore+MD+21218"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-channel brand"
            >
              <div className="contact-channel-icon">
                <MapPin size={19} />
              </div>
              <span className="contact-channel-text">
                <span className="contact-channel-label">Visit us</span>
                2101 St Paul St, 1st FL, Baltimore MD 21218
              </span>
            </a>
          </div>

          <p className="contact-disclaimer">
            If you are experiencing a medical emergency, call 911
            immediately. For mental health crisis support, call or text 988.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-card">
          <h3 className="contact-form-title">Request an appointment</h3>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label htmlFor="gi-name">Full name</label>
              <input
                id="gi-name"
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full name"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="gi-email">Email address</label>
              <input
                id="gi-email"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Email address"
                required
              />
            </div>

            <div className="contact-field">
              <label htmlFor="gi-phone">Phone number</label>
              <input
                id="gi-phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                type="tel"
                placeholder="Phone number"
              />
            </div>

            <div className="contact-field">
              <label htmlFor="gi-message">How can we help you?</label>
              <textarea
                id="gi-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help you?"
                rows="4"
              />
            </div>

            <button type="submit" className="contact-submit" disabled={loading}>
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
              <p className="contact-status success" role="status">
                <CheckCircle2 size={16} />
                Thanks! We've received your request and will reach out shortly.
              </p>
            )}
            {status === "error" && (
              <p className="contact-status error" role="alert">
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