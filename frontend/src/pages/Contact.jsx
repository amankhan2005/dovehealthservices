 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

export default function ContactUs() {
  const { settings } = useSettings();

  /* ================= CONTACT DETAILS ================= */
  const CONTACT_EMAIL =
    settings?.email || "info@gentleheartshomehealthcare.com";

  const CONTACT_PHONE =
    settings?.phone || "+1 (508) 873-5711";

  const CONTACT_ADDRESS =
    settings?.address ||
    "231 Main Street, Cherry Valley, MA 01611, United States";

  const MAP_LINK =
    settings?.mapLink ||
    `https://maps.google.com/?q=${encodeURIComponent(CONTACT_ADDRESS)}`;

  const phoneHref = `tel:${CONTACT_PHONE.replace(/[^0-9+]/g, "")}`;

  /* ================= FORM STATE ================= */
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

  /* ================= CAPTCHA ================= */
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [captcha, setCaptcha] = useState("");
  const [captchaValid, setCaptchaValid] = useState(false);

  useEffect(() => {
    setNum1(Math.floor(Math.random() * 9) + 1);
    setNum2(Math.floor(Math.random() * 9) + 1);
  }, []);

  useEffect(() => {
    setCaptchaValid(Number(captcha) === num1 + num2);
  }, [captcha, num1, num2]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!captchaValid) return;

    setLoading(true);
    setSuccess(false);
    setError("");

    try {
      const API_BASE =
        import.meta.env.VITE_API_URL || "https://hearthomeagency.onrender.com";

      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      setCaptcha("");
      setNum1(Math.floor(Math.random() * 9) + 1);
      setNum2(Math.floor(Math.random() * 9) + 1);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative bg-[#FFF5F8] py-20 overflow-x-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-block px-5 py-2 bg-[#AF3059]/10 text-[#AF3059] rounded-full text-xs font-semibold mb-5">
            Contact Gentle Hearts
          </span>

          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Let’s Start a
            <span className="block text-[#AF3059]">
              Caring Conversation
            </span>
          </h1>
        </motion.div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* CONTACT INFO */}
          <div className="space-y-5">
            {/* EMAIL */}
            <motion.a
              href={`mailto:${CONTACT_EMAIL}`}
              className="bg-white rounded-2xl border border-gray-200 shadow-md"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="w-11 h-11 bg-[#AF3059] rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <p className="font-medium text-gray-900 text-[13px] sm:text-sm whitespace-nowrap">
                    {CONTACT_EMAIL}
                  </p>
                </div>
              </div>
            </motion.a>

            {/* PHONE */}
            <motion.a
              href={phoneHref}
              className="bg-white rounded-2xl border border-gray-200 shadow-md"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="w-11 h-11 bg-[#AF3059] rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <p className="font-medium text-gray-900 text-[13px] sm:text-sm whitespace-nowrap">
                    {CONTACT_PHONE}
                  </p>
                </div>
              </div>
            </motion.a>

            {/* LOCATION (2 LINES) */}
            <motion.a
              href={MAP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl border border-gray-200 shadow-md"
            >
              <div className="flex items-start gap-4 p-5">
                <div className="w-11 h-11 bg-[#AF3059] rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Location</p>

                  {/* ✅ ADDRESS WITH BR */}
                  <p className="font-medium text-gray-900 text-[13px] sm:text-sm leading-snug">
                    231 Main Street,<br />
                    Cherry Valley, MA 01611
                  </p>
                </div>
              </div>
            </motion.a>
          </div>

          {/* FORM */}
          <motion.div className="lg:col-span-2 bg-white rounded-3xl shadow-2xl p-6 border border-gray-200">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input name="firstName" placeholder="First Name" required onChange={handleChange} className="input" />
              <input name="lastName" placeholder="Last Name" required onChange={handleChange} className="input" />
              <input name="email" type="email" placeholder="Email" required onChange={handleChange} className="input" />
              <input name="phone" placeholder="Phone" required onChange={handleChange} className="input" />
              <textarea name="message" rows="4" placeholder="Your Message" required onChange={handleChange} className="input resize-none" />

              <button className="w-full bg-[#AF3059] text-white py-4 rounded-xl font-semibold">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #E5E7EB;
          border-radius: 0.75rem;
          padding: 0.85rem 1rem;
          font-size: 0.95rem;
        }
        .input:focus {
          border-color: #AF3059;
          outline: none;
        }
      `}</style>
    </main>
  );
}
