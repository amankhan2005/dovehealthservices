 import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Nurse Image
import nurseImg from "../assets/Hire-nurse.png";

export default function HomeCareCTA() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-12 bg-white"
    >
      <div className="max-w-9xl mx-auto px-4">


        {/* CTA Card */}
        <div className="relative bg-sky-400 rounded-3xl overflow-hidden shadow-xl">


          {/* Glow Effect */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/20 rounded-full blur-3xl"></div>


          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">


            {/* Left Content */}
            <div className="p-10 md:p-16 text-white flex flex-col justify-center">

              <p className="text-sm uppercase tracking-wide font-semibold mb-3 opacity-90">
                Zenith Care Services
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-5">

                Looking for a <br />
                Professional{" "}
                <span className="font-serif italic">
                  Nurse at Home?
                </span>

              </h2>

              <p className="text-white/90 max-w-lg mb-8">
                We provide skilled nurses, caregivers, and therapists
                for home and hospital care. Get reliable, safe, and
                compassionate healthcare support for your loved ones.
              </p>


              {/* Buttons */}
              <div className="flex flex-wrap gap-4">

                <Link
                  to="/request-nurse"
                  className="bg-white text-pink-600 px-7 py-3 rounded-full font-semibold hover:scale-105 transition"
                >
                  Request a Nurse →
                </Link>

                <Link
                  to="/contact-us"
                  className="border border-white px-7 py-3 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition"
                >
                  Contact Us
                </Link>

              </div>

            </div>


            {/* Right Image */}
            <div className="relative flex items-end justify-center h-full p-0">


              {/* Soft White Background */}
              <div className="absolute inset-0 bg-white/30 blur-lg"></div>


              {/* Nurse Image */}
              <img
                src={nurseImg}
                alt="Professional Nurse"
                className="
                  relative z-10
                  w-full
                  max-w-md
                  md:max-w-lg
                  h-full
                  object-contain
                  object-bottom
                "
              />

            </div>

          </div>

        </div>

      </div>
    </motion.section>
  );
}
