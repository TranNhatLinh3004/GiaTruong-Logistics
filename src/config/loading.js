// Cấu hình loading
export const LOADING_CONFIG = {
    // Thời gian hiển thị loading (milliseconds)
    DURATION: 3000, // 3.5 giây như user đã set

    // Có hiển thị loading mỗi lần refresh không
    SHOW_ON_REFRESH: true, // true = luôn hiển thị loading khi refresh

    // Có hiển thị loading khi chuyển trang không
    SHOW_ON_NAVIGATION: false, // true = hiển thị khi chuyển trang, false = không hiển thị
};

// Hàm helper để lấy thời gian loading
export const getLoadingDuration = () => {
    return LOADING_CONFIG.DURATION;
};

// Hàm helper để kiểm tra có hiển thị loading khi refresh không
export const shouldShowOnRefresh = () => {
    return LOADING_CONFIG.SHOW_ON_REFRESH;
};

// Hàm helper để kiểm tra có hiển thị loading khi chuyển trang không
export const shouldShowOnNavigation = () => {
    return LOADING_CONFIG.SHOW_ON_NAVIGATION;
};