const form = document.getElementById('userForm');
const infoList = document.getElementById('infoList');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    const user = {name, email};
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    form.reset();
    displayStoredInfo();
});

function displayStoredInfo() {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    infoList.innerHTML = '';

    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `Name: ${user.name}, Email: ${user.email}`;
        infoList.appendChild(li);
    });
}

displayStoredInfo();