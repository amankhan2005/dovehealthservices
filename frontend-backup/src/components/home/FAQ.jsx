 import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
    {
      q: "What mental health services do you provide?",
      a: "We provide Outpatient Mental Health Clinic (OMHC) services, Psychiatric Rehabilitation Programs (PRP), Family Counseling, and Personal Counseling tailored to individual recovery needs.",
    },
    {
      q: "How can I schedule an appointment?",
      a: "You can book an appointment directly through our website, call our office, or visit our clinic for assistance with scheduling.",
    },
    {
      q: "Are your professionals licensed and certified?",
      a: "Yes, all our clinicians and mental health professionals are licensed, certified, and experienced in evidence-based therapeutic practices.",
    },
    {
      q: "Do you provide services for children and adolescents?",
      a: "Yes, we offer specialized programs designed to support children, adolescents, and families through age-appropriate therapeutic approaches.",
    },
    {
      q: "Is patient information kept confidential?",
      a: "Absolutely. We strictly follow HIPAA guidelines and maintain complete confidentiality and privacy for all our clients.",
    },
    {
      q: "Do you accept insurance?",
      a: "Insurance coverage depends on your provider and plan. Please contact our office to verify your benefits and eligibility.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-32 bg-gradient-to-b from-white to-sky-50/40">

      <div className="max-w-4xl mx-auto px-6">

        {/* ===== SECTION HEADER ===== */}
        <div className="text-center mb-20">

          <span className="text-sm font-semibold tracking-[5px] text-[#F39C6B] uppercase">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Clear and reliable answers to common questions about our
            mental health services, treatment approach, and patient care process.
          </p>

        </div>

        {/* ===== FAQ ACCORDION ===== */}
        <div className="space-y-6">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition"
            >

              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left font-medium text-gray-900"
              >
                {item.q}

                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-sky-600 text-white text-xs transition">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-6 transition-all duration-300 overflow-hidden ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
