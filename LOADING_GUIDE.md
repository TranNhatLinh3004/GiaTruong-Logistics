# Hướng dẫn điều chỉnh thời gian Loading

## Vấn đề hiện tại

Trang home hiện tại có loading function hiển thị trong 4 giây trước khi hiện ra nội dung chính.

## Giải pháp đã implement

### 1. Cấu hình thời gian loading

File: `src/config/loading.js`

```javascript
export const LOADING_CONFIG = {
  // Thời gian hiển thị loading (milliseconds)
  DURATION: 2000, // Có thể thay đổi từ 1000 (1s) đến 5000 (5s)

  // Có hiển thị loading mỗi lần refresh không
  SHOW_ON_REFRESH: false, // true = luôn hiển thị, false = chỉ hiển thị lần đầu

  // Có hiển thị loading khi chuyển trang không
  SHOW_ON_NAVIGATION: false, // true = hiển thị khi chuyển trang, false = không hiển thị
};
```

### 2. Cách điều chỉnh thời gian loading

#### Để giảm thời gian loading xuống 1 giây:

```javascript
DURATION: 1000, // 1 giây
```

#### Để tăng thời gian loading lên 3 giây:

```javascript
DURATION: 3000, // 3 giây
```

#### Để tắt loading hoàn toàn:

```javascript
DURATION: 0, // Không hiển thị loading
```

### 3. Các tùy chọn khác

#### Luôn hiển thị loading khi refresh trang:

```javascript
SHOW_ON_REFRESH: true,
```

#### Chỉ hiển thị loading lần đầu truy cập:

```javascript
SHOW_ON_REFRESH: false,
```

### 4. Cấu trúc files đã thay đổi

- `src/components/loading/loading.jsx` - Component loading chính
- `src/components/AppWrapper.jsx` - Wrapper quản lý loading state
- `src/config/loading.js` - File cấu hình
- `src/pages/_app.jsx` - Đã thêm AppWrapper

### 5. Cách sử dụng

1. Mở file `src/config/loading.js`
2. Thay đổi giá trị `DURATION` theo ý muốn
3. Lưu file và refresh trang để xem kết quả

### 6. Ví dụ cấu hình nhanh

#### Loading 1 giây:

```javascript
DURATION: 1000,
SHOW_ON_REFRESH: false,
```

#### Loading 2 giây và luôn hiển thị khi refresh:

```javascript
DURATION: 2000,
SHOW_ON_REFRESH: true,
```

#### Tắt loading hoàn toàn:

```javascript
DURATION: 0,
SHOW_ON_REFRESH: false,
```

## Lưu ý

- Thời gian loading được tính bằng milliseconds (1000ms = 1 giây)
- Nếu set `DURATION: 0`, loading sẽ không hiển thị
- Cấu hình sẽ được áp dụng cho toàn bộ ứng dụng
