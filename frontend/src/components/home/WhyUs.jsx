 import { CheckCircle2 } from "lucide-react";
import whyImg from "../../assets/whyus.jpg";

export default function WhyUs() {
  const points = [
    "Personalized, client-centered recovery planning",
    "Licensed and highly experienced mental health specialists",
    "Evidence-based therapeutic approaches",
    "Safe, confidential and supportive care environment",
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">

      {/* Soft Background Blobs */}
      <div className="absolute -top-24 -left-24 w-[400px] h-[400px]  rounded-full blur-3xl opacity-40"></div>
      <div className="absolute -bottom-24 -right-24 w-[400px] h-[400px]   rounded-full blur-3xl opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Centered Label */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-[6px] text-[#F39C6B] uppercase">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Excellence in Mental Wellness & Recovery Support
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-stretch">

          {/* IMAGE */}
          <div className="relative group h-full">
            <div className="rounded-3xl overflow-hidden shadow-xl h-full">
              <img
                src={whyImg}
                alt="Mental health therapy consultation"
                className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>

           
          </div>

          {/* CONTENT */}
          <div className="flex flex-col justify-center">

            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              We combine clinical expertise with compassionate care to deliver
              comprehensive mental health services designed for long-term
              recovery, emotional resilience, and personal empowerment.
            </p>

            <div className="space-y-6">
              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 group"
                >
                  <CheckCircle2
                    size={24}
                    className="text-[#F39C6B] mt-1 transition-transform duration-300 group-hover:scale-110"
                  />
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
