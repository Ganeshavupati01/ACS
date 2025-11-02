import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { scroller } from "react-scroll";

import Header from "./components/Header";
import Footer from "./components/Footer";
import MetaTags from "./components/MetaTags";
import Testimonials from "./pages/Testimonials";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/services";
import Contact from "./pages/Contact";
import "./App.css";

// Scroll to section on route change
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", "") || "home";

    setTimeout(() => {
      scroller.scrollTo(section, {
        smooth: true,
        duration: 800,
        offset: -70,
      });
    }, 50);
  }, [location]);

  return null;
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <ScrollToSection />

        {/* Render all sections for smooth scroll */}
        <Home />
        <About />
        <Services />
        <Testimonials />
      
        <Contact />

        {/* SEO/meta routes */}
        <Routes>
          <Route
            path="/"
            element={
              <MetaTags
                title="Home | Cleaning Services"
                description="Welcome to our professional cleaning services."
                url="https://mycleaningcompany.com/"
              />
            }
          />
          <Route
            path="/about"
            element={
              <MetaTags
                title="About Us | Cleaning Services"
                description="Learn more about our trusted cleaning company."
                url="https://mycleaningcompany.com/about"
              />
            }
          />
          <Route
            path="/services/:serviceName"
            element={
              <>
                <MetaTags
                  title="Service Details | Cleaning Experts"
                  description="Learn more about our specific cleaning services."
                  url="https://mycleaningcompany.com/services/:serviceName"
                />
                <Services />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <MetaTags
                title="Contact | Cleaning Services"
                description="Get in touch with our cleaning service team."
                url="https://mycleaningcompany.com/contact"
              />
            }
          />
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}
