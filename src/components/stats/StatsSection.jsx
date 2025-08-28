import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <span ref={elementRef} className="font-bold text-orange-500">
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  const stats = [
    {
      title: "Lượt tàu cập cảng",
      value: 1000,
      suffix: "+",
      unit: "lượt/năm",
    },
    {
      title: "Diện tích kho, bãi",
      value: 300000,
      suffix: "+",
      unit: "m²",
    },
    {
      title: "Năng lực tiếp nhận tàu",
      value: 50000,
      suffix: "+",
      unit: "DWT",
    },
    {
      title: "Khách hàng",
      value: 100,
      suffix: "+",
      unit: "",
    },
  ];

  return (
    <div className="relative  bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(\'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"%3E%3Cdefs%3E%3Cpattern id="port" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse"%3E%3Crect width="100" height="100" fill="%23e0f2fe"/%3E%3Cpath d="M20,80 L80,80 L80,20 L20,20 Z" fill="%234fc3f7" opacity="0.3"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23port)"/%3E%3C/svg%3E\')',
        }}
      />

      <div className="relative z-10 container mx-auto px-4 py-4 md:py-24">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-lg p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {" "}
              <h3 className="text-lg font-semibold text-gray-800 leading-tight">
                {stat.title}
              </h3>
              <div className="pt-4 mb-4 flex items-center justify-center gap-2">
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2500 + index * 200}
                  />
                </div>
                <p className="text-gray-500 text-xl">{stat.unit}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
