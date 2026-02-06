import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaUserNurse, FaBriefcaseMedical } from "react-icons/fa";

import heroPerson from "../../assets/hero-main.png";

export default function Hero() {
  return (
    <section
      className="
        relative
        min-h-[75vh] md:h-[75vh]

        flex
         py-16 md:py-0
         items-center
        bg-[#FFF3F7]
        overflow-hidden
      "
    >
      {/* Soft Pink Glow */}
      <div className="absolute right-32 top-32 w-[520px] h-[520px] bg-[#E85C9A]/35 rounded-full blur-[130px]" />

      {/* Main Container */}
      <div className="relative max-w-7xl mx-auto px-6 w-full h-full flex flex-col md:flex-row">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            w-full md:w-1/2
            flex flex-col
            justify-center
            items-center md:items-start
            text-center md:text-left
            space-y-6
          "
        >
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#1F2933] leading-[1.15] tracking-tight">
            Trusted
            <span className="block font-serif italic font-medium text-[#E85C9A] mt-1">
              In-Home Healthcare
            </span>
            <span className="block font-extrabold text-[#1F2933]">
              Services
            </span>
          </h1>

          {/* Description */}
          <p className="text-base font-normal md:text-lg text-[#1F2933] leading-relaxed max-w-xl">
            Zenithcare provides professional nurses and therapists for home and
            hospital care. We deliver reliable, compassionate, and personalized
            healthcare services to ensure comfort, safety, and peace of mind for
            every family.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 pt-2 justify-center md:justify-start">
            {/* Primary */}
            <Link to="/request-nurse">
              <button
                className="
                  flex items-center gap-2
                  bg-[#1FA6D9] text-white
                  px-8 py-3.5 rounded-full
                  font-semibold
                  shadow-lg
                  hover:bg-[#0B8EC2]
                  hover:scale-105
                  transition-all
                "
              >
                <FaUserNurse />
                Request a Nurse
              </button>
            </Link>

            {/* Secondary */}
            <Link to="/careers">
              <button
                className="
                  flex items-center gap-2
                  border-2 border-[#E85C9A]
                  text-[#E85C9A]
                  px-8 py-3.5 rounded-full
                  font-semibold
                  hover:bg-pink-50
                  hover:scale-105
                  transition-all
                "
              >
                <FaBriefcaseMedical />
                Join Our Team
              </button>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT IMAGE (Hidden on Mobile) */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="
            hidden md:flex
            relative
            w-1/2
            h-full
            justify-center
            items-end
          "
        >
          {/* Glow */}
          <div className="absolute w-[420px] h-[420px] md:w-[520px] md:h-[520px] bg-[#E85C9A]/25 rounded-full blur-[110px]" />

          {/* Image */}
          <img
            src={heroPerson}
            alt="Healthcare Professional"
            className="
              relative
              h-full
              object-contain
            "
          />
        </motion.div>
      </div>
    </section>
  );
}
