import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

function SocialSidebar() {
  return (
    <div className="social-sidebar">
      
      {/* Facebook */}
      <a 
        href="https://www.facebook.com/https://www.facebook.com/share/1AupHqFEUe/?mibextid=wwXIfr"
        target="_blank"
        rel="noopener noreferrer"
        className="facebook"
      >
        <FaFacebookF />
      </a>

      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/https://www.linkedin.com/in/atlas-elevator-components-aec-2a90503a9"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin"
      >
        <FaLinkedinIn />
      </a>

      {/* WhatsApp */}
      <a 
        href="https://wa.me/919054008855"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp"
      >
        <FaWhatsapp />
      </a>

    </div>
  );
}

export default SocialSidebar;