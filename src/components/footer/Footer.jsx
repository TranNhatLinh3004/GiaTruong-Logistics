import React, { useState } from "react";
import Image from "next/image";
import "./footer.css";
import Link from "next/link";
import { CgChevronRight } from "react-icons/cg";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
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
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
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
            <h3 className="footer-title">GIỜ LÀM VIỆC</h3>
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

        <div className="footer-column ins">
          <h3 className="footer-title instagram">ẢNH NỔI BẬT</h3>
          <div className="instagram-feed grid grid-cols-3 gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className="instagram-item cursor-pointer"
                onClick={() => openModal(index)}
              >
                <Image
                  width={100}
                  height={100}
                  src={img}
                  alt="Instagram post"
                  className="rounded-md"
                />
              </div>
            ))}
          </div>

          {isOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-2xl w-full flex flex-col items-center">
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-3xl flex items-center justify-center bg-transparent border-0 cursor-pointer"
                >
                  <IoClose />
                </button>

                <Image
                  width={600}
                  height={600}
                  src={images[currentIndex]}
                  alt="Instagram post"
                  className="rounded-lg max-h-[80vh] object-contain"
                />

                <div className="  flex justify-between w-full mt-4">
                  <button
                    onClick={prevImage}
                    className="absolute -left-20 top-[45%] -translate-y-1/2  p-3 bg-gray-200 hover:bg-gray-300  text-2xl  rounded-full shadow-md border-0 cursor-pointer w-10 h-10  flex items-center justify-center "
                  >
                    <IoChevronBack size={30} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute -right-20 top-[45%] -translate-y-1/2  p-3 bg-gray-200 hover:bg-gray-300  text-2xl  rounded-full shadow-md border-0 cursor-pointer w-10 h-10  flex items-center justify-center "
                  >
                    <IoChevronForward />
                  </button>
                </div>
              </div>
            </div>
          )}
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
