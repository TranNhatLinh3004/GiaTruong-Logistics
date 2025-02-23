import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
const services = [
  {
    title: "DỊCH VỤ CỨU HỘ XE Ô TÔ",
    description:
      "Hơn 50 đầu xe cứu hộ, cùng trang thiết bị đầy đủ, hỗ trợ 24/7 khắc phục mọi sự cố ô tô.",
    image:
      "https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "DỊCH VỤ TRUNG CHUYỂN XE Ô TÔ",
    description:
      "Hơn 50 đầu xe cứu hộ đáp ứng mọi nhu cầu. Vận chuyển chuyên nghiệp, nhanh chóng, an toàn.",
    image:
      "https://images.pexels.com/photos/11087837/pexels-photo-11087837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "DỊCH VỤ VẬN CHUYỂN HÀNG NẶNG, CÔNG KỀNH",
    description:
      "Vận chuyển các loại hàng có trọng lượng nặng, kích thước lớn, cồng kềnh. Đóng hàng đảm bảo an toàn.",
    image:
      "https://images.pexels.com/photos/29566901/pexels-photo-29566901/free-photo-of-o-to-d-t-i-c-ng-v-n-chuy-n-cong-nghi-p.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

const ServiceSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="services-section">
      <div className="section-header text-center">
        <h2 className="section-title">CÁC DỊCH VỤ VẬN CHUYỂN HÀNG HÓA</h2>
        <p className="section-subtitle">
          Nhanh chóng – Chuyên nghiệp – An Toàn
        </p>
      </div>
      <Slider {...settings} className="services-grid ">
        {services.map((service, index) => (
          <div className="px-4">
            <div key={index} className="service-card ">
              <img
                src={service.image}
                alt={service.title}
                className="service-image "
                objectFit="cover"
              />
              <div className="service-content">
                <h3 className="service-title ">{service.title}</h3>
                <p className="service-description ">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ServiceSlider;
