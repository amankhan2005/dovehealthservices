 import therapy1 from "../assets/about/therapy1.jpg";
import therapy2 from "../assets/about/therapy2.jpg";
import therapy3 from "../assets/about/achievement1.png";

export default function About() {

  return (

    <div className="bg-white overflow-hidden">


      {/* HEADER */}
      <section className="relative py-24 overflow-hidden bg-[#38bdf8]">

        {/* glossy overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/10"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <p className="text-white/80 mb-3 text-sm tracking-wider">
            DOVE HEALTHCARE SERVICES, LLC &gt; About Us
          </p>


          <h1 className="text-5xl md:text-6xl font-serif text-white leading-tight">
            About Dove Healthcare Services
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



      {/* SECTION 1 */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-serif mb-6 text-[#38bdf8]">
              Who We Are
            </h2>


            <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


            <p className="text-gray-700 text-lg leading-relaxed mb-6">

              Dove Healthcare Services, LLC is a certified outpatient mental health clinic
              provider approved by the Maryland Department of Behavioral Health Administration (BHA).

              We provide comprehensive psychiatric rehabilitation and outpatient mental health
              services to individuals across Maryland.

            </p>


            <p className="text-gray-700 text-lg leading-relaxed">

              Our mission is to empower individuals facing mental health challenges by delivering
              personalized, compassionate, and evidence-based care.

            </p>


          </div>



          {/* IMAGE */}
          <div className="relative group">


            <div className="absolute -inset-2 rounded-2xl blur opacity-20 group-hover:opacity-40 transition bg-[#38bdf8]"></div>


            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/10 via-transparent to-transparent"></div>


            <img
              src={therapy1}
              alt="therapy"
              className="relative rounded-2xl shadow-xl h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

          </div>


        </div>

      </section>



      {/* SECTION 2 */}
      <section className="py-24 bg-sky-50">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


          {/* IMAGE */}
          <div className="relative group">


            <div className="absolute -inset-2 rounded-2xl blur opacity-20 group-hover:opacity-40 transition bg-[#38bdf8]"></div>


            <img
              src={therapy2}
              alt="services"
              className="relative rounded-2xl shadow-xl h-[420px] w-full object-cover group-hover:scale-105 transition duration-500"
            />

          </div>



          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-serif mb-6 text-[#38bdf8]">
              Our Programs & Services
            </h2>


            <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


            <p className="text-gray-700 text-lg leading-relaxed mb-6">

              We offer Psychiatric Rehabilitation Program (PRP),
              Outpatient Mental Health Clinic (OMHC),
              and Behavioral Support Services.

            </p>


            <p className="text-gray-700 text-lg leading-relaxed">

              Our experienced professionals help individuals achieve stability,
              independence, and improved quality of life.

            </p>


          </div>


        </div>

      </section>



      {/* SECTION 3 */}
      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">


          {/* TEXT */}
          <div>

            <h2 className="text-4xl font-serif mb-6 text-[#38bdf8]">
              Joint Commission Accreditation
            </h2>


            <div className="w-16 h-1 mb-8 rounded-full bg-[#F39C6B]"></div>


            <p className="text-gray-700 text-lg leading-relaxed mb-6">

              Dove Healthcare Services has earned accreditation from
              The Joint Commission, the nation's leading healthcare quality organization.

            </p>


            <p className="text-gray-700 text-lg leading-relaxed">

              This reflects our commitment to providing safe,
              high-quality mental health services.

            </p>


          </div>



          {/* IMAGE */}
          <div className="relative group bg-white rounded-2xl shadow-xl p-10 h-[420px] flex items-center justify-center">


            <img
              src={therapy3}
              alt="Joint Commission"
              className="max-h-full object-contain group-hover:scale-105 transition duration-500"
            />

          </div>


        </div>

      </section>



      {/* MISSION */}
      <section className="py-24 text-white text-center bg-[#F39C6B]">

        <div className="max-w-4xl mx-auto px-6">


          <h2 className="text-4xl font-serif mb-6">

            Our Mission

          </h2>


          <div className="w-20 h-1 mx-auto mb-8 bg-white/60"></div>


          <p className="text-lg text-white/90 leading-relaxed">

            To provide compassionate, high-quality behavioral healthcare
            that empowers individuals to live independent and fulfilling lives.

          </p>


        </div>

      </section>



    </div>

  );

}
