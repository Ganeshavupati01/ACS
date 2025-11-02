import { useState, useEffect } from "react";
import { scroller } from "react-scroll";
import { useNavigate, useParams } from "react-router-dom";
import "./services.css";
import { FaUserShield, FaLeaf, FaClock, FaThumbsUp, FaStar } from "react-icons/fa";
import sImg from "../assets/s.jpg";
import waterTankImg from "../assets/watertank.jpg";
import gutterImg from "../assets/gutter.jpg";
import drainImg from "../assets/drain.jpg";

const servicesData = [
  {
    title: "Sewage Cleaning",
    slug: "sewage-cleaning",
    desc: "Professional sewage cleaning for a hygienic environment.",
    img: sImg,
    details:
      "We offer modern sewage cleaning with advanced equipment, odor removal, and safe waste disposal to maintain hygiene in your space.",
    faqs: [
      { q: "How often should sewage cleaning be done?", a: "At least once every 6 months to prevent clogging." },
      { q: "Do you handle both residential and commercial?", a: "Yes, we handle both efficiently." },
      { q: "Is the process eco-friendly?", a: "Absolutely, we use biodegradable agents." },
    ],
  },
  {
    title: "Pipeline Cleaning",
    slug: "pipeline-cleaning",
    desc: "High-pressure cleaning to remove rust and residue.",
    img: waterTankImg,
    details:
      "Our pipeline cleaning ensures smooth water flow using high-pressure jetting and safe, non-toxic solutions.",
    faqs: [
      { q: "Do you clean underground pipelines?", a: "Yes, including overhead ones." },
      { q: "Will water supply be affected?", a: "Only temporarily during cleaning." },
    ],
  },
  {
    title: "Gutter Cleaning",
    slug: "gutter-cleaning",
    desc: "Prevent damage with our complete gutter cleaning.",
    img: gutterImg,
    details:
      "We remove leaves, debris, and sludge ensuring smooth drainage and preventing water overflow or roof damage.",
    faqs: [
      { q: "How frequently should gutters be cleaned?", a: "Twice a year, ideally before and after monsoon." },
      { q: "Do you repair damaged gutters?", a: "Yes, minor repairs are included." },
    ],
  },
  {
    title: "Drain-line Cleaning",
    slug: "drain-line-cleaning",
    desc: "Restore plumbing efficiency with our drain cleaning.",
    img: drainImg,
    details:
      "We remove grease, soap scum, and mineral buildup using hydro-jet methods, ensuring full drain efficiency.",
    faqs: [
      { q: "Is drain cleaning messy?", a: "No, our process keeps the surroundings clean." },
      { q: "Can you fix recurring clogs?", a: "Yes, we identify root causes for long-term results." },
    ],
  },
];

const promisesData = [
  { icon: <FaStar />, title: "High Quality Solutions", desc: "We ensure spotless results with professional-grade cleaning." },
  { icon: <FaUserShield />, title: "Trained Experts", desc: "Certified and insured professionals for your safety." },
  { icon: <FaClock />, title: "Timely Service", desc: "Punctual and efficient cleaning solutions." },
  { icon: <FaThumbsUp />, title: "Satisfaction Guaranteed", desc: "Re-cleaning if you're not 100% satisfied." },
];

export default function Services() {
  const navigate = useNavigate();
  const { serviceName } = useParams();
  const [selectedService, setSelectedService] = useState(null);
  const [tab, setTab] = useState("details");

  useEffect(() => {
    if (serviceName) {
      const found = servicesData.find((s) => s.slug === serviceName);
      setSelectedService(found || null);
    } else {
      setSelectedService(null);
    }
  }, [serviceName]);

  const handleViewDetails = (service) => {
    navigate(`/services/${service.slug}`);
    scroller.scrollTo("services", { smooth: true, duration: 800, offset: -70 });
  };

  const closeModal = (e) => {
    e.stopPropagation();
    setSelectedService(null);
    navigate("/services", { replace: true });
  };

  return (
    <section id="services" className="services" aria-label="Our Professional Cleaning Services">
      <h1>Our Services</h1>

      <div className="services-container">
        {servicesData.map((service, index) => (
          <article className="service-card fade-in" key={index}>
            <img src={service.img} alt={`${service.title} - 700 Cleaning Services`} loading="lazy" />
            <h2>{service.title}</h2>
            <p>{service.desc}</p>
            <button onClick={() => handleViewDetails(service)}>View Details</button>
          </article>
        ))}
      </div>

      <div className="promises-section">
        <h2>Our Promises</h2>
        <div className="promises-container">
          {promisesData.map((promise, i) => (
            <div className="promise-card" key={i}>
              <div className="promise-icon">{promise.icon}</div>
              <h3>{promise.title}</h3>
              <p>{promise.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>

            <div className="modal-left">
              <img src={selectedService.img} alt={`${selectedService.title} details`} loading="lazy" />
            </div>

            <div className="modal-right">
              <h2>{selectedService.title}</h2>
              <div className="tab-buttons">
                <button className={tab === "details" ? "active" : ""} onClick={() => setTab("details")}>Details</button>
                <button className={tab === "faqs" ? "active" : ""} onClick={() => setTab("faqs")}>FAQs</button>
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
