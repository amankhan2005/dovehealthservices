 import { motion } from "framer-motion";
import { useState } from "react";

/* Image */
import careerImg from "../assets/career-nurse.webp";

/* API (Safe) */
const API = import.meta.env.VITE_API_URL?.replace(/\/$/, "");

console.log("API URL:", API);

export default function ApplyNurse() {

  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    location: "",
    availability: "Full-Time",
    phone: "",
    experience: "",
    resume: null
  });


  /* Input Change */

  const handleChange = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

  };


  /* File Change */

  const handleFile = (e) => {

    setForm({
      ...form,
      resume: e.target.files[0]
    });

  };


  /* Submit */

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!API) {
      return setMsg("❌ API not configured");
    }

    if (!form.resume) {
      return setMsg("Please upload resume");
    }

    setLoading(true);
    setMsg("");

    try {

      const data = new FormData();

      Object.keys(form).forEach((key) => {
        data.append(key, form[key]);
      });


      /* API Call */

      const res = await fetch(`${API}/api/career/apply`, {
        method: "POST",
        body: data
      });


      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.message || "Submit failed");
      }


      setMsg("✅ Application submitted successfully");


      /* Reset */

      setForm({
        name: "",
        email: "",
        location: "",
        availability: "Full-Time",
        phone: "",
        experience: "",
        resume: null
      });

      document.getElementById("resume").value = "";


    } catch (err) {

      console.error("Submit Error:", err);

      setMsg("❌ Failed. Try again later");

    } finally {
      setLoading(false);
    }

  };


  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-pink-50 overflow-hidden"
    >


      {/* ================= HERO ================= */}
      <div className="bg-blue-50 py-24 overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


          {/* LEFT */}
          <div className="relative">

            <div className="absolute -left-20 top-20 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl"></div>

            <p className="text-pink-400 font-semibold mb-4 relative z-10">
              Zenith Care Services Careers
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6 relative z-10">

              Join Our <br />
              <span className="font-serif italic text-blue-500">
                Nursing Team
              </span>

            </h1>

            <p className="text-gray-600 max-w-lg text-lg mb-8 relative z-10">

              Build a meaningful healthcare career with Zenith Care
              Services. Enjoy flexible schedules, career growth,
              and a supportive professional environment.

            </p>

            <a
              href="#apply-form"
              className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white px-7 py-3 rounded-full font-semibold transition relative z-10"
            >
              Apply Now →
            </a>

          </div>


          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            <img
              src={careerImg}
              alt="Nursing Career"
              className="w-full max-w-md rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>

      </div>



      {/* ================= FORM ================= */}
      <div
        id="apply-form"
        className="max-w-4xl mx-auto px-4 py-24"
      >

        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8 md:p-12">


          {/* Heading */}
          <div className="text-center mb-10">

            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Nurse Application Form
            </h2>

            <p className="text-gray-600 text-sm">
              Apply for RN, LPN, CNA, GNA & Caregiver Positions
            </p>

          </div>


          {/* FORM */}
          <form
            className="space-y-5"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >


            <Input
              label="Full Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />

            <Input
              label="Email Address"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />

            <Input
              label="Current Location"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="City, State"
            />

            <SelectInput
              value={form.availability}
              onChange={handleChange}
            />

            <Input
              label="Phone Number"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />

            <Input
              label="Years of Experience"
              name="experience"
              value={form.experience}
              onChange={handleChange}
              placeholder="e.g. 2 Years"
            />


            {/* Resume */}
            <div>

              <label className="label">Upload Resume</label>

              <input
                id="resume"
                type="file"
                className="clean-file"
                onChange={handleFile}
                required
              />

            </div>


            {/* Message */}
            {msg && (
              <p className="text-center text-sm font-medium">
                {msg}
              </p>
            )}


            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Apply Now"}
            </button>


          </form>

        </div>

      </div>


      {/* ================= STYLES ================= */}
      <style>{`

        .label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #374151;
          margin-bottom: 0.3rem;
        }

        .clean-input {
          width: 100%;
          padding: 0.7rem 0.9rem;
          border: 1px solid #E5E7EB;
          border-radius: 0.5rem;
          background: white;
          font-size: 0.95rem;
          transition: all 0.2s ease;
        }

        .clean-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59,130,246,0.1);
        }

        .clean-file {
          width: 100%;
          padding: 0.6rem;
          border: 1px dashed #E5E7EB;
          border-radius: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
        }

      `}</style>


    </motion.section>
  );
}



/* ================= COMPONENTS ================= */

function Input({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange
}) {
  return (
    <div>

      <label className="label">{label}</label>

      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="clean-input"
        onChange={onChange}
        required
      />

    </div>
  );
}


function SelectInput({ value, onChange }) {
  return (
    <div>

      <label className="label">Availability</label>

      <select
        name="availability"
        value={value}
        className="clean-input"
        onChange={onChange}
      >

        <option>Full-Time</option>
        <option>Part-Time</option>
        <option>Contract</option>

      </select>

    </div>
  );
}
