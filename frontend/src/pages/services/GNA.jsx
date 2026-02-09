 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Hero Image
import heroImg from "../../assets/gna.jpg";

export default function GNA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 py-24">


        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">


          {/* Left Content */}
          <div>

            <p className="text-pink-500 font-semibold mb-4">
              Professional Geriatric Nursing Assistants
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-[#1f2937] mb-6">

              Geriatric <br />
              Nursing{" "}
              <span className="font-serif italic font-medium">
                Assistants
              </span>

            </h1>


            <p className="text-gray-600 max-w-lg mb-8">
              Zenith Care Services provides trained Geriatric Nursing
              Assistants who support patients with daily care,
              hygiene, mobility, and comfort in home and healthcare
              settings.
            </p>


            <div className="flex gap-4">

              <Link
                to="/request-nurse"
                className="bg-pink-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
              >
                Request a GNA →
              </Link>

              <Link
                to="/contact-us"
                className="border border-pink-500 text-pink-500 px-7 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
              >
                Contact Us
              </Link>

            </div>

          </div>


          {/* Right Image */}
          <div>

            <img
              src={heroImg}
              alt="Graduate Nurse Assistant"
              className="w-full rounded-3xl shadow-xl object-cover"
            />

          </div>

        </div>


        {/* INFO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">


          {/* Services */}
          <div className="bg-sky-50 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Our GNA Services
            </h3>

            <ul className="space-y-3 text-gray-700">

              <li>✔ Basic Nursing Support</li>
              <li>✔ Personal Hygiene Assistance</li>
              <li>✔ Mobility & Transfer Support</li>
              <li>✔ Patient Comfort & Safety</li>
              <li>✔ Meal Assistance & Feeding Support</li>
              <li>✔ Daily Activity Monitoring</li>
              <li>✔ Reporting Health Changes</li>

            </ul>

          </div>


          {/* Who Needs GNA */}
          <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow">

            <h3 className="text-2xl font-bold mb-4 text-gray-900">
              Who Can Benefit from Our GNAs?
            </h3>

            <p className="text-gray-700 leading-relaxed mb-6">
              Our Geriatric Nursing Assistants are ideal for elderly
              patients and individuals who need daily care,
              personal support, and comfort assistance.
            </p>

            <p className="text-gray-700 leading-relaxed">
              They work under the guidance of Registered Nurses
              to ensure high-quality and compassionate care.
            </p>

          </div>

        </div>


        {/* FAQ SECTION */}
        <div className="max-w-5xl mx-auto mb-24">

          <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Geriatric Nursing Assistant (GNA) – FAQs
          </h2>


          <div className="space-y-4">


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                What services do your GNAs provide?
              </summary>
              <p className="mt-2 text-gray-600">
                Our GNAs assist with hygiene, mobility, feeding,
                comfort, daily monitoring, and basic nursing care.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Can I hire a GNA for home care?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we provide GNAs for in-home daily care and
                long-term patient support.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Are your GNAs trained and verified?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, all our GNAs are trained, background-checked,
                and supervised by senior nurses.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                Do you offer full-time and part-time GNA services?
              </summary>
              <p className="mt-2 text-gray-600">
                Yes, we offer flexible full-time, part-time, and
                short-term care plans.
              </p>
            </details>


            <details className="bg-gray-50 p-5 rounded-xl shadow cursor-pointer">
              <summary className="font-semibold text-gray-900">
                How can I request a GNA?
              </summary>
              <p className="mt-2 text-gray-600">
                You can request a GNA through our online form or
                by contacting our support team.
              </p>
            </details>

          </div>

        </div>


        {/* CTA */}
        <div className="text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Need a Geriatric Nursing Assistant Today?
          </h2>

          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our compassionate GNAs are ready to provide daily care,
            comfort, and professional support for your loved ones.
          </p>


          <div className="flex justify-center gap-4">

            <Link
              to="/request-nurse"
              className="bg-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
            >
              Request a GNA →
            </Link>

            <Link
              to="/contact-us"
              className="border border-pink-500 text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-pink-500 hover:text-white transition"
            >
              Contact Us
            </Link>

          </div>

        </div>


      </div>
    </motion.section>
  );
}
