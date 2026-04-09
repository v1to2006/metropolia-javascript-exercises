const numbers = [];

while (true) {
  const num = Number(prompt('Enter a number:'));

  if (numbers.includes(num)) {
    alert('The number has already been given.');
    break;
  }

  numbers.push(num);
}

numbers.sort((a, b) => a - b);

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}