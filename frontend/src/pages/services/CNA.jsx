export default function CNA() {
  return (
    <section className="section">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Certified Nursing Assistants (CNA)
      </h1>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        CNAs provide personal care and daily assistance.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">

        <div className="card">
          <h3>Our Services</h3>
          <ul>
            <li>✔ Bathing & Grooming</li>
            <li>✔ Feeding Support</li>
            <li>✔ Mobility Help</li>
            <li>✔ Companionship</li>
          </ul>
        </div>

        <div className="card">
          <h3>Ideal For</h3>
          <p>
            Seniors and patients needing personal assistance.
          </p>
        </div>

      </div>

    </section>
  );
}
