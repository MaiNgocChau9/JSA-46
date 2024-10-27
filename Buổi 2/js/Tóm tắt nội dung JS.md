# JavaScript Cơ Bản

## 1. Input và Output

```javascript
// Hiển thị thông báo
alert("This is a notification!");

// Nhập dữ liệu từ người dùng
const fullName = prompt("Enter your name");
console.log(fullName);

// Hiển thị hộp xác nhận
confirm("Are you human?");
```

## 2. Biến và Phạm Vi (Variable Scope)

### Local Scope với let

```javascript
// Biến chỉ tồn tại trong vòng lặp
for (let index = 0; index < 10; index++) { // 0 - 9
    console.log(index);
}
console.log(index); // Lỗi - không xác định
```

### Global Scope với var

```javascript
// Biến tồn tại cả bên ngoài vòng lặp
for (var index = 0; index < 10; index++) { // 0 - 9
    console.log(index);
}
console.log(index); // In ra: 10
```

### Block Scope với const

```javascript
// Khai báo hằng số
const object = { name: "abc", age: 15 };
// object += {} // lỗi (không thể gán lại giá trị cho hằng)
object.name = "xyz"; // có thể thay đổi thuộc tính của object
console.table(object); // hiển thị dưới dạng bảng
```

## 3. Hàm Built-in

### setTimeout

Thực thi code sau một khoảng thời gian

```javascript
// Cách 1: Sử dụng Arrow Function
setTimeout(() => {
    document.write("<h1>Hello World</h1>");
}, 3000);

// Cách 2: Sử dụng Function thông thường
setTimeout(function () {
    document.write("<h1>Hello World</h1>");
}, 3000);
```

### setInterval

Thực thi code lặp lại theo chu kỳ

```javascript
// Thêm nội dung "Hello" mỗi giây
const id = setInterval(() => {
    document.getElementsByTagName("body")[0].innerHTML += "<h1>Hello</h1>";
}, 1000);

// Thêm nội dung "Bye" mỗi giây
const id2 = setInterval(() => {
    document.getElementsByTagName("body")[0].innerHTML += "<h1>Bye</h1>";
}, 1000);

// Dừng sau 5 lần (5 giây)
setTimeout(() => {
    clearInterval(id);
    // Hàm callback
    setTimeout(() => {
        clearInterval(id2);
    }, 5000);
}, 5000);
```

### Chú thích:

- Thời gian trong `setTimeout` và `setInterval` được tính bằng mili giây (1000ms = 1 giây)
- `clearInterval()` được sử dụng để dừng một interval đang chạy
- HTML DOM (Document Object Model) được sử dụng để thao tác với các phần tử HTML
