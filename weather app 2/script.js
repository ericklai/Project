let isCelsius = true;
let dayElement = document.querySelector('.day');
let day = new Date();
const dayIndex = day.getDay();
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = daysOfWeek[dayIndex];
dayElement.textContent = dayName.toUpperCase();

function updateClock(){
    let time = new Date()
    let hours = String(time.getHours()).padStart(2, '0');
    let minutes = String(time.getMinutes()).padStart(2, '0');
    let seconds = String(time.getSeconds()).padStart(2, '0');
    let timeElement = `${hours} : ${minutes} : ${seconds}`
    document.querySelector('.time').textContent = timeElement
}

updateClock();
setInterval(updateClock, 1000);

let dateElement = document.querySelector('.date')
let date = new Date()
let newDate = date.getDate()
let month = date.getMonth()
const monthsOfYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
let year = date.getFullYear()
dateElement.textContent = `${newDate}/${monthsOfYear[month]}/${year}`

// const apiKey = `https://api.open-meteo.com/v1/forecast?latitude=-1.3034&longitude=37.3481&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,rain,showers,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_80m,wind_direction_80m,temperature_80m,soil_temperature_18cm&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`;

const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=-1.3034&longitude=37.3481&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,rain,showers,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_80m,wind_direction_80m,temperature_80m,soil_temperature_18cm&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`;

const cityCoordinates = {
    "mombasa": { latitude: -4.043477, longitude: 39.668206 },
    "kisumu": { latitude: -0.091700, longitude: 34.768000 },
    "nairobi": { latitude: -1.286389, longitude: 36.817223 },
    "tala": { latitude: -1.2670262, longitude: 37.3201328 },
    "kangundo": { latitude: -1.3056, longitude: 37.3453 },
    "machakos": { latitude: -1.5177, longitude: 37.2634 },
    "kitui": { latitude: -1.3751, longitude: 37.9952 },
    "nyeri": { latitude: -1.286389, longitude: 36.817223 },
    "ruiru": { latitude: -1.1483, longitude:36.9605 },
    "nakuru": { latitude: -0.3000, longitude:36.0667 },
    "thika": { latitude: -0.4167, longitude:36.9600 },
    "kakamega": { latitude: 0.2822, longitude:34.7540 },

};

document.addEventListener("DOMContentLoaded", () => {
    // Load saved weather data if available
    const savedWeather = localStorage.getItem("weatherData");
    const savedCity = localStorage.getItem("selectedCity");

    if (savedWeather && savedCity) {
        displayWeather(JSON.parse(savedWeather), savedCity);
    }
});

document.getElementById("getCurrentLocation").addEventListener("click", () => {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;

                try {
                    // Call Open-Meteo's reverse geocoding API
                    const geoResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/reverse?latitude=${latitude}&longitude=${longitude}`);
                    const geoData = await geoResponse.json();

                    const locationName = geoData?.results?.[0]?.name || "Your Location";

                getWeather({ latitude, longitude }, locationName);
            } catch (error) {
                alert("Couldn't get location name. Showing weather without name.");
                getWeather({ latitude, longitude }, "Your Location");
            }
        },
            () => {
                alert("Unable to get your location.");
            }
        );
    } else {
        alert("Geolocation not supported by your browser.");
    }
});


document.querySelector('#getWeather').addEventListener('click' , () => {
    let city = document.querySelector('#city').value.trim().toLowerCase()
    
    if (cityCoordinates[city]) {
        getWeather(cityCoordinates[city], city);
    } else {
        alert('Please enter a city name');
    }
})

document.querySelector('#city').addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        document.querySelector('#getWeather').click(); 
    }
});

const loader = document.getElementById("loader");
const getWeather = async (coordinates, city) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.latitude}&longitude=${coordinates.longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,rain,showers,cloud_cover,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,relative_humidity_2m,rain,showers,cloud_cover,cloud_cover_low,cloud_cover_mid,cloud_cover_high,visibility,wind_speed_80m,wind_direction_80m,temperature_80m,soil_temperature_18cm&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,rain_sum,wind_speed_10m_max,wind_direction_10m_dominant&timezone=auto`;

    try {
        loader.removeAttribute("hidden");

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Save data to localStorage
        localStorage.setItem("weatherData", JSON.stringify(data));
        localStorage.setItem("selectedCity", city);

        displayWeather(data, city);
    } catch (error) {
        alert("Error fetching weather data. Please try again.");
    } finally {
        loader.setAttribute("hidden", " ");
    }
};
   

const displayWeather = (data, city) => {
    // const city = document.getElementById('city').value.toLowerCase();

    let location = document.querySelector('.city')
    const temperatureElement = document.querySelector('.temp');
    const temperature = data.current.temperature_2m;
    const displayTemp = isCelsius ? `${Math.round(temperature)}°ᶜ` : `${Math.round(temperature * 9/5 + 32)}°F`;
    temperatureElement.textContent =displayTemp;

    const rainElement = document.querySelector('.rain');
    const {rain} = data.current;
    rainElement.textContent = `Total Rain: ${rain} mm`;

    const showerElement = document.querySelector('.shower');
    const {showers} = data.current;
    showerElement.textContent = `Rainfall: ${showers} mm`;

    const cloudCoverElement = document.querySelector('.cloud-cover');
    let cloudCover = data.current.cloud_cover;
    if (cloudCover == 0){
        cloudCover = `Clear Sky <img src="images/sun (1).png" width = '30px' height = '30px'>`
    }else if(cloudCover > 0 && cloudCover <= 25){
        cloudCover = 'Mostly Sunny'
    }else if(cloudCover > 25 && cloudCover <= 50){
        cloudCover = 'Partly Cloudy'
    }else if(cloudCover > 50 && cloudCover <= 87){
        cloudCover = `Mostly Cloudy <img src="images/cloudy.png" width = '50px' height = '50px'>`
    }else{
        cloudCover = ` Completely Cloudy <img src="images/clouds.png" width = '30px' height = '30px'>`
    }
    cloudCoverElement.innerHTML = cloudCover;

    const elevationElement = document.querySelector('.elevation');
    const {elevation} = data ;
    elevationElement.textContent = `Elevation: ${elevation} m above sea level`;

    const humidityElement = document.querySelector('.humidity');
    const humidity = data.current.relative_humidity_2m;
    humidityElement.textContent = `Humidity: ${humidity} %`;

    const windSpeedElement = document.querySelector('.windSpeed');
    const windSpeed = data.current.wind_speed_10m;
    windSpeedElement.textContent = `Wind-Speed: ${windSpeed} km/h`;

    const windDirectionElement = document.querySelector('.windDirection');
    let windDirection = data.current.wind_direction_10m;
    if (windDirection == 0 ){
        windDirection = 'North'
    }else if(windDirection > 0 && windDirection < 90){
        windDirection = 'North East'
    }else if(windDirection == 90 ){
        windDirection = 'East'
    }else if(windDirection > 90 && windDirection < 180){
        windDirection = 'South East'
    }else if(windDirection == 180){
        windDirection = 'South'
    }else if(windDirection > 180 && windDirection < 270){
        windDirection = 'South West'
    }else if(windDirection == 270){
        windDirection = 'West'
    }else{
        windDirection = 'North West'
    }
    windDirectionElement.textContent = `WindDirection: ${windDirection}`;
   
    let container = document.querySelector('.container')
    let weather = document.querySelector('#weather')
    if (data.current.is_day === 0) {
        container.style.background = 'black';
        // weather.style.background = '#0a0a0a';
        document.body.style.color = 'white';
        location.innerHTML = `${city.toUpperCase()} WEATHER <img src="images/moon-stars.png" width="50px" height="50px">`;

       }else {
        container.style.background = "white";
        document.body.style.color = "black";
        location.innerHTML = `${city.toUpperCase()} WEATHER <img src="images/sun (1).png" width="50px" height="50px">`;

    }

    document.getElementById("toggleUnit").addEventListener("click", () => {
        isCelsius = !isCelsius;
        const savedWeather = JSON.parse(localStorage.getItem("weatherData"));
        const savedCity = localStorage.getItem("selectedCity") || "Your Location";
        if (savedWeather) displayWeather(savedWeather, savedCity);
        document.getElementById("toggleUnit").textContent = isCelsius ? "Switch to °F" : "Switch to °C";
    });
    
      
}




