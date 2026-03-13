import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Column 1 */}
        <div className="footer-col">
          <h3>Bahuchar Industries</h3>
          <p>
            We provide high quality industrial products and engineering
            solutions with commitment and precision.
          </p>
        </div>

        {/* Column 2 */}
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/downloads">Downloads</Link></li>
          
          </ul>
        </div>

        <div className="footer-col">
  <h4>Working Hours</h4>
  <ul>
    <li>Monday-Friday: 9:00 AM To 7:00 PM</li>
    <li>Saturday: Closed</li>
    <li>Sunday: 9:00 AM To 7:00 PM</li>
  </ul>
</div>

        {/* Column 4 */}
        <div className="footer-col">
          <h4>Contact Info</h4>

          <p>
            27, Nandanvan Estate-3, Near Swarnim Estate, Inside Matrubhumi Industrial Park,
            Opposite Karmbhumi Estate, Bakrol Bujrang, Ahmedabad,
            Gujarat 382430, India
            <br />
            <a
              href="https://maps.google.com/?q=22.975651,72.730110"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              📍 View on Google Maps
            </a>
          </p>

         <p>📞 <a href="tel:+919054008855">+91 9054008855</a></p>
  <p>📞 <a href="tel:+919081110306">+91 9081110306</a></p>
          <p>✉ <a href="mailto:bahucharindustries77@gmail.com">bahucharindustries77@gmail.com</a></p>



          {/* Embedded Map */}
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps?q=22.975651,72.730110&output=embed"
              width="100%"
              height="150"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          {/* Social Icons */}
          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a 
  href="https://wa.me/919054008855"
  target="_blank"
  rel="noopener noreferrer"
>
  <FaWhatsapp />
</a>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Bahuchar Industries. All Rights Reserved.
        <span>Designed By Monika Patel</span>
      </div>

    </footer>
  );
}

export default Footer;
