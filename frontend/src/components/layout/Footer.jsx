import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Printer,
} from "lucide-react";

import logo from "../../assets/logo.png";

export default function Footer() {
  return (
    <footer className="dove-footer">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .dove-footer {
          --navy: #16314F;
          --navy-deep: #102338;
          --blue: #5BA3DE;
          --blue-tint: rgba(91, 163, 222, 0.12);
          --peach: #F2A878;
          --peach-deep: #E8895A;
          position: relative;
          background: var(--navy-deep);
          color: rgba(255, 255, 255, 0.72);
        }

        .dove-footer-topline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, transparent, var(--peach), transparent);
        }

        .dove-footer-grid {
          max-width: 1280px;
          margin: 0 auto;
          padding: 80px 24px 56px;
          display: grid;
          grid-template-columns: 1.3fr 1fr 1fr 1.2fr;
          gap: 48px;
        }

        @media (max-width: 980px) {
          .dove-footer-grid { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 560px) {
          .dove-footer-grid { grid-template-columns: 1fr; }
        }

        .dove-footer-brand-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 22px;
        }

        .dove-footer-logo-box {
          background: #fff;
          padding: 10px;
          border-radius: 14px;
          flex-shrink: 0;
          display: flex;
        }

        .dove-footer-logo-box img {
          width: 44px;
          display: block;
        }

        .dove-footer-brand-name {
          font-family: 'Manrope', sans-serif;
          font-weight: 700;
          font-size: 17px;
          color: #fff;
          line-height: 1.3;
          margin: 0;
        }

        .dove-footer-brand-sub {
          font-family: 'Inter', sans-serif;
          font-size: 11px;
          letter-spacing: 2px;
          color: var(--peach);
          font-weight: 600;
          margin: 0;
        }

        .dove-footer-desc {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.6);
          margin: 0 0 28px;
          max-width: 32ch;
        }

        .dove-footer-socials {
          display: flex;
          gap: 12px;
        }

        .dove-icon-chip {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 255, 255, 0.08);
          color: #fff;
          border: 1px solid rgba(255, 255, 255, 0.12);
          transition: background 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }

        .dove-icon-chip:hover {
          background: var(--peach);
          border-color: var(--peach);
          transform: translateY(-2px);
        }

        .dove-footer-heading {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #fff;
          margin: 0 0 22px;
        }

        .dove-footer-heading .bar {
          width: 18px;
          height: 3px;
          border-radius: 3px;
          background: var(--peach);
          flex-shrink: 0;
        }

        .dove-footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .dove-footer-links a {
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          color: rgba(255, 255, 255, 0.65);
          text-decoration: none;
          transition: color 0.2s ease, padding-left 0.2s ease;
        }

        .dove-footer-links a:hover {
          color: var(--peach);
          padding-left: 3px;
        }

        .dove-footer-contact {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .dove-contact-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          text-decoration: none;
          color: rgba(255, 255, 255, 0.75);
          transition: color 0.2s ease;
        }

        .dove-contact-row:hover {
          color: #fff;
        }

        .dove-contact-row .dove-icon-chip {
          background: var(--blue-tint);
          border-color: transparent;
          color: var(--blue);
          flex-shrink: 0;
          margin-top: 1px;
        }

        .dove-contact-row:hover .dove-icon-chip {
          background: var(--blue);
          color: #fff;
        }

        .dove-contact-row span {
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          line-height: 1.55;
          padding-top: 8px;
        }

        .dove-footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .dove-footer-bottom-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 22px 24px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .dove-footer-bottom-inner p {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.45);
          margin: 0;
        }

        .dove-footer-bottom-inner a {
          font-weight: 700;
          color: var(--peach);
          text-decoration: none;
        }

        .dove-footer-bottom-inner a:hover {
          color: var(--peach-deep);
          text-decoration: underline;
        }
      `}</style>

      <div className="dove-footer-topline" />

      <div className="dove-footer-grid">
        {/* BRAND */}
        <div>
          <div className="dove-footer-brand-row">
            <div className="dove-footer-logo-box">
              <img src={logo} alt="Dove Logo" />
            </div>
            <div>
              <p className="dove-footer-brand-name">Dove Healthcare</p>
              <p className="dove-footer-brand-sub">SERVICES LLC</p>
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
              aria-label="Dove Healthcare Services on Facebook"
              className="dove-icon-chip"
            >
              <Facebook size={17} />
            </a>

            <a
              href="https://www.instagram.com/dovehealthcaremd"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dove Healthcare Services on Instagram"
              className="dove-icon-chip"
            >
              <Instagram size={17} />
            </a>

            <a
              href="https://x.com/dovehealth_md"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Dove Healthcare Services on X"
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
          <p>© {new Date().getFullYear()} Dove Healthcare Services. All rights reserved.</p>
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