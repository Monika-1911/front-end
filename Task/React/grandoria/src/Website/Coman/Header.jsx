import React from 'react'
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <div>
        <header id="header" className="header sticky-top">
    <div className="topbar d-flex align-items-center dark-background">
      <div className="container d-flex justify-content-center justify-content-md-between">
        <div className="contact-info d-flex align-items-center">
          <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:contact@example.com">contact@example.com</a></i>
          <i className="bi bi-phone d-flex align-items-center ms-4"><span>+1 5589 55488 55</span></i>
        </div>
        <div className="social-links d-none d-md-flex align-items-center">
          <a href="#" className="twitter"><i className="bi bi-twitter-x" /></a>
          <a href="#" className="facebook"><i className="bi bi-facebook" /></a>
          <a href="#" className="instagram"><i className="bi bi-instagram" /></a>
          <a href="#" className="linkedin"><i className="bi bi-linkedin" /></a>
        </div>
      </div>
    </div>{/* End Top Bar */}
    <div className="branding d-flex align-items-cente">
      <div className="container position-relative d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-center">
          {/* Uncomment the line below if you also wish to use an image logo */}
          {/* <img src="assets/img/logo.webp" alt=""> */}
          <h1 className="sitename">Grandoria</h1>
        </a>
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><NavLink to="/" className="active">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/room">Rooms</NavLink></li>
            <li><NavLink to="/amenities">Amenities</NavLink></li>
            <li><NavLink to="/location">Location</NavLink></li>
            <li className="dropdown"><a href="#"><span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown" /></a>
              <ul>
                
                <li><NavLink to="/rest">Restaurant</NavLink></li>
                <li><NavLink to="/offer">Offers</NavLink></li>
                <li><NavLink to="/book">Booking</NavLink></li>
                <li><NavLink to="/Gallery">Gallery</NavLink></li>
                <li><NavLink to="/Privacy">Privacy</NavLink></li>
                <li><NavLink to="/Events">Events</NavLink></li>
                <li><NavLink to="/Roomdetails">Roomdetails</NavLink></li>
                <li><NavLink to="/Starterpage">Starterpage</NavLink></li>
                <li><NavLink to="/Terms">Terms</NavLink></li>
                 
                 
                 
            
            
              </ul>
            </li>
            <li><a href="contact.html">Contact</a></li>
            <li className="dropdown">
              <a href="#english">
                <svg className="icon" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="SVGRepo_iconCarrier">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z" fill="currentColor" />
                  </g>
                </svg>
                <span>English</span>
                <i className="bi bi-chevron-down toggle-dropdown" /></a>
              <ul>
                <li><a href="#french">French</a></li>
                <li><a href="#deutsch">Deutsch</a></li>
                <li><a href="#spanish">Spanish</a></li>
              </ul>
            </li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list" />
        </nav>
      </div>
    </div>
  </header>
    </div>
  )
}

export default Header;