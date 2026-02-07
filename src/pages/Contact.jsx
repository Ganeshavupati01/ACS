import React from "react";
import "./contact.css";
import MetaTags from "../components/MetaTags";
import contactBg from "../assets/contact1.webp";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo form — backend connection not yet added.");
  };

  return (
    <>
      {/* ✅ SEO Meta Tags – Google Business Profile Compliant */}
      <MetaTags
        title="Contact | Abhi Drain Line Cleaning"
        description="Contact Abhi Drain Line Cleaning for professional drainage and sewer cleaning services in Dubai and Sharjah. Call or email us to schedule a service."
        url="https://www.abhidrainlinecleaning.com/contact"
      />

      {/* ✅ Contact Section */}
      <section
        id="contact"
        className="contact-section"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="contact-overlay"></div>

        <div className="contact-container">
          {/* Left Side – Contact Info */}
          <div className="contact-left">
            <h2>Get in Touch</h2>

            <div className="contact-info">
              <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                  <p>Email</p>
                  <a href="mailto:abhidrainlinecleaningservices@gmail.com">
                    abhidrainlinecleaningservices@gmail.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="icon" />
                <div>
                  <p>Call Us</p>
                  <a href="tel:+971556108355">+971 55 610 8355</a>
                </div>
              </div>
            </div>

            <p className="service-area-note">
              <strong>Service Areas:</strong> Dubai & Sharjah
            </p>
          </div>

          {/* Right Side – Contact Form */}
          <div className="contact-right">
            <h2>
              <strong>Contact Abhi Drain Line Cleaning</strong>
            </h2>

            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                aria-label="Enter your name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                aria-label="Enter your email address"
                required
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                aria-label="Enter the subject of your message"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                aria-label="Enter your message"
                required
              ></textarea>
              <button type="submit" aria-label="Send your message">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
