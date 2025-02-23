import Link from "next/link";
import { SiZalo } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { HiArrowUp } from "react-icons/hi";
import { useEffect, useState } from "react";

const HotlineButton = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Group các nút ở góc phải */}
      <div className="fixed bottom-7 right-7 flex flex-col space-y-4 z-50">
        {/* Phone Button */}
        <Link href="tel:+84905336549">
          <div className="w-16 h-16 bg-yellow-400 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition duration-300">
            <IoMdCall size={30} />
          </div>
        </Link>

        {/* Zalo Button */}
        <Link href="https://zalo.me/84905336549" target="_blank">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition duration-300">
            <SiZalo size={30} />
          </div>
        </Link>
      </div>

      {/* Nút cuộn lên đầu trang */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-9 left-9 z-50 bg-gray-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-900 transition duration-300"
        >
          <HiArrowUp size={30} />
        </button>
      )}
    </>
  );
};

export default HotlineButton;
