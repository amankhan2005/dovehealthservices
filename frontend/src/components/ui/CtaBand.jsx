/**
 * Closing "next step" band. Full-width, left-aligned title and text with the
 * actions on the right. `tone` = "night" (default) or "paper".
 * `title`, `text` and `children` (the action links) are passed through unchanged.
 */
export default function CtaBand({ title, text, children, tone = "night" }) {
  return (
    <section className={`dh-next${tone === "paper" ? " dh-next--paper" : ""}`}>
      <div className="dh-container">
        <div className="dh-next__grid" data-reveal>
          <div>
            <h2 className="dh-next__title">{title}</h2>
            {text && <p className="dh-next__text">{text}</p>}
          </div>
          <div className="dh-next__actions">{children}</div>
        </div>
      </div>
    </section>
  );
}
