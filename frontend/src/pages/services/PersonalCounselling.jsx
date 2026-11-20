import ServicePage from "./ServicePage";
import serviceImg from "../../assets/about/therapy4.jpg";

const SERVICES = [
  {
    title: "Emotional Support",
    summary: "A safe, private space to talk without being judged.",
    what: "A private, caring space where you can talk openly about what you're going through, with a counselor who listens without judgment.",
    who: "Anyone who wants a confidential space to talk through what's on their mind, with professional support along the way.",
    expect: "A welcoming first conversation where you set the pace, followed by regular sessions built around what you need.",
  },
  {
    title: "Evidence-Based Therapy",
    summary: "Proven approaches to help you think and feel better.",
    what: "Structured techniques that help you notice unhelpful thinking patterns, stay present and grounded, and work through past experiences in a supportive way.",
    who: "Anyone working through anxious or negative thoughts, looking to feel calmer day to day, or processing a difficult past experience.",
    expect: "Practical sessions with clear tools you can use both in session and in your everyday life.",
  },
  {
    title: "Symptom Management",
    summary: "Help easing stress, anxiety, and low mood.",
    what: "Practical strategies to help you manage stress, ease anxious feelings, and lift a low mood, so daily life feels more manageable.",
    who: "Anyone dealing with ongoing stress, anxiety, or feelings of sadness that are affecting their daily life.",
    expect: "A supportive space to talk through what you're feeling, along with simple tools to help you feel steadier between sessions.",
  },
  {
    title: "Personal Growth",
    summary: "Building confidence and working toward what matters to you.",
    what: "We work with you to build self-confidence, set meaningful goals, and grow in the areas of life that matter most to you.",
    who: "Anyone wanting to grow personally, build self-confidence, or work toward specific life goals.",
    expect: "Collaborative sessions focused on your goals, with encouragement and accountability along the way.",
  },
  {
    title: "Relationship Improvement",
    summary: "Healthier communication and stronger relationships.",
    what: "We help you build stronger communication skills, set healthy boundaries, and handle disagreements in relationships more calmly.",
    who: "Anyone wanting to improve their relationships, friendships, or family dynamics through better communication.",
    expect: "Practical guidance and real examples to help you communicate more clearly and confidently in your relationships.",
  },
  {
    title: "Long-Term Wellness",
    summary: "Support to help you stay well over the long run.",
    what: "Ongoing support to help you stay emotionally steady, keep your mental health on track, and maintain the progress you've made.",
    who: "Anyone wanting continued support to maintain their emotional wellbeing and prevent setbacks over time.",
    expect: "Regular check-ins and a plan that evolves with you, so you always have support when you need it.",
  },
];

export default function PersonalCounselling() {
  return (
    <ServicePage
      breadcrumb={"Dove Health > Services > Personal Counseling"}
      title={"Personal Counseling Services"}
      introTitle={"Confidential Support for Emotional Wellness"}
      introText={"Personal counseling gives you a safe, private space to talk through what you're feeling, work through challenges, and build a healthier, more fulfilling life."}
      services={SERVICES}
      image={{ src: serviceImg, focus: "70% 45%" }}
      ctaTitle={"Begin Your Counseling Journey"}
      ctaText={"Schedule a confidential counseling session today."}
    />
  );
}
