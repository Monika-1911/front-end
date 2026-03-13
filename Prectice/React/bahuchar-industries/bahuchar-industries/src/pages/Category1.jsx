import { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import SocialSidebar from "../components/SocialSidebar";
import "../index.css"

function Category1() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Topbar />
      <Navbar />
      <SocialSidebar />

      <div className="category-page">
        <h1 className="page-title">Cast Iron Diverter Pulley</h1>

        <div className="category-grid">

          {/* PRODUCT 1 */}
          <div className="category-card">
            <img src="/images/Cat-1/Product-1.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Cast Iron Pulley</h3>
              <p>Diverter  Pulley</p>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="category-card">
            <img src="/images/Cat-1/Product-2.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Cast Iron Pulley</h3>
              <p>Diverter  Pulley</p>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="category-card">
            <img src="/images/Cat-1/Product-3.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Cast Iron Pulley</h3>
              <p>Diverter  Pulley</p>
            </div>
          </div>

          {/* PRODUCT 4 */}
          <div className="category-card">
            <img src="/images/Cat-1/Product-4.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Cast Iron Pulley</h3>
              <p>Diverter  Pulley</p>
            </div>
          </div>

          {/* PRODUCT 5 */}
          <div className="category-card">
            <img src="/images/Cat-1/Product-5.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Cast Iron Pulley</h3>
              <p>Diverter  Pulley</p>
            </div>
          </div>

          <div className="category-card">
            <img src="/images/Cat-1/Product-6.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Cast Iron Pulley</h3>
              <p>Diverter  Pulley</p>
            </div>
          </div>

        </div>

        {/* DETAILS SECTION */}
        <div className="category-details-section">
          <h2>Cast Iron Diverter Pulley – Product Details</h2>

          <p>
            Our Cast Iron Diverter Pulleys are manufactured using high-grade cast iron 
            material ensuring durability, strength, and long service life. These pulleys 
            are widely used in industrial belt conveyor systems for smooth direction 
            change and tension control.
          </p>

          <h3>Features:</h3>
          <ul>
            <li>Heavy-duty cast iron construction</li>
            <li>High load bearing capacity</li>
            <li>Corrosion resistant surface</li>
            <li>Precision machined for smooth rotation</li>
            <li>Low maintenance and long lifespan</li>
          </ul>

          <h3>Applications:</h3>
          <ul>
            <li>Rope Direction Change</li>
            <li>Space Optimization</li>
            <li>Smooth Operation</li>
            <li>Material Handling Systems</li>
            <li>Safety & Reliability</li>
          </ul>

          <div className="specifications">
  <h4>Customized Diverter Wheels Done Based on Requirement</h4>
  <h4>Shaft Done Based on Requirement</h4>
  <h4>Shaft Material: EN8 / EN9</h4>
  <h4>Bearing Type: SKF / FAG / Kg International</h4>
</div>
        </div>

      </div>

      {selectedImg && (
        <div className="image-modal" onClick={() => setSelectedImg(null)}>
          <img src={selectedImg} alt="Preview" />
        </div>  
      )}
    </>
  );
}

export default Category1;