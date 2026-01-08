 import React, { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useSettings } from "../context/SettingsContext";

export default function ContactUs() {
  const { settings } = useSettings();

  /* ================= CONTACT DETAILS ================= */
  const CONTACT_EMAIL = settings?.email || "info@gentleheartshha.com";
  const CONTACT_PHONE = settings?.phone || "+1 (508) 873-5711";
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
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  /* ================= SUBMIT ================= */
  async function handleSubmit(e) {
    e.preventDefault();
    if (!captchaValid || loading) return;

    setLoading(true);
    setError("");
    setSuccess(false);

    const API_BASE =
  import.meta.env.VITE_API_URL || "https://hearthomeagency.onrender.com";


    // ⏱️ timeout safety
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        signal: controller.signal,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.message || "Failed to send message");
      }

      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

      regenerateCaptcha();
    } catch (err) {
      if (err.name === "AbortError") {
        setError("Server is taking too long. Please try again.");
      } else {
        setError(err.message || "Something went wrong.");
      }
    } finally {
      clearTimeout(timeout);
      setLoading(false);
    }
  }

  return (
    <main className="bg-[#FFF5F8] py-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ================= CONTACT INFO ================= */}
          <div className="space-y-5">
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
                  className="bg-white rounded-2xl border p-5 flex gap-4 shadow"
                >
                  <div className="w-11 h-11 bg-[#AF3059] rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{item.label}</p>
                    {item.label === "Location" ? (
                      <p className="text-sm font-medium">
                        231 Main Street,<br />Cherry Valley, MA 01611
                      </p>
                    ) : (
                      <p className="text-sm font-medium whitespace-nowrap">
                        {item.value}
                      </p>
                    )}
                  </div>
                </a>
              );
            })}
          </div>

          {/* ================= FORM ================= */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-xl">
            {success && (
              <div className="mb-4 flex items-center gap-2 bg-green-50 text-green-700 p-3 rounded-lg">
                <CheckCircle className="w-5 h-5" />
                Message sent successfully.
              </div>
            )}

            {error && (
              <div className="mb-4 bg-red-50 text-red-700 p-3 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  placeholder="First Name"
                  required
                  onChange={handleChange}
                  value={form.firstName}
                  className="input"
                />
                <input
                  name="lastName"
                  placeholder="Last Name"
                  required
                  onChange={handleChange}
                  value={form.lastName}
                  className="input"
                />
              </div>

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                onChange={handleChange}
                value={form.email}
                className="input"
              />
              <input
                name="phone"
                placeholder="Phone"
                required
                onChange={handleChange}
                value={form.phone}
                className="input"
              />

              <textarea
                name="message"
                rows="4"
                placeholder="Your Message"
                required
                onChange={handleChange}
                value={form.message}
                className="input resize-none"
              />

              {/* CAPTCHA */}
              <div className="bg-[#AF3059]/5 p-4 rounded-xl">
                <p className="text-sm font-semibold mb-2">
                  Security Check: {num1} + {num2} = ?
                </p>
                <input
                  value={captcha}
                  onChange={(e) => setCaptcha(e.target.value)}
                  className="input"
                />
              </div>

              <button
                disabled={!captchaValid || loading}
                className="w-full bg-[#AF3059] text-white py-4 rounded-xl font-semibold flex justify-center gap-2 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .input {
          width: 100%;
          border: 1px solid #E5E7EB;
          border-radius: 0.75rem;
          padding: 0.9rem 1rem;
        }
        .input:focus {
          border-color: #AF3059;
          outline: none;
        }
      `}</style>
    </main>
  );
}
