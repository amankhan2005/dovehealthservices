 import { Link } from "react-router-dom";

export default function PersonalCounselling() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 bg-[#38bdf8] overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6">


          <p className="text-white/90 mb-3 tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; Services &gt; Personal Counseling
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white">
            Personal Counseling Services
          </h1>


          <div className="flex items-center gap-4 mt-6">

            <div className="w-20 h-1 bg-[#F39C6B] rounded-full"></div>

            <div className="w-3 h-3 bg-white/40 rounded-full"></div>

          </div>

        </div>

      </section>



      {/* INTRO */}
      <section className="py-20">

        <div className="max-w-4xl mx-auto px-6 text-center">


          <h2 className="text-3xl font-serif text-[#38bdf8] mb-6">
            Confidential Support for Emotional Wellness
          </h2>


          <p className="text-gray-700 text-lg leading-relaxed">

            Personal counseling provides a safe, confidential space
            where individuals can explore emotions, overcome challenges,
            and build healthier, more fulfilling lives.

          </p>

        </div>

      </section>



      {/* SERVICES */}
      <section className="py-24 bg-sky-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">


          <GlossyCard
            title="Emotional Support"
            items={[
              "Safe, confidential environment",
              "Non-judgmental guidance",
              "Professional counseling support"
            ]}
          />


          <GlossyCard
            title="Evidence-Based Therapy"
            items={[
              "Cognitive Behavioral Therapy (CBT)",
              "Mindfulness techniques",
              "Trauma-informed care"
            ]}
          />


          <GlossyCard
            title="Symptom Management"
            items={[
              "Stress reduction",
              "Anxiety management",
              "Depression support"
            ]}
          />


          <GlossyCard
            title="Personal Growth"
            items={[
              "Self-confidence building",
              "Goal setting",
              "Personal development"
            ]}
          />


          <GlossyCard
            title="Relationship Improvement"
            items={[
              "Communication skills",
              "Healthy boundaries",
              "Conflict resolution"
            ]}
          />


          <GlossyCard
            title="Long-Term Wellness"
            items={[
              "Emotional stability",
              "Improved mental health",
              "Sustained recovery"
            ]}
          />


        </div>

      </section>



      {/* CTA */}
      <section className="py-24 bg-[#F39C6B] text-center text-white relative overflow-hidden">


        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>


        <div className="relative max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-4">
            Begin Your Counseling Journey
          </h2>


          <p className="mb-8 text-lg text-white/90">
            Schedule a confidential counseling session today.
          </p>



          <Link
            to="/book-appointment"
            className="inline-block px-10 py-4 rounded-lg font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition"
            style={{
              backgroundColor: "#38bdf8"
            }}
          >

            Book Appointment

          </Link>


        </div>

      </section>



    </div>

  );

}



/* SAME GLOSSY CARD */

function GlossyCard({ title, items }) {

  return (

    <div className="group relative">


      <div className="absolute -inset-1 bg-[#38bdf8] rounded-2xl blur opacity-10 group-hover:opacity-30 transition"></div>


      <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">


        <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-transparent opacity-40"></div>


        <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
          {title}
        </h3>


        <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


        <ul className="space-y-2 text-gray-700">

          {items.map((item, index) => (
            <li key={index}>• {item}</li>
          ))}

        </ul>


      </div>


    </div>

  );

}
