export default function LPN() {
  return (
    <section className="section">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Licensed Practical Nurses (LPN)
      </h1>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        LPNs provide essential nursing care and patient assistance.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">

        <div className="card">
          <h3>Our Services</h3>
          <ul>
            <li>✔ Vital Signs Monitoring</li>
            <li>✔ Daily Medical Care</li>
            <li>✔ Patient Assistance</li>
            <li>✔ Basic Treatments</li>
          </ul>
        </div>

        <div className="card">
          <h3>Best For</h3>
          <p>
            Patients who need regular nursing support.
          </p>
        </div>

      </div>

    </section>
  );
}
