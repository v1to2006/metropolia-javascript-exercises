const number1 = Number(prompt("Enter first number:"));
const number2 = Number(prompt("Enter second number:"));
const number3 = Number(prompt("Enter third number:"));

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.querySelector("#result").innerHTML = `
  Sum: ${sum}<br>
  Product: ${product}<br>
  Average: ${average}
`;