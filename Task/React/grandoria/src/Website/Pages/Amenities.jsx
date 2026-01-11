import React from 'react'
import Header from '../coman/Header';
import Footer from '../Coman/Footer';



function Amenities() {
  return (
    <div>
    <Header/>
        <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Amenities</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Amenities</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Amenities Section */}
                <section id="amenities" className="amenities section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-4">
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
                                <div className="amenity-card">
                                    <div className="amenity-image">
                                        <img src="assets/img/hotel/amenities-1.webp" alt="Rooftop Pool" className="img-fluid" />
                                    </div>
                                    <div className="amenity-content">
                                        <h3>Infinity Pool &amp; Sun Deck</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                        <ul className="amenity-features">
                                            <li><i className="bi bi-clock" /> Open 6 AM - 10 PM</li>
                                            <li><i className="bi bi-droplet" /> Heated pool year-round</li>
                                            <li><i className="bi bi-cup-hot" /> Poolside bar service</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/* End Amenity Card */}
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="amenity-card">
                                    <div className="amenity-image">
                                        <img src="assets/img/hotel/amenities-2.webp" alt="Spa Wellness" className="img-fluid" />
                                    </div>
                                    <div className="amenity-content">
                                        <h3>Luxury Spa &amp; Wellness</h3>
                                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
                                        <ul className="amenity-features">
                                            <li><i className="bi bi-calendar2-check" /> Book treatments online</li>
                                            <li><i className="bi bi-heart" /> Couples massage rooms</li>
                                            <li><i className="bi bi-flower1" /> Organic spa products</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/* End Amenity Card */}
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
                                <div className="amenity-card">
                                    <div className="amenity-image">
                                        <img src="assets/img/hotel/dining-3.webp" alt="Fine Dining" className="img-fluid" />
                                    </div>
                                    <div className="amenity-content">
                                        <h3>Signature Restaurant</h3>
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
                                        <ul className="amenity-features">
                                            <li><i className="bi bi-award" /> Michelin-starred chef</li>
                                            <li><i className="bi bi-wine" /> Award-winning wine cellar</li>
                                            <li><i className="bi bi-moon-stars" /> Open Tuesday - Sunday</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/* End Amenity Card */}
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
                                <div className="amenity-card">
                                    <div className="amenity-image">
                                        <img src="assets/img/hotel/amenities-4.webp" alt="Fitness Center" className="img-fluid" />
                                    </div>
                                    <div className="amenity-content">
                                        <h3>24/7 Fitness Center</h3>
                                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.</p>
                                        <ul className="amenity-features">
                                            <li><i className="bi bi-lightning" /> State-of-the-art equipment</li>
                                            <li><i className="bi bi-person-check" /> Personal trainers available</li>
                                            <li><i className="bi bi-shield-check" /> Complimentary towels</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>{/* End Amenity Card */}
                        </div>
                        <div className="row mt-5">
                            <div className="col-12" data-aos="fade-up" data-aos-delay={600}>
                                <div className="amenities-grid">
                                    <h3 className="text-center mb-4">Additional Hotel Services</h3>
                                    <div className="row g-4">
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-wifi" />
                                                </div>
                                                <h4>Free Wi-Fi</h4>
                                                <p>High-speed internet throughout the property</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-car-front" />
                                                </div>
                                                <h4>Valet Parking</h4>
                                                <p>Complimentary valet service for all guests</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-airplane" />
                                                </div>
                                                <h4>Airport Shuttle</h4>
                                                <p>Scheduled transfers to major airports</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-headset" />
                                                </div>
                                                <h4>Concierge</h4>
                                                <p>24/7 assistance for reservations and tours</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-bell" />
                                                </div>
                                                <h4>Room Service</h4>
                                                <p>Gourmet dining delivered to your room</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-shield-check" />
                                                </div>
                                                <h4>Safe Deposit</h4>
                                                <p>Secure storage for your valuables</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-translate" />
                                                </div>
                                                <h4>Multilingual Staff</h4>
                                                <p>Service in English, Spanish, French, and more</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-3 col-md-4 col-sm-6">
                                            <div className="service-item">
                                                <div className="service-icon">
                                                    <i className="bi bi-heart-pulse" />
                                                </div>
                                                <h4>Pet Friendly</h4>
                                                <p>Welcome amenities for your furry friends</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Amenities Section */}
            </main>
            <Footer/>
    
    </div>
  )
}

export default Amenities;