import React from "react";
import { FaStar } from "react-icons/fa";
import "./testimonials.css";

const testimonials = [
  {
    name: "Aman Verma",
    service: "Tank Cleaning Service",
    review:
      "Abhi Cleaning Services did an amazing job! The team was professional and my tank looks spotless now. Highly recommended!",
    rating: 5,
  },
  {
    name: "Sara Khan",
    service: "Drainage Cleaning",
    review:
      "Very efficient and punctual service. The staff followed all safety measures and left the place clean and tidy.",
    rating: 5,
  },
  {
    name: "Mohammed Ali",
    service: "Sewage Cleaning",
    review:
      "Excellent service at a reasonable price. The crew was well-equipped and handled the job smoothly.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    service: "Kitchen Deep Cleaning",
    review:
      "My kitchen looks brand new! The cleaners were polite and ensured every corner was cleaned perfectly.",
    rating: 5,
  },
  {
    name: "Ravi Kumar",
    service: "Bathroom Cleaning",
    review:
      "Very professional and prompt. They removed all hard stains and left a fresh fragrance. Worth every penny!",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    service: "Floor Cleaning",
    review:
      "Quick service and excellent results! My tiles are shining again. Will surely book again soon.",
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="testimonials-title">What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-header">
              <div className="profile-circle">
                {t.name.charAt(0).toUpperCase()}
              </div>
              <div className="profile-info">
                <h3>{t.name}</h3>
                <div className="stars">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <FaStar key={i} className="star" />
                  ))}
                </div>
              </div>
            </div>
            <h4 className="service-name">{t.service}</h4>
            <p className="review-text">"{t.review}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;