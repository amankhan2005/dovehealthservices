 import React from "react";
import { FaArrowRight } from "react-icons/fa";

/**
 * ServiceCard – clean, modern, responsive
 */
export default function ServiceCard({
  img,
  title = "Service Title",
  desc = "Short description of the service goes here.",
  link = "#",
}) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 h-full border border-gray-100">
      {/* Image with gradient & title overlay */}
      <div className="relative w-full h-56 md:h-48 lg:h-56 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        <h3 className="absolute bottom-4 left-5 text-xl md:text-2xl font-bold text-white drop-shadow-md">
          {title}
        </h3>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col justify-between flex-1">
        <p className="text-gray-700 text-base mb-4">
          {desc}
        </p>
        <a
          href={link}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          Learn More <FaArrowRight className="w-4 h-4" />
        </a>
      </div>
    </article>
  );
}
