import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { CgChevronDown } from "react-icons/cg";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import "./header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show header on scroll up, hide on scroll down
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down and past threshold
        setIsHeaderVisible(false);
      } else {
        // Scrolling up or at top
        setIsHeaderVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Add elementor-style class names
  const headerClass = `header-wrapper ${
    !isHeaderVisible ? "elementor-sticky--hide" : ""
  } ${lastScrollY > 0 ? "elementor-sticky--active" : ""}`;

  return (
    <header className={headerClass}>
      {/* Top bar */}
      <div className="top-bar">
        <div className="contact-info">
          <span>
            <AiFillPhone /> 0985.77.88.99
          </span>
          <span>
            <AiOutlineMail /> giatruongstar@giatruonglogics.com
          </span>
          <span>
            <FaMapMarkerAlt /> Lê Hồng Phong, Khối 4, Thị trấn Núi Thành, Núi
            Thành, Quảng Nam
          </span>
        </div>
        <div className="social-icons">
          <Link href="#">
            <FaFacebookF color="white" />
          </Link>
          <Link href="#">
            <FaLinkedinIn color="white" />
          </Link>
          <Link href="#">
            <FaGooglePlusG color="white" />
          </Link>
          <Link href="#">
            <FaTwitter color="white" />
          </Link>
          <Link href="#">
            <FaInstagram color="white" />
          </Link>
        </div>
      </div>
      {/* Navigation */}
      <div className="overplay">
        <nav className="nav-container">
          <Link href="/" className="logo">
            <Image src="/images/logo.png" alt="Logo" width={180} height={100} />
          </Link>
          {/* Nút menu trên mobile */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
          {/* Menu trên mobile */}
          <div className={`nav-links ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="dropdown">
              <Link
                href="/services"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Dịch vụ vận chuyển <CgChevronDown color="white" />
              </Link>
              <div className="dropdown-menu">
                <Link href="/services">Vận chuyển xe ô tô</Link>
                <Link href="#">Vận chuyển hàng hóa</Link>
              </div>
            </div>
            <Link href="/about">Về chúng tôi</Link>
            <Link href="/news">Tin tức</Link>
            <Link href="/recruitment">Tuyển dụng</Link>
            <Link href="/contact" className="track-order">
              Liên hệ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
