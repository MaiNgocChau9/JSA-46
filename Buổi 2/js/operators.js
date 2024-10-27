//! Toán tử số học - Arithmetic (+, -, *, /, %, //, **)

//? Lũy thừa (**)
var a = 12**2;


//? Tiền tố - Prefix (++a, --a)
console.log(a); // 144

console.log(++a) // 145
console.log(--a) // 144


//? Hậu tố - Postfix (a++, a--)
console.log(a); // 144

console.log(a++); // 145
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