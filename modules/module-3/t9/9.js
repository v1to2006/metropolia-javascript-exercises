'use strict';

const calculation = document.querySelector('#calculation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', () => {
  const input = calculation.value.replaceAll(' ', '');
  let operator = '';

  if (input.includes('+')) {
    operator = '+';
  } else if (input.includes('-')) {
    operator = '-';
  } else if (input.includes('*')) {
    operator = '*';
  } else if (input.includes('/')) {
    operator = '/';
  }

  const parts = input.split(operator);
  const first = Number(parts[0]);
  const second = Number(parts[1]);
  let answer;

  switch (operator) {
    case '+':
      answer = first + second;
      break;
    case '-':
      answer = first - second;
      break;
    case '*':
      answer = first * second;
      break;
    case '/':
      answer = first / second;
      break;
    default:
      result.textContent = 'Invalid calculation';
      return;
  }

  result.textContent = `Result: ${answer}`;
});
