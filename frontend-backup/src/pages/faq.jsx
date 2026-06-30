 import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FAQ() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
    >
      <div className="max-w-6xl mx-auto px-4 py-24">


        {/* HEADER */}
        <div className="text-center mb-20">

          <p className="text-pink-400 font-semibold mb-3">
            Zenith Care Services Support
          </p>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-blue-400">Questions</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Find answers about our services, nurse booking,
            and career opportunities.
          </p>

        </div>


        {/* FAQ LIST */}
        <div className="space-y-5 mb-24">


          {/* ITEM */}
          {faqData.map((item, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-all duration-500 open:shadow-xl"
            >

              <summary className="flex justify-between items-center p-6 cursor-pointer font-semibold text-gray-900">

                {item.q}

                {/* Arrow */}
                <span className="text-blue-400 transition-transform duration-300 group-open:rotate-180">
                  ▼
                </span>

              </summary>


              {/* Answer */}
              <div className="px-6 pb-6 text-gray-600 transition-all duration-500 ease-in-out">

                <p className="opacity-0 max-h-0 group-open:opacity-100 group-open:max-h-40 transition-all duration-500">
                  {item.a}
                </p>

              </div>

            </details>
          ))}

        </div>


        {/* CTA */}
        <div className="bg-pink-400 rounded-3xl p-10 md:p-14 text-white text-center shadow-xl">

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Still Have Questions?
          </h2>

          <p className="opacity-90 max-w-xl mx-auto mb-8">
            Our support team is ready to help you.
          </p>


          <div className="flex justify-center gap-4 flex-wrap">

            <Link
              to="/contact-us"
              className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:scale-105 transition"
            >
              Contact Us →
            </Link>

            <Link
              to="/request-nurse"
              className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition"
            >
              Request a Nurse
            </Link>

          </div>

        </div>


      </div>
    </motion.section>
  );
}


/* FAQ DATA */
const faqData = [
  {
    q: "How can I request a nurse or caregiver?",
    a: "You can request a nurse by filling out the Request Nurse form or contacting our support team.",
  },
  {
    q: "What services does Zenith Care Services provide?",
    a: "We provide RN, LPN, CNA, GNA, and PT/OT services for home and hospital care.",
  },
  {
    q: "Are your nurses certified and verified?",
    a: "Yes, all our professionals are licensed, trained, and background-verified.",
  },
  {
    q: "How quickly can I get a nurse after booking?",
    a: "Usually within 24–48 hours after confirmation.",
  },
  {
    q: "Do you offer short-term and long-term care?",
    a: "Yes, we offer flexible care plans based on patient needs.",
  },
  {
    q: "How can I apply for a nursing job?",
    a: "You can apply through our Careers page by submitting your documents.",
  },
  {
    q: "How much do your services cost?",
    a: "Pricing depends on service type and duration. Contact us for a quote.",
  },
  {
    q: "How can I contact support?",
    a: "You can reach us via Contact page, phone, or email anytime.",
  },
];
