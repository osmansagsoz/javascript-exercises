// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const html = `
     <div class="playerCard">
     <h2>${name} — ${age}</h2>
     <p>They are ${height} and ${age} years old. In Dog years this person would be ${
      age * 7
    }. That would be a tall dog!</p>
     </div>
    `;
    return html;
  }
  // have that function return html that looks like this:
  // <div class="playerCard">
  //   <h2>NAME — AGE</h2>
  //   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
  // </div>
  
  // make a new div with a class of cards
  const cards = document.createElement('div');
  cards.classList.add('cards');
  // make 4 player cards using generatePlayerCard
  let cardsHTML = generatePlayerCard('Osman', 30, 180);
  cardsHTML += generatePlayerCard('Umay', 30, 158);
  cardsHTML += generatePlayerCard('Çitçit', 30, 187);
  cardsHTML += generatePlayerCard('Abacı', 30, 160);
  
  // append those cards to the div
  cards.innerHTML = cardsHTML;
  // put the div into the DOM just before the wrapper element
  myDiv.insertAdjacentElement('beforebegin', cards);
  // Bonus, put a delete Button on each card so when you click it, the whole card is removed
  
  // select all the buttons!
  // make out delete function
  // loop over them and attach a listener
  