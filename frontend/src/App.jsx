  import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import useReveal from "./hooks/useReveal";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import TopBar from "./components/layout/TopBar";
import EmergencyNotice from "./components/layout/EmergencyNotice";

// Scroll
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";
import ChatWidget from "./components/chat/ChatWidget";

// Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/faq";
import TreatmentRecovery from "./pages/TreatmentRecovery";
import BookAppointment from "./pages/BookAppointment";
import MeetTheTeam from "./pages/MeetTheTeam";
import EducationalResources from "./pages/EducationalResources";
import Employee from "./pages/Employee";

// Strategies Pages
import PersonalObjective from "./pages/strategies/PersonalObjective";
import WellnessRecovery from "./pages/strategies/WellnessRecovery";
import DoctorVisits from "./pages/strategies/DoctorVisits";
import StrategyPage from "./pages/strategies/StrategyPage.jsx";

// Services Pages
import OMHC from "./pages/services/OMHC";
import Prp from "./pages/services/Prp";
import FamilyCounselling from "./pages/services/FamilyCounselling";
import PersonalCounselling from "./pages/services/PersonalCounselling";

export default function App() {
  const { pathname } = useLocation();
  useReveal(pathname);

  return (
    <>
      <RouteScrollTop />

      <Header />

      <main className="min-h-screen dh-main">
        <Routes>

          {/* Main */}
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/meet-the-team" element={<MeetTheTeam />} />
          <Route path="/resources" element={<EducationalResources />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/treatment-recovery" element={<TreatmentRecovery />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/employee" element={<Employee />} />

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
<EmergencyNotice />

      <Footer />
      {/* Stacked above the chat launcher (bottom-right) */}
      <ScrollToTop bottom="6rem" right="1.625rem" />
      <ChatWidget />
    </>
  );
}
