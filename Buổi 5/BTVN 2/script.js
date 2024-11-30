const form = document.getElementById('profileForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const addressInput = document.getElementById('address');
const profilePictureInput = document.getElementById('profilePicture');

const previewImage = document.getElementById('previewImage');
const previewName = document.getElementById('previewName');
const previewEmail = document.getElementById('previewEmail');
const previewPhone = document.getElementById('previewPhone');
const previewAddress = document.getElementById('previewAddress');

// Load data from localStorage
const loadData = () => {
    const data = JSON.parse(localStorage.getItem('profileData'));
    if (data) {
        nameInput.value = data.name || '';
        emailInput.value = data.email || '';
        phoneInput.value = data.phone || '';
        addressInput.value = data.address || '';
        profilePictureInput.value = data.profilePicture || 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
        
        updatePreview();
    }
};

// Save data to localStorage
const saveData = () => {
    const data = {
        name: nameInput.value,
        email: emailInput.value,
        phone: phoneInput.value,
        address: addressInput.value,
        profilePicture: profilePictureInput.value
    };
    localStorage.setItem('profileData', JSON.stringify(data));
};

// Update preview card
const updatePreview = () => {
    previewImage.src = profilePictureInput.value || 'https://images.unsplash.com/photo-1449247709967-d4461a6a6103?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
    previewName.textContent = nameInput.value || 'Tên';
    previewEmail.textContent = `Email: ${emailInput.value}` || 'Email';
    previewPhone.textContent = `Số điện thoại: ${phoneInput.value}` || 'Số điện thoại';
    previewAddress.textContent = `Địa chỉ: ${addressInput.value}` || 'Địa chỉ';
};

// Form submission
form.addEventListener('submit', (event) => {
    event.preventDefault();
    saveData();
    updatePreview();
    alert('Hồ sơ đã được lưu!');
});

// Load data on page load
loadData();