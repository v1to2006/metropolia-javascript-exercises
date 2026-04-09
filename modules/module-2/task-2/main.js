const participantCount = Number(prompt('Enter number of participants:'));
const participants = [];

for (let i = 0; i < participantCount; i++) {
  const name = prompt(`Enter name for participant ${i + 1}:`);
  participants.push(name);
}

participants.sort();

const ol = document.getElementById('participant-list');

for (let i = 0; i < participants.length; i++) {
  const li = document.createElement('li');
  li.textContent = participants[i];
  ol.appendChild(li);
}