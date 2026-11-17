/**
 * Shared hero for inner pages.
 *
 * - `breadcrumb` is the page's existing breadcrumb string ("A > B > C");
 *   it is rendered as a styled trail with the same wording.
 * - `eyebrow` is used instead of a breadcrumb on pages that had one.
 * - `title` and `children` (the optional sub text) are passed through as-is.
 */
export default function PageHero({ breadcrumb, eyebrow, title, children, rule = true }) {
  const crumbs = breadcrumb ? breadcrumb.split(">").map((c) => c.trim()) : null;

  return (
    <section className="dh-page-hero">
      <span className="dh-page-hero__mark dh-dove-mark" aria-hidden="true" />
      <div className="dh-container dh-page-hero__inner">
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
        {eyebrow && <p className="dh-eyebrow">{eyebrow}</p>}
        <h1 className="dh-h1 dh-page-hero__title">{title}</h1>
        {children && <p className="dh-lead dh-page-hero__sub">{children}</p>}
        {rule && (
          <div className="dh-rule" aria-hidden="true">
            <span className="bar" />
            <span className="dot" />
          </div>
        )}
      </div>
    </section>
  );
}
