const classes = ["Gryffindor", "Slytherin", "Hufflepuff", "Ravenclaw"]
const randomClass = classes[Math.floor(Math.random() * classes.length)]

const name = prompt("Enter your name");

document.querySelector("#result").innerHTML = `${name}, you are ${randomClass}`