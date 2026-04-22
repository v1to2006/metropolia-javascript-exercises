'use strict';

const getJoke = async () => {
  const response = await fetch('https://api.chucknorris.io/jokes/random');
  const joke = await response.json();

  console.log(joke.value);
};

getJoke();
