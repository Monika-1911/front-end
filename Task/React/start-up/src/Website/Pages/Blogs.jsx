
import React, { useEffect, useState } from 'react'
import Header2 from '../coman/Header2'
import Footer from '../coman/Footer'
import axios from 'axios'

function Blogs() {

    const [course,setcourse] = useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/courses")
        console.log(res.data)
        setcourse(res.data)
    }

    return (
        <div>
            <Header2 title="Blog Grid" data="Blog Grid" />
            <div> 
                {/* Blog Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="row g-5">
                            {/* Blog list Start */}
                            <div className="col-lg-8">
                                <div className="row g-5">
                                 {
                                    course && course.map((data,index)=>{
                                        console.log(data)
                                        return(
                                               <div className="col-md-6 wow slideInUp" data-wow-delay="0.1s">
                                        <div className="blog-item bg-light rounded overflow-hidden">
                                            <div className="blog-img position-relative overflow-hidden">
                                                <img className="img-fluid" src={data.img} alt />
                                                <a className="position-absolute top-0 start-0 bg-primary text-white rounded-end mt-5 py-2 px-4" href>{data.cname}</a>
                                            </div>
                                            <div className="p-4">
                                                <div className="d-flex mb-3">
                                                    <small className="me-3"><i className="far fa-user text-primary me-2" />{data.author}</small>
                                                    <small><i className="far fa-calendar-alt text-primary me-2" />{data.date}</small>
                                                </div>
                                                <h4 className="mb-3">{data.title}</h4>
                                                <p>{data.desc}</p>
                                                <a className="text-uppercase" href>Read More <i className="bi bi-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                        )
                                    })
                                 }
                                
                                  
                                </div>
                            </div>
                            {/* Blog list End */}
                            {/* Sidebar Start */}
                            <div className="col-lg-4">
                                {/* Search Form Start */}
                                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                    <div className="input-group">
                                        <input type="text" className="form-control p-3" placeholder="Keyword" />
                                        <button className="btn btn-primary px-4"><i className="bi bi-search" /></button>
                                    </div>
                                </div>
                                {/* Search Form End */}
                                {/* Category Start */}
                                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="mb-0">Categories</h3>
                                    </div>
                                    <div className="link-animated d-flex flex-column justify-content-start">
                                        <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Design</a>
                                        <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Development</a>
                                        <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Web Development</a>
                                        <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Keyword Research</a>
                                        <a className="h5 fw-semi-bold bg-light rounded py-2 px-3 mb-2" href="#"><i className="bi bi-arrow-right me-2" />Email Marketing</a>
                                    </div>
                                </div>
                                {/* Category End */}
                                {/* Recent Post Start */}
                                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="mb-0">Recent Post</h3>
                                    </div>
                                    <div className="d-flex rounded overflow-hidden mb-3">
                                        <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 100, height: 100, objectFit: 'cover' }} alt />
                                        <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                        </a>
                                    </div>
                                    <div className="d-flex rounded overflow-hidden mb-3">
                                        <img className="img-fluid" src="img/blog-2.jpg" style={{ width: 100, height: 100, objectFit: 'cover' }} alt />
                                        <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                        </a>
                                    </div>
                                    <div className="d-flex rounded overflow-hidden mb-3">
                                        <img className="img-fluid" src="img/blog-3.jpg" style={{ width: 100, height: 100, objectFit: 'cover' }} alt />
                                        <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                        </a>
                                    </div>
                                    <div className="d-flex rounded overflow-hidden mb-3">
                                        <img className="img-fluid" src="img/blog-1.jpg" style={{ width: 100, height: 100, objectFit: 'cover' }} alt />
                                        <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                        </a>
                                    </div>
                                    <div className="d-flex rounded overflow-hidden mb-3">
                                        <img className="img-fluid" src="img/blog-2.jpg" style={{ width: 100, height: 100, objectFit: 'cover' }} alt />
                                        <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                        </a>
                                    </div>
                                    <div className="d-flex rounded overflow-hidden mb-3">
                                        <img className="img-fluid" src="img/blog-3.jpg" style={{ width: 100, height: 100, objectFit: 'cover' }} alt />
                                        <a href className="h5 fw-semi-bold d-flex align-items-center bg-light px-3 mb-0">Lorem ipsum dolor sit amet adipis elit
                                        </a>
                                    </div>
                                </div>
                                {/* Recent Post End */}
                                {/* Image Start */}
                                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                    <img src="img/blog-1.jpg" alt className="img-fluid rounded" />
                                </div>
                                {/* Image End */}
                                {/* Tags Start */}
                                <div className="mb-5 wow slideInUp" data-wow-delay="0.1s">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="mb-0">Tag Cloud</h3>
                                    </div>
                                    <div className="d-flex flex-wrap m-n1">
                                        <a href className="btn btn-light m-1">Design</a>
                                        <a href className="btn btn-light m-1">Development</a>
                                        <a href className="btn btn-light m-1">Marketing</a>
                                        <a href className="btn btn-light m-1">SEO</a>
                                        <a href className="btn btn-light m-1">Writing</a>
                                        <a href className="btn btn-light m-1">Consulting</a>
                                        <a href className="btn btn-light m-1">Design</a>
                                        <a href className="btn btn-light m-1">Development</a>
                                        <a href className="btn btn-light m-1">Marketing</a>
                                        <a href className="btn btn-light m-1">SEO</a>
                                        <a href className="btn btn-light m-1">Writing</a>
                                        <a href className="btn btn-light m-1">Consulting</a>
                                    </div>
                                </div>
                                {/* Tags End */}
                                {/* Plain Text Start */}
                                <div className="wow slideInUp" data-wow-delay="0.1s">
                                    <div className="section-title section-title-sm position-relative pb-3 mb-4">
                                        <h3 className="mb-0">Plain Text</h3>
                                    </div>
                                    <div className="bg-light text-center" style={{ padding: 30 }}>
                                        <p>Vero sea et accusam justo dolor accusam lorem consetetur, dolores sit amet sit dolor clita kasd justo, diam accusam no sea ut tempor magna takimata, amet sit et diam dolor ipsum amet diam</p>
                                        <a href className="btn btn-primary py-2 px-4">Read More</a>
                                    </div>
                                </div>
                                {/* Plain Text End */}
                            </div>
                            {/* Sidebar End */}
                        </div>
                    </div>
                </div>
                {/* Blog End */}
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

export default Blogs
