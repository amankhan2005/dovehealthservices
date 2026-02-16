 import { Link } from "react-router-dom";

export default function WellnessRecovery() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 overflow-hidden bg-[#38bdf8]">

        {/* glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>


        <div className="relative max-w-7xl mx-auto px-6">


          <p className="text-white/80 mb-3 text-sm tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; Wellness Recovery
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            Comprehensive Wellness Recovery Program
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
            Supporting Total Wellness in Recovery
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            Mental health recovery involves more than emotional healing —
            it includes physical health, psychological well-being,
            and overall life stability.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed">

            At Dove Healthcare Services, we provide comprehensive care
            to support every aspect of an individual’s wellness journey.

          </p>


        </div>


      </section>



      {/* CARDS */}
      <section className="py-24 bg-sky-50">


        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">


          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">


            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Holistic Mental Health Care
            </h3>


            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Our programs address emotional, psychological,
              and physical health to ensure complete recovery.

            </p>


          </div>



          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">


            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Improving Physical Health
            </h3>


            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              We help individuals manage physical conditions such as
              diabetes, heart disease, and lifestyle-related challenges.

            </p>


          </div>



          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">


            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Removing Healthcare Barriers
            </h3>


            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Our integrated care approach improves access to treatment,
              increases lifespan, and enhances quality of life.

            </p>


          </div>


        </div>


      </section>



      {/* FINAL TEXT */}
      <section className="py-24">


        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-serif text-[#38bdf8] mb-6">
            Achieving Long-Term Wellness
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed">

            Comprehensive wellness programs improve recovery outcomes,
            helping individuals live longer, healthier, and more fulfilling lives.

            Dove Healthcare Services is committed to providing
            compassionate, professional care every step of the way.

          </p>


        </div>


      </section>



      {/* CTA */}
      <section className="py-24 text-white text-center bg-[#F39C6B]">


        <div className="max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-4">
            Begin Your Wellness Journey Today
          </h2>


          <p className="text-white/90 text-lg mb-10">
            Contact Dove Healthcare Services to learn more.
          </p>



          <Link
            to="/contact-us"
            className="inline-block px-10 py-4 rounded-lg font-semibold shadow-lg transition hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundColor: "#38bdf8",
              color: "white"
            }}
          >

            Contact Us Today

          </Link>


        </div>


      </section>



    </div>

  );

}
