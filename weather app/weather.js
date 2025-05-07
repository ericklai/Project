let dayElement = document.querySelector('.day');
let day = new Date();
const dayIndex = day.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayIndex];
dayElement.textContent = dayName.toUpperCase();


let timeElement = document.querySelector('.time')
let time = new Date()
let hours = time.getHours()
let minutes = time.getMinutes()
timeElement.textContent = `${hours} : ${minutes}`


let dateElement = document.querySelector('.date')
let date = new Date()
let newDate = date.getDate()
let month = date.getMonth()
const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
let year = date.getFullYear()
dateElement.textContent = `${newDate}/${monthsOfYear[month]}/${year}`
const apiKey = 'https://api.open-meteo.com/v1/forecast?latitude=-1.3034&longitude=37.3481&hourly=temperature_2m'; 

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city) {
        getWeather(city);
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    try {
        const response = await fetch(url);n
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.querySelector('#weather').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather');
    const { city, main, weather } = data;
    weatherResult.innerHTML = `
        <h2>Weather in ${city}</h2>
        <p>Temperature: ${main.temp} °C</p>
        <p>Condition: ${weather[0].description}</p>
    `;
}


const cityCoordinates = {
    "nairobi": { latitude: -1.286389, longitude: 36.817223 },
    "mombasa": { latitude: -4.043477, longitude: 39.668206 },
    "kisumu": { latitude: -0.091700, longitude: 34.768000 },
    "nairobi": { latitude: -1.286389, longitude: 36.817223 },
    "tala": { latitude: -1.3034, longitude: 37.3481 },
    // Add more cities as needed
};


document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value.toLowerCase();
let location = document.querySelector('.city')
.textContent = city.toUpperCase()
    if (city) {
        const coordinates = cityCoordinates[city];
        if (coordinates) {
            getWeather(coordinates.latitude, coordinates.longitude);
        } else {
            alert('City not found. Please enter a valid city name.');
        }
    } else {
        alert('Please enter a city name');
    }
});

async function getWeather(latitude, longitude) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Unable to fetch weather data');
        }
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.querySelector('.weather').innerText = error.message;
    }
}

function displayWeather(data) {
    const weatherContainer = document.querySelector('.weather');
    const temperatures = data.hourly.temperature_2m;

    weatherContainer.innerHTML = '<h2>Hourly Temperatures</h2>';
    temperatures.forEach((temp, index) => {
        if (index < 25) {
            const hour = new Date(data.hourly.time[index]).getHours();
            weatherContainer.innerHTML += `<p>${hour}:00 - ${temp} °C</p>`;
        }
    });
}