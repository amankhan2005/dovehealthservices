 import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function FAQ() {
  const faqs = [
  {
    q: "What services does Zenithcare provide?",
    a: "We provide certified nurses, nursing assistants, and therapists for home and hospital care.",
  },
  {
    q: "How can I request a nurse or caregiver?",
    a: "You can contact us through our website, phone, or WhatsApp to request care services.",
  },
  {
    q: "Are your nurses and caregivers certified?",
    a: "Yes, all our nurses and caregivers are certified, trained, and professionally verified.",
  },
  {
    q: "Will I get the same nurse for regular care?",
    a: "We try our best to assign the same caregiver for consistent and personalized care.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on the type of care, duration, and medical needs. Contact us for a custom quote.",
  },
  {
    q: "How quickly can a nurse be assigned?",
    a: "In most cases, we can arrange a qualified nurse within 24 to 48 hours.",
  },
];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#FFF3F7]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently{" "}
            <span className="italic font-serif font-medium">
              Asked Questions
            </span>
          </h2>

          <p className="text-gray-600 mb-8 max-w-md">
            Find quick answers to common questions about our healthcare
            services and support.
          </p>

          <button className="px-6 py-3 rounded-full border border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white transition">
            Contact Us
          </button>
        </div>

        {/* Right Side */}
        <div className="space-y-4">

          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900"
              >
                {item.q}

                <span className="w-7 h-7 flex items-center justify-center rounded-full bg-sky-500 text-white text-xs">
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 pb-5 opacity-100"
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

 
 
