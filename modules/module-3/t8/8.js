'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
  const first = Number(num1.value);
  const second = Number(num2.value);
  let answer;

  switch (operation.value) {
    case 'add':
      answer = first + second;
      break;
    case 'sub':
      answer = first - second;
      break;
    case 'multi':
      answer = first * second;
      break;
    case 'div':
      answer = first / second;
      break;
  }

  result.textContent = `Result: ${answer}`;
});
