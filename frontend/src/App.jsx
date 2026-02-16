  import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopBar from "./components/layout/TopBar";

// Scroll
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/faq";
import TreatmentRecovery from "./pages/TreatmentRecovery";
import BookAppointment from "./pages/BookAppointment";

// Strategies Pages
import PersonalObjective from "./pages/strategies/PersonalObjective";
import WellnessRecovery from "./pages/strategies/WellnessRecovery";
import DoctorVisits from "./pages/strategies/DoctorVisits";

// Services Pages
import OMHC from "./pages/services/OMHC";
import Prp from "./pages/services/Prp";
import FamilyCounselling from "./pages/services/FamilyCounselling";
import PersonalCounselling from "./pages/services/PersonalCounselling";

export default function App() {
  return (
    <>
      <RouteScrollTop />

      <Header />

      <main className="min-h-screen pt-24 ">
        <Routes>

          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/treatment-recovery" element={<TreatmentRecovery />} />
          <Route path="/book-appointment" element={<BookAppointment />} />

          {/* Strategies */}
          <Route path="/strategies/personal-objective" element={<PersonalObjective />} />
          <Route path="/strategies/wellness-recovery" element={<WellnessRecovery />} />
          <Route path="/strategies/doctor-visits" element={<DoctorVisits />} />

          {/* Services */}
          <Route path="/services/omhc" element={<OMHC />} />
          <Route path="/services/prp" element={<Prp />} />
          <Route path="/services/family-counselling" element={<FamilyCounselling />} />
          <Route path="/services/personal-counselling" element={<PersonalCounselling />} />

        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
