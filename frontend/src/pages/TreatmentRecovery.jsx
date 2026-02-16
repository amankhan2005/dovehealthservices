 import recoveryImg from "../assets/treatment/recovery.webp";
import { Link } from "react-router-dom";

export default function TreatmentRecovery() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 overflow-hidden bg-[#38bdf8]">

        {/* Gloss overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <p className="text-white/80 mb-3 text-sm tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; Treatment & Recovery
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            Treatment & Recovery
          </h1>


          {/* Premium accent */}
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

          <h2 className="text-4xl font-serif mb-6 text-[#38bdf8]">
            Welcome to Dove Healthcare Services
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            At Dove Healthcare Services, we specialize in providing treatment and recovery
            support for individuals living with serious mental health conditions including
            schizophrenia, schizoaffective disorder, bipolar I disorder, and other behavioral
            health challenges.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            Our comprehensive outpatient programs are designed to help individuals manage symptoms,
            build independence, improve daily functioning, and achieve long-term emotional stability.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed">

            We also provide support, education, and guidance for families and caregivers,
            recognizing their essential role in helping loved ones succeed in recovery.

          </p>

        </div>

      </section>



      {/* PERSONALIZED PLAN */}
      <section className="py-24 bg-sky-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-serif mb-6 text-[#38bdf8]">
              Creating a Personalized Recovery Plan
            </h2>


            <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


            <p className="text-gray-700 text-lg leading-relaxed mb-6">

              Every client receives an individualized treatment and recovery plan
              tailored to their specific needs, personal strengths, and life goals.

            </p>


            <p className="text-gray-700 text-lg leading-relaxed mb-6">

              Our licensed mental health professionals work collaboratively with clients
              to improve coping skills, emotional wellness, and daily functioning.

            </p>


            <p className="text-gray-700 text-lg leading-relaxed">

              Through our Psychiatric Rehabilitation Program (PRP) and Outpatient Mental Health Clinic (OMHC),
              we provide structured support to help individuals live independently and confidently.

            </p>


          </div>



          {/* IMAGE */}
          <div className="relative group">


            {/* glow */}
            <div className="absolute -inset-2 rounded-2xl blur opacity-20 group-hover:opacity-40 transition bg-[#38bdf8]"></div>


            {/* glossy shine */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>


            <img
              src={recoveryImg}
              alt="Mental health recovery"
              className="relative rounded-2xl shadow-xl w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
            />

          </div>


        </div>

      </section>



      {/* RECOVERY INFO */}
      <section className="py-24">

        <div className="max-w-5xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-6 text-[#38bdf8]">
            Understanding Mental Health Recovery
          </h2>


          <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            Mental health recovery is an ongoing journey of healing,
            personal growth, and improved quality of life.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            Recovery focuses on helping individuals develop independence,
            strengthen relationships, and achieve meaningful life goals.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed mb-6">

            With the right treatment, professional support, and dedication,
            individuals can successfully manage their mental health condition.

          </p>


          <p className="text-gray-700 text-lg leading-relaxed">

            Dove Healthcare Services is committed to helping every individual
            achieve a healthier, stable, and fulfilling future.

          </p>


        </div>

      </section>



      {/* CTA */}
      <section className="py-24 text-white text-center bg-[#F39C6B]">

        <div className="max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-4">
            Start Your Recovery Journey Today
          </h2>


          <p className="text-white/90 text-lg mb-10">

            Contact Dove Healthcare Services to learn how our programs
            can help you or your loved one achieve recovery and wellness.

          </p>



          <Link
            to="/contact-us"
            className="inline-block px-10 py-4 rounded-lg font-semibold shadow-lg transition duration-300 hover:shadow-2xl hover:-translate-y-1"
            style={{
              backgroundColor: "#38bdf8",
              color: "white"
            }}
          >

            Contact Dove Healthcare Services

          </Link>


        </div>

      </section>



    </div>

  );

}
