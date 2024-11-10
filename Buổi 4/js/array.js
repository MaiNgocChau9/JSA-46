//! Khởi tạo
var arr = [1, 2.5, 3, "a", function () {}, {}, null, undefined];
var arr2 = new Array([1, 2.5, 3, "a", function () {}, {}, null, undefined]);
console.log(typeof arr);
console.log(Array.isArray(arr)); // true
console.log(Array.isArray({})); // false

//! Truy xuất mảng
console.log(arr.length);
console.log(arr[4]); // Lấy phần tử theo index

//! Các hàm bổ trợ
 //! Lỗi khi clone/copy array
 var clone_arr = arr;
 clone_arr[1] = "abc";

 console.table(clone_arr);
 console.table(arr);
  //* => Spread operator
 var clone = [...arr2];
 clone.push(10);
 console.table(clone);
 console.table(arr2);

 //! Tostring
 console.log(arr.toString());

 //! Join
 var arr1 = [1, 2, 3];
 console.log("join", arr1.join("-"));

 //! Pop
 arr1.pop(); // Xóa phần tử cuối cùng - Return lại list sau khi đã xóa phần tử
 [].pop() // undefined
  
 //! Shift - Xóa phần tử đầu tiên của mảng + return lại phần tử đã xóa
 console.log(arr.shift());
 console.log([].shift()); // undefined
 
 //! Unshift - Thêm phần tử vào vị trí đầu tiên trong mảng + return độ dài mới
 console.log(arr.unshift("abc"));

 //! Splicing
 var subArr = arr.splice(1, 2); // Xóa 2 phần tử tính từ index=1
 console.log(subArr);

 var subArr1 = arr.splice(1, 0, 6); // Chèn thêm 6 phần tử vào vị trí thứ nhất, 0 là không xóa ai
 console.log(subArr1);

 //! Thay thế vị trí thứ 1 thành 6
 var subArr2 = arr.splice(1, 1, 6);
 console.log(subArr2);

 //! Concat
 //* Nối mảng: Trả về mảng mới sau khi nối
 var arr3 = [5, 6, 7];
 const a = arr3.concat([1, 2, 3]);
 console.table(a);

 //* Slicing
 // Cắt từ phần tử vị trí -2 (2 phần tử cuối) nhưng do vị trí kết thúc là 2 
 // nên trả về mảng rỗng vì điểm bắt đầu nằm sau điểm kết thúc.
 const b = arr3.slice(-2, 2); 
 console.log(b);