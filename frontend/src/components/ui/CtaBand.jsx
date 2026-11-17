/**
 * Closing call-to-action panel shared by inner pages.
 * `title`, `text` and `children` (the action links) are passed through unchanged.
 */
export default function CtaBand({ title, text, children }) {
  return (
    <section className="dh-cta">
      <div className="dh-container">
        <div className="dh-cta__panel" data-reveal>
          <span className="dh-cta__mark dh-dove-mark" aria-hidden="true" />
          <h2 className="dh-cta__title">{title}</h2>
          {text && <p className="dh-cta__text">{text}</p>}
          <div className="dh-cta__actions">{children}</div>
        </div>
      </div>
    </section>
  );
}
