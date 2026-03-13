import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image: "/banner1.jpg",
    title: "High Quality Industrial Solutions",
    text: "Trusted Manufacturing Partner"
  },
  {
    image: "/banner2.jpg",
    title: "Advanced Engineering Technology",
    text: "Precision & Performance"
  },
  {
    image: "/banner3.jpg",
    title: "Reliable & Durable Products",
    text: "Commitment To Excellence"
  }
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO SLIDER ================= */}
      <div className="hero-slider">

        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="overlay"></div>

            <div className="hero-content">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              <button>Explore Products</button>
            </div>
          </div>
        ))}

        {/* Arrows */}
        <button className="arrow left" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        <button className="arrow right" onClick={nextSlide}>
          <FaChevronRight />
        </button>

        {/* Dots */}
        <div className="dots">
          {slides.map((_, index) => (
            <span
              key={index}
              className={index === current ? "dot active-dot" : "dot"}
              onClick={() => setCurrent(index)}
            ></span>
          ))}
        </div>

      </div>

      {/* ================= WELCOME SECTION ================= */}
      <section className="welcome-section">
        <div className="welcome-container">

          {/* Left Side Image */}
          <div className="welcome-image">
            <img src="/about.jpg" alt="Welcome" />
          </div>

          {/* Right Side Text */}
          <div className="welcome-text">
            <h2>Welcome to Bahuchar Industries</h2>
            <p>
              Bahuchar Industries is a trusted manufacturer providing
              high-quality industrial solutions with advanced technology
              and skilled professionals.
            </p>
            <p>
              We focus on precision, durability and customer satisfaction.
            </p>
            
            
          </div>

        </div>
      </section>
      {/* ================= COUNTER SECTION ================= */}

<div className="counter-section">
  <div className="counter-container">

    <div className="counter-box">
      <h2 className="count" data-target="25">0</h2>
      <p>Years of Experience</p>
    </div>

    <div className="counter-box">
      <h2 className="count" data-target="108">0</h2>
      <p>Customers</p>
    </div>

    <div className="counter-box">
      <h2 className="count" data-target="3">0</h2>
      <p>Countries with Global Customers</p>
    </div>

    <div className="counter-box">
      <h2 className="count" data-target="5000">0</h2>
      <p>Sqft Covered Production</p>
    </div>

  </div>
</div>

    </>
  );
}

export default HeroSlider;
