import { useRef, useState } from "react";
import appointmentImg from "../assets/appointment.jpg";
import MathCaptcha from "../components/home/MathCaptcha.jsx";
import PageHero from "../components/ui/PageHero";

const BOOK_CSS = `
  .book-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(44px, 6vw, 80px);
    align-items: start;
  }

  @media (min-width: 1024px) {
    .book-grid { grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr); }
    .book-left { position: sticky; top: calc(var(--dh-header-h) + 32px); }
  }

  .book-left__text { margin-top: 20px; }
  .book-left__text > p:first-child { font-size: 1.15rem; color: var(--dh-ink); }

  .book-left__media { margin-top: 40px; max-width: 520px; }
  .book-left__media img { --dh-ratio: 4 / 3; }

  .book-form-card {
    padding: clamp(26px, 4vw, 44px);
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius-lg);
    background: #fff;
    box-shadow: var(--dh-shadow-lg);
    display: grid;
    gap: 18px;
  }

  .book-form-card__title { font-size: 1.6rem; margin-bottom: 6px; }

  @media (max-width: 1023px) {
    .book-left__media { margin-top: 28px; }
    .book-left__media img { --dh-ratio: 16 / 9; }
  }
`;

export default function BookAppointment() {


  const API =
    import.meta.env.VITE_API_URL;


  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  const captchaRef = useRef(null);
  const [captchaOk, setCaptchaOk] = useState(false);


  const [form, setForm] =
    useState({

      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",

    });



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
    setError("");
    setSuccess(false);


    try {

      const res =
        await fetch(`${API}/api/appointment`, {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },

          body:
            JSON.stringify(form),

        });


      const data =
        await res.json();


      if (!res.ok)
        throw new Error(
          data.message
        );


      setSuccess(true);


      setForm({

        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",

      });

      captchaRef.current?.regenerate();
      setCaptchaOk(false);


    }

    catch (err) {

      setError(
        err.message ||
        "Submission failed"
      );

    }

    finally {

      setLoading(false);

    }

  }



  return (
    <div className="book-page">
      <style>{BOOK_CSS}</style>

      {/* HEADER */}
      <PageHero breadcrumb="Dove Health > Book Appointment" title="Book an Appointment" />

      {/* MAIN */}
      <section className="dh-section">
        <div className="dh-container book-grid">
          {/* LEFT */}
          <div className="book-left" data-reveal>
            <span className="dh-accent-bar" aria-hidden="true" />
            <h2 className="dh-h2">Schedule Your Mental Health Consultation</h2>
            <div className="dh-prose book-left__text">
              <p>Take the first step toward recovery and emotional well-being.</p>
              <p>Complete the form and our team will contact you shortly.</p>
            </div>

            <div className="dh-media book-left__media">
              <img
                src={appointmentImg}
                alt="Appointment"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="book-form-card" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
            <h3 className="dh-h3 book-form-card__title">Appointment Request Form</h3>

            {success && (
              <div className="dh-alert dh-alert--success">
                Appointment submitted successfully
              </div>
            )}

            {error && (
              <div className="dh-alert dh-alert--error">
                {error}
              </div>
            )}

            <form
              onSubmit={handleSubmit}
              className="dh-form"
            >
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="dh-input"
              />

              <div className="dh-form-row">
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="dh-input"
                />

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="Phone Number"
                  className="dh-input"
                />
              </div>

              <div className="dh-form-row">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="dh-input"
                >
                  <option>Select Service</option>
                  <option>OMHC Services</option>
                  <option>PRP Program</option>
                  <option>Family Counseling</option>
                  <option>Personal Counseling</option>
                </select>

                <input
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className="dh-input"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Additional Notes"
                className="dh-input"
              ></textarea>

              <MathCaptcha
                ref={captchaRef}
                onValidChange={setCaptchaOk}
              />

              <button
                type="submit"
                disabled={loading || !captchaOk}
                className="dh-btn dh-btn--primary dh-btn--block"
              >
                {loading
                  ? "Submitting..."
                  : "Submit Appointment Request"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
