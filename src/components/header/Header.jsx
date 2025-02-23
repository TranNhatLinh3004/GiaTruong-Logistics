import Image from "next/image";
import Link from "next/link";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { CgChevronDown } from "react-icons/cg";
import "./header.css";
import {
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaGooglePlusG,
  FaTwitter,
  FaInstagram,
  FaBars,
} from "react-icons/fa";

const Header = () => {
  return (
    <header>
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
      <div className="overplay" id="overplay">
        <nav className="nav-container">
          <Link href="/" className="logo">
            <Image
              src="/images/logo.png"
              alt=" Logo"
              width={180}
              height={100}
            />
          </Link>
          <button className="mobile-menu-btn">
            <FaBars />
          </button>
          <div className="nav-links">
            <Link href="/" className="logo mobile">
              <Image
                src="/images/logo.png"
                alt=" Logo"
                width={150}
                height={50}
              />
            </Link>
            <div className="dropdown">
              <Link
                href="#"
                style={{ display: "flex", alignItems: "center", gap: "5px" }}
              >
                Dịch vụ vận chuyển <CgChevronDown color="white " />
              </Link>
              <div className="dropdown-menu">
                <Link href="/services.html">Vận chuyển xe ô tô</Link>
                <Link href="#">Vận chuyển hàng hóa</Link>
              </div>
            </div>
            <Link href="/about.html">Về chúng tôi</Link>
            <Link href="/news.html">Tin tức</Link>
            <Link href="/recruitment.html">Tuyển dụng</Link>
            <Link href="/contact.html" className="track-order">
              Liên hệ
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
