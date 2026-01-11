import React from 'react'
import Header from '../coman/Header'
import Footer from '../Coman/Footer'

function Contact() {
  return (
    <div>
        <Header/>
         <main className="main">
                {/* Page Title */}
                <div className="page-title light-background">
                    <div className="container d-lg-flex justify-content-between align-items-center">
                        <h1 className="mb-2 mb-lg-0">Contact</h1>
                        <nav className="breadcrumbs">
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li className="current">Contact</li>
                            </ol>
                        </nav>
                    </div>
                </div>{/* End Page Title */}
                {/* Contact Section */}
                <section id="contact" className="contact section">
                    {/* Map Section */}
                    <div className="map-container mb-5">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height={500} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Contact Info */}
                        <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay={300}>
                            <div className="col-md-6">
                                <div className="contact-info-card">
                                    <div className="icon-box">
                                        <i className="bi bi-geo-alt" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Location</h4>
                                        <p>482 Pine Street, Seattle, Washington 98101</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-info-card">
                                    <div className="icon-box">
                                        <i className="bi bi-telephone" />
                                    </div>
                                    <div className="info-content">
                                        <h4>Phone &amp; Email</h4>
                                        <p>+1 (206) 555-0192</p>
                                        <p>connect@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact Form */}
                        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                            <div className="col-lg-10">
                                <div className="contact-form-wrapper">
                                    <h2 className="text-center mb-4">Send a Message</h2>
                                    <form action="forms/contact.php" method="post" className="php-email-form">
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea className="form-control" name="message" placeholder="Your Message" rows={6} required defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="loading">Loading</div>
                                                <div className="error-message" />
                                                <div className="sent-message">Your message has been sent. Thank you!</div>
                                            </div>
                                            <div className="col-12 text-center">
                                                <button type="submit" className="btn-submit">SEND MESSAGE</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>{/* /Contact Section */}
            </main>
        <Footer/>
    </div>
  )
}

export default Contact