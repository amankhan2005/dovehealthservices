import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import ArrowIcon from "../ui/ArrowIcon";
import heroImg from "../../assets/hero/hero-session-wide.webp";
import heroImgSm from "../../assets/hero/hero-session-wide-760.webp";

const HERO_CSS = `
  /* Split hero: copy on warm paper, photograph running to the viewport edge. */
  .home-hero {
    position: relative;
    background: var(--dh-paper);
    border-bottom: 1px solid var(--dh-line);
  }

  .home-hero__grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr);
  }

  .home-hero__copy {
    padding: clamp(48px, 9vw, 96px) var(--dh-gutter) clamp(56px, 8vw, 88px);
  }

  .home-hero__media { position: relative; margin: 0; }

  .home-hero__media img {
    display: block;
    width: 100%;
    height: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    object-position: 45% 30%;
  }

  @media (min-width: 1024px) {
    .home-hero__grid {
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      min-height: min(calc(100vh - var(--dh-header-h)), 820px);
    }

    /* align the copy with the site container's left edge */
    .home-hero__copy {
      align-self: center;
      padding-left: max(var(--dh-gutter), calc((100vw - var(--dh-container)) / 2));
      padding-right: clamp(32px, 4vw, 72px);
    }

    .home-hero__media img { aspect-ratio: auto; position: absolute; inset: 0; }
  }

  .home-hero__stack { display: grid; }
  .home-hero__stack > * { grid-area: 1 / 1; visibility: hidden; }
  .home-hero__stack > .is-active { visibility: visible; }

  .home-hero__animate { animation: home-hero-in 0.6s var(--dh-ease) both; }
  .home-hero__animate.d1 { animation-delay: 0.05s; }
  .home-hero__animate.d2 { animation-delay: 0.1s; }

  @keyframes home-hero-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: none; }
  }

  /* Sized to the copy column so every slide's headline sets on two lines
     (no reserved empty line when the slides rotate). */
  .home-hero__copy { container-type: inline-size; }
  .home-hero__title { white-space: pre-line; font-size: clamp(2.2rem, 10.4cqi, 4.6rem); }

  .home-hero__desc { margin-top: 28px; max-width: 46ch; }
  .home-hero__desc > p { margin: 0; }

  .home-hero__ctas { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 40px; }

  .home-hero__dots {
    display: flex;
    gap: 8px;
    margin-top: clamp(40px, 6vw, 64px);
  }

  .home-hero__dot {
    position: relative;
    width: 48px;
    height: 20px;
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
    height: 2px;
    transform: translateY(-50%);
    background: var(--dh-line-strong);
    transition: background-color 0.3s;
  }

  .home-hero__dot.is-active::before { background: var(--dh-brand); }

  @media (max-width: 520px) {
    .home-hero__ctas .dh-btn { flex: 1 1 100%; }
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

      <div className="home-hero__grid">
        <div className="home-hero__copy">
          {/* All slides share one grid cell, so the block keeps the height of the
              tallest slide and nothing below it shifts when the text rotates. */}
          <div className="home-hero__stack">
            {slides.map((slide, i) => (
              <p
                key={`label-${i}-${index}`}
                className={`dh-kicker${i === index ? " is-active home-hero__animate" : ""}`}
                aria-hidden={i !== index}
              >
                {slide.label}
              </p>
            ))}
          </div>

          <h1 className="dh-display home-hero__title home-hero__stack">
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

        <figure className="home-hero__media" aria-hidden="true">
          <img
            src={heroImg}
            srcSet={`${heroImgSm} 760w, ${heroImg} 1400w`}
            sizes="(min-width: 1024px) 50vw, 100vw"
            alt=""
            width={1400}
            height={1375}
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
