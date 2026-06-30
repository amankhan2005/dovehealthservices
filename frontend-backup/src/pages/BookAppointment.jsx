 import { useState } from "react";
import appointmentImg from "../assets/appointment.jpg";

export default function BookAppointment() {


  const API =
    import.meta.env.VITE_API_URL;


  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");


  const [form, setForm] =
    useState({

      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      message: "",

    });



  function handleChange(e) {

    setForm({

      ...form,
      [e.target.name]: e.target.value,

    });

  }



  async function handleSubmit(e) {

    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);


    try {

      const res =
        await fetch(`${API}/api/appointment`, {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

          },

          body:
            JSON.stringify(form),

        });


      const data =
        await res.json();


      if (!res.ok)
        throw new Error(
          data.message
        );


      setSuccess(true);


      setForm({

        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        message: "",

      });


    }

    catch (err) {

      setError(
        err.message ||
        "Submission failed"
      );

    }

    finally {

      setLoading(false);

    }

  }



  return (

<div className="bg-white overflow-hidden">


{/* HEADER */}

<section className="relative py-24 bg-[#38bdf8] overflow-hidden">


<div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-black/10"></div>


<div className="absolute -top-20 -right-20 w-96 h-96 bg-white/20 blur-3xl rounded-full animate-pulse"></div>


<div className="relative max-w-7xl mx-auto px-6">


<p className="text-white/90 mb-3 tracking-wider">

DOVE HEALTHCARE SERVICES, LLC &gt; Book Appointment

</p>


<h1 className="text-5xl md:text-6xl font-serif text-white">

Book an Appointment

</h1>


<div className="flex items-center gap-4 mt-6">

<div className="w-24 h-1 bg-[#F39C6B] rounded-full"></div>

<div className="w-3 h-3 bg-white/40 rounded-full"></div>

</div>


</div>

</section>




{/* MAIN */}

<section className="py-24 bg-gradient-to-b from-white to-sky-50">


<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">



{/* LEFT */}

<div className="animate-[fadeUp_.8s_ease]">


<h2 className="text-4xl font-serif text-[#38bdf8] mb-6">

Schedule Your Mental Health Consultation

</h2>


<div className="w-16 h-1 bg-[#F39C6B] mb-6"></div>


<p className="text-gray-700 text-lg mb-6 leading-relaxed">

Take the first step toward recovery and emotional well-being.

</p>


<p className="text-gray-700 text-lg leading-relaxed mb-8">

Complete the form and our team will contact you shortly.

</p>




<div className="group relative">


<div className="absolute -inset-2 bg-[#38bdf8] blur opacity-20 rounded-2xl group-hover:opacity-30 transition"></div>


<img

src={appointmentImg}

alt="Appointment"

className="relative rounded-2xl shadow-xl w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"

/>


<div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white/20 to-transparent"></div>


</div>


</div>





{/* FORM */}

<div className="group relative">


<div className="absolute -inset-1 bg-[#38bdf8] blur opacity-20 rounded-2xl group-hover:opacity-30 transition"></div>


<div className="relative bg-white/80 backdrop-blur border border-white/40 p-10 rounded-2xl shadow-2xl">


<h3 className="text-2xl font-serif text-[#38bdf8] mb-6">

Appointment Request Form

</h3>



{success && (

<p className="text-green-600 mb-4">

Appointment submitted successfully

</p>

)}



{error && (

<p className="text-red-600 mb-4">

{error}

</p>

)}



<form
onSubmit={handleSubmit}
className="space-y-5"
>



<input

name="name"

value={form.name}

onChange={handleChange}

type="text"

placeholder="Full Name"

className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#38bdf8] outline-none transition"

/>



<input

name="email"

value={form.email}

onChange={handleChange}

type="email"

placeholder="Email Address"

className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#38bdf8] outline-none transition"

/>



<input

name="phone"

value={form.phone}

onChange={handleChange}

type="tel"

placeholder="Phone Number"

className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#38bdf8] outline-none transition"

/>



<select

name="service"

value={form.service}

onChange={handleChange}

className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#38bdf8] outline-none transition"

>

<option>

Select Service

</option>

<option>

OMHC Services

</option>

<option>

PRP Program

</option>

<option>

Family Counseling

</option>

<option>

Personal Counseling

</option>

</select>



<input

name="date"

value={form.date}

onChange={handleChange}

type="date"

className="w-full p-4 rounded-lg border border-gray-200 focus:ring-2 focus:ring-[#38bdf8] outline-none transition"

/>



<textarea

name="message"

value={form.message}

onChange={handleChange}

placeholder="Additional Notes"

className="w-full p-4 rounded-lg border border-gray-200 h-28 focus:ring-2 focus:ring-[#38bdf8] outline-none transition"

></textarea>



<button

type="submit"

disabled={loading}

className="w-full py-4 rounded-lg font-semibold text-white shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300"

style={{

backgroundColor: "#F39C6B"

}}

>

{loading
? "Submitting..."
: "Submit Appointment Request"}

</button>


</form>


</div>


</div>


</div>

</section>


</div>

);

}
