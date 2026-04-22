'use strict';

const form = document.querySelector('#search-form');
const queryInput = document.querySelector('#query');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = queryInput.value.trim();

  if (!query) {
    return;
  }

  const response = await fetch(`https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`);
  const shows = await response.json();

  console.log(shows);
});
