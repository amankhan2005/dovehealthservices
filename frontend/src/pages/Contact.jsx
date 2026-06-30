 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .contact-page {
          --navy: #16314F;
          --navy-deep: #0E2138;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --paper: #FBF9F7;
          background: var(--paper);
          font-family: 'Inter', sans-serif;
          overflow: hidden;
        }

        .contact-page h1,
        .contact-page h2,
        .contact-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .contact-header {
          position: relative;
          padding: 110px 0 90px;
          background: var(--navy-deep);
          overflow: hidden;
          text-align: center;
        }

        .contact-header-glow {
          position: absolute;
          top: -140px;
          left: 50%;
          transform: translateX(-50%);
          width: 480px;
          height: 420px;
          border-radius: 50%;
          background: var(--peach);
          opacity: 0.14;
          filter: blur(110px);
        }

        .contact-header-inner {
          position: relative;
          max-width: 720px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contact-eyebrow {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: var(--peach);
          margin: 0 0 18px;
        }

        .contact-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.4rem);
          line-height: 1.15;
          margin: 0 0 18px;
        }

        .contact-h1 em {
          font-style: normal;
          color: var(--peach);
        }

        .contact-header p {
          color: rgba(255, 255, 255, 0.72);
          font-size: 17px;
          line-height: 1.7;
          margin: 0;
        }

        /* ── BODY ── */
        .contact-body {
          padding: 96px 0;
        }

        .contact-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 0.85fr 1.4fr;
          gap: 32px;
          align-items: start;
        }

        @media (max-width: 960px) {
          .contact-grid { grid-template-columns: 1fr; }
        }

        /* ── INFO CARDS ── */
        .contact-info-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 18px;
          padding: 22px;
          text-decoration: none;
          box-shadow: 0 16px 40px -28px rgba(22, 49, 79, 0.25);
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
        }

        .contact-info-card:hover {
          transform: translateY(-3px);
          border-color: var(--blue);
          box-shadow: 0 20px 44px -24px rgba(47, 134, 198, 0.3);
        }

        .contact-info-icon {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--navy);
        }

        .contact-info-card:nth-child(2) .contact-info-icon {
          background: var(--blue);
        }

        .contact-info-card:nth-child(3) .contact-info-icon {
          background: var(--peach-deep);
        }

        .contact-info-label {
          font-size: 12.5px;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
          color: #8C9AA6;
          margin: 0 0 4px;
        }

        .contact-info-value {
          font-size: 15px;
          font-weight: 600;
          color: var(--navy);
          margin: 0;
          line-height: 1.4;
          word-break: break-word;
        }

        /* ── FORM CARD ── */
        .contact-form-card {
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 24px;
          padding: 44px;
          box-shadow: 0 28px 64px -28px rgba(22, 49, 79, 0.22);
        }

        @media (max-width: 600px) {
          .contact-form-card { padding: 28px 22px; }
        }

        .contact-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 12px;
          margin-bottom: 22px;
        }

        .contact-alert.success {
          background: #EAF7EE;
          color: #1E7A3C;
        }

        .contact-alert.error {
          background: #FBEAEA;
          color: #B3261E;
        }

        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .contact-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        @media (max-width: 560px) {
          .contact-form-row { grid-template-columns: 1fr; }
        }

        .contact-field {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-size: 15px;
          color: var(--navy);
          border: 1.5px solid #E5E0DA;
          background: var(--paper);
          border-radius: 14px;
          padding: 14px 16px;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .contact-field::placeholder {
          color: #9AA8B4;
        }

        .contact-field:focus {
          outline: none;
          border-color: var(--blue);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(47, 134, 198, 0.14);
        }

        .contact-captcha {
          background: var(--peach-tint);
          border-radius: 14px;
          padding: 18px 20px;
        }

        .contact-captcha-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--peach-deep);
          margin-bottom: 10px;
        }

        .contact-submit {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15.5px;
          color: #fff;
          background: var(--navy);
          border: none;
          border-radius: 100px;
          padding: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        }

        .contact-submit:hover:not(:disabled) {
          background: var(--blue);
          transform: translateY(-2px);
        }

        .contact-submit:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }
      `}</style>

      {/* HEADER */}
      <section className="contact-header">
        <div className="contact-header-glow" />
        <div className="contact-header-inner">
          <p className="contact-eyebrow">Dove Healthcare Services</p>
          <h1 className="contact-h1">
            Get In <em>Touch</em> With Us
          </h1>
          <p>
            We're here to support your healthcare needs with compassion
            and professional care.
          </p>
        </div>
      </section>

      {/* BODY */}
      <section className="contact-body">
        <div className="contact-inner">
          <div className="contact-grid">

            {/* INFO */}
            <div className="contact-info-list">
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
                const Icon = item.icon;

                return (
                  <a
                    key={i}
                    href={item.link}
                    target={i === 2 ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="contact-info-card"
                  >
                    <div className="contact-info-icon">
                      <Icon size={20} color="#fff" />
                    </div>
                    <div>
                      <p className="contact-info-label">{item.label}</p>
                      <p className="contact-info-value">{item.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* FORM */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="contact-form-card"
            >
              {success && (
                <div className="contact-alert success">
                  <CheckCircle size={18} />
                  Message sent successfully.
                </div>
              )}

              {error && (
                <div className="contact-alert error">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">

                <div className="contact-form-row">
                  <input
                    name="firstName"
                    placeholder="First Name"
                    required
                    onChange={handleChange}
                    value={form.firstName}
                    className="contact-field"
                  />

                  <input
                    name="lastName"
                    placeholder="Last Name"
                    required
                    onChange={handleChange}
                    value={form.lastName}
                    className="contact-field"
                  />
                </div>

                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  required
                  onChange={handleChange}
                  value={form.email}
                  className="contact-field"
                />

                <input
                  name="phone"
                  placeholder="Phone"
                  required
                  onChange={handleChange}
                  value={form.phone}
                  className="contact-field"
                />

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Message"
                  required
                  onChange={handleChange}
                  value={form.message}
                  className="contact-field"
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
                    className="contact-field"
                    placeholder="Your answer"
                  />
                </div>

                <button
                  disabled={!captchaValid || loading}
                  className="contact-submit"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send size={18} />
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>
    </main>
  );
}