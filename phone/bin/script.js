//convert to other number systems
let dec = parseInt(document.querySelector('#decimal').addEventListener('input',
function (){
let dec = parseInt(document.querySelector('#decimal').value)
let bin = document.querySelector('#binary')
let oct = document.querySelector('#octal')
let hex = document.querySelector('#hexadecimal')
 bin = dec.toString(2)
 oct = dec.toString(8)
 hex = dec.toString(16).toUpperCase()
 binary.value = bin
 octal.value = oct
 hexadecimal.value = hex
 
}))
//clear function 
let clear = document.querySelector('#clear').addEventListener('click', function () {
  let bin = document.querySelector('#binary').value = ''
let oct = document.querySelector('#octal').value = ''
let hex = document.querySelector('#hexadecimal').value = ''
let dec = document.querySelector('#decimal').value = ''
})
