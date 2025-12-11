
import React, { useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Aheader({ title, data }) {

    const redirect = useNavigate()

    useEffect(()=>{
        if(!localStorage.getItem("Aid")){
            redirect("/alogin")
        }
    })

    const logout=()=>{
        localStorage.removeItem("Aid")
        localStorage.removeItem("Aname")
        toast.success("successfully logout")
        redirect("/alogin")
    }


    return (
        <div>
            <div>
                <div>
                    {/* Topbar Start */}
                    <div className="container-fluid bg-dark px-5 d-none d-lg-block">
                        <div className="row gx-0">
                            <div className="col-lg-8 text-center text-lg-start mb-2 mb-lg-0">
                                <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                    <small className="me-3 text-light"><i className="fa fa-map-marker-alt me-2" />123 Street, New York, USA</small>
                                    <small className="me-3 text-light"><i className="fa fa-phone-alt me-2" />+012 345 6789</small>
                                    <small className="text-light"><i className="fa fa-envelope-open me-2" />info@example.com</small>
                                </div>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <div className="d-inline-flex align-items-center" style={{ height: 45 }}>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-twitter fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-facebook-f fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-linkedin-in fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle me-2" href><i className="fab fa-instagram fw-normal" /></a>
                                    <a className="btn btn-sm btn-outline-light btn-sm-square rounded-circle" href><i className="fab fa-youtube fw-normal" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Topbar End */}
                    {/* Navbar Start */}
                    <div className="container-fluid position-relative p-0">
                        <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                            <NavLink to="/dash" className="navbar-brand p-0">
                                <h1 className="m-0"><i className="fa fa-user-tie me-2" />Dashboard</h1>
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                                <span className="fa fa-bars" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarCollapse">
                                <div className="navbar-nav ms-auto py-0">
                                    <NavLink to="/dash" className="nav-item nav-link ">Dashboard</NavLink>
                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Course</a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/course" className="dropdown-item">Course Mange</NavLink>
                                            <NavLink to="/courseadd" className="dropdown-item">Course Add</NavLink>
                                        </div>
                                    </div>
                                     <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Team</a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/teamMange" className="dropdown-item">Team Mange</NavLink>
                                            <NavLink to="/Teamadd" className="dropdown-item">Team Add</NavLink>
                                        </div>
                                    </div>

                                    <NavLink to="/service" className="nav-item nav-link">Services</NavLink>

                                    <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                                        <div className="dropdown-menu m-0">
                                            <NavLink to="/price" className="dropdown-item">Pricing Plan</NavLink>
                                            <NavLink to="/feact" className="dropdown-item">Our features</NavLink>
                                            <NavLink to="/team" className="dropdown-item">Team Members</NavLink>
                                            <NavLink to="/testi" className="dropdown-item">Testimonial</NavLink>
                                            <NavLink to="/quta" className="dropdown-item">Free Quote</NavLink>
                                        </div>
                                    </div>
                                    {
                                        (()=>{
                                            if(localStorage.getItem("Aid")){
                                                return(
                                                    <Link className="nav-item nav-link">hello.. {localStorage.getItem("Aname")}</Link>
                                                )
                                            }
                                        })()
                                    }
                                    {
                                        (()=>{
                                            if(localStorage.getItem("Aid")){
                                                return(
                                                    <Link onClick={logout} className="nav-item nav-link">logout</Link>
                                                )
                                            }
                                            else{
                                                return(
                                                      <NavLink to="/alogin" className="nav-item nav-link">Alogin</NavLink>
                                                )
                                            }
                                        })()
                                    }
                                </div>
                                <butaton type="button" className="btn text-primary ms-3" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search" /></butaton>

                            </div>
                        </nav>
                        <div className="container-fluid bg-primary py-5 bg-header" style={{ marginBottom: 90 }}>
                            <div className="row py-5">
                                <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                                    <h1 className="display-4 text-white animated zoomIn">{title}</h1>
                                    <a href className="h5 text-white">Home</a>
                                    <i className="far fa-circle text-white px-2" />
                                    <a href className="h5 text-white">{data}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Navbar End */}
                </div>

            </div>
        </div>
    )
}

export default Aheader
