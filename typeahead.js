<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Type Ahead 👀</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>

  <form class="search-form">
    <input type="text" class="search" placeholder="City or State">
    <ul class="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
  <script>
    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    let cities = [];

    async function fetchCity() {
      const response = await fetch(endpoint);
      console.log(response);
      const data = await response.json();
      console.log(data);
      cities.push(...data);
      console.log(cities);
    }

    fetchCity();

    function findMatches(wordToMatch, cities) {
      return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
      });
    }

    const searchInput = document.querySelector('.search');
    const list = document.querySelector('.suggestions');

    function displayMatches() {
      const matchedArray = findMatches(this.value, cities);
      const html = matchedArray.map(place => {
        const myRegex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(myRegex, `<span class="hl">${this.value}</span>`);
        const stateName = place.city.replace(myRegex, `<span class="hl">${this.value}</span>`);
        return `<li>
          <span class="name">${cityName}, ${stateName}</span>
          <span class="population">${place.population}</span>
          </li>`;
      }).join('');
      list.innerHTML = html;
    }

    searchInput.addEventListener('change', displayMatches);
    searchInput.addEventListener('keyup', displayMatches);

  </script>
</body>

</html>