import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, AlertCircle, CalendarCheck } from "lucide-react";
import logo from "../../assets/logo.png";

const HEADER_CSS = `
  .dh-header {
    position: fixed;
    inset: 0 0 auto 0;
    z-index: 50;
    height: var(--dh-header-h);
    background: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(160%) blur(14px);
    -webkit-backdrop-filter: saturate(160%) blur(14px);
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s var(--dh-ease), box-shadow 0.3s var(--dh-ease), background-color 0.3s;
  }

  .dh-header.is-scrolled {
    background: rgba(255, 255, 255, 0.96);
    border-bottom-color: var(--dh-line);
    box-shadow: 0 10px 30px -24px rgba(14, 42, 71, 0.45);
  }

  .dh-header__bar {
    height: 100%;
    max-width: 1800px;
    margin: 0 auto;
    padding: 0 var(--dh-gutter);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .dh-header__logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-radius: 10px;
  }

  .dh-header__logo img {
    display: block;
    height: 56px;
    width: auto;
    max-width: none;
    user-select: none;
  }

  @media (min-width: 640px) { .dh-header__logo img { height: 64px; } }
  @media (min-width: 1280px) { .dh-header__logo img { height: 56px; } }
  @media (min-width: 1536px) { .dh-header__logo img { height: 76px; } }

  /* Desktop navigation */
  .dh-nav {
    display: none;
    flex: 1;
    min-width: 0;
    align-items: center;
    justify-content: center;
    gap: 2px;
  }

  @media (min-width: 1280px) { .dh-nav { display: flex; } }
  @media (min-width: 1536px) { .dh-nav { gap: 6px; } }

  .dh-nav__item {
    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 4px;
    flex-shrink: 0;
    padding: 10px 12px;
    border: 0;
    border-radius: 10px;
    background: transparent;
    font-family: var(--dh-font-sans);
    font-size: 14.5px;
    font-weight: 500;
    line-height: 1.2;
    white-space: nowrap;
    color: var(--dh-ink-2);
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }

  @media (min-width: 1536px) { .dh-nav__item { font-size: 15.5px; padding: 10px 14px; } }

  .dh-nav__item:hover { color: var(--dh-brand); background: var(--dh-sky-50); }

  .dh-nav__item::after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: 3px;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: var(--dh-accent);
    transform: translateX(-50%) scaleX(0);
    transition: transform 0.25s var(--dh-ease);
  }

  .dh-nav__item.is-active { color: var(--dh-brand); font-weight: 600; }
  .dh-nav__item.is-active::after { transform: translateX(-50%) scaleX(1); }

  .dh-nav__item .chev { transition: transform 0.25s var(--dh-ease); }
  .dh-nav__item[aria-expanded="true"] .chev { transform: rotate(180deg); }

  .dh-nav__crisis { color: var(--dh-crisis); font-weight: 600; gap: 7px; }
  .dh-nav__crisis:hover { color: #fff; background: var(--dh-crisis); }
  .dh-nav__crisis::after { display: none; }

  .dh-sos {
    display: inline-flex;
    align-items: center;
    padding: 3px 5px;
    border-radius: 5px;
    background: var(--dh-crisis);
    color: #fff;
    font-size: 9.5px;
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 1;
  }

  .dh-nav__crisis:hover .dh-sos { background: #fff; color: var(--dh-crisis); }

  .dh-dropdown {
    position: absolute;
    top: calc(100% + 10px);
    left: 0;
    z-index: 50;
    width: 248px;
    padding: 8px;
    border: 1px solid var(--dh-line);
    border-radius: 16px;
    background: #fff;
    box-shadow: var(--dh-shadow-md);
    animation: dh-drop 0.22s var(--dh-ease);
  }

  @keyframes dh-drop {
    from { opacity: 0; transform: translateY(-6px); }
    to { opacity: 1; transform: none; }
  }

  .dh-dropdown__link {
    display: block;
    padding: 11px 14px;
    border-radius: 10px;
    font-size: 14.5px;
    font-weight: 500;
    white-space: nowrap;
    color: var(--dh-ink-2);
    text-decoration: none;
    transition: color 0.2s, background-color 0.2s;
  }

  .dh-dropdown__link:hover { color: var(--dh-brand); background: var(--dh-sky-50); }
  .dh-dropdown__link.is-active { color: var(--dh-brand); background: var(--dh-sky-50); font-weight: 600; }

  .dh-header__cta { display: none; flex-shrink: 0; }
  @media (min-width: 1280px) { .dh-header__cta { display: flex; } }

  .dh-header__cta .dh-btn { min-height: 46px; padding: 0 22px; font-size: 14.5px; }
  @media (min-width: 1536px) { .dh-header__cta .dh-btn { min-height: 50px; padding: 0 26px; font-size: 15px; } }

  /* Mobile */
  .dh-menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
    border: 1px solid var(--dh-line);
    border-radius: 12px;
    background: #fff;
    color: var(--dh-ink);
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
  }

  .dh-menu-btn:hover { background: var(--dh-sky-50); border-color: var(--dh-sky-200); }
  @media (min-width: 1280px) { .dh-menu-btn { display: none; } }

  .dh-mobile {
    max-height: calc(100vh - var(--dh-header-h));
    max-height: calc(100dvh - var(--dh-header-h));
    overflow-y: auto;
    overscroll-behavior: contain;
    background: #fff;
    border-top: 1px solid var(--dh-line);
    box-shadow: 0 30px 50px -30px rgba(14, 42, 71, 0.4);
    animation: dh-drop 0.25s var(--dh-ease);
  }

  @media (min-width: 1280px) { .dh-mobile { display: none; } }

  .dh-mobile__nav {
    max-width: 720px;
    margin: 0 auto;
    padding: 12px var(--dh-gutter) 28px;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .dh-mobile__link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 15px 14px;
    border: 0;
    border-radius: 12px;
    background: transparent;
    font-family: var(--dh-font-sans);
    font-size: 16px;
    font-weight: 500;
    color: var(--dh-ink);
    text-align: left;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
  }

  .dh-mobile__link:hover { background: var(--dh-sky-50); color: var(--dh-brand); }
  .dh-mobile__link.is-active { background: var(--dh-sky-50); color: var(--dh-brand); font-weight: 600; }
  .dh-mobile__link .chev { color: var(--dh-muted); transition: transform 0.25s var(--dh-ease); }
  .dh-mobile__link[aria-expanded="true"] .chev { transform: rotate(180deg); }

  .dh-mobile__sub {
    display: flex;
    flex-direction: column;
    gap: 2px;
    margin: 2px 0 8px;
    padding: 8px;
    border-radius: 14px;
    background: var(--dh-sand-50);
  }

  .dh-mobile__crisis {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    padding: 14px;
    border-radius: 12px;
    background: var(--dh-crisis-50);
    font-weight: 600;
    color: var(--dh-crisis);
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;
  }

  .dh-mobile__crisis:hover { background: var(--dh-crisis); color: #fff; }
  .dh-mobile__cta { margin-top: 12px; }
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Track scroll for subtle header shadow enhancement
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  }, [location]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutsideMobile = (e) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutsideMobile);
      return () => document.removeEventListener("mousedown", handleClickOutsideMobile);
    }
  }, [menuOpen]);

  // Escape key closes whichever menu/dropdown is open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setOpenDropdown(null);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const toggleDropdown = (name) => setOpenDropdown(openDropdown === name ? null : name);
  const toggleMobileDropdown = (name) => setMobileDropdown(mobileDropdown === name ? null : name);

  const navItemClass = ({ isActive }) => `dh-nav__item${isActive ? " is-active" : ""}`;
  const dropdownItemClass = ({ isActive }) => `dh-dropdown__link${isActive ? " is-active" : ""}`;
  const dropdownTriggerClass = (isActivePath) => `dh-nav__item${isActivePath ? " is-active" : ""}`;
  const mobileLinkClass = ({ isActive }) => `dh-mobile__link${isActive ? " is-active" : ""}`;

  return (
    <header className={`dh-header${isScrolled || menuOpen ? " is-scrolled" : ""}`}>
      <style>{HEADER_CSS}</style>

      <div className="dh-header__bar">
        {/* ── LOGO ── */}
        <NavLink to="/" aria-label="Dove Health - Home" className="dh-header__logo">
          {/* Wordmark is 1000x472 (~2.12:1): height drives size, width follows */}
          <img
            src={logo}
            alt="Dove Health"
            width={1000}
            height={472}
            decoding="async"
            fetchPriority="high"
            draggable="false"
          />
        </NavLink>

        {/* ── DESKTOP NAV ── */}
        <nav ref={dropdownRef} className="dh-nav" aria-label="Main">
          <NavLink to="/" end className={navItemClass}>
            Home
          </NavLink>

          <NavLink to="/about-us" className={navItemClass}>
            About
          </NavLink>

          {/* Strategies Dropdown */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => toggleDropdown("strategies")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "strategies"}
              className={dropdownTriggerClass(location.pathname.startsWith("/strategies"))}
            >
              Strategies
              <ChevronDown size={16} className="chev" />
            </button>

            {openDropdown === "strategies" && (
              <div className="dh-dropdown">
                <NavLink to="/strategies/personal-objective" className={dropdownItemClass}>
                  Personal Objective
                </NavLink>
                <NavLink to="/strategies/wellness-recovery" className={dropdownItemClass}>
                  Wellness Recovery
                </NavLink>
                <NavLink to="/strategies/doctor-visits" className={dropdownItemClass}>
                  Doctor Visits
                </NavLink>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => toggleDropdown("services")}
              aria-haspopup="true"
              aria-expanded={openDropdown === "services"}
              className={dropdownTriggerClass(location.pathname.startsWith("/services"))}
            >
              Services
              <ChevronDown size={16} className="chev" />
            </button>

            {openDropdown === "services" && (
              <div className="dh-dropdown">
                <NavLink to="/services/omhc" className={dropdownItemClass}>
                  OMHC
                </NavLink>
                <NavLink to="/services/prp" className={dropdownItemClass}>
                  PRP
                </NavLink>
                <NavLink to="/services/family-counselling" className={dropdownItemClass}>
                  Family Counseling
                </NavLink>
                <NavLink to="/services/personal-counselling" className={dropdownItemClass}>
                  Personal Counseling
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/treatment-recovery" className={navItemClass}>
            Treatment &amp; Recovery
          </NavLink>

          {/* <NavLink to="/meet-the-team" className={navItemClass}>
            Meet the Team
          </NavLink> */}

          <NavLink to="/resources" className={navItemClass}>
            Resources
          </NavLink>

          <NavLink to="/employee" className={navItemClass}>
            Employee
          </NavLink>

          {/* Crisis Support */}
          <a href="tel:988" className="dh-nav__item dh-nav__crisis">
            <span className="dh-sos">SOS</span>
            Crisis
          </a>
        </nav>

        {/* ── CTA ── */}
        <div className="dh-header__cta">
          <NavLink to="/book-appointment" className="dh-btn dh-btn--primary">
            Book Appointment
          </NavLink>
        </div>

        {/* ── MOBILE MENU BUTTON ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="dh-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div ref={mobileMenuRef} className="dh-mobile">
          <nav className="dh-mobile__nav" aria-label="Mobile">
            <NavLink to="/" end className={mobileLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about-us" className={mobileLinkClass}>
              About
            </NavLink>

            {/* Mobile Strategies */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("strategies")}
                aria-expanded={mobileDropdown === "strategies"}
                className="dh-mobile__link"
              >
                Strategies
                <ChevronDown size={18} className="chev" />
              </button>
              {mobileDropdown === "strategies" && (
                <div className="dh-mobile__sub">
                  <NavLink to="/strategies/personal-objective" className={dropdownItemClass}>
                    Personal Objective
                  </NavLink>
                  <NavLink to="/strategies/wellness-recovery" className={dropdownItemClass}>
                    Wellness Recovery
                  </NavLink>
                  <NavLink to="/strategies/doctor-visits" className={dropdownItemClass}>
                    Doctor Visits
                  </NavLink>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("services")}
                aria-expanded={mobileDropdown === "services"}
                className="dh-mobile__link"
              >
                Services
                <ChevronDown size={18} className="chev" />
              </button>
              {mobileDropdown === "services" && (
                <div className="dh-mobile__sub">
                  <NavLink to="/services/omhc" className={dropdownItemClass}>
                    OMHC
                  </NavLink>
                  <NavLink to="/services/prp" className={dropdownItemClass}>
                    PRP
                  </NavLink>
                  <NavLink to="/services/family-counselling" className={dropdownItemClass}>
                    Family Counseling
                  </NavLink>
                  <NavLink to="/services/personal-counselling" className={dropdownItemClass}>
                    Personal Counseling
                  </NavLink>
                </div>
              )}
            </div>

            <NavLink to="/treatment-recovery" className={mobileLinkClass}>
              Treatment &amp; Recovery
            </NavLink>

            {/* <NavLink to="/meet-the-team" className={mobileLinkClass}>
              Meet the Team
            </NavLink> */}

            <NavLink to="/resources" className={mobileLinkClass}>
              Resources
            </NavLink>

            <NavLink to="/employee" className={mobileLinkClass}>
              Employee
            </NavLink>

            <a href="tel:988" className="dh-mobile__crisis">
              <AlertCircle size={18} />
              Crisis Support (988)
            </a>

            <NavLink to="/contact-us" className={mobileLinkClass}>
              Contact
            </NavLink>

            <NavLink to="/book-appointment" className="dh-btn dh-btn--primary dh-btn--block dh-mobile__cta">
              <CalendarCheck size={18} />
              Book Appointment
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
