import ServicePage from "./ServicePage";
import serviceImg from "../../assets/services/prp.jpg";

const SERVICES = [
  {
    title: "Life Skills Development",
    summary: "Building everyday habits that make daily life easier to manage.",
    what: "We help you build steady daily routines — things like personal care, managing your time, and keeping your home running smoothly.",
    who: "Anyone who finds it hard to keep up with everyday tasks or wants more structure and confidence in daily life.",
    expect: "Hands-on practice with simple routines, with a counselor checking in regularly to see what's working and adjust as needed.",
  },
  {
    title: "Social Skills Enhancement",
    summary: "Feeling more comfortable connecting with people around you.",
    what: "We work on practical ways to communicate clearly, build healthy relationships, and feel more at ease being part of your community.",
    who: "Anyone who feels isolated, struggles in social situations, or wants to reconnect with people and activities.",
    expect: "Supportive practice through real conversations and activities, building confidence one step at a time.",
  },
  {
    title: "Emotional Support",
    summary: "Tools to help you manage stress and stay steady through hard moments.",
    what: "We teach simple ways to manage stress, stay calm under pressure, and work through problems instead of feeling overwhelmed by them.",
    who: "Anyone dealing with ongoing stress, strong emotions, or difficulty staying calm in tough situations.",
    expect: "A supportive space to learn and practice coping tools you can use anytime things start to feel like too much.",
  },
  {
    title: "Career Support",
    summary: "Getting ready and feeling confident to find a job.",
    what: "We help you get ready for work — from building a resume and practicing interviews to figuring out what kind of job might be a good fit.",
    who: "Anyone looking to find a job, return to work, or explore what career path might work for them.",
    expect: "One-on-one guidance through every step, from preparing for interviews to thinking through long-term career goals.",
  },
  {
    title: "Educational Support",
    summary: "Help building new skills and continuing your education.",
    what: "We connect you with training programs and educational resources, and support you in building new skills at your own pace.",
    who: "Anyone interested in finishing school, learning a trade, or building new skills to support their goals.",
    expect: "Guidance finding the right program for you, plus ongoing support to help you stick with it and succeed.",
  },
  {
    title: "Independent Living",
    summary: "Practical skills to help you live more independently.",
    what: "We help with the everyday basics of independent living — getting around town, managing money, and speaking up for what you need.",
    who: "Anyone working toward living more independently and confidently managing day-to-day responsibilities.",
    expect: "Practical, real-world practice with transportation, budgeting, and self-advocacy, with support every step of the way.",
  },
];

export default function Prp() {
  return (
    <ServicePage
      breadcrumb={"Dove Health > Services > PRP"}
      title={"Psychiatric Rehabilitation Program (PRP)"}
      introTitle={"Building Skills for Independent Living"}
      introText={"Our Psychiatric Rehabilitation Program helps you build everyday life skills, feel more confident around others, and work toward greater independence."}
      services={SERVICES}
      image={{ src: serviceImg, focus: "55% 40%" }}
      ctaTitle={"Start PRP Services Today"}
      ctaText={"Take the first step toward independence and recovery."}
    />
  );
}
