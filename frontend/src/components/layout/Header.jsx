import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, AlertCircle, CalendarCheck } from "lucide-react";
import logo from "../../assets/logo.png";

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
    window.addEventListener("scroll", handleScroll);
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

  const navItemClass = ({ isActive }) =>
    `flex-shrink-0 whitespace-nowrap px-2.5 xl:px-3 2xl:px-3.5 py-2 rounded-lg ` +
    `transition duration-200 text-sm 2xl:text-base font-medium focus-visible:outline-none ` +
    `focus-visible:ring-2 focus-visible:ring-[var(--peach)]/50 ${
      isActive
        ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]"
        : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
    }`;

  const dropdownItemClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-lg transition duration-200 text-sm font-medium whitespace-nowrap ` +
    `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--peach)]/50 ${
      isActive
        ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]"
        : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--peach-tint)]"
    }`;

  const dropdownTriggerClass = (isActivePath) =>
    `flex items-center gap-1 whitespace-nowrap px-2.5 xl:px-3 2xl:px-3.5 py-2 rounded-lg ` +
    `transition duration-200 text-sm 2xl:text-base font-medium focus-visible:outline-none ` +
    `focus-visible:ring-2 focus-visible:ring-[var(--peach)]/50 ${
      isActivePath
        ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]"
        : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
    }`;

  const NAV_VISIBLE = "xl:flex";

  return (
    <header
      className={`dove-header w-full bg-white fixed top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&family=Inter:wght@400;500;600&display=swap');

        .dove-header {
          --navy: #16314F;
          --blue: #2F86C6;
          --blue-tint: #EAF3FA;
          --peach: #F2A878;
          --peach-tint: #FCEEE4;
          --peach-deep: #E8895A;
          --crisis-red: #C8302B;
          --crisis-red-tint: #FBE7E6;
          font-family: 'Inter', sans-serif;
        }

        .dove-header h1,
        .dove-header h2 {
          font-family: 'Manrope', sans-serif;
        }
      `}</style>

      <div className="max-w-[1800px] mx-auto px-4 sm:px-6 xl:px-8 py-3 flex items-center justify-between gap-2 sm:gap-4">

        {/* ── LOGO ── */}
        <NavLink
          to="/"
          className="flex items-center gap-2 flex-shrink-0 xl:w-14 2xl:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--peach)]/50 rounded-lg"
        >
          <img
            src={logo}
            alt="Dove Healthcare Services logo"
            className="h-14 sm:h-16 2xl:h-20 w-auto object-contain flex-shrink-0"
          />
          <div className="hidden xs:block xl:hidden 2xl:block whitespace-nowrap leading-tight">
            <h1 className="text-xs sm:text-sm font-bold tracking-wide text-[var(--navy)] leading-tight">
              DOVE
            </h1>
            <h2 className="text-xs font-semibold tracking-[2px] text-[var(--peach-deep)]">
              HEALTHCARE
            </h2>
            <p className="text-[10px] tracking-[1px] text-[var(--navy)]/55 font-medium">
              SERVICES
            </p>
          </div>
        </NavLink>

        {/* ── DESKTOP NAV ── */}
        <nav
          ref={dropdownRef}
          className={`hidden ${NAV_VISIBLE} flex-1 min-w-0 items-center justify-center flex-nowrap gap-x-1 2xl:gap-x-2`}
        >
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
              <ChevronDown
                size={16}
                className={`flex-shrink-0 transition-transform duration-300 ${
                  openDropdown === "strategies" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "strategies" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-[var(--navy)]/10 p-2 space-y-1 z-50">
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
              <ChevronDown
                size={16}
                className={`flex-shrink-0 transition-transform duration-300 ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "services" && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-[var(--navy)]/10 p-2 space-y-1 z-50">
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

          <NavLink to="/meet-the-team" className={navItemClass}>
            Meet the Team
          </NavLink>

          <NavLink to="/resources" className={navItemClass}>
            Resources
          </NavLink>

          {/* Crisis Support */}
          <a
            href="tel:988"
            className="flex-shrink-0 flex items-center gap-1.5 whitespace-nowrap px-2.5 xl:px-3 2xl:px-3.5 py-2 rounded-lg transition duration-200 text-sm 2xl:text-base font-semibold text-[var(--crisis-red)] hover:text-white hover:bg-[var(--crisis-red)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--crisis-red)]/40"
          >
            <span className="inline-flex items-center justify-center text-[9px] font-bold bg-[var(--crisis-red)] text-white px-1 py-0.5 rounded leading-none">
              SOS
            </span>
            Crisis
          </a>
        </nav>

        {/* ── CTA ── */}
        <div className="hidden xl:flex items-center flex-shrink-0">
          <NavLink
            to="/book-appointment"
            className="whitespace-nowrap bg-[var(--peach)] text-white px-5 2xl:px-6 py-2.5 rounded-full text-sm 2xl:text-base font-semibold hover:bg-[var(--peach-deep)] hover:shadow-lg transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--peach)]"
          >
            Book Appointment
          </NavLink>
        </div>

        {/* ── MOBILE MENU BUTTON ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="xl:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-[var(--blue-tint)] transition duration-200 flex-shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--peach)]/50"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} className="text-[var(--navy)]" /> : <Menu size={24} className="text-[var(--navy)]" />}
        </button>
      </div>

      {/* ── MOBILE MENU ── */}
      {menuOpen && (
        <div
          ref={mobileMenuRef}
          className="xl:hidden bg-white border-t border-[var(--navy)]/10 shadow-lg max-h-[calc(100vh-80px)] overflow-y-auto"
        >
          <nav className="px-4 sm:px-6 py-4 space-y-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition duration-200 font-medium ${
                  isActive ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]" : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition duration-200 font-medium ${
                  isActive ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]" : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
                }`
              }
            >
              About
            </NavLink>

            {/* Mobile Strategies */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("strategies")}
                aria-expanded={mobileDropdown === "strategies"}
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-medium text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)] transition duration-200"
              >
                Strategies
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileDropdown === "strategies" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileDropdown === "strategies" && (
                <div className="flex flex-col pl-2 mt-1 space-y-1 bg-[var(--blue-tint)] rounded-lg p-2 mx-2">
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
                className="w-full flex justify-between items-center px-4 py-3 rounded-lg font-medium text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)] transition duration-200"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${mobileDropdown === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {mobileDropdown === "services" && (
                <div className="flex flex-col pl-2 mt-1 space-y-1 bg-[var(--blue-tint)] rounded-lg p-2 mx-2">
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

            <NavLink
              to="/treatment-recovery"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition duration-200 font-medium ${
                  isActive ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]" : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
                }`
              }
            >
              Treatment &amp; Recovery
            </NavLink>

            <NavLink
              to="/meet-the-team"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition duration-200 font-medium ${
                  isActive ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]" : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
                }`
              }
            >
              Meet the Team
            </NavLink>

            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition duration-200 font-medium ${
                  isActive ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]" : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
                }`
              }
            >
              Resources
            </NavLink>

            <a
              href="tel:988"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg transition duration-200 font-semibold text-[var(--crisis-red)] hover:text-white hover:bg-[var(--crisis-red)] text-center"
            >
              <AlertCircle size={18} />
              Crisis Support (988)
            </a>

            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition duration-200 font-medium ${
                  isActive ? "text-[var(--peach-deep)] bg-[var(--peach-tint)]" : "text-[var(--navy)]/75 hover:text-[var(--peach-deep)] hover:bg-[var(--blue-tint)]"
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/book-appointment"
              className="flex items-center justify-center gap-2 bg-[var(--peach)] text-white text-center px-4 py-3.5 rounded-full font-semibold hover:bg-[var(--peach-deep)] transition duration-200 mt-4 shadow-md"
            >
              <CalendarCheck size={18} />
              Book Appointment
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}