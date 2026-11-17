import ServicePage from "./ServicePage";

const SERVICES = [
  {
    title: "Improved Communication",
    summary: "Helping your family talk to each other more openly and with less tension.",
    what: "We help family members really listen to each other, share their feelings calmly, and talk through tough topics without it turning into an argument.",
    who: "Families who find it hard to talk things through, often misunderstand each other, or avoid bringing up difficult subjects.",
    expect: "You'll sit down with a counselor who guides the conversation, teaches simple ways to talk and listen, and gives you things to practice together at home.",
  },
  {
    title: "Conflict Resolution",
    summary: "Helping your family handle disagreements in a calmer, healthier way.",
    what: "We help families notice the patterns behind repeated arguments and learn simple steps to work through problems together instead of fighting about them.",
    who: "Families dealing with ongoing arguments, tension after a big change at home, or stress that keeps building up.",
    expect: "A calm, guided space where everyone gets to share their side. You'll leave with practical steps you can start using right away at home.",
  },
  {
    title: "Emotional Support",
    summary: "Helping family members feel heard, supported, and closer to one another.",
    what: "We work with your family to rebuild trust, talk through difficult emotions, and support each other through hard times.",
    who: "Families supporting a loved one going through a mental health challenge, recovery, or a major life change.",
    expect: "A caring, judgment-free space where every person in the family gets a chance to share how they're feeling and be heard.",
  },
  {
    title: "Caregiver Guidance",
    summary: "Giving caregivers the tools and support they need.",
    what: "We explain mental health conditions in plain language and share simple, practical ways to support a loved one without burning yourself out.",
    who: "Parents, spouses, or family members who are the main support person for someone in treatment or recovery.",
    expect: "Clear answers to your questions about your loved one's condition and treatment, plus ongoing support so you don't have to do it alone.",
  },
  {
    title: "Collaborative Planning",
    summary: "Bringing your whole family into your loved one's recovery plan.",
    what: "We bring your family together with your loved one's care team to set shared goals and agree on how everyone can help.",
    who: "Families who want to stay involved and informed about a loved one's treatment, working closely with our clinical team.",
    expect: "Regular check-ins with your family and your loved one's care team, with clear next steps everyone understands.",
  },
  {
    title: "Long-Term Wellness",
    summary: "Helping your family stay strong and healthy for the long run.",
    what: "Once things are on track, we offer ongoing sessions that help keep your family's progress steady and help prevent setbacks.",
    who: "Families who've completed counseling and want to keep their progress going and avoid slipping back into old patterns.",
    expect: "Occasional check-in sessions, a simple plan for handling tough moments, and support whenever you need it.",
  },
];

export default function FamilyCounselling() {
  return (
    <ServicePage
      breadcrumb={"Dove Health > Services > Family Counseling"}
      title={"Family Counseling Services"}
      introTitle={"Supporting Families Through Recovery"}
      introText={"Our family counseling services help families talk to each other more openly, work through disagreements, and build a home life that supports everyone's wellbeing."}
      services={SERVICES}
      ctaTitle={"Strengthen Your Family's Recovery"}
      ctaText={"Schedule a family counseling session today."}
    />
  );
}
