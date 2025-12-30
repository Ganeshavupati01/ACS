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
    details: `
      Our <strong>Sewage Cleaning Services in UAE</strong> deliver <strong>professional sewage cleaning</strong>,
      <strong>emergency sewage removal</strong>, and <strong>preventive sewage maintenance services in UAE</strong>
      for <strong>residential, commercial, and industrial properties</strong>.
      Using <strong>advanced vacuum suction trucks</strong>,
      <strong>high-pressure water jetting</strong>, and
      <strong>eco-compliant waste disposal systems</strong>,
      we ensure <strong>complete sewage blockage removal</strong>,
      <strong>sludge extraction</strong>, and
      <strong>pipeline sanitization</strong> while strictly following
      <strong>UAE municipality regulations</strong>.

      As a trusted provider of <strong>sewage cleaning services in UAE</strong>,
      our expert team specializes in
      <strong>sewer line cleaning</strong>,
      <strong>sewage tank cleaning</strong>,
      <strong>drainage system maintenance</strong>, and
      <strong>wastewater management services in UAE</strong>,
      helping prevent <strong>sewage overflows</strong>,
      <strong>foul odors</strong>, and
      <strong>health hazards</strong>.

      Our reliable <strong>Sewage Cleaning Services in UAE</strong> improve
      <strong>drainage efficiency</strong>,
      <strong>extend pipeline lifespan</strong>,
      reduce <strong>costly emergency repairs</strong>,
      and support <strong>sustainable hygiene solutions</strong>—making us a
      <strong>preferred provider of high-quality services in UAE</strong>
      focused on <strong>safety</strong>, <strong>compliance</strong>, and
      <strong>long-term performance</strong>.
    `,
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
    details: `
      Our <strong>Pipeline Cleaning Services in UAE</strong> provide reliable solutions for
      clearing blockages and maintaining <strong>smooth pipeline flow</strong> for
      <strong>residential, commercial, and industrial properties</strong>.
      Using <strong>high-pressure water jetting</strong>,
      <strong>mechanical cleaning tools</strong>, and
      <strong>CCTV pipeline inspection</strong>,
      we effectively remove <strong>grease buildup</strong>,
      <strong>debris</strong>, and
      <strong>internal obstructions</strong> while ensuring full compliance with
      <strong>UAE municipality regulations</strong>.

      As a trusted provider of <strong>pipeline maintenance services in UAE</strong>,
      we handle <strong>emergency pipeline cleaning</strong>,
      <strong>drainage pipeline cleaning</strong>, and
      <strong>underground pipeline maintenance</strong> to prevent
      <strong>leaks</strong>, <strong>backups</strong>, and
      <strong>system failures</strong>.
      Our <strong>eco-friendly approach</strong> improves
      <strong>pipeline efficiency</strong>,
      extends <strong>pipe lifespan</strong>, and reduces
      <strong>costly repairs</strong>.
    `,
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
    details: `
      Our <strong>Gutter Cleaning Services in UAE</strong> ensure
      <strong>efficient rainwater flow</strong> and protect buildings from
      <strong>water damage</strong>, <strong>leaks</strong>, and
      <strong>structural deterioration</strong>.
      Our <strong>professional, well-trained staff</strong> use
      <strong>specialized tools</strong> and <strong>safe access techniques</strong>
      to remove <strong>leaves</strong>, <strong>sludge</strong>,
      <strong>sand buildup</strong>, and <strong>debris</strong> from
      <strong>residential, commercial, and industrial gutters</strong>.

      We provide <strong>manual and high-reach gutter cleaning</strong>,
      <strong>downpipe flushing</strong>, and
      <strong>blockage inspection</strong> while strictly following
      <strong>UAE safety and municipality standards</strong>.
      Our services help prevent <strong>overflowing gutters</strong>,
      <strong>roof dampness</strong>, <strong>pest breeding</strong>, and
      <strong>drainage failures</strong>, ensuring
      <strong>long-lasting gutter performance</strong>.
    `,
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
    details: `
      Our <strong>Drain Line Cleaning Services in UAE</strong> deliver reliable solutions for
      clearing <strong>blocked</strong> and <strong>slow-flowing drains</strong> across
      <strong>residential, commercial, and industrial properties</strong>.
      We provide <strong>professional drain line cleaning</strong>,
      <strong>emergency drain blockage removal</strong>, and
      <strong>routine drain maintenance services in UAE</strong> using
      <strong>high-pressure water jetting</strong>,
      <strong>mechanical drain rodding</strong>, and
      <strong>CCTV drain line inspection</strong>.

      Our expert team removes <strong>grease</strong>,
      <strong>sludge</strong>, <strong>scale buildup</strong>, and
      <strong>debris</strong> while ensuring full compliance with
      <strong>UAE municipality and safety regulations</strong>.
      Our services improve <strong>drainage efficiency</strong>,
      <strong>extend pipe lifespan</strong>, and prevent
      <strong>costly repairs</strong>, making us a trusted choice for
      <strong>high-quality drain cleaning solutions in UAE</strong>.
    `,
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
<div
  className="service-details"
  dangerouslySetInnerHTML={{ __html: selectedService.details }}
/>
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
