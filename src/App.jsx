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
import Blogs from "./pages/Blogs";

import "./App.css";

/* ✅ Scroll only on ONE-PAGE routes */
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/blogs")) return;

    const section = location.pathname.replace("/", "") || "home";

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
          {/* ✅ ONE-PAGE WEBSITE */}
          <Route
            path="/"
            element={
              <>
                <MetaTags
                  title="700 Sewage Cleaning Services UAE | Professional Drainage & Tank Cleaning"
                  description="700 Sewage Cleaning Services offers expert sewage, drainage, and water tank cleaning across UAE."
                />
                <Home />
                <About />
                <Services />
                <Testimonials />
                <Contact />
              </>
            }
          />
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

          {/* ✅ BLOGS – FULL PAGE */}
          <Route path="/blogs/*" element={null} />
          
        </Routes>

        <Footer />
      </Router>
    </HelmetProvider>
  );
}
