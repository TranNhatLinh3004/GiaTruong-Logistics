import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import {
  FaPlay,
  FaPause,
  FaChevronLeft,
  FaChevronRight,
  FaArrowUp,
} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./timeline.css";

const DevelopmentTimeline = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(2); // Default to 2021

  const yearSliderRef = useRef(null);
  const contentSliderRef = useRef(null);

  // Timeline data
  const timelineData = [
    {
      year: "2023",
      content: "Nội dung cho năm 2023",
      image:
        "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      year: "2022",
      content: "Nội dung cho năm 2022",
      image:
        "https://images.pexels.com/photos/6711218/pexels-photo-6711218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      year: "2021",
      content:
        "Thực hiện kế hoạch tái cấu trúc công ty trở thành Tập đoàn công nghiệp đa ngành với các ngành nghề mang tính bổ trợ cho nhau và có tính tích hợp cao, phát triển bền vững theo xu thế số hóa và bối cảnh hội nhập khu vực và thế giới.",
      image:
        "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      year: "2018",
      content: "Nội dung cho năm 2018",
      image:
        "https://images.pexels.com/photos/6711218/pexels-photo-6711218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
    {
      year: "2003",
      content: "Nội dung cho năm 2003",
      image:
        "https://images.pexels.com/photos/302769/pexels-photo-302769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },
  ];

  // Function to go to next slide
  const goToNext = () => {
    yearSliderRef.current.slickNext();
  };

  // Function to go to previous slide
  const goToPrev = () => {
    yearSliderRef.current.slickPrev();
  };

  // Settings for the years slider
  const yearSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    arrows: false, // Disable built-in arrows, we'll use custom ones
    afterChange: (current) => setCurrentSlide(current), // Cập nhật currentSlide
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  // Settings for the content slider
  const contentSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  // Đồng bộ hai slider khi currentSlide thay đổi
  useEffect(() => {
    if (yearSliderRef.current && contentSliderRef.current) {
      contentSliderRef.current.slickGoTo(currentSlide);
    }
  }, [currentSlide]);

  // Toggle play/pause
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Handle autoplay with useEffect
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        yearSliderRef.current.slickNext();
      }, 3000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="timeline-container">
      <div className="timeline-header" data-aos="fade-right">
        <div className="triangle-icon">▶</div>
        <h2 className="timeline-title">QUÁ TRÌNH HÌNH THÀNH VÀ PHÁT TRIỂN</h2>
      </div>

      {/* Years slider */}
      <div className="years-slider-container">
        <div className="year-arrow year-prev-arrow" onClick={goToPrev}>
          <FaChevronLeft />
        </div>

        <Slider
          {...yearSettings}
          ref={yearSliderRef}
          asNavFor={contentSliderRef.current} // Kết nối với content slider
        >
          {timelineData.map((item, index) => (
            <div
              key={index}
              className={`year-item ${
                index === currentSlide ? "active-year" : ""
              }`}
            >
              {item.year}
            </div>
          ))}
        </Slider>

        <div className="year-arrow year-next-arrow" onClick={goToNext}>
          <FaChevronRight />
        </div>
      </div>

      {/* Content slider */}
      <div className="content-slider-container">
        <div className="content-slider-wrapper">
          <Slider
            {...contentSettings}
            ref={contentSliderRef}
            asNavFor={yearSliderRef.current} // Kết nối với year slider
          >
            {timelineData.map((item, index) => (
              <div key={index} className="content-item">
                <div className="content-image">
                  <img src={item.image} alt={`${item.year}`} />
                  <div className="media-controls">
                    <button className="play-pause-btn" onClick={togglePlay}>
                      {isPlaying ? <FaPause /> : <FaPlay />}
                    </button>
                  </div>
                </div>
                <div className="content-text">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentTimeline;
