function even(numbers) {
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

const originalArray = [2, 7, 4, 9, 10, 13, 16];
const newArray = even(originalArray);

console.log(originalArray);
console.log(newArray);