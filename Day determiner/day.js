
function calc(){
    let century = parseInt(document.querySelector("#century").value)
let year = parseInt(document.querySelector("#year").value)
let month = parseInt(document.querySelector("#month").value)
let date = parseInt(document.querySelector("#date").value)
let display = document.querySelector('#results')
   let day = (date + century + month + Math.floor(year/4) + year) %7
   switch (day) {
    case 0:
        display.value = "It was on a Sunday"
        break;
    case 1:
        display.value = "It was on a Monday"
        break;
    case 2:
        display.value = "It was on a Tuesday"
        break;
    case 3:
        display.value = "It was on a Wednesday"
        break;
    case 4:
        display.value = "It was on a Thursday"
        break;
    case 5:
        display.value = "It was on a Friday"
        break;
    case 6:
        display.value = "It was on a Saturday"
        break;
}
}

function clear(){
    let century = document.querySelector("#century").value = '';
    let year = document.querySelector("#year").value = '';
    let month = document.querySelector("#month").value = '';
    let date = document.querySelector("#date").value = '';
    let display = document.querySelector('#results');
    display.value = '';
}
