 import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import ContactCTASection from "../components/ContactSection";
// Placeholder Contact Section
 

export default function FAQ() {
  const faqs = [
    {
      q: "What is Autism Spectrum Disorder (ASD)?",
      a: "Autism Spectrum Disorder (ASD) is a developmental condition that affects communication, behavior, and social interaction. It can appear differently in each child.",
    },
    {
      q: "What is ABA Therapy and how does it help children with autism?",
      a: "ABA (Applied Behavior Analysis) Therapy helps children with autism learn communication, social, and life skills using positive reinforcement techniques.",
    },
    {
      q: "At what age can autism be diagnosed?",
      a: "Autism can often be diagnosed as early as 18 months, but signs can appear earlier. Early diagnosis helps in effective therapy and better outcomes.",
    },
    {
      q: "What are early signs of autism in toddlers?",
      a: "Common early signs include lack of eye contact, delayed speech, repetitive behaviors, and limited interest in social play.",
    },
    {
      q: "Can autism be cured?",
      a: "Autism is not a disease and does not have a cure. However, therapies like ABA, speech, and occupational therapy can significantly improve quality of life.",
    },
    {
      q: "How long does ABA therapy take to show results?",
      a: "Progress varies by child, but consistent ABA therapy over several months often leads to visible improvements in behavior and communication.",
    },
    {
      q: "Is ABA therapy suitable for all children with autism?",
      a: "Yes, ABA therapy is personalized for each child's unique needs, age, and learning style, making it suitable for most children on the spectrum.",
    },
    {
      q: "What role do parents play in autism therapy?",
      a: "Parents play a crucial role by reinforcing learned behaviors at home and actively participating in their child's therapy sessions.",
    },
    {
      q: "Does insurance cover ABA therapy?",
      a: "Many insurance providers cover ABA therapy, but coverage varies. It's best to check with your provider or clinic for specific details.",
    },
    {
      q: "What's the difference between autism and ADHD?",
      a: "Autism primarily affects social and communication skills, while ADHD involves challenges with focus and hyperactivity. Some children may have both conditions.",
    },
    {
      q: "Can children with autism attend regular schools?",
      a: "Yes, many children with autism attend mainstream schools with individualized support plans to help them succeed academically and socially.",
    },
    {
      q: "How can I support my child after an autism diagnosis?",
      a: "Start early intervention therapy, connect with support groups, and maintain a structured, positive environment at home.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-orange-500 text-white text-center py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Find answers to common questions about autism, ABA therapy, and how we support families on their journey.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E3D2F] mb-4">
            Have Questions? We've Got Answers.
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Below are some of the most commonly asked questions from parents and caregivers.  
            If you don't find your answer here, feel free to reach out — we're always happy to help!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl border-2 transition-all duration-300 ${
                  isOpen 
                    ? "border-orange-400 shadow-lg shadow-orange-100" 
                    : "border-gray-200 shadow-md hover:border-orange-300 hover:shadow-lg"
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full px-6 py-6 flex items-start justify-between text-left group"
                >
                  <h3 className={`text-lg font-semibold pr-4 transition-colors ${
                    isOpen ? "text-orange-600" : "text-[#1E3D2F] group-hover:text-orange-600"
                  }`}>
                    {item.q}
                  </h3>
                  <span className={`ml-2 mt-1 flex-shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}>
                    <ChevronDown className={`w-6 h-6 ${
                      isOpen ? "text-orange-600" : "text-gray-400 group-hover:text-orange-500"
                    }`} />
                  </span>
                </button>

                <div
                  className={`px-6 transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* CTA Section */}
      <ContactCTASection />
    </div>
  );
}