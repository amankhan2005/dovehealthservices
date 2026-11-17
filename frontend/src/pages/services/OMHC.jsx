import ServicePage from "./ServicePage";

const SERVICES = [
  {
    title: "Therapy Services",
    summary: "One-on-one, family, and group sessions to talk through what you're going through.",
    what: "Regular talk-therapy sessions with a licensed counselor, either on your own, with your family, or in a small group with others going through similar things.",
    who: "Anyone who wants a safe space to talk through stress, emotions, relationships, or mental health challenges with professional support.",
    expect: "You'll meet with a counselor on a regular schedule, talk openly about what's going on, and work together on ways to feel better and cope.",
  },
  {
    title: "Psychiatric Care",
    summary: "Medical support to help manage symptoms and find the right treatment.",
    what: "Appointments with a psychiatric provider to review how you're doing, adjust or manage any medications, and check in on your overall mental health.",
    who: "People who may benefit from medication as part of their treatment, or who want a professional opinion on what's going on and how to manage it.",
    expect: "A conversation about your symptoms and history, a clear explanation of any treatment options, and regular follow-ups to see how things are working.",
  },
  {
    title: "Support Services",
    summary: "Extra help connecting you to the resources and support you need.",
    what: "Hands-on help connecting you with community resources, support during a crisis, and someone to help coordinate your care.",
    who: "Anyone who needs extra support getting connected to services, navigating a difficult moment, or staying on track with their care.",
    expect: "A dedicated team member who helps you find resources, checks in with you, and is there to help if things become urgent.",
  },
  {
    title: "Child & Adolescent",
    summary: "Specialized support for kids and teens, plus guidance for parents.",
    what: "Age-appropriate counseling for children and teens, including play-based sessions for younger kids, plus guidance to help parents support their child at home.",
    who: "Children and teenagers facing emotional, behavioral, or social challenges, and the parents supporting them.",
    expect: "A comfortable, age-appropriate space for your child to open up, along with regular guidance for you as a parent on how to help at home and at school.",
  },
  {
    title: "Evidence-Based Care",
    summary: "Proven approaches to help you build healthier thoughts and habits.",
    what: "Structured therapy approaches that help you notice unhelpful thinking patterns, manage difficult emotions, and work through past experiences that still affect you today.",
    who: "Anyone working through anxiety, low mood, difficult emotions, or the lasting effects of a hard experience.",
    expect: "Practical sessions with clear tools and techniques you can practice both in session and in everyday life.",
  },
  {
    title: "Recovery Focused",
    summary: "A care plan built around your goals, for the long run.",
    what: "A treatment plan built specifically around your personal goals, with ongoing support to help you keep making progress over time.",
    who: "Anyone working toward greater stability, independence, and a better quality of life, at any stage of their journey.",
    expect: "A plan that's yours — built around what matters to you, reviewed regularly, and adjusted as your needs change.",
  },
];

export default function OMHC() {
  return (
    <ServicePage
      breadcrumb={"Dove Health > Services > OMHC"}
      title={"Outpatient Mental Health Clinic (OMHC)"}
      introTitle={"Comprehensive Mental Health Care"}
      introText={"Our OMHC program offers therapy, medical support, and recovery help to anyone looking to feel more stable, independent, and well."}
      services={SERVICES}
      ctaTitle={"Start Your Recovery Today"}
      ctaText={"Schedule your consultation with our mental health professionals."}
    />
  );
}
