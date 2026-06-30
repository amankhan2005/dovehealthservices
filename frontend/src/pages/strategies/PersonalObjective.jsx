import StrategyPage from "./StrategyPage";

export default function PersonalObjective() {
  return (
    <StrategyPage
      breadcrumb="Dove Healthcare Services, LLC > Personal objective"
      title="Personal objective in mental health recovery"
      introTitle="Creating meaningful life goals"
      introParagraphs={[
        "Individuals living with mental health conditions can continue setting and achieving meaningful personal objectives. Recovery is not only about symptom management but also about building a fulfilling and independent life.",
        "Personal goals provide motivation, direction, and hope, helping individuals move forward confidently.",
      ]}
      cards={[
        {
          title: "Setting personal goals",
          desc: "Individuals can pursue goals related to career, education, relationships, and personal growth.",
        },
        {
          title: "Managing symptoms",
          desc: "Treatment, therapy, and structured routines help individuals maintain emotional stability and focus.",
        },
        {
          title: "Professional support",
          desc: "Our mental health professionals guide and support individuals throughout their recovery journey.",
        },
      ]}
      closingTitle="Achieving long-term success"
      closingParagraphs={[
        "With proper treatment and support, individuals can live meaningful, productive, and independent lives. Dove Healthcare Services is committed to helping every individual achieve recovery and wellness.",
      ]}
      ctaTitle="Start your recovery journey"
      ctaSubtitle="Contact Dove Healthcare Services today."
      ctaLabel="Contact us"
    />
  );
}