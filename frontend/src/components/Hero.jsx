 import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import banner1 from "../assets/Banner/slider1.webp";
import banner2 from "../assets/Banner/slider2.webp";
import banner3 from "../assets/Banner/slider3.webp";

export default function Hero() {
  const images = useRef([banner1, banner2, banner3]).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Preload current + next slides
  useEffect(() => {
    const nextIndex = (currentIndex + 1) % images.length;
    [currentIndex, nextIndex].forEach((i) => {
      const url = images[i];
      if (url) {
        const img = new Image();
        img.src = url;
      }
    });
  }, [currentIndex, images]);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay, currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  const handleDotClick = (index) => setCurrentIndex(index);

  return (
    <header id="home" className="relative w-full h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {images.map((src, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-600 ease-linear transform will-change-opacity will-change-transform ${
                isActive ? "opacity-100 scale-100" : "opacity-0 scale-105 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <img
                src={src}
                alt={`Autism ABA Partners - Slide ${index + 1}`}
                loading={isActive ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={isActive ? "high" : "low"}
                className="w-full h-full object-cover block"
                style={{ backfaceVisibility: "hidden" }}
              />

              {/* ✅ Add a soft black backdrop overlay */}
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          );
        })}
      </div>

      {/* Hero Content (text sits on top of images) */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center text-white px-4 sm:px-6 h-full">
        <div className="max-w-5xl animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">Autism Support & Therapy</span>
            <br />
            <span className="text-[#F57C00]">Caring, Evidence-Based</span>
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto mb-8 leading-relaxed">
            Personalized therapy, parent training, and school support
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
            <a
              href="/contact-us"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#2E7D32] hover:border-white backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
            >
              <span className="relative">Book Free Consultation</span>
              <svg
                className="relative w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>

            <a
              href="/services"
              className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/80 text-white rounded-full text-lg font-semibold hover:bg-white hover:text-[#2E7D32] hover:border-white backdrop-blur-sm transition-all duration-200 transform hover:scale-105"
            >
              <span>Explore Services</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute inset-x-0 top-1/2 z-20 flex items-center justify-between px-4 pointer-events-none">
        <button
          onClick={handlePrev}
          className="pointer-events-auto rounded-full bg-transparent border border-white/25 p-3 text-white hover:bg-white/10 transition"
          aria-label="Previous slide"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto rounded-full bg-transparent border border-white/25 p-3 text-white hover:bg-white/10 transition"
          aria-label="Next slide"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 rounded-full transition-all ${i === currentIndex ? "bg-white" : "bg-white/30 hover:scale-110"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 700ms ease-out; }
        .will-change-opacity { will-change: opacity; }
        .will-change-transform { will-change: transform; }
      `}</style>
    </header>
  );
}
