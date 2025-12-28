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
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blogs from "./pages/Blogs";

import "./App.css";

// ✅ Scroll to specific section on route change
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith("/blogs")) return;

    const path = location.pathname;
    let section = "home";
    if (path === "/") section = "home";
    else if (path.startsWith("/services")) section = "services";
    else if (path === "/about-us") section = "about-us";
    else if (path === "/contact") section = "contact";
    else section = path.replace("/", "");

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
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Header />
      <ScrollToSection />

      {location.pathname === "/blogs" ? (
        <>
          <MetaTags
            title="Blogs | 700 Sewage Cleaning Services UAE"
            description="Read our latest blogs on sewage cleaning, drainage, and tank cleaning services in UAE. Get tips, insights, and expert advice."
            keywords="blogs, sewage cleaning blogs, drainage tips, tank cleaning UAE, 700 Cleaning Services blogs"
            url="https://700sewagecleaningservices.com/blogs"
            image="https://700sewagecleaningservices.com/images/blog.jpg"
            type="website"
          />
          <Blogs />
        </>
      ) : (
        <>
          {/* Sections for smooth scroll */}
          <Home />
          <About />
          <Services />
          <Testimonials />
          <Contact />

          {/* ✅ SEO Routes */}
          <Routes>
          {/* Home Page */}
          <Route
            path="/"
            element={
              <MetaTags
                title="700 Sewage Cleaning Services UAE | Professional Drainage & Tank Cleaning"
                description="700 Sewage Cleaning Services offers expert sewage, drainage, and water tank cleaning across UAE. Affordable, hygienic, and available 24/7 in Dubai, Abu Dhabi, Sharjah, and Ajman."
                keywords="sewage cleaning UAE, drainage cleaning Dubai, septic tank cleaning, water tank cleaning UAE, 700 Cleaning Services, professional cleaning UAE"
                url="https://700sewagecleaningservices.com/"
                image="https://700sewagecleaningservices.com/images/Contactcard1.jpg"
                type="website"
                jsonLd={{
                  "@context": "https://schema.org",
                  "@type": "LocalBusiness",
                  "name": "700 Sewage Cleaning Services",
                  "image": "https://700sewagecleaningservices.com/images/Contactcard1.jpg",
                  "url": "https://700sewagecleaningservices.com/",
                  "telephone": "+971500000000",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Dubai",
                    "addressCountry": "UAE",
                  },
                  "description": "Professional sewage, drainage, and water tank cleaning services in UAE.",
                  "openingHours": "Mo-Su 00:00-23:59"
                }}
              />
            }
          />

          {/* About Page */}
          <Route
            path="/about-us"
            element={
              <MetaTags
                title="About Us | 700 Sewage Cleaning Services UAE"
                description="Learn about 700 Sewage Cleaning Services — trusted experts in sewage, drainage, and tank cleaning across the UAE. Delivering quality, safety, and hygiene."
                keywords="about 700 Cleaning Services, sewage experts UAE, drainage cleaning, tank cleaning UAE"
                url="https://700sewagecleaningservices.com/about-us"
                image="https://700sewagecleaningservices.com/images/about.jpg"
                type="article"
              />
            }
          />

          {/* Service Pages */}
          <Route
            path="/services"
            element={
              <MetaTags
                title="Sewage & Drain Cleaning Services | 700 Cleaning UAE"
                description="Explore our professional sewage, drain, and tank cleaning services across UAE. Fast, reliable, and affordable solutions."
                keywords="sewage tank cleaning UAE, drain line cleaning, oil tank cleaning, pipeline cleaning services"
                url="https://700sewagecleaningservices.com/services"
                image="https://700sewagecleaningservices.com/images/services.jpg"
                type="article"
              />
            }
          />
          <Route
            path="/services/:serviceName"
            element={
              <>
                <MetaTags
                  title="Sewage & Drain Cleaning Services | 700 Cleaning UAE"
                  description="Explore our professional sewage, drain, and tank cleaning services across UAE. Fast, reliable, and affordable solutions."
                  keywords="sewage tank cleaning UAE, drain line cleaning, oil tank cleaning, pipeline cleaning services"
                  url="https://700sewagecleaningservices.com/services/:serviceName"
                  image="https://700sewagecleaningservices.com/images/services.jpg"
                  type="article"
                />
                <Services />
              </>
            }
          />

          {/* Contact Page */}
          <Route
            path="/contact"
            element={
              <MetaTags
                title="Contact | 700 Sewage Cleaning Services UAE"
                description="Contact 700 Sewage Cleaning Services for expert sewage, drainage, and water tank cleaning across UAE. Get a free consultation today."
                keywords="contact 700 Cleaning Services, sewage cleaning UAE, drainage cleaning support, water tank cleaning"
                url="https://700sewagecleaningservices.com/contact"
                image="https://700sewagecleaningservices.com/images/contact.jpg"
                type="website"
              />
            }
          />

          {/* Blogs Page */}
          <Route path="/blogs/:slug?" element={<Blogs />} />
          
        </Routes>
          </>
        )}

        <Footer />
      </>
    );
}





