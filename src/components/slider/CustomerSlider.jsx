import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const customerLogos = [
  "https://xeotogiadinh.com/wp-content/uploads/2020/05/logo-o-to-truong-hai.jpg",
  "https://inkythuatso.com/uploads/images/2021/10/logo-vinfast-inkythuatso-21-11-08-55.jpg",
  "/images/Picture7.png",
  "/images/Picture8.jpg",
  "/images/Picture9.jpg",
  "/images/Picture10.png",
  "/images/Picture11.jpg",
  "/images/Picture7.png",
];

const CustomerSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="customer-section text-center py-10">
      <h2 className="text-2xl font-bold mb-6">KHÁCH HÀNG CỦA CHÚNG TÔI</h2>
      <Slider {...settings} className="customer-slider">
        {customerLogos.map((logo, index) => (
          <div key={index} className="px-4">
            <Image
              width={100}
              height={100}
              src={logo}
              alt="Customer Logo"
              className="mx-auto h-24 object-contain"
            />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CustomerSlider;
