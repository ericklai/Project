let decimalInput = document.getElementById('decimal');
let result = document.getElementById('result');

decimalInput.addEventListener('input', () => {
  let decimal = decimalInput.value;
  let binary = (decimal => {
    let binaryString = '';
    while (decimal > 0) {
      binaryString = (decimal % 2) + binaryString;
      decimal = Math.floor(decimal / 2);
    }
    return binaryString;
  })(parseInt(decimal, 10));

  result.textContent = ` ${binary}`;
});
document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("decimal").value = "";
  document.getElementById("result").textContent = "0";
});