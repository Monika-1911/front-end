import React from 'react'
import Header from '../coman/Header'
import Footer from '../coman/Footer'

function Offers() {
  return (
    <div>
        <Header/>
         <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Offers</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Offers</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Offers Section */}
                <section id="offers" className="offers section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="offer-card">
                                    <div className="offer-image">
                                        <img src="assets/img/hotel/showcase-3.webp" alt="Special Offer" className="img-fluid" />
                                        <div className="offer-badge">
                                            <span className="discount">30% OFF</span>
                                        </div>
                                    </div>
                                    <div className="offer-content">
                                        <h3>Luxury Weekend Getaway</h3>
                                        <p>Indulge in a perfect weekend escape with our exclusive package. Enjoy premium accommodations, complimentary breakfast, and access to our world-class spa facilities.</p>
                                        <div className="offer-details">
                                            <div className="price-info">
                                                <span className="original-price">$299</span>
                                                <span className="discounted-price">$209</span>
                                                <span className="per-night">per night</span>
                                            </div>
                                            <div className="validity">
                                                <i className="bi bi-calendar-check" />
                                                <span>Valid until March 31, 2024</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary">Book Now</a>
                                    </div>
                                </div>{/* End Offer Card */}
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="offer-card">
                                    <div className="offer-image">
                                        <img src="assets/img/hotel/showcase-7.webp" alt="Special Offer" className="img-fluid" />
                                        <div className="offer-badge">
                                            <span className="discount">25% OFF</span>
                                        </div>
                                    </div>
                                    <div className="offer-content">
                                        <h3>Business Travel Package</h3>
                                        <p>Perfect for the modern business traveler. Includes high-speed WiFi, meeting room access, late checkout, and complimentary airport shuttle service.</p>
                                        <div className="offer-details">
                                            <div className="price-info">
                                                <span className="original-price">$189</span>
                                                <span className="discounted-price">$142</span>
                                                <span className="per-night">per night</span>
                                            </div>
                                            <div className="validity">
                                                <i className="bi bi-calendar-check" />
                                                <span>Valid until April 15, 2024</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-primary">Book Now</a>
                                    </div>
                                </div>{/* End Offer Card */}
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={400}>
                                <div className="offer-card compact">
                                    <div className="offer-image">
                                        <img src="assets/img/hotel/amenities-2.webp" alt="Special Offer" className="img-fluid" />
                                        <div className="offer-badge">
                                            <span className="discount">FREE</span>
                                        </div>
                                    </div>
                                    <div className="offer-content">
                                        <h4>Spa Day Experience</h4>
                                        <p>Complimentary spa session with any 3-night stay booking.</p>
                                        <div className="offer-details">
                                            <div className="validity">
                                                <i className="bi bi-calendar-check" />
                                                <span>Limited time offer</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-outline-primary">Learn More</a>
                                    </div>
                                </div>{/* End Offer Card */}
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={450}>
                                <div className="offer-card compact">
                                    <div className="offer-image">
                                        <img src="assets/img/hotel/dining-4.webp" alt="Special Offer" className="img-fluid" />
                                        <div className="offer-badge">
                                            <span className="discount">50% OFF</span>
                                        </div>
                                    </div>
                                    <div className="offer-content">
                                        <h4>Romantic Dinner</h4>
                                        <p>Special discount on our signature dining experience for couples.</p>
                                        <div className="offer-details">
                                            <div className="validity">
                                                <i className="bi bi-calendar-check" />
                                                <span>Weekends only</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-outline-primary">Reserve Table</a>
                                    </div>
                                </div>{/* End Offer Card */}
                            </div>
                            <div className="col-lg-4" data-aos="fade-up" data-aos-delay={500}>
                                <div className="offer-card compact">
                                    <div className="offer-image">
                                        <img src="assets/img/hotel/event-6.webp" alt="Special Offer" className="img-fluid" />
                                        <div className="offer-badge">
                                            <span className="discount">SAVE 40%</span>
                                        </div>
                                    </div>
                                    <div className="offer-content">
                                        <h4>Family Fun Package</h4>
                                        <p>Kids stay free with complimentary activities and meals included.</p>
                                        <div className="offer-details">
                                            <div className="validity">
                                                <i className="bi bi-calendar-check" />
                                                <span>Summer season</span>
                                            </div>
                                        </div>
                                        <a href="#" className="btn btn-outline-primary">Book Family</a>
                                    </div>
                                </div>{/* End Offer Card */}
                            </div>
                        </div>
                    </div>
                </section>{/* /Offers Section */}
            </main>
            <Footer/>

    </div>
  )
}

export default Offers;