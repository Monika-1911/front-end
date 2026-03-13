import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import { jsPDF } from "jspdf";
import { useState } from "react";
import catalogImg1 from "../assets/catalog1.jpg";
import catalogImg2 from "../assets/catalog2.jpg";
import catalogImg3 from "../assets/catalog3.jpg";
import catalogImg4 from "../assets/catalog4.jpg";
import catalogImg5 from "../assets/catalog5.jpg";
import catalogImg6 from "../assets/catalog6.jpg";

function Downloads() {
  const images = [
  catalogImg1,
  catalogImg2,
  catalogImg3,
  catalogImg4,
  catalogImg5,
  catalogImg6
];

  const downloadPDF = () => {
    const doc = new jsPDF();
    images.forEach((img, index) => {
      if (index !== 0) doc.addPage();
      doc.addImage(img, "JPEG", 10, 10, 190, 277); // A4 size approximation
    });
    doc.save("Bahuchar_Catalog.pdf");
  };

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="downloads-container">
        <h1></h1>

        <section className="catalog-section">
  <h2>Our Product Catalog</h2>
  <p>View our complete industrial product range below.</p>

  <div className="catalog-grid">
    {images.map((img, i) => (
      <div className="catalog-card" key={i}>
        <img src={img} alt={`Catalog ${i + 1}`} />
      </div>
    ))}
  </div>

  <button onClick={downloadPDF} className="download-btn">
    📥 Download Full Catalog PDF
  </button>
  
</section>
{/* ================= EXTRA INFO SECTION ================= */}

<div className="catalog-extra">

  <div className="catalog-info-box">
    <h3>Catalog Information</h3>
    <p>📄 Total Pages: 24</p>
    <p>📦 File Size: 12.4 MB</p>
    <p>🗓 Last Updated: January 2026</p>
    <p>🏭 Categories Included: 6</p>
  </div>

  <div className="why-download">
    <h3>Why Download Our Catalog?</h3>
    <ul>
      <li>✔ Detailed Technical Specifications</li>
      <li>✔ ISO Certified Industrial Materials</li>
      <li>✔ Custom Manufacturing Options</li>
      <li>✔ Competitive Bulk Pricing</li>
      <li>✔ Fast Global Delivery Support</li>
    </ul>
  </div>

  <div className="catalog-cta">
    <h3>Need Custom Requirements?</h3>
    <p>Contact our technical team for customized industrial solutions.</p>
    <button className="quote-btn">Request a Quote</button>
  </div>

</div>
      </div>
    </>
  );
}

export default Downloads;