import React from 'react'
import Header from '../coman/Header'
import Footer from '../Coman/Footer'


function About() {
  return (
    <div>
    <Header/>
        <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">About</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">About</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* About Section */}
                <section id="about" className="about section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row align-items-center">
                            <div className="col-lg-5">
                                <div className="image-stack">
                                    <div className="main-image-wrapper" data-aos="fade-right" data-aos-delay={200}>
                                        <img src="assets/img/hotel/showcase-9.webp" alt="Hotel Exterior" className="img-fluid main-image" />
                                        <div className="floating-card" data-aos="zoom-in" data-aos-delay={400}>
                                            <div className="card-icon">
                                                <i className="bi bi-star-fill" />
                                            </div>
                                            <h6>5-Star Excellence</h6>
                                            <p>Rated #1 Luxury Resort</p>
                                        </div>
                                    </div>
                                    <div className="secondary-image" data-aos="fade-up" data-aos-delay={300}>
                                        <img src="assets/img/hotel/room-8.webp" alt="Luxury Suite" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="content-wrapper" data-aos="fade-left" data-aos-delay={200}>
                                    <div className="badge">
                                        <span>Est. 1923</span>
                                    </div>
                                    <h2>Where Timeless Elegance Meets Modern Luxury</h2>
                                    <p className="lead">
                                        Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.
                                    </p>
                                    <p>
                                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                    <div className="milestone-timeline">
                                        <div className="milestone-item" data-aos="slide-up" data-aos-delay={250}>
                                            <div className="milestone-year">1923</div>
                                            <div className="milestone-content">
                                                <h5>Grand Opening</h5>
                                                <p>Founded as exclusive mountain retreat</p>
                                            </div>
                                        </div>
                                        <div className="milestone-item" data-aos="slide-up" data-aos-delay={300}>
                                            <div className="milestone-year">1987</div>
                                            <div className="milestone-content">
                                                <h5>Major Renovation</h5>
                                                <p>Modern amenities while preserving heritage</p>
                                            </div>
                                        </div>
                                        <div className="milestone-item" data-aos="slide-up" data-aos-delay={350}>
                                            <div className="milestone-year">2019</div>
                                            <div className="milestone-content">
                                                <h5>Spa &amp; Wellness</h5>
                                                <p>Award-winning wellness center addition</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        <a href="#" className="btn-explore">
                                            <i className="bi bi-compass" />
                                            Explore Our Heritage
                                        </a>
                                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="btn-video glightbox">
                                            <i className="bi bi-play-circle" />
                                            Watch Story
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row features-showcase">
                            <div className="col-12">
                                <div className="features-header text-center" data-aos="fade-up" data-aos-delay={100}>
                                    <h3>Exceptional Hospitality Redefined</h3>
                                    <p>Discover the amenities and services that make your stay unforgettable</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-card" data-aos="flip-up" data-aos-delay={200}>
                                    <div className="feature-visual">
                                        <img src="assets/img/hotel/amenities-3.webp" alt="Spa Services" className="img-fluid" />
                                        <div className="feature-overlay">
                                            <div className="feature-icon">
                                                <i className="bi bi-flower1" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-details">
                                        <h4>World-Class Spa</h4>
                                        <p>Rejuvenating treatments in our award-winning wellness sanctuary</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-card" data-aos="flip-up" data-aos-delay={250}>
                                    <div className="feature-visual">
                                        <img src="assets/img/hotel/dining-4.webp" alt="Fine Dining" className="img-fluid" />
                                        <div className="feature-overlay">
                                            <div className="feature-icon">
                                                <i className="bi bi-cup-hot" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-details">
                                        <h4>Gourmet Dining</h4>
                                        <p>Michelin-starred cuisine crafted by renowned executive chefs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="feature-card" data-aos="flip-up" data-aos-delay={300}>
                                    <div className="feature-visual">
                                        <img src="assets/img/hotel/location-2.webp" alt="Prime Location" className="img-fluid" />
                                        <div className="feature-overlay">
                                            <div className="feature-icon">
                                                <i className="bi bi-geo-alt" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-details">
                                        <h4>Prime Location</h4>
                                        <p>Nestled in the heart of the city with breathtaking panoramic views</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row achievements-section">
                            <div className="col-lg-8 offset-lg-2">
                                <div className="achievements-grid" data-aos="fade-up" data-aos-delay={200}>
                                    <div className="achievement-stat">
                                        <div className="stat-counter">
                                            <span data-purecounter-start={0} data-purecounter-end={236} data-purecounter-duration={2} className="purecounter" />
                                        </div>
                                        <div className="stat-description">Luxury Suites</div>
                                    </div>
                                    <div className="achievement-stat">
                                        <div className="stat-counter">
                                            <span data-purecounter-start={80} data-purecounter-end={96} data-purecounter-duration={2} className="purecounter" />%
                                        </div>
                                        <div className="stat-description">Satisfaction Rate</div>
                                    </div>
                                    <div className="achievement-stat">
                                        <div className="stat-counter">
                                            <span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />
                                        </div>
                                        <div className="stat-description">International Awards</div>
                                    </div>
                                    <div className="achievement-stat">
                                        <div className="stat-counter">
                                            <span data-purecounter-start={90} data-purecounter-end={100} data-purecounter-duration={2} className="purecounter" />
                                        </div>
                                        <div className="stat-description">Years of Excellence</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /About Section */}
                {/* Rooms Showcase Section */}
                <section id="rooms-showcase" className="rooms-showcase section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <span className="description-title">Rooms</span>
                        <h2>Rooms</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row gy-5">
                            <div className="col-xl-8" data-aos="zoom-in" data-aos-delay={200}>
                                <div className="hero-room-showcase">
                                    <div className="showcase-image-container">
                                        <img src="assets/img/hotel/room-14.webp" alt="Grand Presidential Suite" className="img-fluid" />
                                        <div className="room-category-badge">
                                            <span>Presidential</span>
                                        </div>
                                        <div className="room-details-overlay">
                                            <div className="room-specs">
                                                <span className="spec-item">
                                                    <i className="bi bi-people" />
                                                    <span>6 Guests</span>
                                                </span>
                                                <span className="spec-item">
                                                    <i className="bi bi-house" />
                                                    <span>180m²</span>
                                                </span>
                                                <span className="spec-item">
                                                    <i className="bi bi-geo-alt" />
                                                    <span>Top Floor</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="showcase-content">
                                        <div className="room-title-section">
                                            <h2>Grand Presidential Suite</h2>
                                            <div className="room-rating">
                                                <div className="stars">
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                    <i className="bi bi-star-fill" />
                                                </div>
                                                <span className="rating-text">5.0 Excellence</span>
                                            </div>
                                        </div>
                                        <p className="room-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                                        <div className="amenities-grid">
                                            <div className="amenity-item">
                                                <i className="bi bi-wifi" />
                                                <span>Premium WiFi</span>
                                            </div>
                                            <div className="amenity-item">
                                                <i className="bi bi-tv" />
                                                <span>Smart TV</span>
                                            </div>
                                            <div className="amenity-item">
                                                <i className="bi bi-cup-hot" />
                                                <span>Coffee Bar</span>
                                            </div>
                                            <div className="amenity-item">
                                                <i className="bi bi-snow" />
                                                <span>Climate Control</span>
                                            </div>
                                        </div>
                                        <div className="booking-section">
                                            <div className="price-display">
                                                <span className="currency">$</span>
                                                <span className="amount">649</span>
                                                <span className="period">per night</span>
                                            </div>
                                            <a href="room-details.html" className="primary-booking-btn">Reserve Suite</a>
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Hero Room */}
                            <div className="col-xl-4">
                                <div className="room-list-container">
                                    <div className="standard-room-card" data-aos="slide-left" data-aos-delay={250}>
                                        <div className="card-image">
                                            <img src="assets/img/hotel/room-6.webp" alt="Executive Room" className="img-fluid" />
                                            <div className="view-link">
                                                <i className="bi bi-arrow-up-right" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h4>Executive Business Room</h4>
                                            <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.</p>
                                            <div className="features-list">
                                                <span><i className="bi bi-briefcase" />Work Space</span>
                                                <span><i className="bi bi-building" />City Views</span>
                                            </div>
                                            <div className="booking-row">
                                                <div className="price">$329<small>/night</small></div>
                                                <a href="room-details.html" className="book-link">Book</a>
                                            </div>
                                        </div>
                                    </div>{/* End Standard Room */}
                                    <div className="standard-room-card" data-aos="slide-left" data-aos-delay={300}>
                                        <div className="card-image">
                                            <img src="assets/img/hotel/room-19.webp" alt="Garden View" className="img-fluid" />
                                            <div className="view-link">
                                                <i className="bi bi-arrow-up-right" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h4>Garden View Deluxe</h4>
                                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</p>
                                            <div className="features-list">
                                                <span><i className="bi bi-tree" />Garden View</span>
                                                <span><i className="bi bi-door-open" />Private Terrace</span>
                                            </div>
                                            <div className="booking-row">
                                                <div className="price">$269<small>/night</small></div>
                                                <a href="room-details.html" className="book-link">Book</a>
                                            </div>
                                        </div>
                                    </div>{/* End Standard Room */}
                                    <div className="standard-room-card" data-aos="slide-left" data-aos-delay={350}>
                                        <div className="card-image">
                                            <img src="assets/img/hotel/room-12.webp" alt="Family Suite" className="img-fluid" />
                                            <div className="view-link">
                                                <i className="bi bi-arrow-up-right" />
                                            </div>
                                        </div>
                                        <div className="card-content">
                                            <h4>Family Comfort Suite</h4>
                                            <p>Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates.</p>
                                            <div className="features-list">
                                                <span><i className="bi bi-people" />Family Space</span>
                                                <span><i className="bi bi-controller" />Kids Area</span>
                                            </div>
                                            <div className="booking-row">
                                                <div className="price">$419<small>/night</small></div>
                                                <a href="room-details.html" className="book-link">Book</a>
                                            </div>
                                        </div>
                                    </div>{/* End Standard Room */}
                                </div>
                            </div>
                        </div>
                        <div className="row mt-6">
                            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay={400}>
                                <div className="minimal-room-card">
                                    <div className="room-image">
                                        <img src="assets/img/hotel/room-1.webp" alt="Classic Room" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <a href="room-details.html" className="view-room">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-summary">
                                        <h5>Classic Double</h5>
                                        <div className="price-tag">$189<span>/night</span></div>
                                        <div className="basic-amenities">
                                            <i className="bi bi-wifi" />
                                            <i className="bi bi-tv" />
                                            <i className="bi bi-telephone" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Minimal Room */}
                            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay={450}>
                                <div className="minimal-room-card">
                                    <div className="room-image">
                                        <img src="assets/img/hotel/room-5.webp" alt="Superior Room" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <a href="room-details.html" className="view-room">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-summary">
                                        <h5>Superior King</h5>
                                        <div className="price-tag">$249<span>/night</span></div>
                                        <div className="basic-amenities">
                                            <i className="bi bi-wifi" />
                                            <i className="bi bi-cup-hot" />
                                            <i className="bi bi-snow" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Minimal Room */}
                            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay={500}>
                                <div className="minimal-room-card">
                                    <div className="room-image">
                                        <img src="assets/img/hotel/room-8.webp" alt="Premium Room" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <a href="room-details.html" className="view-room">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-summary">
                                        <h5>Premium Ocean View</h5>
                                        <div className="price-tag">$359<span>/night</span></div>
                                        <div className="basic-amenities">
                                            <i className="bi bi-water" />
                                            <i className="bi bi-door-open" />
                                            <i className="bi bi-award" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Minimal Room */}
                            <div className="col-lg-3 col-sm-6" data-aos="fade-up" data-aos-delay={550}>
                                <div className="minimal-room-card">
                                    <div className="room-image">
                                        <img src="assets/img/hotel/room-17.webp" alt="Luxury Suite" className="img-fluid" />
                                        <div className="hover-overlay">
                                            <a href="room-details.html" className="view-room">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="room-summary">
                                        <h5>Luxury Penthouse</h5>
                                        <div className="price-tag">$1,199<span>/night</span></div>
                                        <div className="basic-amenities">
                                            <i className="bi bi-star" />
                                            <i className="bi bi-house" />
                                            <i className="bi bi-gem" />
                                        </div>
                                    </div>
                                </div>
                            </div>{/* End Minimal Room */}
                        </div>
                        <div className="text-center" data-aos="fade-up" data-aos-delay={600}>
                            <a href="rooms.html" className="explore-all-link">
                                <span>Explore All Accommodations</span>
                                <i className="bi bi-arrow-right" />
                            </a>
                        </div>
                    </div>
                </section>{/* /Rooms Showcase Section */}
            </main>
            <Footer/>
    </div>
  )
}

export default About;