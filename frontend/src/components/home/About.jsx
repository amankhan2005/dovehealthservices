 import { motion } from "framer-motion";
import { FaUserNurse, FaHeart, FaHospital } from "react-icons/fa";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-16"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* Container */}
        <div className="bg-[#FFF7FB] rounded-[32px] px-6 md:px-16 py-20 text-center shadow-sm">

          {/* Tag */}
          <p className="text-sm font-medium text-[#E85C9A] mb-4">
            Our Mission & Values
          </p>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#111827] leading-tight">
            Trusted Care
            <br />
            <span className="font-serif italic font-medium">
              For Every Family
            </span>
          </h2>

          {/* Paragraph */}
          <p className="max-w-xl mx-auto mt-6 text-base text-black leading-relaxed">

            Zenithcare provides professional nursing and therapy services focused
            on comfort, safety, and patient well-being. Our certified team delivers
            reliable care at home and in hospitals with dignity and respect.

          </p>

          {/* Core Values */}
          <p className="mt-10 text-sm font-medium text-gray-800">
            Our Core Values
          </p>

          {/* Cards */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">

            <ValueCard
              icon={<FaUserNurse />}
              text="Certified Nurses"
            />

            <ValueCard
              icon={<FaHeart />}
              text="Compassionate Care"
            />

            <ValueCard
              icon={<FaHospital />}
              text="Home & Hospital Support"
            />

            <ValueCard
              icon={<FaUserNurse />}
              text="Personalized Treatment"
            />

          </div>

        </div>

      </div>
    </motion.section>
  );
}

/* ================= Value Card ================= */

function ValueCard({ icon, text }) {
  return (
    <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full border border-pink-200 shadow-sm hover:shadow-md transition text-sm font-medium text-gray-900">

      <span className="text-[#1FA6D9] text-lg">
        {icon}
      </span>

      {text}

    </div>
  );
}
