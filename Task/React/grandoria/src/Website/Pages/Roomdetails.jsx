import React from 'react'
import Header from '../Coman/Header';
import Footer from '../Coman/Footer';

function Roomdetails() {
  return (
    <div>
        <Header/>
        <main className="main">
  {/* Page Title */}
  <div className="page-title light-background">
    <div className="container d-lg-flex justify-content-between align-items-center">
      <h1 className="mb-2 mb-lg-0">Room Details</h1>
      <nav className="breadcrumbs">
        <ol>
          <li><a href="index.html">Home</a></li>
          <li className="current">Room Details</li>
        </ol>
      </nav>
    </div>
  </div>{/* End Page Title */}
  {/* Room Details Section */}
  <section id="room-details" className="room-details section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      {/* Room Header with Image and Basic Info */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-7" data-aos="fade-right" data-aos-delay={200}>
          <div className="room-header-image">
            <img src="assets/img/hotel/room-15.webp" alt="Deluxe Ocean View Suite" className="img-fluid rounded" />
            <div className="room-badge">
              <span className="text-white">Premium Suite</span>
            </div>
          </div>
        </div>
        <div className="col-lg-5" data-aos="fade-left" data-aos-delay={300}>
          <div className="room-header-content">
            <div className="room-rating mb-3">
              <span className="rating-score">4.8</span>
              <div className="stars">
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
                <i className="bi bi-star-fill" />
              </div>
              <span className="reviews-count">(127 reviews)</span>
            </div>
            <h1 className="room-title">Deluxe Ocean View Suite</h1>
            <p className="room-tagline">Experience luxury with breathtaking ocean views and premium amenities</p>
            <div className="room-capacity mb-4">
              <div className="capacity-item">
                <i className="bi bi-people" />
                <span>Up to 4 guests</span>
              </div>
              <div className="capacity-item">
                <i className="bi bi-grid" />
                <span>850 sq ft</span>
              </div>
              <div className="capacity-item">
                <i className="bi bi-bed" />
                <span>King bed + Sofa bed</span>
              </div>
            </div>
            <div className="room-price">
              <span className="price-amount">$395</span>
              <span className="price-period">per night</span>
            </div>
            <a href="booking.html" className="btn btn-book-now">Book Now</a>
          </div>
        </div>
      </div>
      {/* Room Gallery */}
      <div className="room-gallery mb-5" data-aos="fade-up" data-aos-delay={200}>
        <h3 className="section-subtitle mb-4">Room Gallery</h3>
        <div className="gallery-grid">
          <div className="gallery-main">
            <a href="assets/img/hotel/room-12.webp" className="glightbox">
              <img src="assets/img/hotel/room-12.webp" alt="Suite Interior" className="img-fluid" />
            </a>
          </div>
          <div className="gallery-thumbnails">
            <a href="assets/img/hotel/room-8.webp" className="glightbox">
              <img src="assets/img/hotel/room-8.webp" alt="Bedroom View" className="img-fluid" />
            </a>
            <a href="assets/img/hotel/room-6.webp" className="glightbox">
              <img src="assets/img/hotel/room-6.webp" alt="Living Area" className="img-fluid" />
            </a>
            <a href="assets/img/hotel/room-18.webp" className="glightbox">
              <img src="assets/img/hotel/room-18.webp" alt="Ocean View" className="img-fluid" />
            </a>
            <a href="assets/img/hotel/dining-4.webp" className="glightbox">
              <img src="assets/img/hotel/dining-4.webp" alt="Bathroom" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
      {/* Room Description */}
      <div className="row mb-5">
        <div className="col-lg-8" data-aos="fade-up" data-aos-delay={200}>
          <div className="room-description">
            <h3 className="section-subtitle">Room Overview</h3>
            <p>Indulge in the ultimate luxury experience with our Deluxe Ocean View Suite. This spacious retreat features floor-to-ceiling windows showcasing panoramic ocean vistas, creating a serene atmosphere perfect for romantic getaways or family vacations. The elegantly appointed living space seamlessly blends modern comfort with coastal charm, featuring premium furnishings and thoughtful design elements.</p>
            <p>The suite includes a separate living area with comfortable seating, a work desk for business travelers, and a private balcony where you can enjoy your morning coffee while watching the sunrise over the ocean. The bedroom features a plush king-size bed with luxury linens, ensuring a restful night's sleep, while the sofa bed in the living area provides additional accommodation for up to two guests.</p>
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
          <div className="highlight-box">
            <div className="highlight-icon">
              <i className="bi bi-star" />
            </div>
            <h4>Premium Experience</h4>
            <p>"The most beautiful suite we've ever stayed in. The ocean view is absolutely breathtaking and the attention to detail is remarkable."</p>
            <div className="quote-author">
              <span>- Sarah M., Verified Guest</span>
            </div>
          </div>
        </div>
      </div>
      {/* Amenities and Features */}
      <div className="room-amenities mb-5" data-aos="fade-up" data-aos-delay={200}>
        <h3 className="section-subtitle mb-4">Room Amenities</h3>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="amenity-category">
              <h5>Sleeping</h5>
              <ul>
                <li><i className="bi bi-check2" /> King size bed</li>
                <li><i className="bi bi-check2" /> Premium linens</li>
                <li><i className="bi bi-check2" /> Memory foam pillows</li>
                <li><i className="bi bi-check2" /> Blackout curtains</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="amenity-category">
              <h5>Technology</h5>
              <ul>
                <li><i className="bi bi-check2" /> High-speed WiFi</li>
                <li><i className="bi bi-check2" /> 55" Smart TV</li>
                <li><i className="bi bi-check2" /> Bluetooth speakers</li>
                <li><i className="bi bi-check2" /> USB charging ports</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="amenity-category">
              <h5>Comfort</h5>
              <ul>
                <li><i className="bi bi-check2" /> Climate control</li>
                <li><i className="bi bi-check2" /> Mini refrigerator</li>
                <li><i className="bi bi-check2" /> Coffee machine</li>
                <li><i className="bi bi-check2" /> Safe deposit box</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <div className="amenity-category">
              <h5>Bathroom</h5>
              <ul>
                <li><i className="bi bi-check2" /> Marble bathroom</li>
                <li><i className="bi bi-check2" /> Rain shower</li>
                <li><i className="bi bi-check2" /> Luxury toiletries</li>
                <li><i className="bi bi-check2" /> Heated floors</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Tabbed Information */}
      <div className="room-tabs mb-5" data-aos="fade-up" data-aos-delay={200}>
        <ul className="nav nav-tabs" id="room-detailsRoomTabs" role="tablist">
          <li className="nav-item" role="presentation">
            <button className="nav-link active" id="room-details-policies-tab" data-bs-toggle="tab" data-bs-target="#room-details-policies" type="button" role="tab">Policies</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="room-details-location-tab" data-bs-toggle="tab" data-bs-target="#room-details-location" type="button" role="tab">Location</button>
          </li>
          <li className="nav-item" role="presentation">
            <button className="nav-link" id="room-details-services-tab" data-bs-toggle="tab" data-bs-target="#room-details-services" type="button" role="tab">Services</button>
          </li>
        </ul>
        <div className="tab-content" id="room-detailsRoomTabsContent">
          <div className="tab-pane fade show active" id="room-details-policies" role="tabpanel">
            <div className="tab-content-wrapper">
              <div className="row">
                <div className="col-md-4">
                  <h6>Check-in / Check-out</h6>
                  <p>Check-in: 3:00 PM<br />Check-out: 11:00 AM</p>
                </div>
                <div className="col-md-4">
                  <h6>Cancellation</h6>
                  <p>Free cancellation up to 24 hours before arrival</p>
                </div>
                <div className="col-md-4">
                  <h6>Pets</h6>
                  <p>Pet-friendly with additional fee</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="room-details-location" role="tabpanel">
            <div className="tab-content-wrapper">
              <div className="row">
                <div className="col-md-6">
                  <h6>Nearby Attractions</h6>
                  <ul>
                    <li>Beach access - 2 minutes walk</li>
                    <li>Marina District - 0.5 miles</li>
                    <li>Historic Downtown - 1.2 miles</li>
                    <li>Shopping Center - 0.8 miles</li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <h6>Transportation</h6>
                  <ul>
                    <li>Airport shuttle available</li>
                    <li>Valet parking - $25/night</li>
                    <li>Public transportation nearby</li>
                    <li>Car rental desk in lobby</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="room-details-services" role="tabpanel">
            <div className="tab-content-wrapper">
              <div className="row">
                <div className="col-md-4">
                  <h6>Concierge</h6>
                  <p>24/7 concierge service for reservations and recommendations</p>
                </div>
                <div className="col-md-4">
                  <h6>Room Service</h6>
                  <p>Available 6:00 AM - 11:00 PM daily</p>
                </div>
                <div className="col-md-4">
                  <h6>Housekeeping</h6>
                  <p>Daily housekeeping and turndown service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Optional Add-ons */}
      <div className="room-addons mb-5" data-aos="fade-up" data-aos-delay={200}>
        <h3 className="section-subtitle mb-4">Enhance Your Stay</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="addon-card">
              <div className="addon-icon">
                <i className="bi bi-cup-hot" />
              </div>
              <h5>Breakfast Package</h5>
              <p>Start your day with our signature breakfast buffet featuring fresh local ingredients</p>
              <div className="addon-price">+$35 per person</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="addon-card">
              <div className="addon-icon">
                <i className="bi bi-flower1" />
              </div>
              <h5>Spa Access</h5>
              <p>Enjoy unlimited access to our luxury spa facilities during your stay</p>
              <div className="addon-price">+$75 per day</div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="addon-card">
              <div className="addon-icon">
                <i className="bi bi-airplane" />
              </div>
              <h5>Airport Transfer</h5>
              <p>Private luxury vehicle transfer to and from the airport</p>
              <div className="addon-price">+$95 round trip</div>
            </div>
          </div>
        </div>
      </div>
      {/* Booking CTA */}
      <div className="booking-cta" data-aos="fade-up" data-aos-delay={200}>
        <div className="booking-card">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <h4>Ready to book your stay?</h4>
              <p>Experience luxury and comfort in our Deluxe Ocean View Suite. Book now and create unforgettable memories.</p>
            </div>
            <div className="col-lg-4 text-center text-lg-end">
              <div className="price-display">
                <span className="price">$395</span>
                <span className="period">per night</span>
              </div>
              <a href="booking.html" className="btn btn-primary btn-lg">Check Availability</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Room Details Section */}
</main>
<Footer/>
    </div>
  )
}

export default Roomdetails;