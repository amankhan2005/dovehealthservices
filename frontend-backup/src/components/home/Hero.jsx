 import { useState, useEffect } from "react";
import heroBg from "../../assets/hero.png";

export default function Hero() {
  const slides = [
    {
      label: "WELCOME TO DOVE HEALTHCARE SERVICES",
      title: "Mind Wellness,\nLife Success",
      desc: "We are a dedicated recovery center specializing in mental health and substance use treatment. Our comprehensive services include."
    },
    {
      label: "WELCOME TO DOVE HEALTHCARE SERVICES",
      title: "Empowering Minds,\nTransforming Life",
      desc: "We provide professional outpatient mental health services including OMHC, PRP programs, and personalized counseling support."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
     <section
  className="relative min-h-screen flex items-center bg-cover bg-center"
  style={{ backgroundImage: `url(${heroBg})` }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/0 to-transparent"></div>

  <div className="relative w-full">
    <div className="max-w-7xl mx-auto px-6 md:px-10 py-28 text-white font-poppins">

      {/* Label */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-[2px] bg-white"></div>
        <p className="uppercase tracking-[4px] text-sm opacity-90">
          {slides[index].label}
        </p>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] whitespace-pre-line">
        {slides[index].title}
      </h1>

      {/* Description */}
      <p className="mt-8 max-w-2xl text-lg text-white/90 leading-relaxed">
        {slides[index].desc}
      </p>

      {/* CTA */}
      {/* CTA */}
<div className="mt-10 flex flex-wrap gap-4">

  {/* Book Appointment */}
  <a
    href="/book-appointment"
    className="inline-block bg-[#F39C6B] hover:bg-orange-500 text-white px-10 py-4 rounded-full font-semibold transition shadow-lg"
  >
    Book Appointment
  </a>

  {/* Call Us Now */}
  <a
    href="tel:+14109882335"
    className="inline-block bg-white hover:bg-gray-100 text-[#F39C6B] px-10 py-4 rounded-full font-semibold transition shadow-lg border border-white"
  >
    Call Us Now
  </a>

</div>


      

    </div>
  </div>
</section>

  );
}
