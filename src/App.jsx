import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { scroller } from "react-scroll";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MetaTags from "./components/MetaTags";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

import "./App.css";

/* ✅ Scroll only for ONE-PAGE routes */
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    // 🚫 Disable scroll for blogs (handled by reverse proxy)
    if (location.pathname.startsWith("/blogs")) return;

    let section = "home";

    if (location.pathname === "/") section = "home";
    else if (location.pathname.startsWith("/services")) section = "services";
    else if (location.pathname === "/about-us") section = "about-us";
    else if (location.pathname === "/contact") section = "contact";

    const el = document.getElementById(section);
    if (!el) return;

    scroller.scrollTo(section, {
      smooth: true,
      duration: 800,
      offset: -70,
    });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <ScrollToSection />

        <Routes>
          {/* ================= HOME ================= */}
          <Route
            path="/"
            element={
              <>
                <MetaTags
                  title="Abhi Drain Line Cleaning | Professional Drainage Services in Dubai & Sharjah"
                  description="Abhi Drain Line Cleaning provides professional drain, sewage, and water tank cleaning services in Dubai and Sharjah."
                  url="https://www.abhidrainlinecleaning.com/"
                />
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* ================= SERVICES ================= */}
          <Route
            path="/services"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            }
          />

          <Route
            path="/services/:serviceName"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* ================= ABOUT ================= */}
          <Route
            path="/about-us"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            }
          />

          {/* ================= CONTACT ================= */}
          <Route
            path="/contact"
            element={
              <>
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            }
          />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}
