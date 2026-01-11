import React from 'react'
import Header from '../coman/Header'
import Footer from '../Coman/Footer'

function Events() {
  return (
    <div>
        <Header/>
        <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Events</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Events</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Events Section */}
                <section id="events" className="events section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="hero-content text-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <h2>Exceptional Events &amp; Celebrations</h2>
                            <p className="lead">Donec rutrum congue leo eget malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.</p>
                        </div>
                        <div className="event-venues-grid" data-aos="fade-up" data-aos-delay={300}>
                            <div className="row g-4">
                                <div className="col-xl-4 col-lg-6">
                                    <div className="venue-card">
                                        <div className="venue-image">
                                            <img src="assets/img/hotel/event-2.webp" alt="Ballroom" className="img-fluid" />
                                            <div className="venue-overlay">
                                                <div className="venue-info">
                                                    <h4>Grand Ballroom</h4>
                                                    <span className="capacity">Up to 400 guests</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="venue-card">
                                        <div className="venue-image">
                                            <img src="assets/img/hotel/event-4.webp" alt="Garden Space" className="img-fluid" />
                                            <div className="venue-overlay">
                                                <div className="venue-info">
                                                    <h4>Rooftop Terrace</h4>
                                                    <span className="capacity">Up to 200 guests</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6">
                                    <div className="venue-card">
                                        <div className="venue-image">
                                            <img src="assets/img/hotel/event-7.webp" alt="Meeting Room" className="img-fluid" />
                                            <div className="venue-overlay">
                                                <div className="venue-info">
                                                    <h4>Conference Suite</h4>
                                                    <span className="capacity">Up to 80 guests</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="features-section" data-aos="fade-up" data-aos-delay={400}>
                            <div className="row align-items-center gy-5">
                                <div className="col-lg-6">
                                    <div className="features-content">
                                        <h3>World-Class Event Facilities</h3>
                                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet.</p>
                                        <div className="feature-list">
                                            <div className="feature-item" data-aos="slide-right" data-aos-delay={100}>
                                                <div className="feature-icon">
                                                    <i className="bi bi-soundwave" />
                                                </div>
                                                <div className="feature-details">
                                                    <h5>Advanced Audio/Visual</h5>
                                                    <p>State-of-the-art sound systems and projection equipment</p>
                                                </div>
                                            </div>
                                            <div className="feature-item" data-aos="slide-right" data-aos-delay={200}>
                                                <div className="feature-icon">
                                                    <i className="bi bi-wifi" />
                                                </div>
                                                <div className="feature-details">
                                                    <h5>High-Speed Connectivity</h5>
                                                    <p>Complimentary high-speed internet throughout all venues</p>
                                                </div>
                                            </div>
                                            <div className="feature-item" data-aos="slide-right" data-aos-delay={300}>
                                                <div className="feature-icon">
                                                    <i className="bi bi-cup-hot" />
                                                </div>
                                                <div className="feature-details">
                                                    <h5>Premium Catering</h5>
                                                    <p>Exceptional culinary experiences with customizable menus</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="features-gallery">
                                        <div className="gallery-main">
                                            <img src="assets/img/hotel/event-9.webp" alt="Event Setup" className="img-fluid" />
                                        </div>
                                        <div className="gallery-thumbnails">
                                            <div className="thumbnail-item">
                                                <img src="assets/img/hotel/event-5.webp" alt="Dining Setup" className="img-fluid" />
                                            </div>
                                            <div className="thumbnail-item">
                                                <img src="assets/img/hotel/amenities-3.webp" alt="Lounge Area" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="event-packages" data-aos="fade-up" data-aos-delay={500}>
                            <div className="section-header text-center">
                                <h3>Tailored Event Packages</h3>
                                <p>Cras ultricies ligula sed magna dictum porta. Donec sollicitudin molestie malesuada. Proin eget tortor risus.</p>
                            </div>
                            <div className="packages-container">
                                <div className="row g-4">
                                    <div className="col-lg-6">
                                        <div className="package-item" data-aos="zoom-out" data-aos-delay={100}>
                                            <div className="package-content">
                                                <div className="package-icon">
                                                    <i className="bi bi-briefcase-fill" />
                                                </div>
                                                <h4>Corporate Meetings</h4>
                                                <p>Professional meeting spaces with all essential amenities for productive business events and conferences.</p>
                                                <div className="package-highlights">
                                                    <span className="highlight">Meeting rooms</span>
                                                    <span className="highlight">AV equipment</span>
                                                    <span className="highlight">Catering options</span>
                                                </div>
                                                <div className="package-price">
                                                    Starting from <strong>$95/person</strong>
                                                </div>
                                                <a href="#" className="btn-package">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="package-item featured" data-aos="zoom-out" data-aos-delay={200}>
                                            <div className="featured-label">Most Popular</div>
                                            <div className="package-content">
                                                <div className="package-icon">
                                                    <i className="bi bi-heart-fill" />
                                                </div>
                                                <h4>Wedding Celebrations</h4>
                                                <p>Unforgettable wedding experiences with elegant venues, exquisite dining, and personalized service for your special day.</p>
                                                <div className="package-highlights">
                                                    <span className="highlight">Bridal suite</span>
                                                    <span className="highlight">Ceremony setup</span>
                                                    <span className="highlight">Reception dinner</span>
                                                </div>
                                                <div className="package-price">
                                                    Starting from <strong>$185/person</strong>
                                                </div>
                                                <a href="#" className="btn-package">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="package-item" data-aos="zoom-out" data-aos-delay={300}>
                                            <div className="package-content">
                                                <div className="package-icon">
                                                    <i className="bi bi-calendar-event" />
                                                </div>
                                                <h4>Special Occasions</h4>
                                                <p>Celebrate milestones and special moments with customized party packages designed to create lasting memories.</p>
                                                <div className="package-highlights">
                                                    <span className="highlight">Custom decor</span>
                                                    <span className="highlight">Entertainment</span>
                                                    <span className="highlight">Photography</span>
                                                </div>
                                                <div className="package-price">
                                                    Starting from <strong>$135/person</strong>
                                                </div>
                                                <a href="#" className="btn-package">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="package-item" data-aos="zoom-out" data-aos-delay={400}>
                                            <div className="package-content">
                                                <div className="package-icon">
                                                    <i className="bi bi-people-fill" />
                                                </div>
                                                <h4>Social Gatherings</h4>
                                                <p>Intimate social events with flexible arrangements, perfect for family reunions, anniversaries, and casual celebrations.</p>
                                                <div className="package-highlights">
                                                    <span className="highlight">Flexible seating</span>
                                                    <span className="highlight">Bar service</span>
                                                    <span className="highlight">Live music</span>
                                                </div>
                                                <div className="package-price">
                                                    Starting from <strong>$115/person</strong>
                                                </div>
                                                <a href="#" className="btn-package">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="planning-services" data-aos="fade-up" data-aos-delay={600}>
                            <div className="row gy-5">
                                <div className="col-lg-4">
                                    <div className="planning-content">
                                        <h3>Complete Event Planning</h3>
                                        <p>Nulla quis lorem ut libero malesuada feugiat. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Sed porttitor lectus nibh.</p>
                                        <a href="#" className="btn-contact">Contact Our Team</a>
                                    </div>
                                </div>
                                <div className="col-lg-8">
                                    <div className="services-grid">
                                        <div className="service-box" data-aos="slide-up" data-aos-delay={100}>
                                            <div className="service-icon">
                                                <i className="bi bi-person-check" />
                                            </div>
                                            <h5>Event Coordination</h5>
                                            <p>Dedicated coordinators to manage every detail</p>
                                        </div>
                                        <div className="service-box" data-aos="slide-up" data-aos-delay={200}>
                                            <div className="service-icon">
                                                <i className="bi bi-flower1" />
                                            </div>
                                            <h5>Decoration &amp; Styling</h5>
                                            <p>Custom themes and elegant decoration packages</p>
                                        </div>
                                        <div className="service-box" data-aos="slide-up" data-aos-delay={300}>
                                            <div className="service-icon">
                                                <i className="bi bi-camera-reels" />
                                            </div>
                                            <h5>Photography &amp; Video</h5>
                                            <p>Professional documentation of your special moments</p>
                                        </div>
                                        <div className="service-box" data-aos="slide-up" data-aos-delay={400}>
                                            <div className="service-icon">
                                                <i className="bi bi-car-front" />
                                            </div>
                                            <h5>Transportation</h5>
                                            <p>Convenient shuttle and transportation arrangements</p>
                                        </div>
                                        <div className="service-box" data-aos="slide-up" data-aos-delay={500}>
                                            <div className="service-icon">
                                                <i className="bi bi-gift" />
                                            </div>
                                            <h5>Guest Amenities</h5>
                                            <p>Welcome packages and accommodation assistance</p>
                                        </div>
                                        <div className="service-box" data-aos="slide-up" data-aos-delay={600}>
                                            <div className="service-icon">
                                                <i className="bi bi-headset" />
                                            </div>
                                            <h5>24/7 Support</h5>
                                            <p>Round-the-clock assistance during your event</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Events Section */}
            </main>
        <Footer/>
    </div>
  )
}

export default Events