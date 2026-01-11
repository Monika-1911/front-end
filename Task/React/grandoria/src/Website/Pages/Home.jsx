import React from 'react'
import Footer from '../coman/Footer'
import Header from '../coman/Header'

function Home() {
  return (
    <div>
      <Header/>
      <main className="main">
  {/* Hotel Hero Section */}
  <section id="hotel-hero" className="hotel-hero section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 align-items-center">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
          <div className="hero-content">
            <h1>Luxury Redefined in Every Stay</h1>
            <p className="lead">Experience unparalleled comfort and sophistication at our premium hotel. From elegant suites to world-class amenities, every moment of your stay is crafted to perfection.</p>
            <div className="hero-features">
              <div className="feature-item">
                <i className="bi bi-wifi" />
                <span>Complimentary WiFi</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-car-front" />
                <span>Valet Parking</span>
              </div>
              <div className="feature-item">
                <i className="bi bi-cup-hot" />
                <span>24/7 Room Service</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="booking.html" className="btn btn-primary">Book Now</a>
              <a href="rooms.html" className="btn btn-outline">View Rooms</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
          <div className="hero-images">
            <div className="main-image">
              <img src="assets/img/hotel/showcase-3.webp" alt="Luxury Hotel" className="img-fluid" />
            </div>
            <div className="floating-card" data-aos="zoom-in" data-aos-delay={400}>
              <div className="card-content">
                <div className="rating">
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                  <i className="bi bi-star-fill" />
                </div>
                <h6>Exceptional Experience</h6>
                <p>"Absolutely stunning hotel! The service was impeccable and the views breathtaking."</p>
                <div className="guest-info">
                  <img src="assets/img/person/person-f-3.webp" alt="Guest" className="guest-avatar" />
                  <span>Sarah Johnson</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-stats" data-aos="fade-up">
        <div className="row text-center">
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={150} data-purecounter-duration={1}>150</span>
              <span className="stat-label">Luxury Rooms</span>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={5} data-purecounter-duration={1}>5</span>
              <span className="stat-label">Star Rating</span>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={24} data-purecounter-duration={1}>24</span>
              <span className="stat-label">Hour Service</span>
            </div>
          </div>
          <div className="col-md-3 col-6">
            <div className="stat-item">
              <span className="stat-number purecounter" data-purecounter-start={0} data-purecounter-end={98} data-purecounter-duration={1}>98</span>
              <span className="stat-label">Guest Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Hotel Hero Section */}
  {/* About Home Section */}
  <section id="about-home" className="about-home section light-background">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-4 align-items-center">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
          <div className="about-content">
            <h2>Welcome to Grandoria Resort</h2>
            <p className="lead">Where luxury meets tranquility in the heart of nature's paradise.</p>
            <p>Nestled among rolling hills and pristine landscapes, Grandview Resort has been offering exceptional hospitality for over three decades. Our commitment to excellence and attention to detail creates an unforgettable experience for discerning travelers seeking both comfort and adventure.</p>
            <p>From our elegantly appointed suites to our world-class amenities, every aspect of your stay is designed to exceed expectations. Discover breathtaking views, exquisite dining, and personalized service that makes every moment special.</p>
            <div className="stats-row">
              <div className="stat-item">
                <div className="stat-number">185</div>
                <div className="stat-label">Luxury Rooms</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">98%</div>
                <div className="stat-label">Guest Satisfaction</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">30</div>
                <div className="stat-label">Years of Excellence</div>
              </div>
            </div>{/* End Stats Row */}
            <div className="about-actions">
              <a href="about.html" className="btn-primary">Our Story</a>
              <a href="rooms.html" className="btn-secondary">View Rooms</a>
            </div>
          </div>
        </div>{/* End About Content */}
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
          <div className="about-images">
            <div className="main-image">
              <img src="assets/img/hotel/showcase-8.webp" alt="Grandview Resort Main View" className="img-fluid" />
            </div>
            <div className="secondary-image">
              <img src="assets/img/hotel/room-12.webp" alt="Luxury Suite Interior" className="img-fluid" />
            </div>
            <div className="experience-badge">
              <div className="badge-content">
                <span className="badge-number">30+</span>
                <span className="badge-text">Years<br />Experience</span>
              </div>
            </div>
          </div>
        </div>{/* End About Images */}
      </div>
    </div>
  </section>{/* /About Home Section */}
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
  {/* Amenities Cards Section */}
  <section id="amenities-cards" className="amenities-cards section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <span className="description-title">Amenities</span>
      <h2>Amenities</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row g-5">
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
          <div className="facility-card">
            <div className="facility-image">
              <img src="assets/img/hotel/amenities-1.webp" alt="Wireless Internet" className="img-fluid" />
              <div className="facility-overlay">
                <i className="bi bi-wifi" />
              </div>
            </div>
            <div className="facility-info">
              <h4>High-Speed Internet</h4>
              <p>Complimentary wireless internet access throughout the hotel premises with enterprise-grade security and unlimited bandwidth for all your connectivity needs.</p>
              <div className="facility-features">
                <span><i className="bi bi-check-circle" /> 24/7 Available</span>
                <span><i className="bi bi-check-circle" /> High Speed</span>
              </div>
            </div>
          </div>
        </div>{/* End Facility Card */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={150}>
          <div className="facility-card">
            <div className="facility-image">
              <img src="assets/img/hotel/amenities-3.webp" alt="Swimming Pool" className="img-fluid" />
              <div className="facility-overlay">
                <i className="bi bi-droplet" />
              </div>
            </div>
            <div className="facility-info">
              <h4>Rooftop Pool</h4>
              <p>Luxurious rooftop swimming pool with breathtaking city skyline views. Features heated water, poolside service, and premium lounging areas for ultimate relaxation.</p>
              <div className="facility-features">
                <span><i className="bi bi-check-circle" /> Heated Pool</span>
                <span><i className="bi bi-check-circle" /> City Views</span>
              </div>
            </div>
          </div>
        </div>{/* End Facility Card */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
          <div className="facility-card">
            <div className="facility-image">
              <img src="assets/img/hotel/amenities-5.webp" alt="Valet Parking" className="img-fluid" />
              <div className="facility-overlay">
                <i className="bi bi-car-front" />
              </div>
            </div>
            <div className="facility-info">
              <h4>Valet Parking</h4>
              <p>Premium valet parking service with secure underground facility. Professional attendants ensure your vehicle is safely parked and readily available upon request.</p>
              <div className="facility-features">
                <span><i className="bi bi-check-circle" /> Secure</span>
                <span><i className="bi bi-check-circle" /> Valet Service</span>
              </div>
            </div>
          </div>
        </div>{/* End Facility Card */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={250}>
          <div className="facility-card">
            <div className="facility-image">
              <img src="assets/img/hotel/amenities-2.webp" alt="Fitness Center" className="img-fluid" />
              <div className="facility-overlay">
                <i className="bi bi-heart-pulse" />
              </div>
            </div>
            <div className="facility-info">
              <h4>Modern Fitness Center</h4>
              <p>Cutting-edge fitness facility featuring premium equipment, personal training services, and wellness programs designed to maintain your health routine while traveling.</p>
              <div className="facility-features">
                <span><i className="bi bi-check-circle" /> 24/7 Access</span>
                <span><i className="bi bi-check-circle" /> Personal Training</span>
              </div>
            </div>
          </div>
        </div>{/* End Facility Card */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
          <div className="facility-card">
            <div className="facility-image">
              <img src="assets/img/hotel/dining-2.webp" alt="Fine Dining" className="img-fluid" />
              <div className="facility-overlay">
                <i className="bi bi-cup-hot" />
              </div>
            </div>
            <div className="facility-info">
              <h4>Signature Restaurant</h4>
              <p>Award-winning culinary experience featuring international cuisine crafted by renowned chefs. Elegant atmosphere with extensive wine selection and impeccable service.</p>
              <div className="facility-features">
                <span><i className="bi bi-check-circle" /> Fine Dining</span>
                <span><i className="bi bi-check-circle" /> Wine Selection</span>
              </div>
            </div>
          </div>
        </div>{/* End Facility Card */}
        <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={350}>
          <div className="facility-card">
            <div className="facility-image">
              <img src="assets/img/hotel/amenities-4.webp" alt="Spa Services" className="img-fluid" />
              <div className="facility-overlay">
                <i className="bi bi-flower1" />
              </div>
            </div>
            <div className="facility-info">
              <h4>Luxury Spa</h4>
              <p>Tranquil sanctuary offering therapeutic treatments, rejuvenating massages, and holistic wellness experiences. Escape the everyday stress in our serene environment.</p>
              <div className="facility-features">
                <span><i className="bi bi-check-circle" /> Full Service</span>
                <span><i className="bi bi-check-circle" /> Wellness Programs</span>
              </div>
            </div>
          </div>
        </div>{/* End Facility Card */}
      </div>
    </div>
  </section>{/* /Amenities Cards Section */}
  {/* Testimonials Section */}
  <section id="testimonials" className="testimonials section light-background">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <span className="description-title">Testimonials</span>
      <h2>Testimonials</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="testimonials-wrapper">
        <div className="row g-4">
          {/* Testimonial Item 1 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="testimonial-card">
              <div className="quote-mark">
                <i className="bi bi-quote" />
              </div>
              <div className="testimonial-content">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Sed non mauris vitae erat consequat auctor eu in elit.</p>
              </div>
              <div className="testimonial-author">
                <img src="assets/img/person/person-m-5.webp" alt="Client" className="img-fluid rounded-circle" loading="lazy" />
                <div className="author-info">
                  <h4>Robert Johnson</h4>
                  <span>Chief Executive Officer</span>
                </div>
              </div>
            </div>
          </div>{/* End Testimonial Item */}
          {/* Testimonial Item 2 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="testimonial-card">
              <div className="quote-mark">
                <i className="bi bi-quote" />
              </div>
              <div className="testimonial-content">
                <p>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</p>
              </div>
              <div className="testimonial-author">
                <img src="assets/img/person/person-f-7.webp" alt="Client" className="img-fluid rounded-circle" loading="lazy" />
                <div className="author-info">
                  <h4>Sarah Williams</h4>
                  <span>Marketing Director</span>
                </div>
              </div>
            </div>
          </div>{/* End Testimonial Item */}
          {/* Testimonial Item 3 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="testimonial-card">
              <div className="quote-mark">
                <i className="bi bi-quote" />
              </div>
              <div className="testimonial-content">
                <p>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</p>
              </div>
              <div className="testimonial-author">
                <img src="assets/img/person/person-m-9.webp" alt="Client" className="img-fluid rounded-circle" loading="lazy" />
                <div className="author-info">
                  <h4>Michael Davis</h4>
                  <span>Product Manager</span>
                </div>
              </div>
            </div>
          </div>{/* End Testimonial Item */}
          {/* Testimonial Item 4 */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay={500}>
            <div className="testimonial-card">
              <div className="quote-mark">
                <i className="bi bi-quote" />
              </div>
              <div className="testimonial-content">
                <p>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore.</p>
              </div>
              <div className="testimonial-author">
                <img src="assets/img/person/person-f-3.webp" alt="Client" className="img-fluid rounded-circle" loading="lazy" />
                <div className="author-info">
                  <h4>Emily Thompson</h4>
                  <span>Design Lead</span>
                </div>
              </div>
            </div>
          </div>{/* End Testimonial Item */}
        </div>
      </div>
    </div>
  </section>{/* /Testimonials Section */}
  {/* Offer Cards Section */}
  <section id="offer-cards" className="offer-cards section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <span className="description-title">Offers</span>
      <h2>Offers</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="offer-card" data-aos="zoom-in" data-aos-delay={200}>
            <div className="offer-badge">
              <span className="discount">25% OFF</span>
            </div>
            <div className="offer-image">
              <img src="assets/img/hotel/showcase-3.webp" alt="Weekend Getaway" className="img-fluid" />
            </div>
            <div className="offer-content">
              <h3>Weekend Getaway</h3>
              <p>Escape the ordinary with our exclusive weekend package. Includes complimentary breakfast and late checkout until 2 PM.</p>
              <div className="offer-details">
                <div className="price-info">
                  <span className="original-price">$299</span>
                  <span className="offer-price">$224</span>
                  <span className="per-night">per night</span>
                </div>
                <div className="validity">
                  <i className="bi bi-calendar-check" />
                  <span>Valid until Dec 31, 2024</span>
                </div>
              </div>
              <a href="#" className="btn-book">Book Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="offer-card featured" data-aos="zoom-in" data-aos-delay={300}>
            <div className="offer-badge">
              <span className="discount">BEST VALUE</span>
            </div>
            <div className="offer-image">
              <img src="assets/img/hotel/showcase-7.webp" alt="Extended Stay Deal" className="img-fluid" />
            </div>
            <div className="offer-content">
              <h3>Extended Stay Deal</h3>
              <p>Stay 5 nights or more and enjoy significant savings. Perfect for business travelers and extended vacations with premium amenities.</p>
              <div className="offer-details">
                <div className="price-info">
                  <span className="original-price">$189</span>
                  <span className="offer-price">$149</span>
                  <span className="per-night">per night</span>
                </div>
                <div className="validity">
                  <i className="bi bi-calendar-check" />
                  <span>Book by Jan 15, 2025</span>
                </div>
              </div>
              <a href="#" className="btn-book">Reserve Today</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="offer-card" data-aos="zoom-in" data-aos-delay={400}>
            <div className="offer-badge">
              <span className="discount">EARLY BIRD</span>
            </div>
            <div className="offer-image">
              <img src="assets/img/hotel/showcase-11.webp" alt="Advance Booking" className="img-fluid" />
            </div>
            <div className="offer-content">
              <h3>Advance Booking</h3>
              <p>Plan ahead and save more! Book your stay 30 days in advance and enjoy exclusive rates with free cancellation up to 7 days.</p>
              <div className="offer-details">
                <div className="price-info">
                  <span className="original-price">$249</span>
                  <span className="offer-price">$199</span>
                  <span className="per-night">per night</span>
                </div>
                <div className="validity">
                  <i className="bi bi-calendar-check" />
                  <span>Available year-round</span>
                </div>
              </div>
              <a href="#" className="btn-book">Book Early</a>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-12">
          <div className="offer-banner" data-aos="fade-up" data-aos-delay={500}>
            <div className="row align-items-center">
              <div className="col-lg-8">
                <div className="banner-content">
                  <h2>Limited Time Offer</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.</p>
                </div>
              </div>
              <div className="col-lg-4 text-lg-end">
                <div className="banner-action">
                  <div className="countdown" data-count="2025/12/15">
                    <div>
                      <span className="count-days" />
                      <label>Days</label>
                    </div>
                    <div>
                      <span className="count-hours" />
                      <label>Hours</label>
                    </div>
                    <div>
                      <span className="count-minutes" />
                      <label>Minutes</label>
                    </div>
                  </div>
                  <a href="#" className="btn-cta">Claim Offer</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Offer Cards Section */}
  {/* Call To Action Section */}
  <section id="call-to-action" className="call-to-action section light-background">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row align-items-center">
        <div className="col-lg-6" data-aos="fade-right" data-aos-delay={200}>
          <div className="content">
            <h2>Experience Luxury Like Never Before</h2>
            <p>Immerse yourself in unparalleled comfort and sophistication at our premium hotel. From elegantly appointed rooms to world-class amenities, every detail is crafted to exceed your expectations. Book your extraordinary stay today and create unforgettable memories.</p>
            <ul className="features-list">
              <li><i className="bi bi-check-circle" /> Complimentary breakfast and Wi-Fi</li>
              <li><i className="bi bi-check-circle" /> 24/7 concierge and room service</li>
              <li><i className="bi bi-check-circle" /> State-of-the-art spa and fitness center</li>
              <li><i className="bi bi-check-circle" /> Prime location with stunning city views</li>
            </ul>
            <div className="cta-buttons">
              <a href="#" className="btn-primary">Book Your Stay</a>
              <a href="#" className="btn-secondary">View Rooms</a>
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
          <div className="image-wrapper">
            <img src="assets/img/hotel/showcase-9.webp" alt="Luxury Hotel Experience" className="img-fluid" />
            <div className="overlay-content">
              <div className="special-offer">
                <span className="label">Special Offer</span>
                <span className="discount">Save 30%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Call To Action Section */}
  {/* Events Cards Section */}
  <section id="events-cards" className="events-cards section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <span className="description-title">Events</span>
      <h2>Events</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row g-4">
        <div className="col-lg-4 col-md-6">
          <div className="event-item" data-aos="fade-up" data-aos-delay={100}>
            <div className="event-header">
              <div className="event-icon">
                <i className="bi bi-heart-fill" />
              </div>
              <img src="assets/img/hotel/event-1.webp" alt="Wedding Celebrations" className="img-fluid" />
            </div>
            <div className="event-content">
              <h4>Wedding Celebrations</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor</p>
              <div className="event-features">
                <span className="feature-item"><i className="bi bi-check-circle" /> Premium Venues</span>
                <span className="feature-item"><i className="bi bi-check-circle" /> Full Catering</span>
              </div>
              <a href="hotel-events.html" className="event-link">
                Explore Details <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>{/* End Event Item */}
        <div className="col-lg-4 col-md-6">
          <div className="event-item" data-aos="fade-up" data-aos-delay={200}>
            <div className="event-header">
              <div className="event-icon">
                <i className="bi bi-building" />
              </div>
              <img src="assets/img/hotel/event-4.webp" alt="Business Conferences" className="img-fluid" />
            </div>
            <div className="event-content">
              <h4>Business Conferences</h4>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p>
              <div className="event-features">
                <span className="feature-item"><i className="bi bi-check-circle" /> Modern Tech</span>
                <span className="feature-item"><i className="bi bi-check-circle" /> WiFi Access</span>
              </div>
              <a href="hotel-events.html" className="event-link">
                Explore Details <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>{/* End Event Item */}
        <div className="col-lg-4 col-md-6">
          <div className="event-item" data-aos="fade-up" data-aos-delay={300}>
            <div className="event-header">
              <div className="event-icon">
                <i className="bi bi-calendar-event" />
              </div>
              <img src="assets/img/hotel/event-8.webp" alt="Special Occasions" className="img-fluid" />
            </div>
            <div className="event-content">
              <h4>Special Occasions</h4>
              <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi</p>
              <div className="event-features">
                <span className="feature-item"><i className="bi bi-check-circle" /> Custom Setup</span>
                <span className="feature-item"><i className="bi bi-check-circle" /> Event Coordination</span>
              </div>
              <a href="hotel-events.html" className="event-link">
                Explore Details <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>{/* End Event Item */}
        <div className="col-lg-4 col-md-6">
          <div className="event-item" data-aos="fade-up" data-aos-delay={100}>
            <div className="event-header">
              <div className="event-icon">
                <i className="bi bi-people" />
              </div>
              <img src="assets/img/hotel/event-5.webp" alt="Corporate Retreats" className="img-fluid" />
            </div>
            <div className="event-content">
              <h4>Corporate Retreats</h4>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              <div className="event-features">
                <span className="feature-item"><i className="bi bi-check-circle" /> Team Building</span>
                <span className="feature-item"><i className="bi bi-check-circle" /> Outdoor Activities</span>
              </div>
              <a href="hotel-events.html" className="event-link">
                Explore Details <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>{/* End Event Item */}
        <div className="col-lg-4 col-md-6">
          <div className="event-item" data-aos="fade-up" data-aos-delay={200}>
            <div className="event-header">
              <div className="event-icon">
                <i className="bi bi-music-note-beamed" />
              </div>
              <img src="assets/img/hotel/event-6.webp" alt="Entertainment Events" className="img-fluid" />
            </div>
            <div className="event-content">
              <h4>Entertainment Events</h4>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia</p>
              <div className="event-features">
                <span className="feature-item"><i className="bi bi-check-circle" /> Live Music</span>
                <span className="feature-item"><i className="bi bi-check-circle" /> Dance Floor</span>
              </div>
              <a href="hotel-events.html" className="event-link">
                Explore Details <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>{/* End Event Item */}
        <div className="col-lg-4 col-md-6">
          <div className="event-item" data-aos="fade-up" data-aos-delay={300}>
            <div className="event-header">
              <div className="event-icon">
                <i className="bi bi-star" />
              </div>
              <img src="assets/img/hotel/event-9.webp" alt="VIP Gatherings" className="img-fluid" />
            </div>
            <div className="event-content">
              <h4>VIP Gatherings</h4>
              <p>Mollit anim id est laborum at vero eos et accusamus et iusto odio dignissimos</p>
              <div className="event-features">
                <span className="feature-item"><i className="bi bi-check-circle" /> Exclusive Access</span>
                <span className="feature-item"><i className="bi bi-check-circle" /> Premium Service</span>
              </div>
              <a href="hotel-events.html" className="event-link">
                Explore Details <i className="bi bi-arrow-right" />
              </a>
            </div>
          </div>
        </div>{/* End Event Item */}
      </div>
    </div>
  </section>{/* /Events Cards Section */}
  {/* Location Cards Section */}
  <section id="location-cards" className="location-cards section">
    {/* Section Title */}
    <div className="container section-title" data-aos="fade-up">
      <span className="description-title">Location &amp; Activities</span>
      <h2>Location &amp; Activities</h2>
      <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
    </div>{/* End Section Title */}
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-5 align-items-center">
        <div className="col-lg-8">
          <div className="row gy-4">
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay={200}>
              <div className="area-highlight">
                <div className="area-image-wrapper">
                  <img src="assets/img/hotel/location-3.webp" alt="Entertainment District" className="img-fluid" />
                  <div className="area-badge">
                    <i className="bi bi-music-note-beamed" />
                    <span>2 min walk</span>
                  </div>
                </div>
                <div className="area-info">
                  <h5>Entertainment Quarter</h5>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
                  <div className="quick-stats">
                    <span><i className="bi bi-clock" /> Open 24/7</span>
                    <span><i className="bi bi-star-fill" /> 4.8 Rating</span>
                  </div>
                </div>
              </div>
            </div>{/* End Area Highlight */}
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay={300}>
              <div className="area-highlight">
                <div className="area-image-wrapper">
                  <img src="assets/img/hotel/location-6.webp" alt="Waterfront Marina" className="img-fluid" />
                  <div className="area-badge">
                    <i className="bi bi-water" />
                    <span>5 min drive</span>
                  </div>
                </div>
                <div className="area-info">
                  <h5>Waterfront Marina</h5>
                  <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                  <div className="quick-stats">
                    <span><i className="bi bi-brightness-high" /> Scenic Views</span>
                    <span><i className="bi bi-camera" /> Photo Spot</span>
                  </div>
                </div>
              </div>
            </div>{/* End Area Highlight */}
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay={400}>
              <div className="area-highlight">
                <div className="area-image-wrapper">
                  <img src="assets/img/hotel/location-8.webp" alt="Historic Quarter" className="img-fluid" />
                  <div className="area-badge">
                    <i className="bi bi-bank" />
                    <span>10 min walk</span>
                  </div>
                </div>
                <div className="area-info">
                  <h5>Historic Quarter</h5>
                  <p>Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute.</p>
                  <div className="quick-stats">
                    <span><i className="bi bi-book" /> Guided Tours</span>
                    <span><i className="bi bi-bicycle" /> Bike Friendly</span>
                  </div>
                </div>
              </div>
            </div>{/* End Area Highlight */}
            <div className="col-md-6" data-aos="zoom-in" data-aos-delay={500}>
              <div className="area-highlight">
                <div className="area-image-wrapper">
                  <img src="assets/img/hotel/location-4.webp" alt="Shopping Plaza" className="img-fluid" />
                  <div className="area-badge">
                    <i className="bi bi-shop" />
                    <span>3 min walk</span>
                  </div>
                </div>
                <div className="area-info">
                  <h5>Premium Shopping Plaza</h5>
                  <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</p>
                  <div className="quick-stats">
                    <span><i className="bi bi-credit-card" /> Tax Free</span>
                    <span><i className="bi bi-cup-hot" /> Cafés Inside</span>
                  </div>
                </div>
              </div>
            </div>{/* End Area Highlight */}
          </div>
        </div>
        <div className="col-lg-4" data-aos="fade-left" data-aos-delay={200}>
          <div className="location-overview">
            <div className="overview-header">
              <div className="location-marker">
                <i className="bi bi-geo-alt-fill" />
              </div>
              <h3>Prime Location Benefits</h3>
              <p className="overview-subtitle">Maecenas faucibus mollis interdum. Nulla vitae elit libero, a pharetra augue.</p>
            </div>
            <div className="benefits-list">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-train-front" />
                </div>
                <div className="benefit-content">
                  <h6>Public Transport Hub</h6>
                  <span>Metro station 200m away</span>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-airplane" />
                </div>
                <div className="benefit-content">
                  <h6>Airport Connection</h6>
                  <span>Direct shuttle every 30 min</span>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-car-front" />
                </div>
                <div className="benefit-content">
                  <h6>Valet Parking</h6>
                  <span>Complimentary for guests</span>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <i className="bi bi-compass" />
                </div>
                <div className="benefit-content">
                  <h6>City Center Access</h6>
                  <span>Walking distance to main attractions</span>
                </div>
              </div>
            </div>
            <a href="location.html" className="location-guide-btn">
              <span>View Full Location Guide</span>
              <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>{/* /Location Cards Section */}
  {/* Gallery Showcase Section */}
  <section id="gallery-showcase" className="gallery-showcase section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="gallery-carousel swiper init-swiper" data-aos="fade-up" data-aos-delay={200}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-1.webp" alt="Luxurious Suite" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-1.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-5.webp" alt="Modern Lobby" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-5.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-12.webp" alt="Elegant Dining Area" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-12.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-8.webp" alt="Grand Ballroom Setup" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-8.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-15.webp" alt="Relaxing Poolside" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-15.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-3.webp" alt="Cozy Guest Room" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-3.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-18.webp" alt="Spa and Wellness Center" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-18.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="gallery-item">
              <img src="assets/img/hotel/gallery-7.webp" alt="Conference Facilities" className="img-fluid" loading="lazy" />
              <a href="assets/img/hotel/gallery-7.webp" className="gallery-overlay glightbox">
                <i className="bi bi-eye" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-5" data-aos="fade-up" data-aos-delay={300}>
        <a href="gallery.html" className="btn btn-gallery">
          <i className="bi bi-collection me-2" />Discover Our Full Gallery
        </a>
      </div>
    </div>
  </section>{/* /Gallery Showcase Section */}
</main>
<Footer/>
    </div>
  )
}

export default Home