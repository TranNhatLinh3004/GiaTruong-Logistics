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
    <div className="fixed bottom-0 right-0">
      <div className="fixed bottom-7 right-7 space-y-4 z-50">
        {/* Phone Button */}
        <Link href="tel:+84905336549">
          <div className="relative w-16 h-16 text-white">
            <div className="absolute inset-0 bg-yellow-400 opacity-80 rounded-full animate-ping"></div>
            <div className="absolute inset-1 bg-yellow-400 rounded-full flex items-center justify-center">
              <IoMdCall size={24} />
            </div>
          </div>
        </Link>

        {/* Zalo Button */}
        <Link href="https://zalo.me/84905336549" target="_blank">
          <div className="relative w-16 h-16 mt-3 text-white">
            <div className="absolute inset-0 bg-yellow-400 opacity-80 rounded-full animate-ping"></div>
            <div className="absolute inset-1 bg-yellow-400 rounded-full flex items-center justify-center">
              <SiZalo size={24} />
            </div>
          </div>
        </Link>
      </div>

      <div className="fixed bottom-9 left-9 space-y-4 z-50">
        {showScrollButton && (
          <button
            onClick={scrollToTop}
            className="bg-transparent  border-0 focus:outline-none  bottom-0 left-0 cursor-pointer"
          >
            <div className="relative w-12 h-12  mt-3 text-primary-color hover:text-white">
              <div className="absolute inset-1 hover:bg-primary-color hover:border-0 rounded-[5px] border-2 border-solid border-gray-300  flex items-center justify-center">
                <HiArrowUp size={24} />
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default HotlineButton;
