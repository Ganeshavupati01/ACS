import React from "react";
import "./contact.css";
import contactBg from "../assets/contact.jpg"; // Background image
import MetaTags from "../components/MetaTags";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("This is a demo form — backend connection not yet added.");
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <MetaTags
        title="Contact | Abhi Cleaning Services UAE"
        description="Get in touch with Abhi Cleaning Services. Reach us via email, phone, or visit our office. Professional cleaning services across UAE."
        url="https://mycleaningcompany.com/contact"
      />

      {/* Contact Section */}
      <section id="contact"
        className="contact-section"
        
      >
        <div className="contact-overlay"></div>

        <div className="contact-container">
          {/* Left Side - Contact Info */}
          <div className="contact-box contact-left">
            <h2>Get in Touch</h2>
            <div className="contact-info">
              <div className="info-item">
                <FaEnvelope className="icon" />
                <div>
                  <p>Email</p>
                  <a href="mailto:contact@abhicleaningservices.com">
                    contact@abhicleaningservices.com
                  </a>
                </div>
              </div>

              <div className="info-item">
                <FaMapMarkerAlt className="icon" />
                <div>
                  <p>Find Us</p>
                  <span>123 Cleaning Street, Dubai, UAE</span>
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="icon" />
                <div>
                  <p>Give Us a Ring</p>
                  <a href="tel:+971556108355">+971 55 610 8355</a>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                title="Abhi Cleaning Services Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.9323055297357!2d55.2708!3d25.2048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434b6f94c1ed%3A0x4a3b6c6d70f85e1f!2sDubai%2C%20UAE!5e0!3m2!1sen!2sin!4v1697461516481!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-box contact-right">
            <h2>
               <strong>Contact Abhi Cleaning Services</strong>
            </h2>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" rows="5" placeholder="Message" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
