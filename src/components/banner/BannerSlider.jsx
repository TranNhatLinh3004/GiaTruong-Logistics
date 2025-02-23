"use client"; // Dùng trong Next.js 13+ để đảm bảo chạy trên client-side

import React from "react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

const BannerSlider = () => {
  const sliderRef = React.useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    {
      src: "https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Logistics 1",
      title: "CÔNG TY VẬN CHUYỂN HÀNG HÓA \n GIA TRƯỜNG LOGISTICS UY TÍN",
    },
    {
      src: "https://images.pexels.com/photos/13961752/pexels-photo-13961752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      alt: "Logistics 2",
      title: "DỊCH VỤ LOGISTICS CHUYÊN NGHIỆP \n GIAO HÀNG TOÀN QUỐC",
    },
  ];

  return (
    <div className="group relative w-full">
      {/* Slider */}
      <Slider ref={sliderRef} {...settings} className="w-full">
        {images.map((image, index) => (
          <div key={index} className="relative w-full h-[550px]">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className=""
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <h1
                className="text-white text-4xl font-bold text-center textShadow-md"
                dangerouslySetInnerHTML={{
                  __html: image.title.replace(/\n/g, "<br>"),
                }}
              ></h1>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-5 top-[45%] -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-md border-0 cursor-pointer w-10 h-10  items-center justify-center 
          hidden group-hover:flex transition-opacity duration-300"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <CgChevronLeft size={30} />
      </button>
      <button
        className="absolute right-5 top-[45%] -translate-y-1/2 bg-white p-2 rounded-full shadow-md border-0 cursor-pointer w-10 h-10  items-center justify-center 
          hidden group-hover:flex transition-opacity duration-300"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <CgChevronRight size={30} />
      </button>
    </div>
  );
};

export default BannerSlider;
