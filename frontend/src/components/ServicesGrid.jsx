import React, { useRef, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Users,
  BookOpen,
  Home,
  Smile,
  ArrowRight,
  Star,
} from "lucide-react";

// ✅ Import all images locally
import abaImage from "../assets/services/aba.webp";
import parentImage from "../assets/services/parent.jpg";
import behaviourImage from "../assets/services/behaviour.jpg";
import socialImage from "../assets/services/social.jpeg";
import dailyImage from "../assets/services/daily.jpg";
import homeImage from "../assets/services/home.png";

const services = [
  {
    id: 1,
    title: "ABA Therapy",
    desc: "Individualized programs targeting communication, social skills, adaptive behavior, and learning through data-driven assessments and consistent reinforcement.",
    img: abaImage,
    icon: Heart,
    color: "from-rose-500 to-pink-500",
  },
  {
    id: 2,
    title: "Parent Training",
    desc: "Empower caregivers with practical techniques to support learning, manage behavior, and create predictable routines at home.",
    img: parentImage,
    icon: Users,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 3,
    title: "Behaviour Support",
    desc: "Positive behaviour support plans that identify triggers and use teaching strategies to replace challenging behaviours effectively.",
    img: behaviourImage,
    icon: BookOpen,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    title: "Social Skills Groups",
    desc: "Structured groups helping children practice conversation, sharing, and teamwork through interactive activities and guided feedback.",
    img: socialImage,
    icon: Smile,
    color: "from-amber-500 to-orange-500",
  },
  {
    id: 5,
    title: "Daily Living Skills",
    desc: "Practical routines teaching independence in dressing, eating, self-care, and safety using visual supports and step-by-step guidance.",
    img: dailyImage,
    icon: Home,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 6,
    title: "Home-based Support",
    desc: "In-home sessions helping families embed learning in daily life, building communication and independence within natural environments.",
    img: homeImage,
    icon: Heart,
    color: "from-teal-500 to-cyan-500",
  },
];

export default function AutismServicesGrid() {
  const containerRef = useRef(null);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoScrollRef = useRef(null);

  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 640) setItemsPerPage(1);
      else if (w < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (window.innerWidth < 640) {
      const el = containerRef.current;
      if (!el) return;

      autoScrollRef.current = setInterval(() => {
        const cards = el.querySelectorAll("[data-card]");
        if (!cards.length) return;

        const maxIndex = Math.max(0, cards.length - itemsPerPage);
        let newIndex = currentIndex + 1;
        if (newIndex > maxIndex) newIndex = 0;

        const target = cards[newIndex];
        const containerRect = el.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        const leftOffset = targetRect.left - containerRect.left + el.scrollLeft;

        el.scrollTo({ left: leftOffset, behavior: "smooth" });
        setCurrentIndex(newIndex);
      }, 3500);
    }
    return () => clearInterval(autoScrollRef.current);
  }, [itemsPerPage, currentIndex]);

  function scrollPage(direction = 1) {
    const el = containerRef.current;
    if (!el) return;
    const cards = el.querySelectorAll("[data-card]");
    if (!cards.length) return;

    const maxIndex = Math.max(0, cards.length - itemsPerPage);
    let newIndex = currentIndex + direction;
    if (newIndex > maxIndex) newIndex = 0;
    if (newIndex < 0) newIndex = maxIndex;

    const target = cards[newIndex];
    const containerRect = el.getBoundingClientRect();
    const targetRect = target.getBoundingClientRect();
    const leftOffset = targetRect.left - containerRect.left + el.scrollLeft;

    el.scrollTo({ left: leftOffset, behavior: "smooth" });
    setCurrentIndex(newIndex);
  }

  return (
    <section className="w-full flex justify-center py-16 sm:py-16 lg:py-16 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/30 to-amber-100/30 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-orange-50/40 to-amber-50/40 rounded-full filter blur-3xl -z-10"></div>

      <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8">
        <header className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-orange-700 px-5 py-2.5 rounded-full text-sm font-medium">
            <Star className="w-4 h-4" />
            Comprehensive ABA Services
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Our Autism Services
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our range of evidence-based{" "}
            <span className="text-orange-600 font-semibold">
              therapy programs
            </span>
            , skill-building, and parent coaching services designed to support
            every child's unique journey.
          </p>

          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto rounded-full"></div>
        </header>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollPage(-1)}
            className="hidden md:flex items-center justify-center absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-orange-300 hover:bg-orange-50 focus:outline-none transition-all duration-300 group"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollPage(1)}
            className="hidden md:flex items-center justify-center absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-orange-300 hover:bg-orange-50 focus:outline-none transition-all duration-300 group"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-orange-600 transition-colors" />
          </button>

          <div
            ref={containerRef}
            className="flex gap-6 overflow-x-auto md:overflow-hidden pb-6 md:pb-0 snap-x snap-mandatory"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {services.map((s) => {
              const IconComponent = s.icon;
              return (
                <article
                  key={s.id}
                  data-card
                  className="flex-shrink-0 w-[calc(100%-2rem)] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] group snap-start"
                >
                  <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col h-full overflow-hidden border border-gray-100 hover:border-orange-200 transform hover:-translate-y-2">
                    <div className="h-56 sm:h-64 w-full relative overflow-hidden">
                      <img
                        src={s.img}
                        alt={s.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent"></div>

                      <div
                        className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${s.color} rounded-2xl flex items-center justify-center shadow-xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>

                      <h3 className="absolute left-5 bottom-5 text-white text-xl sm:text-2xl font-bold drop-shadow-lg">
                        {s.title}
                      </h3>
                    </div>

                    <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                      <p className="text-gray-700 leading-relaxed text-base">
                        {s.desc}
                      </p>

                      <a
                        href="/services"
                        aria-label={`Learn more about ${s.title}`}
                        className="inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl active:scale-95 group/btn"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="flex justify-center gap-2 mt-8 md:hidden">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  const el = containerRef.current;
                  const cards = el.querySelectorAll("[data-card]");
                  if (cards[idx]) {
                    const containerRect = el.getBoundingClientRect();
                    const targetRect = cards[idx].getBoundingClientRect();
                    const leftOffset =
                      targetRect.left - containerRect.left + el.scrollLeft;
                    el.scrollTo({ left: leftOffset, behavior: "smooth" });
                    setCurrentIndex(idx);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-orange-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        div::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
