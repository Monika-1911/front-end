
import React from 'react'
import Header2 from '../coman/Header2'
import Footer from '../coman/Footer'

function Teasti() {
    return (
        <div>
            <Header2 title="Testimonial" data="Testimonial" />
            <div>
                {/* Testimonial Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-4 mx-auto" style={{ maxWidth: 600 }}>
                            <h5 className="fw-bold text-primary text-uppercase">Testimonial</h5>
                            <h1 className="mb-0">What Our Clients Say About Our Digital Services</h1>
                        </div>
                        <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.6s">
                            <div className="testimonial-item bg-light my-4">
                                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                    <img className="img-fluid rounded" src="img/testimonial-1.jpg" style={{ width: 60, height: 60 }} />
                                    <div className="ps-4">
                                        <h4 className="text-primary mb-1">Client Name</h4>
                                        <small className="text-uppercase">Profession</small>
                                    </div>
                                </div>
                                <div className="pt-4 pb-5 px-5">
                                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </div>
                            </div>
                            <div className="testimonial-item bg-light my-4">
                                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                    <img className="img-fluid rounded" src="img/testimonial-2.jpg" style={{ width: 60, height: 60 }} />
                                    <div className="ps-4">
                                        <h4 className="text-primary mb-1">Client Name</h4>
                                        <small className="text-uppercase">Profession</small>
                                    </div>
                                </div>
                                <div className="pt-4 pb-5 px-5">
                                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </div>
                            </div>
                            <div className="testimonial-item bg-light my-4">
                                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                    <img className="img-fluid rounded" src="img/testimonial-3.jpg" style={{ width: 60, height: 60 }} />
                                    <div className="ps-4">
                                        <h4 className="text-primary mb-1">Client Name</h4>
                                        <small className="text-uppercase">Profession</small>
                                    </div>
                                </div>
                                <div className="pt-4 pb-5 px-5">
                                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </div>
                            </div>
                            <div className="testimonial-item bg-light my-4">
                                <div className="d-flex align-items-center border-bottom pt-5 pb-4 px-5">
                                    <img className="img-fluid rounded" src="img/testimonial-4.jpg" style={{ width: 60, height: 60 }} />
                                    <div className="ps-4">
                                        <h4 className="text-primary mb-1">Client Name</h4>
                                        <small className="text-uppercase">Profession</small>
                                    </div>
                                </div>
                                <div className="pt-4 pb-5 px-5">
                                    Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Testimonial End */}
                {/* Vendor Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5 mb-5">
                        <div className="bg-white">
                            <div className="owl-carousel vendor-carousel">
                                <img src="img/vendor-1.jpg" alt />
                                <img src="img/vendor-2.jpg" alt />
                                <img src="img/vendor-3.jpg" alt />
                                <img src="img/vendor-4.jpg" alt />
                                <img src="img/vendor-5.jpg" alt />
                                <img src="img/vendor-6.jpg" alt />
                                <img src="img/vendor-7.jpg" alt />
                                <img src="img/vendor-8.jpg" alt />
                                <img src="img/vendor-9.jpg" alt />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Vendor End */}
            </div>

            <Footer />

        </div>
    )
}

export default Teasti
