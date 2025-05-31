const apiKey = '0f2bcb22b7565438cd0321df55c56d9e';
const city = 'Ahmedabad'; // Default city

const temp = document.getElementById('temperature');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const icon = document.getElementById('weather-icon');
const button = document.getElementById('refresh-btn');

function getWeather() {
 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  fetch(url)
    .then(res => res.json())
    .then(data => {
      temp.textContent = data.main.temp + ' °C';
      humidity.textContent = data.main.humidity + ' %';
      wind.textContent = data.wind.speed + ' m/s';
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      icon.alt = data.weather[0].description;
    })
    .catch(() => {
      alert('Could not fetch weather data');
    });
}

button.addEventListener('click', getWeather);
getWeather(); // Load weather on page load
