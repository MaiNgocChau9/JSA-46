const daySo = [1, 8, 15, 22, 9, 16, 5, 30, 11];
const nguong = 10;

let soChan = [];
let soLe = [];
let tongChan = 0;
let tongLe = 0;
let dem_lon_hon_nguong = 0;

for (let so of daySo) {
    if (so % 2 === 0) {
        tongChan += so;
        soChan.push(so);
    } else {
        tongLe += so;
        soLe.push(so);
    }

    if (so > nguong) {
        dem_lon_hon_nguong++;
    }
}

console.log("Tổng các số chẵn:", tongChan);
console.log("Danh sách các số chẵn là:", soChan);
console.log("Tổng các số lẻ:", tongLe);
console.log("Danh sách các số lẻ là:", soLe);
console.log("Số lượng các số lớn hơn", nguong, "là:", dem_lon_hon_nguong);