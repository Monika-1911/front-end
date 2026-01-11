import React from 'react'
import Header from '../Coman/Header'
import Footer from '../Coman/Footer'

function Location() {
  return (
    <div>
        <Header/>
        <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Location</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Location</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Hotel Location Section */}
                <section id="hotel-location" className="hotel-location section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Main Location Content */}
                        <div className="row align-items-center mb-5">
                            {/* Location Details */}
                            <div className="col-lg-6 order-2 order-lg-1" data-aos="fade-right" data-aos-delay={200}>
                                <div className="location-content">
                                    <div className="location-badge">
                                        <i className="bi bi-geo-alt-fill" />
                                        <span>Prime Location</span>
                                    </div>
                                    <h2 className="location-title">Luxury Downtown Experience</h2>
                                    <p className="location-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Donec rutrum congue leo eget malesuada. Proin eget tortor risus cras ultricies ligula sed magna dictum porta.</p>
                                    <div className="info-grid">
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bi bi-building" />
                                            </div>
                                            <div className="info-text">
                                                <h6>Address</h6>
                                                <p>789 Madison Street<br />Chicago, IL 60601</p>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bi bi-airplane" />
                                            </div>
                                            <div className="info-text">
                                                <h6>Airport Access</h6>
                                                <p>O'Hare - 35 min<br />Midway - 25 min</p>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bi bi-telephone" />
                                            </div>
                                            <div className="info-text">
                                                <h6>Contact</h6>
                                                <p>+1 (555) 876-5432<br />reservations@example.com</p>
                                            </div>
                                        </div>
                                        <div className="info-item">
                                            <div className="info-icon">
                                                <i className="bi bi-clock" />
                                            </div>
                                            <div className="info-text">
                                                <h6>Check-in</h6>
                                                <p>3:00 PM - 11:00 PM<br />Check-out: 11:00 AM</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        <a href="#" className="btn btn-primary">View on Map</a>
                                        <a href="#" className="btn btn-outline">Book Now</a>
                                    </div>
                                </div>
                            </div>
                            {/* Interactive Map */}
                            <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay={300}>
                                <div className="map-container">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-87.623177!3d41.881832!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" frameBorder={0} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    <div className="map-overlay">
                                        <div className="hotel-marker">
                                            <i className="bi bi-building" />
                                            Grand Luxury Hotel
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Transportation Hub */}
                        <div className="transportation-hub" data-aos="fade-up" data-aos-delay={400}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-header">
                                        <h3>Getting Here is Easy</h3>
                                        <p>Multiple convenient transportation options to reach our hotel</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 mb-4" data-aos="slide-up" data-aos-delay={500}>
                                    <div className="transport-card">
                                        <div className="transport-header">
                                            <div className="transport-icon-box">
                                                <i className="bi bi-car-front-fill" />
                                            </div>
                                            <div className="transport-title">
                                                <h5>By Car</h5>
                                                <span className="transport-time">Most Convenient</span>
                                            </div>
                                        </div>
                                        <div className="transport-details">
                                            <p>Complimentary valet service available. Premium parking garage with direct hotel access and EV charging stations.</p>
                                            <div className="transport-features">
                                                <span className="feature-tag">Valet Service</span>
                                                <span className="feature-tag">EV Charging</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4" data-aos="slide-up" data-aos-delay={600}>
                                    <div className="transport-card">
                                        <div className="transport-header">
                                            <div className="transport-icon-box">
                                                <i className="bi bi-train-front-fill" />
                                            </div>
                                            <div className="transport-title">
                                                <h5>By Metro</h5>
                                                <span className="transport-time">5 min walk</span>
                                            </div>
                                        </div>
                                        <div className="transport-details">
                                            <p>State Street Station directly connects to all major lines. Blue line to airports, Red line to suburbs and entertainment districts.</p>
                                            <div className="transport-features">
                                                <span className="feature-tag">Blue Line</span>
                                                <span className="feature-tag">Red Line</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4" data-aos="slide-up" data-aos-delay={700}>
                                    <div className="transport-card">
                                        <div className="transport-header">
                                            <div className="transport-icon-box">
                                                <i className="bi bi-airplane-fill" />
                                            </div>
                                            <div className="transport-title">
                                                <h5>Airport Shuttle</h5>
                                                <span className="transport-time">Every 30 min</span>
                                            </div>
                                        </div>
                                        <div className="transport-details">
                                            <p>Luxury shuttle service to both major airports. Premium comfort with WiFi, refreshments, and luggage assistance included.</p>
                                            <div className="transport-features">
                                                <span className="feature-tag">WiFi</span>
                                                <span className="feature-tag">Refreshments</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-4" data-aos="slide-up" data-aos-delay={800}>
                                    <div className="transport-card">
                                        <div className="transport-header">
                                            <div className="transport-icon-box">
                                                <i className="bi bi-taxi-front-fill" />
                                            </div>
                                            <div className="transport-title">
                                                <h5>Ride Share</h5>
                                                <span className="transport-time">24/7 Available</span>
                                            </div>
                                        </div>
                                        <div className="transport-details">
                                            <p>Dedicated pickup zones for all ride-sharing services. Professional concierge assistance for booking and special requests.</p>
                                            <div className="transport-features">
                                                <span className="feature-tag">Concierge Help</span>
                                                <span className="feature-tag">Express Pickup</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Attractions Gallery */}
                        <div className="attractions-section" data-aos="fade-up" data-aos-delay={900}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="section-header">
                                        <h3>Explore the Neighborhood</h3>
                                        <p>World-class attractions and entertainment right at your doorstep</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={1000}>
                                    <div className="attraction-item">
                                        <div className="attraction-photo">
                                            <img src="assets/img/hotel/location-5.webp" alt="Millennium Park" className="img-fluid" loading="lazy" />
                                            <div className="distance-badge">
                                                <i className="bi bi-geo-alt" />
                                                <span>2 blocks</span>
                                            </div>
                                        </div>
                                        <div className="attraction-info">
                                            <h5>Millennium Park</h5>
                                            <p className="walk-time"><i className="bi bi-clock" /> 8 minute walk</p>
                                            <p>Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Experience iconic Cloud Gate sculpture.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={1100}>
                                    <div className="attraction-item">
                                        <div className="attraction-photo">
                                            <img src="assets/img/hotel/location-6.webp" alt="Art Institute" className="img-fluid" loading="lazy" />
                                            <div className="distance-badge">
                                                <i className="bi bi-geo-alt" />
                                                <span>4 blocks</span>
                                            </div>
                                        </div>
                                        <div className="attraction-info">
                                            <h5>Art Institute</h5>
                                            <p className="walk-time"><i className="bi bi-clock" /> 12 minute walk</p>
                                            <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas world-renowned collection.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={1200}>
                                    <div className="attraction-item">
                                        <div className="attraction-photo">
                                            <img src="assets/img/hotel/location-7.webp" alt="Navy Pier" className="img-fluid" loading="lazy" />
                                            <div className="distance-badge">
                                                <i className="bi bi-geo-alt" />
                                                <span>1.2 miles</span>
                                            </div>
                                        </div>
                                        <div className="attraction-info">
                                            <h5>Navy Pier</h5>
                                            <p className="walk-time"><i className="bi bi-clock" /> 18 minute walk</p>
                                            <p>Vivamus magna justo lacinia eget consectetur sed convallis at tellus. Entertainment, dining, and stunning lake views.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={1300}>
                                    <div className="attraction-item">
                                        <div className="attraction-photo">
                                            <img src="assets/img/hotel/location-8.webp" alt="Theater District" className="img-fluid" loading="lazy" />
                                            <div className="distance-badge">
                                                <i className="bi bi-geo-alt" />
                                                <span>3 blocks</span>
                                            </div>
                                        </div>
                                        <div className="attraction-info">
                                            <h5>Theater District</h5>
                                            <p className="walk-time"><i className="bi bi-clock" /> 10 minute walk</p>
                                            <p>Mauris blandit aliquet elit eget tincidunt nibh pulvinar. Broadway shows and world-class performances nightly.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={1400}>
                                    <div className="attraction-item">
                                        <div className="attraction-photo">
                                            <img src="assets/img/hotel/location-9.webp" alt="Shopping District" className="img-fluid" loading="lazy" />
                                            <div className="distance-badge">
                                                <i className="bi bi-geo-alt" />
                                                <span>1 block</span>
                                            </div>
                                        </div>
                                        <div className="attraction-info">
                                            <h5>Magnificent Mile</h5>
                                            <p className="walk-time"><i className="bi bi-clock" /> 5 minute walk</p>
                                            <p>Donec rutrum congue leo eget malesuada. Premium shopping, luxury brands, and upscale dining experiences.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-delay={1500}>
                                    <div className="attraction-item">
                                        <div className="attraction-photo">
                                            <img src="assets/img/hotel/location-10.webp" alt="Lakefront" className="img-fluid" loading="lazy" />
                                            <div className="distance-badge">
                                                <i className="bi bi-geo-alt" />
                                                <span>6 blocks</span>
                                            </div>
                                        </div>
                                        <div className="attraction-info">
                                            <h5>Lake Michigan Shore</h5>
                                            <p className="walk-time"><i className="bi bi-clock" /> 15 minute walk</p>
                                            <p>Sed porttitor lectus nibh mauris blandit aliquet elit. Beach access, recreational trails, and scenic waterfront dining.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Hotel Location Section */}
            </main>
            <Footer/>
    </div>
  )
}

export default Location;
