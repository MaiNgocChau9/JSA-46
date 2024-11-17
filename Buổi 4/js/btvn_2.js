const tasks = [
  { id: 1, task: "abc" },
  { id: 2, task: "def" },
  { id: 3, task: "ghi" },
  { id: 4, task: "jkl" },
  { id: 5, task: "mno" },
  { id: 6, task: "pqr" },
  { id: 7, task: "stu" },
  { id: 8, task: "vwx" },
  { id: 9, task: "OMG" },
];

function addTask() {
  // Lấy dữ liệu từ input field
  const task_name = document.querySelector("#task_input");
  // Kiểm tra ngoại lệ
  if (!task_name.value.trim()) {
    alert("Please add content");
    return;
  }

  // Tạo object task
  const id = tasks.length;

  // Tạo id mới
  const objectTask = { id: id, task: task_name.value };

  // Thêm vào danh sách
  tasks.push(objectTask);

  // Cập nhật giao diện
  showTaskList();
}

function editTask(id) {

}

function deleteTask(id) {
    // Get index of object in list
    const ind = 0;
    tasks.map(element, (index) => {
        if(element.id == id) {
            ind = index;
            return;
        }
    })
    if (ind != -1){
        // Delete trong danh sách
        tasks.splice(ind, 1);
        // Show lại list mới
    }
    else {
        alert("Phan tu khong ton tai");
    }
}

function showTaskList() {
    // Get task list in HTML
    const taskList = document.getElementById("task_list");

    // Clear task list
    taskList.innerHTML = "";

    // For loop to add task
    tasks.forEach((element) => {
        const taskItem = document.createElement("li");
        taskItem.id = element.id;
        taskItem.innerHTML = `
        ${element.task}
        <button class="edit_btn">Edit</button>
        <button class="del_btn">Delete</button>
        `;
        // Append the task item to the task list
        taskList.appendChild(taskItem);
    });
}

// Show task list when first load web
showTaskList();

// Add event cho button add
document.getElementById("add_btn").addEventListener("click", function(e){
    e.preventDefault();
    addTask();
}
);