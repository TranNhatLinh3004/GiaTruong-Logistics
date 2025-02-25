import Link from "next/link";
import { SiZalo } from "react-icons/si";
import { IoMdCall } from "react-icons/io";
import { HiArrowUp } from "react-icons/hi";
import { useEffect, useState } from "react";
import {
  FaRegBookmark,
  FaRegThumbsUp,
  FaRegCommentDots,
  FaRegShareSquare,
} from "react-icons/fa";
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
    <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-4">
      <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50">
        <FaRegShareSquare className="w-5 h-5 text-gray-600" />
      </button>
      <button className="p-3 bg-white rounded-full shadow-lg hover:bg-gray-50">
        <FaRegBookmark className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default HotlineButton;
