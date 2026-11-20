/**
 * Inner-page header.
 *
 * Layouts
 * - no image, no sub text: title only
 * - sub text: title on the left, sub text in a right-hand column (editorial split)
 * - image: title + sub text on the left, a photo resting on the header's bottom edge
 *
 * `breadcrumb` is the page's existing breadcrumb string ("A > B > C").
 * `eyebrow` is used on pages that had a label instead of a breadcrumb.
 * `title` and `children` (sub text) are rendered as given.
 */
export default function PageHero({ breadcrumb, eyebrow, title, children, image }) {
  const crumbs = breadcrumb ? breadcrumb.split(">").map((c) => c.trim()) : null;

  const lead = (
    <>
      {crumbs && (
        <nav aria-label="Breadcrumb">
          <ol className="dh-breadcrumb">
            {crumbs.map((crumb, i) => (
              <li key={crumb}>
                {i > 0 && (
                  <span className="sep" aria-hidden="true">
                    /
                  </span>
                )}
                <span>{crumb}</span>
              </li>
            ))}
          </ol>
        </nav>
      )}
      {eyebrow && <p className="dh-kicker">{eyebrow}</p>}
    </>
  );

  if (image) {
    return (
      <section className="dh-page-head dh-page-head--media">
        <div className="dh-container dh-page-head__inner">
          <div className="dh-grid dh-page-head__grid">
            <div className="dh-col-6 dh-page-head__text">
              {lead}
              <h1 className="dh-h1 dh-page-head__title">{title}</h1>
              {children && <p className="dh-lead dh-page-head__sub">{children}</p>}
            </div>
            <figure
              className="dh-col-6 dh-page-head__media"
              style={{ "--dh-ratio": image.ratio || "4 / 3", "--dh-focus": image.focus || "50% 40%" }}
            >
              <img src={image.src} alt={image.alt || ""} fetchPriority="high" decoding="async" />
            </figure>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="dh-page-head">
      <div className="dh-container dh-page-head__inner">
        {lead}
        <div className="dh-grid dh-page-head__grid">
          <h1 className={`dh-h1 dh-page-head__title ${children ? "dh-col-7" : "dh-col-8"}`}>{title}</h1>
          {children && <p className="dh-lead dh-page-head__sub dh-col-5">{children}</p>}
        </div>
      </div>
    </section>
  );
}
