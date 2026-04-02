const number = Number(prompt("Enter an integer:"));
let isPrime = true;

if (number < 2) {
  isPrime = false;
} else {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  document.querySelector("#result").innerHTML = `${number} is a prime number.`;
} else {
  document.querySelector("#result").innerHTML = `${number} is not a prime number.`;
}