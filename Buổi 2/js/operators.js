//! Toán tử số học - Arithmetic (+, -, *, /, %, //, **)

//? Lũy thừa (**)
var a = 12**2;


//? Tiền tố - Prefix (++a, --a)
console.log(a); // 144

console.log(++a) // 145
console.log(--a) // 144


//? Hậu tố - Postfix (a++, a--)
console.log(a); // 144

console.log(a++); // 144 -> 145
console.log(a--); // 144

/*
* Lưu ý quan trọng:
* 1. Cả tiền tố và hậu tố đều thay đổi giá trị của biến
* 2. Sự khác biệt nằm ở thời điểm trả về kết quả:
*    - Tiền tố: Thay đổi giá trị trước -> trả về giá trị mới
*    - Hậu tố: Trả về giá trị cũ trước -> sau đó mới thay đổi giá trị
*/


//! Toán tử gán - Assignment (+=, -=, *=, /=, %=, //=, **=)
var x = 12;
x += 10 // x = x + 10

//! Toán tử so sánh - Comparison (==, ===, !=, !==, >, <, >=, <=)
var a = 10;
var b = 20;

console.log(a == b); // false
console.log(a != b); // true

console.log(a === b); // false
console.log(a !== b); // true

console.log(a > b); // true
console.log(a < b); // false
console.log(a >= b); // true
console.log(a <= b); // false

//? Luôn return -> Boolean (True/False)
/*
* 6 kiểu dữ liệu -> Convert bool -> False (Còn lại là True)
* 0
* False
* Chuỗi rỗng = ""/''
* null
* undefined
* NaN
*/

// const arr = []; // {} "" "0" 
// if (arr) console.log("abc"); 
// else console.log("xyz");

// Example
// const fullName = prompt("Enter your name");
// if (fullName) {
//     console.log(`Your name is ${fullName}`);
// } else {
//     console.log("Please enter your name");
// }

//! Toán tử logic - Logic (&&, ||, !)
//? && (và) - Trả về giá trị bên phải trong biểu thức
// var ketQua = "A" && "B" && "C"; // Trả về giá trị bên phải trong biểu thức
// console.log(result); // C

// var result = null && "B"  && "C";
// console.log(result); // C

//? || (hoặc) - Trả về giá trị đầu tiên không nằm trong 6 giá trị trên
// var result = "A" || "B" || "C";
// console.log("result", result); // "A"

// Nếu cả 2 vế -> Giá trị trả về false -> Lấy cái cuối
// var result = undefined || null || "B" || NaN;
// console.log("result", result); // "B"

//? ! (không phải) - True nếu điều kiện False
// var result = !("" && 0 && "A");
// console.log("result", result); // false