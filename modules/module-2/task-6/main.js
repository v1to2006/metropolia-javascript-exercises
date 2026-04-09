function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

const ul = document.getElementById('roll-list');
let result;

do {
  result = rollDice();

  const li = document.createElement('li');
  li.textContent = result;
  ul.appendChild(li);
} while (result !== 6);