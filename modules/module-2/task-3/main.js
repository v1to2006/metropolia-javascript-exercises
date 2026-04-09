const dogs = [];

for (let i = 0; i < 6; i++) {
  const dogName = prompt(`Enter name for dog ${i + 1}:`);
  dogs.push(dogName);
}

dogs.sort();

const ul = document.getElementById('dog-list');

for (let i = dogs.length - 1; i >= 0; i--) {
  const li = document.createElement('li');
  li.textContent = dogs[i];
  ul.appendChild(li);
}