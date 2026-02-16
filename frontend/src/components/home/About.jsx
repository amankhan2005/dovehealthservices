 import { useEffect, useRef, useState } from "react";
import aboutImg from "../../assets/about.jpg";

export default function About() {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-white">
      <div
        ref={ref}
        className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-stretch transition-all duration-1000 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* IMAGE */}
        <div className="relative h-full">
          <img
            src={aboutImg}
            alt="Professional mental health consultation"
            className="w-full h-full object-cover rounded-3xl shadow-xl"
          />
        </div>

        {/* CONTENT */}
        <div className="flex flex-col justify-center">
          <span className="text-sm font-semibold tracking-[4px] text-[#F39C6B] uppercase">
            About Dove Healthcare
          </span>

          <h2 className="mt-6 text-5xl font-semibold text-gray-900 leading-tight">
            Dedicated to Mental Wellness, Recovery & Lifelong Support
          </h2>

          <p className="mt-8 text-gray-600 text-lg leading-relaxed">
            Dove Healthcare Services, LLC is a certified outpatient mental health 
            clinic in Maryland providing comprehensive OMHC services, 
            Psychiatric Rehabilitation Programs (PRP), DUI education, and 
            behavioral health support. Our evidence-based approach focuses on 
            personalized care, long-term recovery, and empowering individuals 
            to live stable and meaningful lives.
          </p>

          <div className="mt-10">
            <a
              href="/about-us"
              className="inline-flex items-center bg-[#F39C6B] hover:bg-orange-500 text-white px-8 py-3 rounded-full transition duration-300 shadow-md hover:shadow-lg"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
