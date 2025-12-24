 import React from "react";

/* ===== MANUAL IMAGE IMPORTS ===== */
import aboutImg1 from "../assets/about/about-1.jpeg";
import aboutImg2 from "../assets/about/about-2.webp";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== PILL HEADING ===== */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center justify-center px-10 py-2 rounded-full border border-[#CFE0FF] bg-[#F7FAFF] text-[#0B5ED7] text-sm font-semibold tracking-wide">
            What We Specialize In
          </span>
        </div>

        {/* ===== TOP INTRO ===== */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0A2540]">
            A Few Words About Us
          </h2>
          <p className="text-[15.5px] leading-[1.7] text-[#425466]">
            Through objective insights, culturally informed perspectives, and
            applied behavioral analysis expertise, we continue discovering
            better ways to achieve outcomes that serve your child’s best
            interests.
          </p>
        </div>

        {/* ===== SECTION 1 ===== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={aboutImg1}
              alt="ABA therapy session with child"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 uppercase tracking-wide text-[#0A2540]">
              Making an Impact Where You Live
            </h3>

            <p className="text-[15.5px] leading-[1.7] text-[#425466] mb-6">
              <span className="font-semibold text-[#0A2540]">
                DECODER Health
              </span>{" "}
              is committed to shaping a stronger future for children with autism
              through evidence-based Applied Behavioral Analysis (ABA),
              innovation, and cultural sensitivity.
            </p>

            <p className="text-[15.5px] leading-[1.7] text-[#425466]">
              Our experienced{" "}
              <span className="font-semibold text-[#0A2540]">
                Board-Certified Behavior Analysts
              </span>{" "}
              bring compassionate, inclusive, and collaborative approaches to
              solving complex behavioral challenges—right within the communities
              families call home.
            </p>
          </div>
        </div>

        {/* ===== SECTION 2 ===== */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>
            <h3 className="text-xl font-bold mb-4 uppercase text-[#0A2540]">
              Trusted Partner
            </h3>
            <p className="text-[15.5px] leading-[1.7] text-[#425466] mb-10">
              DECODER Health partners with parents, caregivers, and practitioners
              to achieve meaningful outcomes for children with autism—results
              that are often difficult to accomplish alone.
            </p>

            <h3 className="text-xl font-bold mb-4 uppercase text-[#0A2540]">
              Home-Based Services
            </h3>
            <p className="text-[15.5px] leading-[1.7] text-[#425466]">
              We deliver personalized ABA therapy directly within a child’s home
              environment.
            </p>
          </div>

          <div className="rounded-3xl overflow-hidden shadow-lg">
            <img
              src={aboutImg2}
              alt="Home-based ABA therapy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
