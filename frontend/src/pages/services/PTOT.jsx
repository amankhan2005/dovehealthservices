export default function PTOT() {
  return (
    <section className="section">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Physical & Occupational Therapy (PT / OT)
      </h1>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        PT/OT services help patients recover mobility and strength.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">

        <div className="card">
          <h3>Our Services</h3>
          <ul>
            <li>✔ Physical Rehabilitation</li>
            <li>✔ Mobility Training</li>
            <li>✔ Pain Management</li>
            <li>✔ Recovery Exercises</li>
          </ul>
        </div>

        <div className="card">
          <h3>Best For</h3>
          <p>
            Patients recovering from injury or surgery.
          </p>
        </div>

      </div>

    </section>
  );
}
