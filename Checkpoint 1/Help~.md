JavaScript cung cấp rất nhiều **hàm builtin** (hàm tích hợp sẵn) để hỗ trợ lập trình. Dưới đây là danh sách các hàm builtin phổ biến nhất, được chia theo từng nhóm chức năng để dễ hiểu hơn:

---

### 1. **Hàm xử lý chuỗi**

| Hàm                    | Mô tả                                          |
| ----------------------- | ------------------------------------------------ |
| `charAt(index)`       | Lấy ký tự tại vị trí `index`.            |
| `concat(str1, str2)`  | Nối chuỗi `str1` và `str2`.               |
| `includes(substring)` | Kiểm tra chuỗi có chứa `substring`.        |
| `indexOf(substring)`  | Tìm vị trí đầu tiên của `substring`.    |
| `split(separator)`    | Tách chuỗi thành mảng theo `separator`.    |
| `toLowerCase()`       | Chuyển chuỗi về chữ thường.                |
| `toUpperCase()`       | Chuyển chuỗi về chữ hoa.                     |
| `trim()`              | Loại bỏ khoảng trắng đầu và cuối chuỗi. |

---

### 2. **Hàm xử lý số**

| Hàm                   | Mô tả                                          |
| ---------------------- | ------------------------------------------------ |
| `parseInt(string)`   | Chuyển chuỗi sang số nguyên.                 |
| `parseFloat(string)` | Chuyển chuỗi sang số thực.                   |
| `isNaN(value)`       | Kiểm tra giá trị có phải "Not a Number".    |
| `isFinite(value)`    | Kiểm tra giá trị có phải là số hữu hạn. |
| `Number(value)`      | Ép giá trị thành kiểu `Number`.           |

---

### 3. **Hàm toán học (Math)**

| Hàm                    | Mô tả                                            |
| ----------------------- | -------------------------------------------------- |
| `Math.abs(x)`         | Trả về giá trị tuyệt đối của `x`.        |
| `Math.ceil(x)`        | Làm tròn lên số nguyên gần nhất.            |
| `Math.floor(x)`       | Làm tròn xuống số nguyên gần nhất.          |
| `Math.round(x)`       | Làm tròn đến số nguyên gần nhất.           |
| `Math.sqrt(x)`        | Tính căn bậc hai của `x`.                    |
| `Math.random()`       | Sinh số ngẫu nhiên từ 0 đến 1.               |
| `Math.max(a, b, ...)` | Trả về số lớn nhất trong danh sách tham số. |
| `Math.min(a, b, ...)` | Trả về số nhỏ nhất trong danh sách tham số. |
| `Math.pow(base, exp)` | Tính lũy thừa:`base^exp`.                     |

---

### 4. **Hàm xử lý mảng**

| Hàm                     | Mô tả                                                                  |
| ------------------------ | ------------------------------------------------------------------------ |
| `push(item)`           | Thêm phần tử vào cuối mảng.                                        |
| `pop()`                | Xóa và trả về phần tử cuối mảng.                                 |
| `shift()`              | Xóa và trả về phần tử đầu mảng.                                 |
| `unshift(item)`        | Thêm phần tử vào đầu mảng.                                        |
| `splice(start, count)` | Xóa, thêm hoặc thay thế phần tử.                                   |
| `slice(start, end)`    | Lấy một phần của mảng.                                              |
| `map(callback)`        | Áp dụng hàm `callback` cho từng phần tử, trả về mảng mới.    |
| `filter(callback)`     | Lọc phần tử thỏa mãn điều kiện từ `callback`.                 |
| `reduce(callback)`     | Gộp mảng thành một giá trị duy nhất.                              |
| `find(callback)`       | Trả về phần tử đầu tiên thỏa mãn điều kiện từ `callback`. |
| `indexOf(item)`        | Tìm vị trí đầu tiên của `item`.                                 |
| `includes(item)`       | Kiểm tra mảng có chứa `item`.                                      |

---

### 5. **Hàm xử lý ngày giờ (Date)**

| Hàm              | Mô tả                        |
| ----------------- | ------------------------------ |
| `Date.now()`    | Trả về timestamp hiện tại. |
| `new Date()`    | Tạo đối tượng `Date`.   |
| `getFullYear()` | Lấy năm hiện tại.          |
| `getMonth()`    | Lấy tháng (0-11).            |
| `getDate()`     | Lấy ngày (1-31).             |
| `getHours()`    | Lấy giờ (0-23).              |
| `getMinutes()`  | Lấy phút (0-59).             |
| `getSeconds()`  | Lấy giây (0-59).             |

---

### 6. **Hàm xử lý JSON**

| Hàm                    | Mô tả                                         |
| ----------------------- | ----------------------------------------------- |
| `JSON.stringify(obj)` | Chuyển đổi đối tượng thành chuỗi JSON. |
| `JSON.parse(string)`  | Chuyển đổi chuỗi JSON thành đối tượng. |

---

### 7. **Hàm khác**

| Hàm                          | Mô tả                                                       |
| ----------------------------- | ------------------------------------------------------------- |
| `alert(message)`            | Hiển thị hộp thoại cảnh báo.                            |
| `console.log(message)`      | Ghi log vào console.                                         |
| `setTimeout(callback, ms)`  | Thực thi hàm `callback` sau `ms` mili-giây.            |
| `setInterval(callback, ms)` | Thực thi hàm `callback` định kỳ sau `ms` mili-giây. |
| `clearTimeout(id)`          | Hủy một `setTimeout`.                                     |
| `clearInterval(id)`         | Hủy một `setInterval`.                                    |

---

### Mẹo:

Sử dụng kết hợp các hàm này sẽ giúp bạn xử lý linh hoạt trong hầu hết các tình huống lập trình. Nếu cần ví dụ chi tiết, cứ hỏi nhé! 🚀
