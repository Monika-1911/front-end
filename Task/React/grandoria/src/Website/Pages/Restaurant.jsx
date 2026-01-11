import React from 'react'
import Header from '../coman/Header';
import Footer from '../coman/Footer';

function Restaurant() {
  return (
    <div>
        <Header/>
        <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Restaurant</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Restaurant</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Restaurant Section */}
                <section id="restaurant" className="restaurant section">
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        <div className="row g-5 align-items-center">
                            <div className="col-lg-6" data-aos="fade-up">
                                <div className="about-content">
                                    <h2>Experience Our Unique Approach</h2>
                                    <p className="fst-italic">Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Vestibulum id ligula porta felis euismod semper.</p>
                                    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Curabitur blandit tempus porttitor.</p>
                                    <div className="row mt-4">
                                        <div className="col-md-6">
                                            <div className="feature-item" data-aos="fade-up" data-aos-delay={150}>
                                                <i className="bi bi-award" />
                                                <h4>Exceptional Service</h4>
                                                <p>Donec sed odio dui. Nulla vitae elit libero, a pharetra augue.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="feature-item" data-aos="fade-up" data-aos-delay={200}>
                                                <i className="bi bi-trophy" />
                                                <h4>Industry Recognition</h4>
                                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="signature mt-4" data-aos="fade-up" data-aos-delay={250}>
                                        <p className="chef-name">Jane Smith, Head of Operations</p>
                                        <img src="assets/img/misc/signature-1.webp" alt="Chef Signature" className="img-fluid" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
                                <div className="about-gallery">
                                    <div className="row g-3">
                                        <div className="col-6">
                                            <img src="assets/img/restaurant/showcase-3.webp" className="img-fluid rounded" alt="Restaurant Image" />
                                        </div>
                                        <div className="col-6">
                                            <img src="assets/img/restaurant/showcase-8.webp" className="img-fluid rounded" alt="Restaurant Image" />
                                        </div>
                                        <div className="col-12 mt-3">
                                            <div className="years-badge">
                                                <span className="number">18</span>
                                                <span className="text">Years of Dedication</span>
                                            </div>
                                            <img src="assets/img/restaurant/showcase-6.webp" className="img-fluid rounded" alt="Restaurant Image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Restaurant Section */}
                {/* Menu Section */}
                <section id="menu" className="menu section">
                    {/* Section Title */}
                    <div className="container section-title" data-aos="fade-up">
                        <span className="description-title">Menu</span>
                        <h2>Menu</h2>
                        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                    </div>{/* End Section Title */}
                    <div className="container" data-aos="fade-up">
                        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                            <div className="menu-filters isotope-filters mb-5">
                                <ul>
                                    <li data-filter="*" className="filter-active">All</li>
                                    <li data-filter=".filter-starters">Starters</li>
                                    <li data-filter=".filter-main">Main Courses</li>
                                    <li data-filter=".filter-dessert">Desserts</li>
                                    <li data-filter=".filter-drinks">Drinks</li>
                                </ul>
                            </div>
                            <div className="menu-container isotope-container row gy-4">
                                {/* Regular Menu Items */}
                                <div className="col-lg-6 isotope-item filter-starters">
                                    <div className="menu-item d-flex align-items-center gap-4">
                                        <img src="assets/img/restaurant/starter-2.webp" alt="Starter" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Bruschetta Trio <span className="menu-tag">Vegetarian</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$8.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-starters">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/starter-5.webp" alt="Starter" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Calamari Fritti <span className="menu-tag">Seafood</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$10.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-main">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/main-1.webp" alt="Main Course" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Wild Mushroom Risotto <span className="menu-tag">Vegetarian</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$18.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-main">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/main-4.webp" alt="Main Course" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Braised Lamb Shank <span className="menu-tag">Chef's Choice</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$26.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-dessert">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/dessert-2.webp" alt="Dessert" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Chocolate Lava Cake <span className="menu-tag">Gluten Free</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$9.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-dessert">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/dessert-7.webp" alt="Dessert" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Tiramisu <span className="menu-tag">Classic</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$8.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-drinks">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/drink-3.webp" alt="Drink" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Signature Cocktail <span className="menu-tag">Alcoholic</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$12.95</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 isotope-item filter-drinks">
                                    <div className="d-flex menu-item align-items-center gap-4">
                                        <img src="assets/img/restaurant/drink-8.webp" alt="Drink" className="menu-img img-fluid rounded-3" />
                                        <div className="menu-content">
                                            <h5>Berry Smoothie <span className="menu-tag">Non-Alcoholic</span></h5>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit curabitur sed.</p>
                                            <div className="price">$7.95</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-5" data-aos="fade-up">
                            <a href="#" className="download-menu">
                                <i className="bi bi-file-earmark-pdf" /> Download Full Menu
                            </a>
                        </div>
                        {/* Chef's Specials */}
                        <div className="col-12 mt-5" data-aos="fade-up">
                            <div className="specials-badge">
                                <span><i className="bi bi-award" /> Chef's Specials</span>
                            </div>
                            <div className="specials-container">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <div className="menu-item special-item">
                                            <div className="menu-item-img">
                                                <img src="assets/img/restaurant/main-3.webp" alt="Special Dish" className="img-fluid" />
                                                <div className="menu-item-badges">
                                                    <span className="badge-special">Special</span>
                                                    <span className="badge-vegan">Vegan</span>
                                                </div>
                                            </div>
                                            <div className="menu-item-content">
                                                <h4>Mediterranean Grilled Salmon</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut aliquam metus. Vivamus fermentum magna quis.</p>
                                                <div className="menu-item-price">$24.99</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="menu-item special-item">
                                            <div className="menu-item-img">
                                                <img src="assets/img/restaurant/main-7.webp" alt="Special Dish" className="img-fluid" />
                                                <div className="menu-item-badges">
                                                    <span className="badge-special">Special</span>
                                                    <span className="badge-spicy">Spicy</span>
                                                </div>
                                            </div>
                                            <div className="menu-item-content">
                                                <h4>Signature Ribeye Steak</h4>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam accumsan risus ut dui pretium, eget elementum nisi.</p>
                                                <div className="menu-item-price">$32.99</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Menu Section */}
            </main>
            <Footer/>
    </div>
  )
}

export default Restaurant;