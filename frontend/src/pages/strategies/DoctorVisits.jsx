 import StrategyPage from "./StrategyPage";

export default function DoctorVisits() {
  return (
    <StrategyPage
      breadcrumb="Dove Healthcare Services, LLC > Doctor visits"
      title="Collaborative doctor visits and treatment planning"
      introTitle="Working together for better treatment outcomes"
      introParagraphs={[
        "Successful mental health treatment requires strong communication and collaboration between the patient, doctor, caregivers, and recovery team.",
        "A team-based approach ensures that treatment plans are personalized, effective, and focused on long-term recovery.",
      ]}
      cards={[
        {
          title: "Open communication",
          desc: "Patients are encouraged to discuss symptoms, medication effects, and recovery goals openly with their healthcare providers.",
        },
        {
          title: "Personalized treatment plans",
          desc: "Doctors develop individualized treatment plans based on each person's unique needs and recovery progress.",
        },
        {
          title: "Better recovery outcomes",
          desc: "Collaborative care improves treatment success, patient confidence, and long-term mental health stability.",
        },
      ]}
      closingTitle="Supporting your mental health journey"
      closingParagraphs={[
        "At Dove Healthcare Services, our team works closely with doctors, families, and clients to ensure effective treatment and recovery. We are committed to helping individuals achieve stability, independence, and a healthier future.",
      ]}
      ctaTitle="Partner with us in your recovery"
      ctaSubtitle="Contact Dove Healthcare Services today."
      ctaLabel="Schedule a consultation"
    />
  );
}