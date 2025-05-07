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
