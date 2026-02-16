 import { Link } from "react-router-dom";

export default function DoctorVisits() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 overflow-hidden bg-[#38bdf8]">

        {/* glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>


        <div className="relative max-w-7xl mx-auto px-6">


          <p className="text-white/80 mb-3 text-sm tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; Doctor Visits
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            Collaborative Doctor Visits & Treatment Planning
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
            Working Together for Better Treatment Outcomes
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            Successful mental health treatment requires strong communication
            and collaboration between the patient, doctor, caregivers,
            and recovery team.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed">

            A team-based approach ensures that treatment plans are personalized,
            effective, and focused on long-term recovery.

          </p>


        </div>


      </section>



      {/* CARDS */}
      <section className="py-24 bg-sky-50">


        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">


          {/* CARD 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">


            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Open Communication
            </h3>


            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Patients are encouraged to discuss symptoms,
              medication effects, and recovery goals openly
              with their healthcare providers.

            </p>


          </div>



          {/* CARD 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">


            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Personalized Treatment Plans
            </h3>


            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Doctors develop individualized treatment plans based on
              each person's unique needs and recovery progress.

            </p>


          </div>



          {/* CARD 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition">


            <h3 className="text-xl font-serif text-[#38bdf8] mb-4">
              Better Recovery Outcomes
            </h3>


            <div className="w-12 h-1 bg-[#F39C6B] mb-4"></div>


            <p className="text-gray-700">

              Collaborative care improves treatment success,
              patient confidence, and long-term mental health stability.

            </p>


          </div>


        </div>


      </section>



      {/* FINAL TEXT */}
      <section className="py-24">


        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-serif text-[#38bdf8] mb-6">
            Supporting Your Mental Health Journey
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed">

            At Dove Healthcare Services, our team works closely with doctors,
            families, and clients to ensure effective treatment and recovery.

            We are committed to helping individuals achieve stability,
            independence, and a healthier future.

          </p>


        </div>


      </section>



      {/* CTA */}
      <section className="py-24 text-white text-center bg-[#F39C6B]">


        <div className="max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-4">
            Partner With Us in Your Recovery
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

            Schedule a Consultation

          </Link>


        </div>


      </section>



    </div>

  );

}
