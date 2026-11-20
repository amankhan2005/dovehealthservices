 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";
import PageHero from "../components/ui/PageHero";
import ArrowIcon from "../components/ui/ArrowIcon";

const CONTACT_PAGE_CSS = `
  .contact-channels {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    border-bottom: 1px solid var(--dh-line);
  }

  @media (min-width: 900px) {
    .contact-channels { grid-template-columns: minmax(0, 1.35fr) minmax(0, 0.9fr) minmax(0, 1.15fr); }
    .contact-info-card + .contact-info-card { border-left: 1px solid var(--dh-line); }
  }

  .contact-info-card {
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 6px 16px;
    padding: clamp(28px, 4vw, 44px) clamp(0px, 3vw, 40px) clamp(28px, 4vw, 44px) 0;
    color: var(--dh-ink);
    text-decoration: none;
  }

  @media (min-width: 900px) {
    .contact-info-card + .contact-info-card { padding-left: clamp(24px, 3vw, 40px); }
  }

  @media (max-width: 899px) {
    .contact-info-card + .contact-info-card { border-top: 1px solid var(--dh-line); }
  }

  .contact-info-label {
    margin: 0 0 6px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--dh-dove);
  }

  .contact-info-value {
    margin: 0;
    font-size: clamp(1.05rem, 0.98rem + 0.3vw, 1.22rem);
    font-weight: 600;
    line-height: 1.4;
    letter-spacing: -0.012em;
    color: var(--dh-ink);
    overflow-wrap: break-word;
    transition: color 0.2s;
  }

  .contact-info-arrow { align-self: end; color: var(--dh-muted); transition: color 0.2s, transform 0.25s var(--dh-ease); }
  .contact-info-card:hover .contact-info-value { color: var(--dh-brand); }
  .contact-info-card:hover .contact-info-arrow { color: var(--dh-brand); transform: translateX(3px); }

  .contact-form-section { background: var(--dh-paper); }

  .contact-form-card {
    display: grid;
    gap: 18px;
    max-width: 760px;
    margin: 0 auto;
    padding: clamp(24px, 4vw, 48px);
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius-lg);
    background: #fff;
  }

  .contact-captcha {
    display: grid;
    gap: 10px;
    padding: 16px;
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius);
    background: var(--dh-paper);
  }

  .contact-captcha-label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
    font-weight: 600;
    color: var(--dh-ink);
  }

  .contact-captcha-label svg { color: var(--dh-brand); }
`;

export default function ContactUs() {

  const { settings } = useSettings();

  const CONTACT_EMAIL =
    settings?.email || "careteam@dovehealthservices.com";

  const CONTACT_PHONE =
    settings?.phone || " +1 (410) 988-2335";

  const CONTACT_ADDRESS =
    settings?.address ||
"2101 St Paul St, 1st Fl Baltimore MD 21218";


  const MAP_LINK =
    settings?.mapLink ||
    `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`;


  const phoneHref =
    `tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`;



  /* FORM STATE */

  const [form, setForm] = useState({

    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",

  });


  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const [error, setError] = useState("");



  /* CAPTCHA */

  const [num1, setNum1] = useState(0);

  const [num2, setNum2] = useState(0);

  const [captcha, setCaptcha] = useState("");

  const [captchaValid, setCaptchaValid] =
    useState(false);



  useEffect(() => {

    regenerateCaptcha();

  }, []);



  const regenerateCaptcha = () => {

    setNum1(Math.floor(Math.random() * 9) + 1);

    setNum2(Math.floor(Math.random() * 9) + 1);

    setCaptcha("");

    setCaptchaValid(false);

  };



  useEffect(() => {

    setCaptchaValid(Number(captcha) === num1 + num2);

  }, [captcha, num1, num2]);



  function handleChange(e) {

    setForm({

      ...form,

      [e.target.name]: e.target.value,

    });

  }



  /* SUBMIT */

  async function handleSubmit(e) {

    e.preventDefault();

    if (!captchaValid || loading) return;


    setLoading(true);

    setError("");

    setSuccess(false);


    const API_BASE =
      import.meta.env.VITE_API_URL ||
      "https://dovehealthservices.onrender.com";


    try {

      const res = await fetch(`${API_BASE}/api/contact`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(form),

      });


      if (!res.ok)
        throw new Error("Failed");


      setSuccess(true);


      setForm({

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",

      });


      regenerateCaptcha();

    } catch {

      setError("Something went wrong.");

    } finally {

      setLoading(false);

    }

  }



  return (
    <main className="contact-page">
      <style>{CONTACT_PAGE_CSS}</style>

      {/* HEADER */}
      <PageHero
        eyebrow="Dove Health"
        title={
          <>
            Get In <em>Touch</em> With Us
          </>
        }
      >
        We're here to support your healthcare needs with compassion
        and professional care.
      </PageHero>

      {/* BODY */}
      <section>
        <div className="dh-container">
          {/* INFO */}
          <div className="contact-channels" data-reveal>
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: CONTACT_EMAIL,
                  link: `mailto:${CONTACT_EMAIL}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: CONTACT_PHONE,
                  link: phoneHref,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: CONTACT_ADDRESS,
                  link: MAP_LINK,
                },
              ].map((item, i) => {
                return (
                  <a
                    key={i}
                    href={item.link}
                    target={i === 2 ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-info-card"
                  >
                    <div className="contact-info-text">
                      <p className="contact-info-label">{item.label}</p>
                      <p className="contact-info-value">{item.value}</p>
                    </div>
                    <span className="contact-info-arrow" aria-hidden="true">
                      <ArrowIcon />
                    </span>
                  </a>
                );
              })}
          </div>
        </div>
      </section>

      <section className="dh-section dh-section--tight contact-form-section">
        <div className="dh-container">
            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="contact-form-card"
            >
              {success && (
                <div className="dh-alert dh-alert--success">
                  <CheckCircle size={18} />
                  Message sent successfully.
                </div>
              )}

              {error && (
                <div className="dh-alert dh-alert--error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="dh-form">
                <div className="dh-form-row">
                  <input
                    name="firstName"
                    aria-label="First Name"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                    value={form.firstName}
                    className="dh-input"
                  />

                  <input
                    name="lastName"
                    aria-label="Last Name"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                    value={form.lastName}
                    className="dh-input"
                  />
                </div>

                <input
                  name="email"
                  aria-label="Email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={form.email}
                  className="dh-input"
                />

                <input
                  name="phone"
                  aria-label="Phone"
                  placeholder="Phone"
                  required
                  onChange={handleChange}
                  value={form.phone}
                  className="dh-input"
                />

                <textarea
                  name="message"
                  aria-label="Message"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={form.message}
                  className="dh-input"
                  style={{ resize: "none" }}
                />

                <div className="contact-captcha">
                  <div className="contact-captcha-label">
                    <ShieldCheck size={16} />
                    Security Check: {num1} + {num2}
                  </div>

                  <input
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    className="dh-input"
                    placeholder="Your answer"
                    aria-label="Your answer"
                  />
                </div>

                <button
                  disabled={!captchaValid || loading}
                  className="dh-btn dh-btn--primary dh-btn--block"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
        </div>
      </section>
    </main>
  );
}
