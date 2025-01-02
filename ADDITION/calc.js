let calc = document.querySelector('#calc').addEventListener('click',
function () {
let display = document.querySelector("#results");
let x = parseInt( document.querySelector("#x").value);
let y = parseInt( document.querySelector("#y").value);
sum = x+y; 
display.textContent = sum;
})

function clearResult() {
  let display = document.querySelector("#results")
let x = document.querySelector("#x").value='';
let y = document.querySelector("#y").value='';
display.textContent = "0";
}

function theme () {
  document.body.classList.toggle('color');
}