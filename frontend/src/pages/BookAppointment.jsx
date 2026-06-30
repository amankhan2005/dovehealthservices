import { useState } from "react";
import appointmentImg from "../assets/appointment.jpg";

export default function BookAppointment() {


  const API =
    import.meta.env.VITE_API_URL;


  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");


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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@500;700;800&family=Inter:wght@400;500;600&display=swap');

        .book-page {
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

        .book-page h1,
        .book-page h2,
        .book-page h3 {
          font-family: 'Manrope', sans-serif;
        }

        /* ── HEADER ── */
        .book-header {
          position: relative;
          padding: 110px 0 80px;
          background: var(--navy-deep);
          overflow: hidden;
        }

        .book-header-glow {
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

        .book-header-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .book-breadcrumb {
          font-size: 13px;
          letter-spacing: 2px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0 0 18px;
        }

        .book-h1 {
          font-weight: 800;
          letter-spacing: -1px;
          color: #fff;
          font-size: clamp(2.2rem, 1.5rem + 2.8vw, 3.6rem);
          line-height: 1.15;
          margin: 0;
        }

        .book-h1-rule {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
        }

        .book-h1-rule .bar {
          width: 64px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
        }

        .book-h1-rule .dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        /* ── MAIN ── */
        .book-main {
          position: relative;
          padding: 96px 0;
          background: var(--paper);
          overflow: hidden;
        }

        .book-blob {
          position: absolute;
          top: -100px;
          left: -120px;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          background: var(--blue);
          filter: blur(100px);
          opacity: 0.12;
        }

        .book-inner {
          position: relative;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .book-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }

        @media (max-width: 960px) {
          .book-grid { grid-template-columns: 1fr; gap: 44px; }
        }

        /* ── LEFT ── */
        .book-eyebrow-bar {
          width: 44px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          margin-bottom: 22px;
        }

        .book-left h2 {
          font-weight: 800;
          letter-spacing: -0.5px;
          color: var(--navy);
          font-size: clamp(1.7rem, 1.3rem + 1.6vw, 2.3rem);
          line-height: 1.2;
          margin: 0 0 20px;
        }

        .book-left p {
          color: #51606E;
          font-size: 16.5px;
          line-height: 1.8;
          margin: 0 0 18px;
        }

        .book-img-wrap {
          position: relative;
          margin-top: 32px;
        }

        .book-img-glow {
          position: absolute;
          inset: -6%;
          border-radius: 50%;
          background: var(--blue);
          opacity: 0.1;
          filter: blur(50px);
          z-index: 0;
        }

        .book-img-wrap img {
          position: relative;
          z-index: 1;
          width: 100%;
          height: 350px;
          object-fit: cover;
          border-radius: 24px;
          box-shadow: 0 24px 56px -24px rgba(22, 49, 79, 0.3);
          transition: transform 0.6s ease;
        }

        .book-img-wrap:hover img {
          transform: scale(1.04);
        }

        /* ── FORM CARD ── */
        .book-form-card {
          position: relative;
          background: #fff;
          border: 1px solid #EFEAE5;
          border-radius: 24px;
          padding: 44px;
          box-shadow: 0 28px 64px -28px rgba(22, 49, 79, 0.22);
        }

        @media (max-width: 600px) {
          .book-form-card { padding: 28px 22px; }
        }

        .book-form-card h3 {
          font-weight: 800;
          color: var(--navy);
          font-size: 1.4rem;
          margin: 0 0 26px;
        }

        .book-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14.5px;
          font-weight: 500;
          padding: 14px 16px;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .book-alert.success {
          background: #EAF7EE;
          color: #1E7A3C;
        }

        .book-alert.error {
          background: #FBEAEA;
          color: #B3261E;
        }

        .book-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .book-field {
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

        .book-field::placeholder {
          color: #9AA8B4;
        }

        .book-field:focus {
          outline: none;
          border-color: var(--blue);
          background: #fff;
          box-shadow: 0 0 0 4px rgba(47, 134, 198, 0.14);
        }

        select.book-field {
          color: var(--navy);
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' viewBox='0 0 14 9' fill='none'%3E%3Cpath d='M1 1L7 7L13 1' stroke='%2351606E' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
          padding-right: 40px;
        }

        textarea.book-field {
          height: 110px;
          resize: none;
        }

        .book-submit {
          width: 100%;
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 15.5px;
          color: #fff;
          background: var(--peach-deep);
          border: none;
          border-radius: 100px;
          padding: 16px;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease, opacity 0.2s ease;
        }

        .book-submit:hover:not(:disabled) {
          background: var(--navy);
          transform: translateY(-2px);
        }

        .book-submit:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
      `}</style>


{/* HEADER */}
<section className="book-header">
  <div className="book-header-glow" />
  <div className="book-header-inner">
    <p className="book-breadcrumb">Dove Healthcare Services, LLC &gt; Book Appointment</p>
    <h1 className="book-h1">Book an Appointment</h1>
    <div className="book-h1-rule">
      <span className="bar" />
      <span className="dot" />
    </div>
  </div>
</section>


{/* MAIN */}
<section className="book-main">
  <div className="book-blob" />
  <div className="book-inner">
    <div className="book-grid">

      {/* LEFT */}
      <div className="book-left">

        <div className="book-eyebrow-bar" />

        <h2>Schedule Your Mental Health Consultation</h2>

        <p>Take the first step toward recovery and emotional well-being.</p>

        <p>Complete the form and our team will contact you shortly.</p>

        <div className="book-img-wrap">
          <div className="book-img-glow" />
          <img
            src={appointmentImg}
            alt="Appointment"
          />
        </div>

      </div>


      {/* FORM */}
      <div className="book-form-card">

        <h3>Appointment Request Form</h3>

        {success && (
          <div className="book-alert success">
            Appointment submitted successfully
          </div>
        )}

        {error && (
          <div className="book-alert error">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="book-form"
        >

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
            className="book-field"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            className="book-field"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone Number"
            className="book-field"
          />

          <select
            name="service"
            value={form.service}
            onChange={handleChange}
            className="book-field"
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
            className="book-field"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Additional Notes"
            className="book-field"
          ></textarea>

          <button
            type="submit"
            disabled={loading}
            className="book-submit"
          >
            {loading
              ? "Submitting..."
              : "Submit Appointment Request"}
          </button>

        </form>

      </div>

    </div>
  </div>
</section>


    </div>
  );
}