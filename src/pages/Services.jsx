import { useState } from "react";
import { scroller } from "react-scroll";
import { useNavigate } from "react-router-dom";
import "./app.css"; // ensure CSS is imported

export default function Services() {
  const servicesData = [
    {
      title: "Sewage Cleaning",
      desc: "Comprehensive cleaning for residential and commercial properties.",
      img: "./src/assets/s.jpg",
      details:
        "We offer advanced sewage cleaning services using modern equipment and safety measures. Our team ensures deep cleaning, odor removal, and proper waste disposal to keep your environment hygienic.",
      faqs: [
        { q: "How often should sewage cleaning be done?", a: "At least once every 6 months to prevent clogging and foul odor." },
        { q: "Do you handle both residential and commercial?", a: "Yes, our services cover both sectors efficiently." },
        { q: "Is the process eco-friendly?", a: "Yes, we use safe cleaning agents that are environment-friendly." },
        { q: "How long does the cleaning take?", a: "It typically takes 2–4 hours depending on the system size." },
        { q: "Do you offer emergency cleaning?", a: "Yes, 24/7 emergency cleaning is available." },
      ],
    },
    {
      title: "Pipeline Cleaning",
      desc: "Expert pipeline cleaning to ensure smooth flow and prevent blockages.",
      img: "./src/assets/watertank.jpg",
      details:
        "Our professional pipeline cleaning ensures no residue, rust, or clogs remain. We use high-pressure jetting for a smooth water flow and long-lasting performance.",
      faqs: [
        { q: "Do you clean underground pipelines?", a: "Yes, we specialize in overhead pipeline cleaning." },
        { q: "Will my water supply be affected?", a: "normal flow resumes after service." },
        { q: "How often should pipelines be cleaned?", a: "Once every year is recommended." },
        { q: "Do you inspect before cleaning?", a: "Yes, we perform full inspection to detect issues." },
        { q: "What tools do you use?", a: "We use high-pressure jets and eco-safe cleaning solutions." },
      ],
    },
    {
      title: "Gutter Cleaning",
      desc: "Thorough gutter cleaning to protect your property from water damage.",
      img: "./src/assets/gutter.jpg",
      details:
        "Our gutter cleaning prevents water overflow, roof damage, and pest breeding. We remove leaves, debris, and sludge for proper drainage flow.",
      faqs: [
        { q: "How frequently should gutters be cleaned?", a: "Twice a year, especially before and after rainy seasons." },
        { q: "Do you repair damaged gutters?", a: "Yes, minor repairs are included in the service." },
        { q: "Is your team insured?", a: "Yes, all our cleaners are insured and trained." },
        { q: "Can you handle multi-floor buildings?", a: "Yes, we have equipment for high-reach cleaning." },
        { q: "Do you offer maintenance packages?", a: "Yes, we offer quarterly maintenance plans." },
      ],
    },
    {
      title: "Drain-line Cleaning",
      desc: "Efficient drain-line cleaning to keep your plumbing system in top condition.",
      img: "./src/assets/drain.jpg",
      details:
        "We provide mechanical and hydro-jet drain-line cleaning to remove grease, soap scum, and mineral buildup. Our service restores full drain efficiency.",
      faqs: [
        { q: "Is drain cleaning messy?", a: "No, we use modern equipment that keeps surroundings clean." },
        { q: "Can you fix recurring clogs?", a: "Yes, we identify root causes and prevent future blockages." },
        { q: "Is chemical cleaning safe?", a: " safe chemicals only when needed." },
        { q: "Do you clean all drain sizes?", a: "Yes, from kitchen sinks to industrial lines." },
        { q: "Can you do same-day service?", a: "Yes, for most local bookings." },
      ],
    },
  ];

  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [tab, setTab] = useState("details");

  const scrollSection = () => {
    navigate("/services");
    scroller.scrollTo("services", { smooth: true, duration: 800, offset: -70 });
  };

  return (
    <section id="services" className="page services">
      <h2><strong>Services</strong></h2>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.img} alt={service.title} />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <button onClick={() => setSelectedService(service)}>View Details</button>
          </div>
        ))}
      </div>

      <div className="moreb">
        <button onClick={scrollSection}>More Services</button>
      </div>

      {/* Modal Overlay */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div
            className="modal-card"
            onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
          >
            <div className="modal-left">
              <img src={selectedService.img} alt={selectedService.title} />
            </div>

            <div className="modal-right">
              <h2>{selectedService.title}</h2>

              <div className="tab-buttons">
                <button
                  className={tab === "details" ? "active" : ""}
                  onClick={() => setTab("details")}
                >
                  Details
                </button>
                <button
                  className={tab === "faqs" ? "active" : ""}
                  onClick={() => setTab("faqs")}
                >
                  FAQs
                </button>
              </div>

              <div className="tab-content">
                {tab === "details" ? (
                  <p className="details-text">{selectedService.details}</p>
                ) : (
                  <ul className="faq-list">
                    {selectedService.faqs.map((faq, i) => (
                      <li key={i}>
                        <strong>{faq.q}</strong>
                        <p>{faq.a}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
