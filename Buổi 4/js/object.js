//! Khai báo (Declare)
var myObject = {
    fullName: "Mai Ngọc Châu",
    age: 13
}

//! Xây dựng đối tượng (Object constructor)
//! Định nghĩa đối tượng

//! Declaration function
var User_A = function () {};

//! Expression function
function User(firstName, lastName, ava) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.ava = ava;

    this.getName = function () {
        return this.firstName + " " + this.lastName;
    }
}

//! Tạo đối tượng
var me = new User("Chau", "Ngoc", "...");
console.table(me);
console.log(me.constructor === User);
console.log(me.__proto__);

//! Object thường
const student = {name: "Mai Ngọc Châu", age: 13}
console.table(student);
console.log(student.constructor);
console.log(student.__proto__);

/*
    * Nếu đối tượng tạo từ object constructor => Object thường
    * Khi in đối tượng sẽ có thêm phần __proto__ (Prototype) => Mở ra constructor
*/

//! Thêm thuộc tính
me.class = null; 
 //* <object>.<key mới> = <giá trị>
console.table(me);
console.log(me.__proto__);

//! Object Prototype
//* Thêm 1 thuộc tính
// Không nhận được giá trị truyền vào từ constructor
User.prototype.email = "abc@gmail.com";
User.prototype.getEmail = function(){
    return this.email;
};
console.table(me);

const other = new User("abc", "abc", "...");
console.table(other);

//! Read, Update
me.firstName = "ABC";
me["lastName"] = "XYZ";
console.table(me);

console.log(me["abc"]); // undefined
console.log(me.abc?.id); // undefined

//! Delete
delete me["class"]; 
delete me.ava;
console.table(me);