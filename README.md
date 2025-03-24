# Capacitor Temperature Converter

## Giới thiệu

Ứng dụng này là một trình chuyển đổi nhiệt độ đơn giản sử dụng Capacitor, cho phép người dùng nhập nhiệt độ theo độ C và chuyển đổi sang độ F. Ngoài ra, ứng dụng còn hỗ trợ chia sẻ kết quả, hiển thị thông báo cục bộ và lấy vị trí hiện tại của người dùng.

## Yêu cầu hệ thống

- Node.js (>= 14.x)
- npm hoặc yarn
- Capacitor CLI
- React với TypeScript

## Cài đặt

1. Clone repository:
   ```sh
   git clone https://github.com/your-username/capacitor-temp-converter.git
   cd capacitor-temp-converter
   ```
2. Cài đặt các dependencies:
   ```sh
   npm install
   ```
3. Cài đặt Capacitor và thêm nền tảng Android/iOS nếu cần:
   ```sh
   npm install @capacitor/core @capacitor/cli
   npx cap init "CapacitorTempConverter" "com.example.tempconverter"
   npx cap add android
   ```

## Cách chạy ứng dụng

1. Chạy ứng dụng trên trình duyệt:
   ```sh
   npm start
   ```
2. Build ứng dụng và chạy trên thiết bị di động:
   ```sh
   npm run build
   npx cap copy
   npx cap open android  # Hoặc 'ios' nếu chạy trên iOS
   ```

## Các tính năng chính

- Nhập nhiệt độ theo độ C và chuyển đổi sang độ F
- Hiển thị thông báo cục bộ sau khi chuyển đổi
- Chia sẻ kết quả nhiệt độ
- Lấy vị trí hiện tại của người dùng

## Troubleshooting

- Nếu gặp lỗi quyền khi lấy vị trí, hãy đảm bảo đã cấp quyền trong cài đặt thiết bị.
- Nếu ứng dụng không khởi chạy trên thiết bị di động, hãy chạy:
  ```sh
  npx cap sync
  ```

## Đóng góp

Nếu bạn muốn đóng góp, vui lòng tạo pull request hoặc mở issue trên GitHub.

## Giấy phép

MIT License.
