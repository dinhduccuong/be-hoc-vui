# 🚀 Hướng dẫn Deploy PWA

## Bước 1: Tạo Icons

Mở `icons/icon-generator.html` trong trình duyệt và tải xuống tất cả icons.

## Bước 2: Deploy lên GitHub Pages (Miễn phí)

### Cách 1: Qua GitHub Web Interface

1. Tạo repository mới trên GitHub
2. Upload tất cả files
3. Vào Settings → Pages
4. Source: chọn "main" branch
5. Save
6. Website sẽ có địa chỉ: `https://username.github.io/repo-name`

### Cách 2: Qua Git Command Line

```bash
# Khởi tạo git
git init
git add .
git commit -m "Initial commit - PWA Bé Học Vui"

# Tạo repo trên GitHub rồi:
git remote add origin https://github.com/username/repo-name.git
git branch -M main
git push -u origin main

# Enable GitHub Pages trong Settings
```

## Bước 3: Deploy lên Netlify (Dễ nhất)

1. Truy cập https://netlify.com
2. Đăng ký/Đăng nhập
3. Kéo thả thư mục project vào Netlify
4. Netlify tự động deploy và cấp domain HTTPS
5. Website sẽ có địa chỉ: `https://random-name.netlify.app`

## Bước 4: Deploy lên Vercel

1. Truy cập https://vercel.com
2. Đăng ký/Đăng nhập
3. Import project từ GitHub hoặc upload
4. Deploy tự động
5. Website sẽ có địa chỉ: `https://project-name.vercel.app`

## Bước 5: Test PWA

1. Mở website trên điện thoại
2. Chrome/Safari sẽ hiện popup "Add to Home Screen"
3. Hoặc nhấn nút "Cài đặt" trên website
4. Icon sẽ xuất hiện trên màn hình chính

## Kiểm tra PWA Score

Sử dụng Lighthouse trong Chrome DevTools:
1. F12 → Tab "Lighthouse"
2. Chọn "Progressive Web App"
3. Click "Generate report"
4. Mục tiêu: 90+ điểm

## Cập nhật PWA

Khi có thay đổi:
1. Sửa code
2. Tăng version trong `sw.js`: `be-hoc-vui-v2`
3. Deploy lại
4. Service Worker tự động cập nhật

## Lưu ý quan trọng:

✅ PWA cần HTTPS (GitHub Pages/Netlify/Vercel tự động có)
✅ Manifest.json phải có đủ thông tin
✅ Icons phải có đủ kích thước
✅ Service Worker phải đăng ký thành công
✅ Start URL phải hoạt động

## Test Local với HTTPS:

```bash
# Cài đặt http-server
npm install -g http-server

# Chạy với SSL
http-server -S -C cert.pem -K key.pem

# Hoặc dùng Python
python -m http.server 8000
```

Sau đó test trên `http://localhost:8000` (localhost không cần HTTPS)
