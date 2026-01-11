import React from 'react'
import Footer from '../coman/Footer';
import Header from '../coman/Header';
import { NavLink } from 'react-router-dom'
function Gallery() {
  return (
    <div>
      <Header/>
      <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Gallery</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><NavLink to="/">Home</NavLink></li>
                                <li className="current">Gallery</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Gallery Section */}
                <section id="gallery" className="gallery section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                            <ul className="hotel-filters isotope-filters" data-aos="fade-up" data-aos-delay={100}>
                                <li data-filter="*" className="filter-active">All Photos</li>
                                <li data-filter=".filter-rooms">Rooms</li>
                                <li data-filter=".filter-amenities">Amenities</li>
                                <li data-filter=".filter-dining">Dining</li>
                                <li data-filter=".filter-exterior">Exterior</li>
                            </ul>{/* End Hotel Gallery Filters */}
                            <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay={200}>
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-rooms">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/room-1.webp" className="img-fluid" alt="Deluxe Room" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/room-1.webp" className="glightbox" title="Deluxe Room with City View">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-8 col-md-6 gallery-item isotope-item filter-amenities">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/amenities-1.webp" className="img-fluid" alt="Swimming Pool" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/amenities-1.webp" className="glightbox" title="Outdoor Swimming Pool with Deck">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-dining">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/dining-2.webp" className="img-fluid" alt="Restaurant" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/dining-2.webp" className="glightbox" title="Fine Dining Restaurant">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-rooms">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/room-5.webp" className="img-fluid" alt="Executive Suite" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/room-5.webp" className="glightbox" title="Executive Suite with Ocean View">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-8 col-md-6 gallery-item isotope-item filter-exterior">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/showcase-3.webp" className="img-fluid" alt="Hotel Exterior" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/showcase-3.webp" className="glightbox" title="Hotel Exterior at Sunset">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-amenities">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/amenities-3.webp" className="img-fluid" alt="Spa" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/amenities-3.webp" className="glightbox" title="Luxury Spa Treatment Room">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-dining">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/dining-4.webp" className="img-fluid" alt="Bar Lounge" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/dining-4.webp" className="glightbox" title="Rooftop Bar & Lounge">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-rooms">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/room-8.webp" className="img-fluid" alt="Presidential Suite" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/room-8.webp" className="glightbox" title="Presidential Suite Living Area">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-amenities">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/amenities-7.webp" className="img-fluid" alt="Fitness Center" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/amenities-7.webp" className="glightbox" title="State-of-the-Art Fitness Center">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-exterior">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/location-2.webp" className="img-fluid" alt="Garden View" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/location-2.webp" className="glightbox" title="Hotel Gardens & Landscaping">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-dining">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/dining-7.webp" className="img-fluid" alt="Breakfast Area" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/dining-7.webp" className="glightbox" title="Continental Breakfast Dining Area">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                                <div className="col-lg-4 col-md-6 gallery-item isotope-item filter-rooms">
                                    <div className="gallery-wrapper">
                                        <img src="assets/img/hotel/room-12.webp" className="img-fluid" alt="Junior Suite" />
                                        <div className="gallery-overlay">
                                            <a href="assets/img/hotel/room-12.webp" className="glightbox" title="Junior Suite with Modern Amenities">
                                                <i className="bi bi-eye" />
                                            </a>
                                        </div>
                                    </div>
                                </div>{/* End Gallery Item */}
                            </div>{/* End Hotel Gallery Items Container */}
                        </div>
                    </div>
                </section>{/* /Gallery Section */}
            </main>

<Footer/>

    </div>
  )
}

export default Gallery;