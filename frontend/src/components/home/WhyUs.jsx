 import {
  FaUserShield,
  FaSyncAlt,
  FaPhoneAlt,
  FaHeart,
} from "react-icons/fa";

export default function PeaceOfMind() {
  const cards = [
    {
      icon: <FaUserShield />,
      title: "Skilled & Trusted Staff",
      desc: "All professionals are certified, trained, and verified to deliver safe and reliable care.",
    },
    {
      icon: <FaSyncAlt />,
      title: "Consistent Personal Care",
      desc: "We provide dedicated caregivers who understand patient needs and preferences.",
    },
    {
      icon: <FaPhoneAlt />,
      title: "24/7 Support Service",
      desc: "Our support team is available anytime to assist patients and families.",
    },
    {
      icon: <FaHeart />,
      title: "Compassionate Care",
      desc: "Quality healthcare services for children, adults, seniors, and special care patients.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16">
          <span className="font-serif italic font-medium">
            Why
          </span>{" "}
          Choose Zenithcare
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {cards.map((item, i) => (
            <div
              key={i}
              className="
                relative
                bg-white/70
                backdrop-blur-lg
                rounded-2xl
                border border-pink-200/50
                p-7
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-3
                hover:shadow-2xl
                hover:border-pink-400
                group
                overflow-hidden
              "
            >

              {/* Glossy Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-pink-100/30 opacity-0 group-hover:opacity-100 transition duration-300"></div>

              {/* Icon */}
              <div
                className="
                  w-10 h-10
                  bg-gradient-to-br from-sky-300 to-pink-300
                  text-white
                  rounded-full
                  flex
                  items-center
                  justify-center
                  mb-4
                  text-lg
                  transition
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-bold text-lg mb-2 text-black relative z-10">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-600 leading-relaxed relative z-10">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
