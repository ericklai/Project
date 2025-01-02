function calc() {
    let decimal = parseInt(document.querySelector('#decimal').value);
    let bin = document.querySelector('#binary');
    let oct = document.querySelector('#octal');
    let hex = document.querySelector('#hexadecimal');
    binary = decimal.toString(2); 
    bin.value = binary;
    octal = decimal.toString(8)
    oct.value = octal;
    hexadecimal = decimal.toString(16).toUpperCase()
    hex.value = hexadecimal;
}
function clearResult() {
    let bin = document.querySelector('#binary');
    let decimal = document.querySelector('#decimal').value = '';
    let oct = document.querySelector('#octal');
    let hex = document.querySelector('#hexadecimal');
    bin.value ='';
    oct.value ='';
    hex.value ='';
}
