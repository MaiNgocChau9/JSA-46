//! Khai báo function
//* Cách 1: Hàm có tên
// Hàm sum: nhận tham số a, b -> trả về tổng của chúng
function sum(a, b) {
    return a + b;
}
// Gọi hàm
console.log(sum(1, 3));

//* Cách 2: Hàm không tên/ẩn danh
// Hàm sum_2: nhận tham số a, b -> trả về tổng của chúng
const sum_2 = function(a, b) {
    return a + b;
};
console.log(sum_2(1, 2));

//! Hàm không có RETURN trả về "undefined"
// Hàm hello: nhận tham số name -> in ra "Hello " + name
const hello = function(name) {
    console.log("Hello " + name);
};
console.log(hello("diep"));

//! Lưu trữ key: value vào localStorage
//* Nếu value không phải chuỗi -> không lưu được
localStorage.setItem("name", {});

//? Mở DevTools -> Application tab -> Local Storage 
// -> Tìm domain của trang -> Kiểm tra giá trị lưu
console.log(localStorage.getItem("name"));