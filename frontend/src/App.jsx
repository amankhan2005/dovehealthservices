 import React from "react";
import { Routes, Route } from "react-router-dom";

// Layout
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Scroll
import RouteScrollTop from "./components/RouteScrollTop";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/faq";

// Services Pages
import RN from "./pages/services/RN";
import LPN from "./pages/services/LPN";
import GNA from "./pages/services/GNA";
import CNA from "./pages/services/CNA";
import PTOT from "./pages/services/PTOT";

// Forms
import RequestNurse from "./forms/RequestNurse";
import ApplyNurse from "./forms/ApplyNurse";  

export default function App() {
  return (
    <>
      {/* Auto scroll on route change */}
      <RouteScrollTop />

      {/* Header */}
      <Header />

      {/* Routes */}
      <Routes>

        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />

        {/* Career Page (ApplyNurse) */}
        <Route path="/careers" element={<ApplyNurse />} />

        {/* Service Pages */}
        <Route path="/services/rn" element={<RN />} />
        <Route path="/services/lpn" element={<LPN />} />
        <Route path="/services/gna" element={<GNA />} />
        <Route path="/services/cna" element={<CNA />} />
        <Route path="/services/ptot" element={<PTOT />} />

        {/* Client Form */}
        <Route path="/request-nurse" element={<RequestNurse />} />

      </Routes>

      {/* Footer */}
      <Footer />

      {/* Scroll Button */}
      <ScrollToTop />
    </>
  );
}
