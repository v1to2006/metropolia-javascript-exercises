const shouldCalculate = confirm("Should I calculate the square root?");

if (!shouldCalculate) {
  document.querySelector("#result").innerHTML = "The square root is not calculated.";
} else {
  const number = Number(prompt("Enter a number:"));

  if (number < 0) {
    document.querySelector("#result").innerHTML =
      "The square root of a negative number is not defined.";
  } else {
    document.querySelector("#result").innerHTML = `The square root of ${number} is ${Math.sqrt(number)}.`;
  }
}