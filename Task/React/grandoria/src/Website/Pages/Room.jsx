import React, { useEffect, useState } from "react";
import Header from "../coman/Header";
import Footer from "../coman/Footer";


function Room() {
  const [room,setrooms] = useState([])
  const fetchdata =async()=>{
    const res = await axios.get("http://localhost:3000/rooms")
    console.log(res.data)
  }
    useEffect (()=>{
      fetchdata()

    },[])
  return (
    <div>
    <Header/>

      <main className="main">
        {/* Page Title */}
        <div className="page-title light-background">
          <div className="container d-lg-flex justify-content-between align-items-center">
            <h1 className="mb-2 mb-lg-0">Rooms</h1>
            <nav className="breadcrumbs">
              <ol>
                <li>
                  <a href="index.html">Home</a>
                </li>
                <li className="current">Rooms</li>
              </ol>
            </nav>
          </div>
        </div>
        {/* End Page Title */}
        {/* Rooms 2 Section */}
        <section id="rooms-2" className="rooms-2 section">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div
              className="room-filters"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row g-3 align-items-center">
                <div className="col-lg-3 col-md-6">
                  <label className="form-label">Price Range</label>
                  <select className="form-select">
                    <option>All Prices</option>
                    <option>$100 - $200</option>
                    <option>$200 - $350</option>
                    <option>$350+</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <label className="form-label">Guest Capacity</label>
                  <select className="form-select">
                    <option>Any Capacity</option>
                    <option>1-2 Guests</option>
                    <option>3-4 Guests</option>
                    <option>5+ Guests</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <label className="form-label">View Type</label>
                  <select className="form-select">
                    <option>All Views</option>
                    <option>Ocean View</option>
                    <option>City View</option>
                    <option>Garden View</option>
                  </select>
                </div>
                <div className="col-lg-3 col-md-6">
                  <label className="form-label">Sort By</label>
                  <select className="form-select">
                    <option>Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Room Size</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="rooms-grid" data-aos="fade-up" data-aos-delay={300}>
              <div className="row g-4">
                <div className="col-xl-4 col-lg-6">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src="assets/img/hotel/room-1.webp"
                        alt="Deluxe Ocean Suite"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge ocean">Ocean View</span>
                        <span className="feature-badge popular">Popular</span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>Deluxe Ocean Suite</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                      <p className="room-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> Up to 4 guests
                        </span>
                        <span>
                          <i className="bi bi-wifi" /> Free WiFi
                        </span>
                        <span>
                          <i className="bi bi-tv" /> Smart TV
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount">$289</span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Room Card */}
                <div className="col-xl-4 col-lg-6">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src="assets/img/hotel/room-3.webp"
                        alt="Executive Business Suite"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge business">Business</span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>Executive Business Suite</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                        </div>
                      </div>
                      <p className="room-description">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> Up to 2 guests
                        </span>
                        <span>
                          <i className="bi bi-laptop" /> Work Desk
                        </span>
                        <span>
                          <i className="bi bi-telephone" /> Business Phone
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount">$199</span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Room Card */}
                <div className="col-xl-4 col-lg-6">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src="assets/img/hotel/room-7.webp"
                        alt="Family Garden Room"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge family">
                          Family Friendly
                        </span>
                        <span className="feature-badge garden">
                          Garden View
                        </span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>Family Garden Room</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star" />
                        </div>
                      </div>
                      <p className="room-description">
                        Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> Up to 5 guests
                        </span>
                        <span>
                          <i className="bi bi-cup-hot" /> Mini Kitchen
                        </span>
                        <span>
                          <i className="bi bi-controller" /> Game Console
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount">$159</span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Room Card */}
                <div className="col-xl-4 col-lg-6">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src="assets/img/hotel/room-12.webp"
                        alt="Romantic Honeymoon Suite"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge romantic">Romantic</span>
                        <span className="feature-badge premium">Premium</span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>Romantic Honeymoon Suite</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                      <p className="room-description">
                        Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> Up to 2 guests
                        </span>
                        <span>
                          <i className="bi bi-heart" /> King Bed
                        </span>
                        <span>
                          <i className="bi bi-water" /> Jacuzzi
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount">$349</span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Room Card */}
                <div className="col-xl-4 col-lg-6">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src="assets/img/hotel/room-15.webp"
                        alt="Standard City Room"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge city">City View</span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>Standard City Room</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-half" />
                          <i className="bi bi-star" />
                        </div>
                      </div>
                      <p className="room-description">
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> Up to 2 guests
                        </span>
                        <span>
                          <i className="bi bi-wifi" /> Free WiFi
                        </span>
                        <span>
                          <i className="bi bi-car-front" /> Parking
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount">$129</span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Room Card */}
                <div className="col-xl-4 col-lg-6">
                  <div className="room-card">
                    <div className="room-image">
                      <img
                        src="assets/img/hotel/room-18.webp"
                        alt="Premium Ocean View"
                        className="img-fluid"
                      />
                      <div className="room-features">
                        <span className="feature-badge ocean">Ocean View</span>
                        <span className="feature-badge luxury">Luxury</span>
                      </div>
                    </div>
                    <div className="room-content">
                      <div className="room-header">
                        <h3>Premium Ocean View</h3>
                        <div className="room-rating">
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                          <i className="bi bi-star-fill" />
                        </div>
                      </div>
                      <p className="room-description">
                        Totam rem aperiam, eaque ipsa quae ab illo inventore
                        veritatis et quasi architecto beatae vitae dicta sunt.
                      </p>
                      <div className="room-amenities">
                        <span>
                          <i className="bi bi-people" /> Up to 3 guests
                        </span>
                        <span>
                          <i className="bi bi-cup-hot" /> Coffee Machine
                        </span>
                        <span>
                          <i className="bi bi-safe" /> Safe
                        </span>
                      </div>
                      <div className="room-footer">
                        <div className="room-price">
                          <span className="price-from">From</span>
                          <span className="price-amount">$259</span>
                          <span className="price-period">/ night</span>
                        </div>
                        <a
                          href="room-details.html"
                          className="btn-room-details"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Room Card */}
              </div>
            </div>
            <div
              className="load-more-section"
              data-aos="fade-up"
              data-aos-delay={400}
            >
              <div className="text-center">
                <button className="btn-load-more">
                  <i className="bi bi-arrow-down-circle" />
                  Load More Rooms
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* /Rooms 2 Section */}
      </main>

      <Footer/>
    </div>
  );
}

export default Room;