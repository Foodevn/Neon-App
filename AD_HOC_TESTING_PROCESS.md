# Quy trình Kiểm thử Ad Hoc

## Tổng quan
Kiểm thử Ad Hoc (exploratory/ad-hoc testing) là kỹ thuật kiểm thử linh hoạt, không theo kịch bản cố định, tập trung vào khám phá lỗi bằng cách vận dụng kinh nghiệm, trực giác và hiểu biết hệ thống. Mục tiêu là tìm nhanh các lỗi thực tế, các tình huống bất ngờ mà các kịch bản có cấu trúc có thể bỏ sót.

## Nguyên lý hoạt động
- Tester tự do khám phá chức năng, luồng và UI dựa trên mục tiêu tìm lỗi.
- Thực hiện thử nghiệm đa dạng (ngẫu nhiên, thao tác sai, thay đổi trạng thái, stress) để kích hoạt lỗi.
- Ghi nhận bước thực hiện khi phát hiện vấn đề; lặp lại và mở rộng thử nghiệm để tái tạo lỗi.

## Lý do chọn kỹ thuật này cho dự án
- Ứng dụng real-time collaborative (Neon App) có nhiều tương tác phi tuyến và trạng thái đồng thời — phù hợp với kiểm thử khám phá.
- Phát hiện nhanh các vấn đề UI/UX, đồng bộ thời gian thực, race condition và edge-case không lường trước.
- Ít tốn thời gian chuẩn bị, phù hợp khi thời gian/nguồn lực hạn chế.

## Ưu điểm
- Tìm lỗi nhanh mà không cần tài liệu chi tiết.
- Thích hợp cho các tính năng tương tác phức tạp và real-time.
- Linh hoạt, dễ thực hiện trong sprint ngắn.

## Hạn chế
- Khó lặp lại chính xác nếu không ghi chép đầy đủ.
- Phụ thuộc vào kỹ năng và kinh nghiệm tester.
- Khó đánh giá độ bao phủ kiểm thử một cách hệ thống.

---

## Phạm vi kiểm thử (Ad Hoc)
- Ưu tiên: các tính năng real-time, đồng bộ hóa board, chia sẻ, đăng nhập/authorization, thao tác vẽ, kéo/thả, lưu board.
- Không kiểm thử: các chức năng ngoài scope version 1.0, các tác vụ quản trị không liên quan trực tiếp tới realtime.

Ví dụ ước lượng công sức (tham khảo):
- Quản lý người & quyền: 3 ngày (exploratory)
- Module môn học / chủ đề: 2 ngày
- Đăng tải bài / đăng ký thuyết trình: 2 ngày
- Kiểm thử an toàn & performance ad hoc: 1.5 ngày

---

## Rủi ro và biện pháp ứng phó (Ad Hoc)
- Rủi ro: phát hiện lỗi khó lặp lại -> Biện pháp: ghi lại video/screenshot, log bước, tăng cường session recording.
- Rủi ro: thiếu cấu trúc -> Biện pháp: dùng charters/mission ngắn định hướng buổi kiểm thử.
- Rủi ro: phủ không đủ -> Biện pháp: kết hợp với test-case có cấu trúc cho các luồng chính.

---

## Yêu cầu kiểm thử (Ad Hoc)
- Ưu tiên các luồng tương tác đa người và trạng thái đồng bộ.
- Mỗi phiên Ad Hoc cần mục tiêu rõ ràng (charter), thời lượng và tiêu chí kết thúc.
- Ghi nhận lỗi chi tiết (môi trường, bước, dữ liệu, bản ghi/console, video).

---

## Chiến lược kiểm thử Ad Hoc
- Sử dụng session-based testing: mỗi session có mục tiêu, thời lượng (15–90 phút) và checklist tối thiểu.
- Áp dụng heuristics: boundary inputs, invalid inputs, rapid state changes, network interruptions, multi-user actions.
- Kết hợp: exploratory + targeted ad hoc (tập trung vào components hay bug-prone areas).
- Mỗi lỗi phát hiện phải có bước tái tạo hoặc video để đảm bảo reproduce.

---

## Công cụ gợi ý
- Ghi lại phiên: OBS, Loom
- Console & network logs: DevTools (Chrome), Sentry
- Tự động hóa nhẹ: Postman (API quick checks), Selenium/Playwright (script ngắn)
- Quản lý lỗi: Jira, GitHub Issues, Excel/Google Sheets (ghi session)
- Môi trường mạng giả lập: Charles, Network Link Conditioner

---

## Môi trường kiểm thử
- Thiết bị: Desktop (Windows, macOS), Tablet, Mobile (iOS, Android)
- Trình duyệt: Chrome (latest), Safari, Firefox, Edge
- Mạng: Localhost, LAN, mạng chậm/gián đoạn (throttling)
- Backend: Dev Convex, staging LiveBlocks keys, Clerk test accounts

---

## Thiết kế kiểm thử (phương pháp cho Ad Hoc)
Nguyên tắc:
- Không cần ca kiểm thử chi tiết trước, nhưng luôn có charter/session goal.
- Ghi nhận các bước quan trọng ngay khi phát hiện bất thường.
Phương pháp hỗ trợ:
- Heuristic tours (CRUD tour, Data tour, Configuration tour, Error handling tour).
- Scenario chaining: kết hợp nhiều thao tác liên tục để tìm race condition.

---

## Các chức năng (ưu tiên kiểm thử bằng Ad Hoc)
- Board real-time: vẽ, di chuyển, xóa, undo/redo, multi-user sync
- Presence & cursors: hiển thị người dùng, tên, màu sắc
- Authentication & access: đăng nhập/đăng xuất, chia sẻ board, quyền truy cập
- Lưu/khôi phục board, export/import
- Performance khi có nhiều user (>5-20)

---

## Tình huống kiểm thử & ví dụ ca kiểm thử (Ad Hoc)
Tình huống 1: Đăng ký thuyết trình (ad hoc exploratory)
- Mục tiêu session: Tìm trường hợp đăng ký thất bại do trạng thái đồng bộ / race
- Thời lượng: 30 phút
- Hành động gợi ý:
  - Tester A đăng nhập, bắt đầu chọn chủ đề; Tester B cùng lúc chọn và đăng ký.
  - Thực hiện thao tác lặp nhanh: đóng/mở modal, refresh trong lúc đăng ký.
  - Thử đăng ký khi user đã bị logout, token hết hạn.
  - Giảm mạng (throttling), thử đăng ký nhiều lần nhanh.
- Ghi nhận:
  - Nếu có lỗi, chụp màn hình, console log, network request và mô tả các bước.

Ví dụ ca Ad Hoc (tóm tắt)
- TC-A01: Thử đăng ký khi 2 user cùng đăng ký song song → Mục tiêu: tìm race.
- TC-A02: Đăng ký khi session hết hạn → Mục tiêu: kiểm tra thông báo và phục hồi.
- TC-A03: Đăng ký trên mạng chậm / disconnect → Mục tiêu: retry & timeout handling.

(Cho mọi tình huống khác, lặp lại cấu trúc: mục tiêu session, hành động gợi ý, mốc thời gian, kết quả mong đợi)

---

## Nguồn lực
- Nhân lực: Test Manager (điều phối session), 1–3 Testers cho mỗi session (nếu cần nhiều user).
- Thiết bị: Desktop, Laptop, Mobile.
- Thời lượng: session 30–90 phút; báo cáo nhanh sau mỗi session.

---

## Mốc thời gian kiểm thử (ví dụ ngắn)
- Sprint exploratory: mỗi module 2–3 session (mỗi session 60 phút).
- Kết thúc sprint: tổng hợp lỗi, phân loại severity, ưu tiên fix.

---

## Sản phẩm kiểm thử
- Báo cáo session (Session Charter, Tester, Thời gian, Mục tiêu).
- Danh sách lỗi reproducible (issue tracker).
- Video/screenshots và console/network logs.
- Tóm tắt coverage ad hoc & đề xuất vùng cần test có cấu trúc.

---

## Đánh giá kết quả và phân tích kỹ thuật
- Tổng hợp: số lỗi phát hiện / session, loại lỗi (sync, UI, validation, performance).
- Đánh giá hiệu quả: lỗi nghiêm trọng/nhẹ, mức độ lặp lại, khả năng reproduce.
- Kết luận áp dụng: ad hoc hiệu quả để tìm lỗi tương tác & real-time; cần kết hợp test-case có cấu trúc để đảm bảo độ bao phủ.

---

## Kết luận
- Ad Hoc testing là phương pháp thích hợp để khám phá nhanh các vấn đề thực tế trên Neon App, đặc biệt với tính năng realtime và nhiều trạng thái đồng thời.
- Khuyến nghị: áp dụng session-based ad hoc hàng sprint, kết hợp ghi chép chi tiết và công cụ recording; phối hợp với kiểm thử hộp đen có cấu trúc cho các luồng quan trọng.


