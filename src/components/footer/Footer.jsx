import React from "react";
import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";

const services = [
  "Vận chuyển ô tô",
  "Vận chuyển hàng hóa",
  "Vận chuyển hàng hóa Bắc Nam",
  "Vận chuyển Bắc Trung Nam",
  "Vận chuyển hàng hóa liên tỉnh",
  "Vận tải hàng hóa hàng không",
  "Vận chuyển hàng hóa bằng xe tải",
  "Vận chuyển hàng hóa bằng container",
  "Gom hàng nội địa",
  "Dịch vụ kho bãi",
];

const infoLinks = [
  "Giới thiệu",
  "Tuyển dụng",
  "Liên hệ",
  "Hồ sơ năng lực",
  "Hợp đồng vận chuyển",
  "Câu hỏi thường gặp",
  "Chính sách bảo mật",
  "Chính sách bồi thường",
  "Quy định Hóa đơn, Chứng từ",
];

const images = [
  "/images/Picture3.jpg",
  "/images/Picture2.jpg",
  "/images/Picture1.jpg",
  "/images/Picture3.jpg",
  "/images/Picture2.jpg",
  "/images/Picture1.jpg",
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Cột Logo & Giới thiệu */}
        <div className="footer-column">
          <div className="footer-logo">
            <Image
              width={180}
              height={100}
              src="/images/logo.png"
              alt="LOGTIK Logo"
            />
          </div>
          <p className="footer-description">
            Vận Tải Gia Trường là đơn vị vận chuyển hàng hóa chuyên nghiệp, uy
            tín và đáng tin cậy.
          </p>
          <div className="working-hours">
            <h3 className="footer-title">WORKING HOURS</h3>
            <ul>
              <li>Mon-Fri ............ 8:00 am - 06:00 pm</li>
              <li>Sat-Sun ............ 8:00 am - 12:00 pm</li>
            </ul>
          </div>
        </div>

        {/* Cột Dịch vụ */}
        <div className="footer-column">
          <h3 className="footer-title">DỊCH VỤ</h3>
          <ul className="footer-links">
            {services.map((service, index) => (
              <li key={index}>
                <Link href="#">
                  <CgChevronRight size={20} style={{ marginRight: "5px" }} />{" "}
                  {service}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột Thông tin */}
        <div className="footer-column">
          <h3 className="footer-title">THÔNG TIN</h3>
          <ul className="footer-links">
            {infoLinks.map((info, index) => (
              <li key={index}>
                <Link href="#">
                  <CgChevronRight size={20} style={{ marginRight: "5px" }} />{" "}
                  {info}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Cột Ảnh nổi bật */}
        <div className="footer-column ins">
          <h3 className="footer-title instagram">ẢNH NỔI BẬT</h3>
          <div className="instagram-feed">
            {images.map((img, index) => (
              <div key={`${index}`} className="instagram-item">
                <Image
                  width={100}
                  height={100}
                  src={img}
                  alt="Instagram post"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Copyright © 2025 by <span>Gia Trường Logistics.</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
