const diceCount = Number(prompt("Enter number of dice:"));
const wantedSum = Number(prompt("Enter desired sum of eye numbers:"));

const simulationCount = 10000;
let successfulRolls = 0;

for (let i = 0; i < simulationCount; i++) {
  let currentSum = 0;

  for (let j = 0; j < diceCount; j++) {
    currentSum += Math.floor(Math.random() * 6) + 1;
  }

  if (currentSum === wantedSum) {
    successfulRolls++;
  }
}

const probability = (successfulRolls / simulationCount) * 100;

document.querySelector("#result").innerHTML =
  `Probability to get sum ${wantedSum} with ${diceCount} dice is ${probability.toFixed(2)}%`;