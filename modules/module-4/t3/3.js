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

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
  const shows = await response.json();

  results.innerHTML = '';

  for (const tvShow of shows) {
    const article = document.createElement('article');
    const name = document.createElement('h2');
    const link = document.createElement('a');
    const image = document.createElement('img');
    const summary = document.createElement('div');

    name.textContent = tvShow.show.name;

    link.href = tvShow.show.url;
    link.target = '_blank';
    link.textContent = 'Show details';

    image.src = tvShow.show.image?.medium || '';
    image.alt = tvShow.show.name;

    summary.innerHTML = tvShow.show.summary || 'No summary available.';

    article.append(name, link, image, summary);
    results.append(article);
  }
});
