'use strict';

const form = document.querySelector('#search-form');
const queryInput = document.querySelector('#query');
const results = document.querySelector('#results');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = queryInput.value.trim();

  if (!query) {
    return;
  }

  const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${encodeURIComponent(query)}`);
  const jokes = await response.json();

  results.innerHTML = '';

  for (const joke of jokes.result) {
    const article = document.createElement('article');
    const paragraph = document.createElement('p');

    paragraph.textContent = joke.value;
    article.append(paragraph);
    results.append(article);
  }
});
