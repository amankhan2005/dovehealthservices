export default function GNA() {
  return (
    <section className="section">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Graduate Nurses (GNA)
      </h1>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        GNAs assist in providing basic nursing and patient care.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">

        <div className="card">
          <h3>Our Services</h3>
          <ul>
            <li>✔ Basic Nursing Support</li>
            <li>✔ Hygiene Assistance</li>
            <li>✔ Mobility Help</li>
            <li>✔ Patient Comfort</li>
          </ul>
        </div>

        <div className="card">
          <h3>Suitable For</h3>
          <p>
            Elderly patients and those needing daily care.
          </p>
        </div>

      </div>

    </section>
  );
}
