 
    let dec = parseInt(document.querySelector('#decimal')
    .addEventListener('input', 
        function(){
    let dec = parseInt(document.querySelector('#decimal').value)
    let bin = document.querySelector('#binary');
    let oct = document.querySelector('#octal');
    let hex = document.querySelector('#hexadecimal');
    binary = dec.toString(2); 
    bin.value = binary;
    octal = dec.toString(8)
    oct.value = octal;
    hexadecimal = dec.toString(16).toUpperCase()
    hex.value = hexadecimal;
    }))

function clearResult() {
    let bin = document.querySelector('#binary');
    let dec = document.querySelector('#decimal').value = '';
    let oct = document.querySelector('#octal');
    let hex = document.querySelector('#hexadecimal');
    bin.value ='';
    oct.value ='';
    hex.value ='';
}
