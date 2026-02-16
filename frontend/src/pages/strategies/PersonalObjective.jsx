 import { Link } from "react-router-dom";

export default function PersonalObjective() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 overflow-hidden bg-[#38bdf8]">

        {/* glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6">


          <p className="text-white/80 mb-3 text-sm tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; Personal Objective
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            Personal Objective in Mental Health Recovery
          </h1>


          <div className="flex items-center gap-4 mt-6">

            <div
              className="w-20 h-1 rounded-full"
              style={{ backgroundColor: "#F39C6B" }}
            />

            <div className="w-3 h-3 rounded-full bg-white/40"></div>

          </div>


        </div>

      </section>



      {/* INTRO */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-serif text-[#38bdf8] mb-6">
            Creating Meaningful Life Goals
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            Individuals living with mental health conditions can continue
            setting and achieving meaningful personal objectives.

            Recovery is not only about symptom management but also about
            building a fulfilling and independent life.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed">

            Personal goals provide motivation, direction, and hope,
            helping individuals move forward confidently.

          </p>


        </div>

      </section>



      {/* CARDS SECTION */}
      <section className="py-24 bg-sky-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">



          {/* CARD 1 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">

            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Setting Personal Goals
            </h3>

            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Individuals can pursue goals related to career, education,
              relationships, and personal growth.

            </p>

          </div>



          {/* CARD 2 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">

            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Managing Symptoms
            </h3>

            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Treatment, therapy, and structured routines help individuals
              maintain emotional stability and focus.

            </p>

          </div>



          {/* CARD 3 */}
          <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition">

            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Professional Support
            </h3>

            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Our mental health professionals guide and support individuals
              throughout their recovery journey.

            </p>

          </div>


        </div>

      </section>



      {/* FINAL TEXT */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-serif text-[#38bdf8] mb-6">
            Achieving Long-Term Success
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed">

            With proper treatment and support, individuals can live meaningful,
            productive, and independent lives.

            Dove Healthcare Services is committed to helping every individual
            achieve recovery and wellness.

          </p>


        </div>

      </section>



      {/* CTA */}
      <section className="py-24 text-white text-center bg-[#F39C6B]">

        <div className="max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-4">
            Start Your Recovery Journey
          </h2>


          <p className="text-white/90 text-lg mb-10">
            Contact Dove Healthcare Services today.
          </p>



          <Link
            to="/contact-us"
            className="inline-block px-10 py-4 rounded-lg font-semibold shadow-lg transition hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundColor: "#38bdf8",
              color: "white"
            }}
          >

            Contact Us

          </Link>


        </div>

      </section>



    </div>

  );

}
