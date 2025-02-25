import { SiZalo } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";
import "./hotline_style.css";
import Link from "next/link";
import { IoMdCall } from "react-icons/io";
const HotlineButton = () => {
  return (
    <div
      className="fixed bottom-8 right-8 flex flex-col gap-4 z-[9999] hotline-button"
      style={{
        position: "fixed",
        bottom: "3rem",
        right: "3rem",
        zIndex: 9999,
      }}
    >
      {/* Zalo Button */}
      <Link href="tel:+84915335377">
        <div
          className="relative w-16 h-16 text-white container-btn"
          style={{
            width: "4rem",
          }}
        >
          <div
            className="wrapper-btn"
            style={{
              backgroundColor: "rgb(241, 183, 77)",
            }}
          ></div>
          <div className="absolute inset-1 bg-yellow-400 rounded-full flex items-center justify-center phone-button">
            <IoMdCall size={24} />
          </div>
        </div>
      </Link>

      {/* Zalo Button */}
      <Link href="https://zalo.me/0915335377" target="_blank">
        <div
          className="relative
        
        w-16 h-16 mt-3 text-white container-btn"
          style={{
            width: "4rem",
          }}
        >
          <div
            className="wrapper-btn"
            style={{
              backgroundColor: "rgb(241, 183, 77)",
            }}
          ></div>
          <div className="absolute inset-1 bg-yellow-400 rounded-full flex items-center justify-center zalo-button">
            <SiZalo size={24} />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default HotlineButton;
