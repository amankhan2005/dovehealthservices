export default function RN() {
  return (
    <section className="section">

      <h1 className="text-3xl font-bold text-center text-blue-600">
        Registered Nurses (RN)
      </h1>

      <p className="text-center text-gray-600 mt-4 max-w-3xl mx-auto">
        Our Registered Nurses provide advanced medical care,
        monitoring, and support at home and healthcare facilities.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-5xl mx-auto">

        <div className="card">
          <h3>Our Services</h3>
          <ul>
            <li>✔ Medication Management</li>
            <li>✔ Wound Care</li>
            <li>✔ Vital Monitoring</li>
            <li>✔ Post-Surgery Care</li>
          </ul>
        </div>

        <div className="card">
          <h3>Who Needs RN?</h3>
          <p>
            Patients requiring professional medical supervision
            and long-term care.
          </p>
        </div>

      </div>

    </section>
  );
}
