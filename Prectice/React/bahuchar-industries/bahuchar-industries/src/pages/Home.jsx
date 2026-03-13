import { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import SocialSidebar from "../components/SocialSidebar";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
  const counters = document.querySelectorAll(".count");

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const current = +counter.innerText;
      const increment = target / 100;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target + "+";
      }
    };

    updateCount();
  });
}, []);

  const [showWhy, setShowWhy] = useState(false);

  return (
    <>
      <Topbar />
      <Navbar />
      <HeroSlider />
      <SocialSidebar />

      {/* ================= ABOUT SECTION ================= */}

      <div className="section about-section">

        {/* Left Side Content */}
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Since its inception in 2002, Bahuchar Industries has been a trusted name in the precision manufacturing sector. Based in Ahmedabad, we have built a reputation for delivering excellence through advanced engineering and a relentless focus on quality.

            We specialize in high-end CNC Machining solutions and are a leading manufacturer of critical Elevator Components. Our commitment is simple: to provide industrial solutions that combine durability with extreme precision.
          </p>

          {/* Read More Button */}
          <button 
            className="read-more-btn"
            onClick={() => setShowWhy(!showWhy)}
          >
            {showWhy ? "Show Less" : "Read More"}
          </button>
        </div>

        {/* Right Side Image */}
        <div className="about-image">
          <img src="/about2.jpg" alt="About Bahuchar Industries" />
        </div>

      </div>

      {/* ================= WHY CHOOSE SECTION ================= */}

      {showWhy && (
        <div className="section why-section">
  <h2>Why Choose Bahuchar Industries?</h2>

  <ul className="why-list">
    <li>Advanced Infrastructure: Our facility is equipped with modern CNC machinery, allowing us to handle high-volume production without compromising on accuracy.</li>
    <li>Industry Experience: With years of expertise in the elevator and industrial sector, our team understands the critical nature of every component we craft.</li>
    <li>Uncompromising Quality: Every part undergoes a rigorous inspection process to ensure it meets the highest safety and performance benchmarks.</li>
    <li>Strict Quality Control</li>
    <li>Timely Delivery & Customer Commitment</li>
    <li>Trusted by Leading Industrial Clients</li>
    <li>On-Time Delivery: We respect your project timelines...</li>
    
  </ul>
</div>      
)
} 
      <div className="products-section">
        <h1 className="page-title">Our Products</h1>

        <div className="product-grid">
          <div className="product-card">
            <img src="/images/product1.jpg" alt="Product 1" />
            <div className="overlay">
              <h3>Diverter Sheave</h3>
              <p>The Diverter Sheave is a durable pulley designed to guide and redirect wire ropes smoothly and efficiently.</p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/product2.jpg" alt="Product 2" />
            <div className="overlay">
              <h3>Belt Diverter Assembly</h3>
              <p>The Belt Diverter Assembly is a heavy-duty component designed to efficiently redirect and align conveyor belts for smooth material handling and reduced operational wear.</p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/product3.jpg" alt="Product 3" />
            <div className="overlay">
              <h3>Precision Components</h3>
              <p>Built for strength and reliability, it ensures precise rope alignment and reduced wear during operation.
</p>
            </div>
          </div>
          <div className="product-card">
            <img src="/images/product4.jpg" alt="Product 4" />
            <div className="overlay">
              <h3>Diverter Pulley</h3>
              <p>CNC machined precision parts.</p>
            </div>
          </div>
          <div className="product-card">
            <img src="/images/product5.jpg" alt="Product 5" />
            <div className="overlay">
              <h3>Graded Cast Iron Pedestal</h3>
              <p>The Graded Cast Iron Pedestal is a heavy-duty support component offering high strength, stability, and vibration resistance for industrial machinery.
</p>
            </div>
          </div>

          <div className="product-card">
            <img src="/images/product6.jpg" alt="Product 6" />
            <div className="overlay">
              <h3>Diverter Wheels</h3>
              <p>The Diverter Pulley is an industrial-grade component engineered to redirect wire ropes with precision, ensuring reliable performance in heavy-duty applications.
</p>
            </div>
          </div>
        </div>
      </div>
      {/* ================= CONTACT SECTION ================= */}

<section className="contact-section">
  <h2 className="contact-title">Contact Information</h2>

  <div className="contact-container">
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.elements["fullName"].value.trim();
        const contact = form.elements["contactNumber"].value.trim();
        const email = form.elements["emailAddress"].value.trim();

        // ✅ Name Validation
        if (name.length < 3) {
          alert("Name must be at least 3 characters");
          return;
        }

        // ✅ Contact Validation (10 digit only)
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(contact)) {
          alert("Enter valid 10 digit contact number");
          return;
        }

        // ✅ Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert("Enter valid email address");
          return;
        }

        const formData = { name, contact, email };

        const oldData =
          JSON.parse(localStorage.getItem("contactDetails")) || [];

        const newData = [...oldData, formData];

        localStorage.setItem(
          "contactDetails",
          JSON.stringify(newData)
        );

        alert("Form Submitted Successfully ✅");

        form.reset();
      }}
    >
      <div className="input-group">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          required
        />
      </div>

      <div className="input-group">
        <input
          type="tel"
          name="contactNumber"
          placeholder="Contact Number"
          required
        />
      </div>

      <div className="input-group">
        <input
          type="email"
          name="emailAddress"
          placeholder="Email Address"
          required
        />
      </div>

      <button type="submit" className="submit-btn">
        Submit Now
      </button>
    </form>
  </div>
</section>
    </>
  );
}

export default Home;