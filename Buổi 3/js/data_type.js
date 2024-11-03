//! 1. Kiểu dữ liệu nguyên thủy: Primitive data
//! Lưu vào vùng nhớ RAM: Khi gán lại giá trị -> Tạo ra 1
//! Vùng nhớ mới để lưu value -> Gọi là nguyên thủy
/*
 * Number
 * String 
 * Boolean
 * Undefined (không sử dụng = )
 * Null
 * Symbol - ES6
*/

console.log(typeof 1);
console.log(typeof null); // object

//! 2. Dữ liệu phức tạp: Complex Data
/*
 * Function
 * Object types (Objects, Arrays)
*/

var my_func = function () {
    console.log("First");
}

console.log(typeof my_func); // function
console.log(typeof new Array(10)); // object

 //? Toán tử so sánh (!==, ===)
 console.log(1 !== "1"); // true
 console.log(1 === "1"); // false