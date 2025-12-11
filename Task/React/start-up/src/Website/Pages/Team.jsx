
import React, { useEffect, useState } from 'react'
import Header2 from '../coman/Header2'
import Footer from '../coman/Footer'
import axios from 'axios'

function Team() {

      const [team,setteam]= useState([])

    useEffect(()=>{
        fetchdata()
    },[])

    const fetchdata=async()=>{
        const res = await axios.get("http://localhost:3000/team")
        setteam(res.data)
    }

    return (
        <div>
            <Header2 data="Team Members"  title="Team Members" />
            <div>
                {/* Team Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: 600 }}>
                            <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
                            <h1 className="mb-0">Professional Stuffs Ready to Help Your Business</h1>
                        </div>
                        <div className="row g-5">
                           {
                            team && team.map((data,index)=>{
                                return(
                                     <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                                <div className="team-item bg-light rounded overflow-hidden">
                                    <div className="team-img position-relative overflow-hidden">
                                        <img className="img-fluid w-100" style={{height:"400px"}} src={data.image} alt />
                                        <div className="team-social">
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-twitter fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-facebook-f fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-instagram fw-normal" /></a>
                                            <a className="btn btn-lg btn-primary btn-lg-square rounded" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                        </div>
                                    </div>
                                    <div className="text-center py-4">
                                        <h4 className="text-primary">{data.name}</h4>
                                        <p className="text-uppercase m-0">{data.designation}</p>
                                    </div>
                                </div>
                            </div>
                                )
                            })
                           }
                        </div>
                    </div>
                </div>
                {/* Team End */}
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

export default Team
