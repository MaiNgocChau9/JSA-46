//! Các loại vòng lặp trong JavaScript

//* 1. For loop - Lặp với điều kiện xác định
console.log("For loop:");
for (let i = 0; i < 3; i++) {
    console.log(`Lần lặp thứ ${i + 1}`);
}
console.log();

//* 2. While loop - Lặp khi điều kiện đúng
console.log("While loop:");
let count = 0;
while (count < 3) {
    console.log(`Đếm: ${count + 1}`);
    count++;
}
console.log();

//* 3. Do-while loop - Thực hiện ít nhất 1 lần
console.log("Do-while loop:");
let num = 0;
do {
    console.log(`Số: ${num + 1}`);
    num++;
} while (num < 3);
console.log();

//* 4. For...in loop - Duyệt qua key của object
console.log("For...in loop:");
const person = {
    name: "Châu",
    age: 25,
    city: "Hà Nội"
};
for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
console.log();

//* 5. For...of loop - Duyệt qua các phần tử của mảng
console.log("For...of loop:");
const colors = ["Đỏ", "Xanh", "Vàng"];
for (let color of colors) {
    console.log(color);
}
console.log();

//* 6. forEach - Phương thức lặp qua mảng
console.log("forEach loop:");
colors.forEach((color, index) => {
    console.log(`Màu ${index + 1}: ${color}`);
});
