import React from 'react'
import Header from '../coman/Header';
import Footer from '../coman/Footer';


function  Book() {
  return (
    <div>
        <Header/>
       <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Booking</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Booking</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Booking Section */}
                <section id="booking" className="booking section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="reservation-wrapper">
                            <div className="reservation-header text-center" data-aos="fade-up" data-aos-delay={200}>
                                <h2>Reserve Your Stay</h2>
                                <p className="lead">Experience unmatched hospitality with our streamlined booking process</p>
                            </div>
                            <div className="booking-grid">
                                <div className="booking-form-section" data-aos="fade-right" data-aos-delay={300}>
                                    <div className="form-container">
                                        <form className="reservation-form" action method="POST">
                                            <div className="form-section">
                                                <h4>Booking Details</h4>
                                                <div className="form-grid">
                                                    <div className="form-group">
                                                        <label htmlFor="arrival-date" className="form-label">Arrival Date</label>
                                                        <input type="date" className="form-control" id="arrival-date" name="arrival_date" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="departure-date" className="form-label">Departure Date</label>
                                                        <input type="date" className="form-control" id="departure-date" name="departure_date" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="guest-count" className="form-label">Total Guests</label>
                                                        <select className="form-select" id="guest-count" name="guest_count" required>
                                                            <option value>Choose guests</option>
                                                            <option value={1}>1 Guest</option>
                                                            <option value={2}>2 Guests</option>
                                                            <option value={3}>3 Guests</option>
                                                            <option value={4}>4 Guests</option>
                                                            <option value={5}>5+ Guests</option>
                                                        </select>
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="room-count" className="form-label">Total Rooms</label>
                                                        <select className="form-select" id="room-count" name="room_count" required>
                                                            <option value>Choose rooms</option>
                                                            <option value={1}>1 Room</option>
                                                            <option value={2}>2 Rooms</option>
                                                            <option value={3}>3 Rooms</option>
                                                            <option value={4}>4+ Rooms</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-section">
                                                <h4>Room Preferences</h4>
                                                <div className="form-group">
                                                    <label htmlFor="accommodation-type" className="form-label">Accommodation Type</label>
                                                    <select className="form-select" id="accommodation-type" name="accommodation_type">
                                                        <option value>No preference</option>
                                                        <option value="classic">Classic Room</option>
                                                        <option value="premium">Premium Room</option>
                                                        <option value="junior-suite">Junior Suite</option>
                                                        <option value="luxury-suite">Luxury Suite</option>
                                                        <option value="penthouse">Penthouse Suite</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="additional-notes" className="form-label">Additional Requirements</label>
                                                    <textarea className="form-control" id="additional-notes" name="additional_notes" rows={3} placeholder="Please specify any special arrangements or preferences..." defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="form-section">
                                                <h4>Guest Information</h4>
                                                <div className="form-grid">
                                                    <div className="form-group full-width">
                                                        <label htmlFor="primary-guest" className="form-label">Primary Guest Name</label>
                                                        <input type="text" className="form-control" id="primary-guest" name="primary_guest" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="contact-email" className="form-label">Email Address</label>
                                                        <input type="email" className="form-control" id="contact-email" name="contact_email" required />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="contact-phone" className="form-label">Contact Number</label>
                                                        <input type="tel" className="form-control" id="contact-phone" name="contact_phone" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-actions">
                                                <button type="submit" className="btn btn-primary">
                                                    <i className="bi bi-calendar-plus me-2" />
                                                    Submit Reservation Request
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="hotel-showcase" data-aos="fade-left" data-aos-delay={400}>
                                    <div className="showcase-image">
                                        <img src="assets/img/hotel/showcase-1.webp" alt="Hotel luxury showcase" className="img-fluid" />
                                    </div>
                                    <div className="hotel-highlights">
                                        <h3>Why Choose Our Hotel</h3>
                                        <div className="highlights-grid">
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <i className="bi bi-wifi" />
                                                </div>
                                                <div className="highlight-content">
                                                    <h5>Premium Connectivity</h5>
                                                    <p>High-speed internet access in all areas</p>
                                                </div>
                                            </div>
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <i className="bi bi-clock" />
                                                </div>
                                                <div className="highlight-content">
                                                    <h5>24/7 Service</h5>
                                                    <p>Round-the-clock assistance and support</p>
                                                </div>
                                            </div>
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <i className="bi bi-car-front" />
                                                </div>
                                                <div className="highlight-content">
                                                    <h5>Valet Parking</h5>
                                                    <p>Complimentary parking with valet service</p>
                                                </div>
                                            </div>
                                            <div className="highlight-item">
                                                <div className="highlight-icon">
                                                    <i className="bi bi-heart-pulse" />
                                                </div>
                                                <div className="highlight-content">
                                                    <h5>Wellness Center</h5>
                                                    <p>Full-service spa and fitness facilities</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="booking-guarantees">
                                        <div className="guarantee-item">
                                            <i className="bi bi-shield-check" />
                                            <span>Secure Booking</span>
                                        </div>
                                        <div className="guarantee-item">
                                            <i className="bi bi-arrow-clockwise" />
                                            <span>Flexible Cancellation</span>
                                        </div>
                                        <div className="guarantee-item">
                                            <i className="bi bi-telephone" />
                                            <span>24/7 Support</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Booking Section */}
            </main> 
        <Footer/>
    </div>
  )
}

export default Book;
