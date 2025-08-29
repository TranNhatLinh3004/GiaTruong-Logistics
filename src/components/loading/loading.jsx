import React, { useEffect, useState } from "react";
import "./loading.css";

function Loading({ duration = 2000 }) {
  const [isFading, setIsFading] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Bắt đầu fade out sau khi hết thời gian duration
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, duration);

    // Ẩn hoàn toàn sau khi fade out xong
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, duration + 500); // 500ms là thời gian fade out

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [duration]);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`loading-screen w-full h-screen flex justify-center items-center ${
        isFading ? "fade-out" : ""
      }`}
    >
      <h1 className="loading__title" data-text="Gia Trường Logistics">
        Gia Trường Logistics
      </h1>
    </div>
  );
}

export default Loading;
