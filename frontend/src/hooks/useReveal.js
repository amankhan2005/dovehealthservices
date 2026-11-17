import { useEffect } from "react";

/**
 * Fades sections marked with `data-reveal` into view as they scroll in.
 * Re-runs when `key` (e.g. the route path) changes. Content is only hidden
 * once this hook has run, so it stays visible without JavaScript, and the
 * CSS keeps everything visible for people who prefer reduced motion.
 */
export default function useReveal(key) {
  useEffect(() => {
    const root = document.documentElement;

    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((el) => el.classList.add("is-visible"));
      return undefined;
    }

    root.classList.add("dh-reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0 }
    );

    // Wait a frame so the new route's markup is in the DOM.
    const frame = requestAnimationFrame(() => {
      document
        .querySelectorAll("[data-reveal]:not(.is-visible)")
        .forEach((el) => observer.observe(el));
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [key]);
}
