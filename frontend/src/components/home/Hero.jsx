import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import ArrowIcon from "../ui/ArrowIcon";
import heroImg from "../../assets/hero/hero-session.webp";
import heroImgSm from "../../assets/hero/hero-session-640.webp";
import heroInset from "../../assets/hero/hero-smile.webp";

const HERO_CSS = `
  .home-hero {
    position: relative;
    overflow: hidden;
    isolation: isolate;
    padding: clamp(40px, 6vw, 88px) 0 clamp(64px, 8vw, 112px);
    background:
      radial-gradient(900px 520px at 100% 0%, rgba(207, 222, 236, 0.7), transparent 62%),
      radial-gradient(800px 480px at 0% 100%, rgba(245, 238, 229, 0.95), transparent 60%),
      var(--dh-sand-50);
  }

  .home-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
    gap: clamp(48px, 7vw, 72px);
    align-items: center;
  }

  @media (min-width: 1024px) {
    .home-hero__grid { grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr); }
    .home-hero { min-height: calc(100vh - var(--dh-header-h)); display: flex; align-items: center; }
    .home-hero > .dh-container { width: 100%; }
  }

  .home-hero__copy { max-width: 640px; }

  .home-hero__animate { animation: home-hero-in 0.7s var(--dh-ease) both; }
  .home-hero__animate.d1 { animation-delay: 0.06s; }
  .home-hero__animate.d2 { animation-delay: 0.12s; }

  @keyframes home-hero-in {
    from { opacity: 0; transform: translateY(14px); }
    to { opacity: 1; transform: none; }
  }

  .home-hero__title {
    white-space: pre-line;
    font-size: clamp(2.6rem, 1.5rem + 3.6vw, 4.6rem);
    line-height: 1.02;
    letter-spacing: -0.028em;
  }

  .home-hero__stack { display: grid; }
  .home-hero__stack > * { grid-area: 1 / 1; visibility: hidden; }
  .home-hero__stack > .is-active { visibility: visible; }
  .home-hero__stack > .dh-eyebrow { margin-bottom: 20px; }

  .home-hero__desc {
    margin-top: 26px;
    max-width: 52ch;
  }

  .home-hero__desc > p { margin: 0; }

  .home-hero__ctas {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 36px;
  }

  .home-hero__dots {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 44px;
  }

  .home-hero__dot {
    position: relative;
    width: 32px;
    height: 24px;
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  .home-hero__dot::before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    height: 3px;
    border-radius: 3px;
    transform: translateY(-50%);
    background: var(--dh-sky-200);
    transition: background-color 0.3s;
  }

  .home-hero__dot.is-active::before { background: var(--dh-accent); }

  /* Visual composition */
  .home-hero__visual {
    position: relative;
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
    padding: 0 0 36px 36px;
  }

  @media (min-width: 1024px) {
    .home-hero__visual { margin: 0 0 0 auto; }
  }

  .home-hero__mark {
    position: absolute;
    z-index: -1;
    top: -6%;
    left: -10%;
    width: 46%;
    opacity: 0.16;
    transform: rotate(-6deg);
  }

  .home-hero__ring {
    position: absolute;
    z-index: -1;
    right: -7%;
    top: 12%;
    width: 46%;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1.5px dashed rgba(67, 101, 133, 0.28);
  }

  .home-hero__frame {
    position: relative;
    overflow: hidden;
    border-radius: 999px 999px 32px 32px;
    box-shadow: var(--dh-shadow-lg);
    background: var(--dh-sand-100);
  }

  .home-hero__frame img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 5;
    object-fit: cover;
    object-position: 50% 30%;
  }

  .home-hero__inset {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 38%;
    aspect-ratio: 1;
    padding: 6px;
    border-radius: 28px;
    background: #fff;
    box-shadow: var(--dh-shadow-md);
  }

  .home-hero__inset img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 22px;
  }

  @media (max-width: 1023px) {
    .home-hero__copy { margin: 0 auto; }
    .home-hero__visual { max-width: 440px; }
  }

  @media (max-width: 520px) {
    .home-hero__visual { padding: 0 0 26px 22px; }
    .home-hero__frame { border-radius: 999px 999px 24px 24px; }
    .home-hero__inset { border-radius: 22px; padding: 5px; }
    .home-hero__inset img { border-radius: 17px; }
    .home-hero__ctas .dh-btn { flex: 1 1 100%; }
    .home-hero__dots { margin-top: 28px; }
  }
`;

export default function Hero() {
  const slides = [
  {
    label: "Mental Health & Recovery Services",
    title: "Mental wellness,\nlife success",
    desc: "Dove Health provides compassionate, evidence-based mental health and substance use treatment, with personalized care designed to support recovery, wellness, and long-term success.",
  },
  {
    label: "Outpatient Mental Health Services",
    title: "Empowering minds,\ntransforming lives",
    desc: "Access professional outpatient mental health services, including OMHC, PRP programs, counseling, and personalized behavioral health support tailored to your individual needs.",
  },
];
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    // Respect reduced-motion preferences: no automatic rotation.
    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (paused || reduceMotion) return undefined;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [paused, slides.length]);

  return (
    <section
      className="home-hero"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <style>{HERO_CSS}</style>

      <div className="dh-container home-hero__grid">
        <div className="home-hero__copy">
          {/* All slides share one grid cell, so the block keeps the height of the
              tallest slide and nothing below it shifts when the text rotates. */}
          <div className="home-hero__stack">
            {slides.map((slide, i) => (
              <p
                key={`label-${i}-${index}`}
                className={`dh-eyebrow${i === index ? " is-active home-hero__animate" : ""}`}
                aria-hidden={i !== index}
              >
                {slide.label}
              </p>
            ))}
          </div>

          <h1 className="dh-h1 home-hero__title home-hero__stack">
            {slides.map((slide, i) => (
              <span
                key={`title-${i}-${index}`}
                className={i === index ? "is-active home-hero__animate d1" : undefined}
                aria-hidden={i !== index}
              >
                {slide.title}
              </span>
            ))}
          </h1>

          <div className="home-hero__desc home-hero__stack">
            {slides.map((slide, i) => (
              <p
                key={`desc-${i}-${index}`}
                className={`dh-lead${i === index ? " is-active home-hero__animate d2" : ""}`}
                aria-hidden={i !== index}
              >
                {slide.desc}
              </p>
            ))}
          </div>

          <div className="home-hero__ctas">
            <a href="/book-appointment" className="dh-btn dh-btn--primary">
              Book appointment
              <ArrowIcon />
            </a>
            <a href="tel:+14109882335" className="dh-btn dh-btn--secondary">
              <Phone size={17} aria-hidden="true" />
              Call us now
            </a>
          </div>

          <div className="home-hero__dots">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`home-hero__dot${i === index ? " is-active" : ""}`}
                aria-label={`Show slide ${i + 1}`}
                aria-current={i === index ? "true" : undefined}
              />
            ))}
          </div>
        </div>

        <div className="home-hero__visual" aria-hidden="true">
          <span className="home-hero__mark dh-dove-mark" />
          <span className="home-hero__ring" />
          <div className="home-hero__frame">
            <img
              src={heroImg}
              srcSet={`${heroImgSm} 640w, ${heroImg} 960w`}
              sizes="(min-width: 1024px) 520px, (min-width: 520px) 440px, 90vw"
              alt=""
              width={960}
              height={1200}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="home-hero__inset">
            <img src={heroInset} alt="" width={400} height={400} loading="lazy" decoding="async" />
          </div>
        </div>
      </div>
    </section>
  );
}
