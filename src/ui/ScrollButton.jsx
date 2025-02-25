import React, { useEffect, useState } from "react";
import { HiArrowUp } from "react-icons/hi";

function ScrollButton(props) {
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Xử lý hiển thị nút scroll lên đầu
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cuộn về đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="fixed bottom-8 left-8 flex flex-col gap-4 z-[9999] hotline-button"
      style={{ position: "fixed", bottom: "3rem", left: "4rem", zIndex: 9999 }}
    >
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="bg-transparent  border-0 focus:outline-none  bottom-0 left-0 cursor-pointer   flex justify-center items-center "
          style={{
            border: "1px solid gray ",
            background: "gray",
          }}
        >
          <div className="">
            <div
              className=""
              style={{
                padding: "6px",
              }}
            >
              <HiArrowUp size={24} color="white" />
            </div>
          </div>
        </button>
      )}
    </div>
  );
}

export default ScrollButton;
