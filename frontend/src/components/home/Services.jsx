 import { Link } from "react-router-dom";

import omhcImg from "../../assets/services/omhc.jpg";
import prpImg from "../../assets/services/prp.jpg";
import familyImg from "../../assets/services/family.jpg";
import personalImg from "../../assets/services/personal.jpeg";

export default function Services() {
  const services = [
    {
      title: "Outpatient Mental Health Clinic (OMHC)",
      desc: "Comprehensive therapy and psychiatric services for adults and children focused on long-term emotional stability, structured treatment planning, and holistic mental health recovery support.",
      img: omhcImg,
      link: "/services/omhc",
    },
    {
      title: "Psychiatric Rehabilitation Program (PRP)",
      desc: "Structured rehabilitation services designed to build life skills, enhance independence, improve coping mechanisms, and promote sustainable personal development in daily living.",
      img: prpImg,
      link: "/services/prp",
    },
    {
      title: "Family Counseling",
      desc: "Guided therapeutic sessions that strengthen communication, resolve interpersonal conflicts, rebuild trust, and restore emotional harmony within families.",
      img: familyImg,
      link: "/services/family-counselling",
    },
    {
      title: "Personal Counseling",
      desc: "Individualized therapy sessions tailored to emotional well-being, resilience building, trauma recovery, and long-term personal growth strategies.",
      img: personalImg,
      link: "/services/personal-counselling",
    },
  ];

  return (
    <section className="py-20 bg-white"> 
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Section Label */}
        <span className="text-sm font-semibold tracking-[5px] text-[#F39C6B] uppercase">
          Our Services
        </span>

        {/* Heading */}
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Specialist Mental Health Consultation Services
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed">
          Comprehensive behavioral healthcare designed to promote recovery,
          emotional resilience, and long-term personal growth.
        </p>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#f8f8f8] rounded-3xl p-4 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-2xl mb-6">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-66 object-cover"
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-black mb-3 leading-snug">
                {service.title}
              </h3>

              {/* Description (3 Line Clamp) */}
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                {service.desc}
              </p>

              {/* Read More */}
              <Link
                to={service.link}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#F39C6B] hover:gap-3 transition-all duration-300"
              >
                Read More
                <span className="w-5 h-5 rounded-full bg-[#F39C6B] text-white flex items-center justify-center text-xs">
                  →
                </span>
              </Link>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
