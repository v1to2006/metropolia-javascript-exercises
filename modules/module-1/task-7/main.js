const diceRollCount = Number(prompt("Enter number of dice rolls:"));
let totalSum = 0;

for (let i = 0; i < diceRollCount; i++) {
  totalSum += Math.floor(Math.random() * 6) + 1;
}

document.querySelector("#result").innerHTML = `Sum of ${diceRollCount} dice rolls is ${totalSum}.`;