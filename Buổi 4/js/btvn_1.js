// Tạo danh sách users
let users = [
    { id: 1, name: "Xuân đi để lại lá vàng" },
    { id: 2, name: "Jack đi để lại một bầy đóm con" },
    { id: 3, name: "Đám ngồi cứ mãi héo hon" },
    { id: 4, name: "Thời tiết thì chuyển từ hè sang đông" }
];
console.table(users);

// Thêm người dùng vào danh sách
function addUser(id, name) {
    users.push({ id, name });
}
addUser(5, "Hay chưa:)");
console.table(users);

// Cập nhật tên người dùng dựa trên id
function updateUser(id, newName) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i].name = newName;
            break;
        }
    }
}
updateUser(5, "=== Jack ===");
console.table(users);

// Xóa người dùng dựa trên id
function deleteUser(id) {
    let updatedUsers = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].id !== id) {
            updatedUsers.push(users[i]);
        }
    }
    users = updatedUsers;
}
deleteUser(5);
console.table(users);

// Thêm thuộc tính email, xóa thuộc tính age
let person = {
    name: "Mai Ngọc Châu",
    age: 100,
    city: "Hang MU"
};

person.email = "maingocchau@fake_email.com";
delete person.age;

console.log(person);