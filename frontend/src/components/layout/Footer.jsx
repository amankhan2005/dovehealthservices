import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Printer,
} from "lucide-react";

import logo from "../../assets/brand/dove-health-logo-reversed.svg";

export default function Footer() {
  return (
    <footer className="dove-footer">
      <style>{`
        .dove-footer {
          background: var(--dh-night);
          color: rgba(255, 255, 255, 0.7);
        }

        .dove-footer-topline { display: none; }

        .dove-footer-grid {
          max-width: calc(var(--dh-container-wide) + var(--dh-gutter) * 2);
          margin: 0 auto;
          padding: clamp(64px, 8vw, 104px) var(--dh-gutter) clamp(48px, 6vw, 72px);
          display: grid;
          grid-template-columns: minmax(0, 4fr) minmax(0, 2fr) minmax(0, 2fr) minmax(0, 3fr);
          gap: 48px clamp(32px, 4vw, 64px);
        }

        @media (max-width: 1024px) { .dove-footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 560px) { .dove-footer-grid { grid-template-columns: minmax(0, 1fr); gap: 40px; } }

        .dove-footer-brand-row { margin-bottom: 26px; }
        .dove-footer-logo-box { display: inline-block; }

        .dove-footer-logo-box img {
          display: block;
          height: 84px;
          width: auto;
          max-width: 100%;
        }

        @media (max-width: 560px) { .dove-footer-logo-box img { height: 72px; } }

        .dove-footer-desc {
          max-width: 36ch;
          margin: 0 0 30px;
          font-size: 15px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.66);
        }

        .dove-footer-socials { display: flex; gap: 8px; }

        .dove-icon-chip {
          width: 38px;
          height: 38px;
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255, 255, 255, 0.22);
          border-radius: var(--dh-radius);
          color: #fff;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
        }

        a.dove-icon-chip:hover { background: #fff; border-color: #fff; color: var(--dh-night); }

        .dove-footer-heading {
          margin: 4px 0 22px;
          padding-bottom: 14px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.14);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #fff;
        }

        .dove-footer-heading .bar { display: none; }

        .dove-footer-links { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }

        .dove-footer-links a {
          font-size: 15px;
          color: rgba(255, 255, 255, 0.72);
          text-decoration: none;
          transition: color 0.2s;
        }

        .dove-footer-links a:hover { color: #fff; text-decoration: underline; text-underline-offset: 4px; }

        .dove-footer-contact { display: grid; gap: 14px; }

        .dove-contact-row {
          display: grid;
          grid-template-columns: 20px minmax(0, 1fr);
          gap: 12px;
          align-items: start;
          color: rgba(255, 255, 255, 0.78);
          text-decoration: none;
          transition: color 0.2s;
        }

        .dove-contact-row:hover { color: #fff; }

        .dove-contact-row .dove-icon-chip {
          width: 20px;
          height: 22px;
          border: 0;
          border-radius: 0;
          color: #9fbad6;
          background: transparent;
        }

        .dove-contact-row span {
          min-width: 0;
          font-size: 15px;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .dove-footer-bottom { border-top: 1px solid rgba(255, 255, 255, 0.12); }

        .dove-footer-bottom-inner {
          max-width: calc(var(--dh-container-wide) + var(--dh-gutter) * 2);
          margin: 0 auto;
          padding: 24px var(--dh-gutter) 28px;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px 24px;
        }

        .dove-footer-bottom-inner p { margin: 0; font-size: 13.5px; color: rgba(255, 255, 255, 0.55); }

        .dove-footer-bottom-inner .dove-footer-legal {
          margin-top: 4px;
          font-size: 12px;
          letter-spacing: 0.02em;
          color: rgba(255, 255, 255, 0.4);
        }

        .dove-footer-bottom-inner a { font-weight: 600; color: rgba(255, 255, 255, 0.8); text-decoration: none; }
        .dove-footer-bottom-inner a:hover { color: #fff; text-decoration: underline; }
      `}</style>

      <div className="dove-footer-topline" />

      <div className="dove-footer-grid">
        {/* BRAND */}
        <div>
          <div className="dove-footer-brand-row">
            <div className="dove-footer-logo-box">
              <img
                src={logo}
                alt="Dove Health"
                width={3951}
                height={1864}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          <p className="dove-footer-desc">
            Trusted outpatient mental healthcare services providing OMHC,
            PRP, and counseling support with compassion and excellence.
          </p>

          <div className="dove-footer-socials">
            <a
              href="https://www.facebook.com/DovehealthcareServices"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dove Health on Facebook"
              className="dove-icon-chip"
            >
              <Facebook size={17} />
            </a>

            <a
              href="https://www.instagram.com/dovehealthcaremd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dove Health on Instagram"
              className="dove-icon-chip"
            >
              <Instagram size={17} />
            </a>

            <a
              href="https://x.com/dovehealth_md"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dove Health on X"
              className="dove-icon-chip"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.901 1H22L14.62 9.21L23 23H16.42L11.09 15.62L4.9 23H1.8L9.69 14.07L1.7 1H8.42L13.24 7.7L18.901 1Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="dove-footer-heading">
            <span className="bar" />
            Quick links
          </h4>
          <ul className="dove-footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about-us">About us</Link></li>
            {/* <li><Link to="/meet-the-team">Meet the team</Link></li> */}
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/contact-us">Contact</Link></li>
            <li><Link to="/faq">FAQs</Link></li>
            <li>
              <a
                href="https://pdf.ac/MhJMWzQID"
                target="_blank"
                rel="noopener noreferrer"
              >
                Consent forms PRP
              </a>
            </li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h4 className="dove-footer-heading">
            <span className="bar" />
            Services
          </h4>
          <ul className="dove-footer-links">
            <li><Link to="/services/omhc">OMHC services</Link></li>
            <li><Link to="/services/prp">PRP program</Link></li>
            <li><Link to="/services/family-counselling">Family counseling</Link></li>
            <li><Link to="/services/personal-counselling">Personal counseling</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="dove-footer-heading">
            <span className="bar" />
            Contact
          </h4>

          <div className="dove-footer-contact">
            <a href="tel:+14109882335" className="dove-contact-row">
              <div className="dove-icon-chip">
                <Phone size={17} />
              </div>
              <span>+1 (410) 988-2335</span>
            </a>

            <a href="fax:4105586722" className="dove-contact-row">
              <div className="dove-icon-chip">
                <Printer size={17} />
              </div>
              <span>Fax: 410-558-6722</span>
            </a>

            <a href="mailto:careteam@dovehealthservices.com" className="dove-contact-row">
              <div className="dove-icon-chip">
                <Mail size={17} />
              </div>
              <span>careteam@dovehealthservices.com</span>
            </a>

            <a
              href="https://www.google.com/maps?q=2101+St+Paul+St,+Baltimore+MD+21218"
              target="_blank"
              rel="noopener noreferrer"
              className="dove-contact-row"
            >
              <div className="dove-icon-chip">
                <MapPin size={17} />
              </div>
              <span>2101 St Paul St, 1st FL, Baltimore MD 21218</span>
            </a>
          </div>
        </div>
      </div>
      <div className="dove-footer-bottom">
        <div className="dove-footer-bottom-inner">
          <div className="dove-footer-legal-block">
            <p>© {new Date().getFullYear()} Dove Health. All rights reserved.</p>
            <p className="dove-footer-legal">Dove Healthcare Services, LLC dba Dove Health</p>
          </div>
          <p>
            Designed and developed by {" "}
            <a
              href="https://www.webieapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              WebieApp Solutions LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}