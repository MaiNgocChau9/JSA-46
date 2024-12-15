const cityInput = document.getElementById('city');
const getWeatherButton = document.getElementById('get-weather');
const getLocationButton = document.getElementById('get-location');
const weatherInfoDiv = document.getElementById('weather-info');

getWeatherButton.addEventListener('click', getWeatherByCity);
getLocationButton.addEventListener('click', getLocation);

function displayWeather(data) {
    if (!data) {
        weatherInfoDiv.innerHTML = "Không có thông tin thời tiết để hiển thị.";
        return;
    }
    const weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const weatherInfo = `
        <h2>Thời tiết tại <strong>${data.name}, ${data.sys.country}</strong></h2>
        <img src="${weatherIcon}" alt="Weather Icon">
        <p>Nhiệt độ: ${data.main.temp}°C</p>
        <p>Trạng thái: ${data.weather[0].description.toUpperCase()}</p>
        <p>Độ ẩm: ${data.main.humidity}%</p>
    `;
    weatherInfoDiv.innerHTML = weatherInfo;
}

function getWeatherByCity() {
    const city = cityInput.value.trim();
    if (city) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6b414aacb4da692f1ff7c8bb891f0c85`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`Xin lỗi, đã xảy ra sự cố <br> ${response.status}: ${response.statusText}`);
                }
            })
            .then(data => {
               displayWeather(data);
            })
            .catch(error => {
                weatherInfoDiv.innerHTML = `Lỗi: ${error.message}`;
            });
    } else {
        weatherInfoDiv.innerHTML = 'Vui lòng nhập tên thành phố';
    }
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
            // Gọi API để lấy thông tin thời tiết theo định vị
            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=6b414aacb4da692f1ff7c8bb891f0c85`)
                .then(response => response.json())
                .then(data => {
                  displayWeather(data);
                })
                .catch(error => {
                    weatherInfoDiv.innerHTML = `Lỗi: ${error.message}`;
                });
        });
    } else {
        weatherInfoDiv.innerHTML = 'Trình duyệt không hỗ trợ định vị';
    }
}