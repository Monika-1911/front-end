import { useState } from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import SocialSidebar from "../components/SocialSidebar";
import "../index.css"

function Category2() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Topbar />
      <Navbar />
      <SocialSidebar />

      <div className="category-page">
        <h1 className="page-title">Nylon Pulley</h1>

        <div className="category-grid">

          {/* PRODUCT 1 */}
          <div className="category-card">
            <img src="/images/Cat-2/Product-1.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Nylon Pulley 1</h3>
              <p>Diverter Pulley</p>
            </div>
          </div>

          {/* PRODUCT 2 */}
          <div className="category-card">
            <img src="/images/Cat-2/Product-2.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Nylon Pulley 2</h3>
              <p>Diverter Pulley</p>
            </div>
          </div>

          {/* PRODUCT 3 */}
          <div className="category-card">
            <img src="/images/Cat-2/Product-2.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Nylon Pulley 3</h3>
              <p>Diverter Pulley</p>
            </div>
          </div>

          {/* PRODUCT 4 */}
          <div className="category-card">
            <img src="/images/Cat-2/Product-2.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Nylon Pulley 4</h3>
              <p>Diverter Pulley</p>
            </div>
          </div>

          {/* PRODUCT 5 */}
          <div className="category-card">
            <img src="/images/Cat-2/Product-2.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Nylon Pulley 5</h3>
              <p>Diverter Pulley</p>
            </div>
          </div>

          {/* PRODUCT 6 */}
          <div className="category-card">
            <img src="/images/Cat-2/Product-2.jpg" onClick={(e)=>setSelectedImg(e.target.src)} />
            <div className="category-info">
              <h3>Nylon Pulley 6</h3>
              <p>Diverter Pulley</p>
            </div>
          </div>

        </div>

        {/* DETAILS / SPECIFICATIONS SECTION */}
        <div className="category-details-section">
          <h2>Nylon Pulley   Product Details</h2>

          <p>
            Our Nylon Diverter Pulleys are manufactured with high-quality industrial-grade materials,
            ensuring durability, light weight, and smooth operation. Widely used in belt conveyor systems
            for direction changes and tension control.
          </p>

          <h3>Features:</h3>
          <ul>
            <li>Lightweight yet strong construction</li>
            <li>High corrosion resistance</li>
            <li>Low maintenance & long lifespan</li>
            <li>Precision machined for smooth rotation</li>
          </ul>

          <h3>Applications:</h3>
          <ul>
            <li>Rope / Belt Direction Change</li>
            <li>Material Handling Systems</li>
            <li>Conveyor Tensioning</li>
            <li>Space Optimization</li>
            <li>Safety & Reliability</li>
          </ul>

          <h3>Specifications:</h3>
          <div className="specifications">
            <h4>Customized Nylon Wheels Done Based on Requirement</h4>
            <h4>Shaft Done Based on Requirement</h4>
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

export default Category2;