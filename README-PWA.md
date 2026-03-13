# 📱 Bé Học Vui - PWA Installation Guide

## Hướng dẫn cài đặt PWA (Progressive Web App)

### Bước 1: Tạo Icons

1. Mở file `icons/icon-generator.html` trong trình duyệt
2. Nhấn nút "Tạo và Tải Xuống Tất Cả Icons"
3. Cho phép trình duyệt tải xuống nhiều file
4. Di chuyển tất cả file PNG vào thư mục `icons/`

### Bước 2: Deploy lên Server

PWA cần chạy trên HTTPS. Bạn có thể deploy lên:

- **GitHub Pages**: Miễn phí, hỗ trợ HTTPS
- **Netlify**: Miễn phí, tự động HTTPS
- **Vercel**: Miễn phí, tự động HTTPS
- **Firebase Hosting**: Miễn phí, tự động HTTPS

### Bước 3: Cài đặt trên thiết bị

#### Android (Chrome):
1. Mở website trên Chrome
2. Nhấn vào menu (3 chấm) → "Thêm vào màn hình chính"
3. Hoặc nhấn nút "Cài đặt" khi popup xuất hiện

#### iOS (Safari):
1. Mở website trên Safari
2. Nhấn nút Share (biểu tượng chia sẻ)
3. Chọn "Add to Home Screen"
4. Nhấn "Add"

### Tính năng PWA:

✅ Cài đặt như app native
✅ Hoạt động offline (sau lần truy cập đầu tiên)
✅ Icon trên màn hình chính
✅ Không có thanh địa chỉ khi mở
✅ Tải nhanh hơn
✅ Tự động cập nhật

### Files PWA:

- `manifest.json` - Cấu hình PWA
- `sw.js` - Service Worker (cache offline)
- `icons/` - Icons các kích thước
- `icons/icon-generator.html` - Tool tạo icons

### Test PWA:

1. Mở Chrome DevTools (F12)
2. Tab "Application" → "Manifest"
3. Kiểm tra manifest và icons
4. Tab "Service Workers" → Kiểm tra SW đã đăng ký

### Lưu ý:

- PWA cần HTTPS (trừ localhost)
- Icons phải có đủ kích thước
- Service Worker cache tất cả game pages
- Cập nhật version trong `sw.js` khi có thay đổi
