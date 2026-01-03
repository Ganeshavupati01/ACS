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
// import BlogPage from "./pages/BlogPages";

import "./App.css";

/* ✅ Scroll to section based on URL */
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/blogs")) return;

    const path = location.pathname.replace("/", "");
    const section = path || "home";

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

/* ✅ Landing Sections */
function LayoutSections() {
  const location = useLocation();

  if (location.pathname.startsWith("/blogs")) return null;

  return (
    <>
      <div id="home"><Home /></div>
      <div id="about-us"><About /></div>
      <div id="services"><Services /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="contact"><Contact /></div>
    </>
  );
}


/* ✅ Footer Control */
function ConditionalFooter() {
  const location = useLocation();

  if (location.pathname.startsWith("/blogs")) return null;

  return <Footer />;
}


export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <ScrollToSection />

        {/* ✅ Landing Sections */}
        <LayoutSections />

        {/* ✅ Routes */}
        <Routes>
  <Route
    path="/"
    element={
      <MetaTags
        title="700 Sewage Cleaning Services UAE | Professional Drainage & Tank Cleaning"
        description="Expert sewage, drainage, and tank cleaning across UAE."
        url="https://700sewagecleaningservices.com/"
        type="website"
      />
    }
  />

  <Route
    path="/about-us"
    element={
      <MetaTags
        title="About Us | 700 Sewage Cleaning Services UAE"
        description="Trusted sewage and drainage cleaning experts across UAE."
        url="https://700sewagecleaningservices.com/about-us"
        type="article"
      />
    }
  />

  <Route
    path="/services"
    element={
      <MetaTags
        title="Our Services | 700 Sewage Cleaning Services UAE"
        description="Professional sewage, drainage, septic tank, and water tank cleaning services."
        url="https://700sewagecleaningservices.com/services"
        type="website"
      />
    }
  />

  <Route path="/services/:serviceName" element={<Services />} />

  {/* ✅ IMPORTANT: Silence React for blogs */}
  <Route path="/blogs/*" element={null} />

  <Route
    path="/contact"
    element={
      <MetaTags
        title="Contact | 700 Sewage Cleaning Services UAE"
        description="Contact 700 Sewage Cleaning Services today."
        url="https://700sewagecleaningservices.com/contact"
        type="website"
      />
    }
  />
</Routes>


        {/* ✅ Footer */}
        <ConditionalFooter />
      </Router>
    </HelmetProvider>
  );
}
