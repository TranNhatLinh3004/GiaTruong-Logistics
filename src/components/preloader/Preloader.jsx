// components/Preloader.js
import { useEffect, useState } from "react";
import "./Preloader.css";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="preloader">
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              "--delay": `${Math.random() * 2}s`,
              "--size": `${Math.random() * 4 + 2}px`,
              "--left": `${Math.random() * 100}%`,
              "--animation-duration": `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="content">
        <div className="logo-container">
          <h1 className={`logo ${isVisible ? "animate" : ""}`}>
            <span className="logo-text">GIA TRƯỜNG</span>
            <span className="logo-star">STAR</span>
          </h1>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
