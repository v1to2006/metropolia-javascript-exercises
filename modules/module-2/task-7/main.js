function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

const sides = Number(prompt('Enter number of sides on the dice:'));
const ul = document.getElementById('roll-list');
let result;

do {
  result = rollDice(sides);

  const li = document.createElement('li');
  li.textContent = result;
  ul.appendChild(li);
} while (result !== sides);