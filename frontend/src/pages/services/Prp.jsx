 import { Link } from "react-router-dom";

export default function Prp() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 bg-[#38bdf8] overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6">


          <p className="text-white/90 mb-3 tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; Services &gt; PRP
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white">
            Psychiatric Rehabilitation Program (PRP)
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
            Building Skills for Independent Living
          </h2>


          <p className="text-gray-700 text-lg leading-relaxed">

            Our Psychiatric Rehabilitation Program helps individuals
            develop essential life skills, improve social functioning,
            and achieve independence.

          </p>

        </div>

      </section>



      {/* SERVICES */}
      <section className="py-24 bg-sky-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">


          <GlossyCard
            title="Life Skills Development"
            items={[
              "Personal care routines",
              "Time management skills",
              "Household management"
            ]}
          />


          <GlossyCard
            title="Social Skills Enhancement"
            items={[
              "Communication skills",
              "Relationship building",
              "Community integration"
            ]}
          />


          <GlossyCard
            title="Emotional Support"
            items={[
              "Stress management",
              "Self-regulation",
              "Problem-solving skills"
            ]}
          />


          <GlossyCard
            title="Career Support"
            items={[
              "Job readiness",
              "Interview preparation",
              "Career planning"
            ]}
          />


          <GlossyCard
            title="Educational Support"
            items={[
              "Vocational training",
              "Education assistance",
              "Skill development"
            ]}
          />


          <GlossyCard
            title="Independent Living"
            items={[
              "Transportation training",
              "Financial literacy",
              "Self-advocacy"
            ]}
          />


        </div>

      </section>



      {/* CTA */}
      <section className="py-24 bg-[#F39C6B] text-center text-white relative overflow-hidden">


        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>


        <div className="relative max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-4">
            Start PRP Services Today
          </h2>


          <p className="mb-8 text-lg text-white/90">
            Take the first step toward independence and recovery.
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



/* SAME GLOSSY CARD COMPONENT */

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
