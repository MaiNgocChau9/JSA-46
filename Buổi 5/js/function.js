//! Khai báo function
//* Cách 1: Hàm có tên
function tinhTong(a, b) {
    return a + b
} 
// Gọi hàm
console.log(tinhTong(1, 2))

//* Cách 2: Hàm không tên/ẩn danh
const sum = function(a, b) {
    return a + b
}
console.log(sum(1, 2))

//? Không có RETURN hàm trả về "undifined"
