import React, { useState, useEffect } from "react";
import Loading from "./loading/loading";
import { getLoadingDuration, shouldShowOnRefresh } from "@/config/loading";

function AppWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const loadingTime = getLoadingDuration();

  useEffect(() => {
    // Kiểm tra xem có cần hiển thị loading không
    const shouldShowLoading = () => {
      if (shouldShowOnRefresh()) {
        // Luôn hiển thị loading khi refresh
        return true;
      }
      // Nếu đây là lần đầu truy cập hoặc refresh trang
      return !sessionStorage.getItem("hasLoaded");
    };

    if (shouldShowLoading()) {
      // Hiển thị loading trong thời gian đã định
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (!shouldShowOnRefresh()) {
          sessionStorage.setItem("hasLoaded", "true");
        }
      }, loadingTime);

      return () => clearTimeout(timer);
    } else {
      // Nếu đã load rồi thì không hiển thị loading nữa
      setIsLoading(false);
    }
  }, [loadingTime]);

  if (isLoading) {
    return <Loading duration={loadingTime} />;
  }

  return <>{children}</>;
}

export default AppWrapper;
