import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { scroller } from "react-scroll";
import Header from "./components/Header";
import MetaTags from "./components/MetaTags";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/services";
import "./App.css";
import Footer from "./components/Footer";

// Scroll to section on route change
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const section = location.pathname.replace("/", "") || "home";

    // Give DOM a tiny delay to render sections before scrolling
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

        {/* All sections rendered together for scrolling */}
        <Home />
        <About />
        <Services />
        <Contact />

        {/* Routes only for SEO/meta tags */}
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
            path="/services"
            element={
              <MetaTags
                title="Services | Cleaning Experts"
                description="Explore our professional cleaning services."
                url="https://mycleaningcompany.com/services"
              />
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
