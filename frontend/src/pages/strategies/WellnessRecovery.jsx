import StrategyPage from "./StrategyPage";

export default function WellnessRecovery() {
  return (
    <StrategyPage
      breadcrumb="Dove Healthcare Services, LLC > Wellness recovery"
      title="Comprehensive wellness recovery program"
      introTitle="Supporting total wellness in recovery"
      introParagraphs={[
        "Mental health recovery involves more than emotional healing — it includes physical health, psychological well-being, and overall life stability.",
        "At Dove Healthcare Services, we provide comprehensive care to support every aspect of an individual's wellness journey.",
      ]}
      cards={[
        {
          title: "Holistic mental health care",
          desc: "Our programs address emotional, psychological, and physical health to ensure complete recovery.",
        },
        {
          title: "Improving physical health",
          desc: "We help individuals manage physical conditions such as diabetes, heart disease, and lifestyle-related challenges.",
        },
        {
          title: "Removing healthcare barriers",
          desc: "Our integrated care approach improves access to treatment, increases lifespan, and enhances quality of life.",
        },
      ]}
      closingTitle="Achieving long-term wellness"
      closingParagraphs={[
        "Comprehensive wellness programs improve recovery outcomes, helping individuals live longer, healthier, and more fulfilling lives. Dove Healthcare Services is committed to providing compassionate, professional care every step of the way.",
      ]}
      ctaTitle="Begin your wellness journey today"
      ctaSubtitle="Contact Dove Healthcare Services to learn more."
      ctaLabel="Contact us today"
    />
  );
}