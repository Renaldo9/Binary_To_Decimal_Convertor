const binary = document.getElementById("binary");
const decimal = document.getElementById("decimal");

function Convert() {
  var binaryInput = binary.value;
  var binaryFinal = 0;
  for (let i = 0; i < binaryInput.length; i++) {
    let element = binaryInput[binaryInput.length - 1 - i];
    let binaryConvert = parseFloat(element) * Math.pow(2, i);

    binaryFinal += binaryConvert;
  }

  decimal.textContent = binaryFinal;
}

function validateBinary(input) {
  input.value = input.value.replace(/[^01]/g, "");
}
