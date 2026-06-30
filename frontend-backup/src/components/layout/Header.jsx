 import { NavLink, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import logo from "../../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation();
  const dropdownRef = useRef(null);

  const navLinkClass = ({ isActive }) =>
    `transition duration-200 text-[16px] font-medium ${
      isActive
        ? "text-[#F39C6B]"
        : "text-gray-700 hover:text-[#F39C6B]"
    }`;

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

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const toggleMobileDropdown = (name) => {
    setMobileDropdown(mobileDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-20 w-auto" />
          <div>
            <h2 className="text-base font-semibold tracking-wide text-gray-900">
              DOVE HEALTHCARE
            </h2>
            <p className="text-xs tracking-[3px] text-gray-500">
              SERVICES
            </p>
          </div>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav
          ref={dropdownRef}
          className="hidden md:flex items-center gap-8"
        >
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about-us" className={navLinkClass}>
            About
          </NavLink>

          {/* Strategies */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("strategies")}
              className={`flex items-center gap-1 text-[16px] font-medium ${
                location.pathname.startsWith("/strategies")
                  ? "text-[#F39C6B]"
                  : "text-gray-700 hover:text-[#F39C6B]"
              }`}
            >
              Strategies
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "strategies" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "strategies" && (
              <div className="absolute top-12 left-0 w-64 bg-white rounded-xl shadow-lg p-3 space-y-1">
                <NavLink to="/strategies/personal-objective" className="block px-4 py-2 rounded-lg hover:bg-orange-50">
                  Personal Objective
                </NavLink>
                <NavLink to="/strategies/wellness-recovery" className="block px-4 py-2 rounded-lg hover:bg-orange-50">
                  Wellness Recovery
                </NavLink>
                <NavLink to="/strategies/doctor-visits" className="block px-4 py-2 rounded-lg hover:bg-orange-50">
                  Doctor Visits
                </NavLink>
              </div>
            )}
          </div>

          {/* Services */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("services")}
              className={`flex items-center gap-1 text-[16px] font-medium ${
                location.pathname.startsWith("/services")
                  ? "text-[#F39C6B]"
                  : "text-gray-700 hover:text-[#F39C6B]"
              }`}
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "services" ? "rotate-180" : ""
                }`}
              />
            </button>

            {openDropdown === "services" && (
              <div className="absolute top-12 left-0 w-64 bg-white rounded-xl shadow-lg p-3 space-y-1">
                <NavLink to="/services/omhc" className="block px-4 py-2 rounded-lg hover:bg-orange-50">OMHC</NavLink>
                <NavLink to="/services/prp" className="block px-4 py-2 rounded-lg hover:bg-orange-50">PRP</NavLink>
                <NavLink to="/services/family-counselling" className="block px-4 py-2 rounded-lg hover:bg-orange-50">Family Counseling</NavLink>
                <NavLink to="/services/personal-counselling" className="block px-4 py-2 rounded-lg hover:bg-orange-50">Personal Counseling</NavLink>
              </div>
            )}
          </div>

          <NavLink to="/treatment-recovery" className={navLinkClass}>
            Treatment & Recovery
          </NavLink>

           

          <NavLink to="/contact-us" className={navLinkClass}>
            Contact
          </NavLink>

          <NavLink
            to="/book-appointment"
            className="bg-[#F39C6B] text-white px-6 py-2.5 rounded-full font-medium hover:bg-orange-500 transition"
          >
            Book Appointment
          </NavLink>
        </nav>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl text-gray-800"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-6">
          <div className="flex flex-col space-y-5 text-[16px] font-medium text-gray-700">

            <NavLink to="/" end className={navLinkClass}>Home</NavLink>
            <NavLink to="/about-us">About</NavLink>

            {/* Mobile Strategies */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("strategies")}
                className="flex justify-between w-full"
              >
                Strategies
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileDropdown === "strategies" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "strategies" && (
                <div className="flex flex-col pl-4 mt-3 space-y-3">
                  <NavLink to="/strategies/personal-objective">Personal Objective</NavLink>
                  <NavLink to="/strategies/wellness-recovery">Wellness Recovery</NavLink>
                  <NavLink to="/strategies/doctor-visits">Doctor Visits</NavLink>
                </div>
              )}
            </div>

            {/* Mobile Services */}
            <div>
              <button
                onClick={() => toggleMobileDropdown("services")}
                className="flex justify-between w-full"
              >
                Services
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    mobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {mobileDropdown === "services" && (
                <div className="flex flex-col pl-4 mt-3 space-y-3">
                  <NavLink to="/services/omhc">OMHC</NavLink>
                  <NavLink to="/services/prp">PRP</NavLink>
                  <NavLink to="/services/family-counselling">Family Counseling</NavLink>
                  <NavLink to="/services/personal-counselling">Personal Counseling</NavLink>
                </div>
              )}
            </div>

            <NavLink to="/treatment-recovery">Treatment & Recovery</NavLink>
             
            <NavLink to="/contact-us">Contact</NavLink>

            <NavLink
              to="/book-appointment"
              className="block bg-[#F39C6B] text-white text-center py-3 rounded-full"
            >
              Book Appointment
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}