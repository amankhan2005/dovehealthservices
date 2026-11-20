import { useRef, useState } from "react";
import MathCaptcha from "../components/home/MathCaptcha.jsx";
import PageHero from "../components/ui/PageHero";

const BOOK_CSS = `
  .book-grid { align-items: start; }

  .book-left { position: sticky; top: calc(var(--dh-header-h) + 32px); }
  .book-left__text { margin-top: 24px; }
  .book-left__text > p:first-child { font-size: 1.2rem; line-height: 1.6; color: var(--dh-ink); }

  .book-form-card {
    display: grid;
    gap: 18px;
    padding: clamp(24px, 4vw, 48px);
    border: 1px solid var(--dh-line);
    border-radius: var(--dh-radius-lg);
    background: #fff;
  }

  .book-form-card__title {
    margin-bottom: 8px;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--dh-line);
    font-size: 1.35rem;
  }

  @media (max-width: 959px) {
    .book-left { position: static; }
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
      <section className="dh-section dh-section--paper">
        <div className="dh-container dh-grid book-grid">
          {/* LEFT */}
          <div className="dh-col-5 book-left" data-reveal>
            <h2 className="dh-h2">Schedule Your Mental Health Consultation</h2>
            <div className="dh-prose book-left__text">
              <p>Take the first step toward recovery and emotional well-being.</p>
              <p>Complete the form and our team will contact you shortly.</p>
            </div>
          </div>

          {/* FORM */}
          <div className="dh-col-7 book-form-card" data-reveal style={{ "--dh-reveal-delay": "120ms" }}>
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
                aria-label="Full Name"
                value={form.name}
                onChange={handleChange}
                type="text"
                placeholder="Full Name"
                className="dh-input"
              />

              <div className="dh-form-row">
                <input
                  name="email"
                  aria-label="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email Address"
                  className="dh-input"
                />

                <input
                  name="phone"
                  aria-label="Phone Number"
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
                  aria-label="Service"
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
                  aria-label="Date"
                  value={form.date}
                  onChange={handleChange}
                  type="date"
                  className="dh-input"
                />
              </div>

              <textarea
                name="message"
                aria-label="Additional Notes"
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
