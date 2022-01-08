// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myList = document.createElement('ul');
// add three list items with the words "one, two, three" in them
// put that list into the above wrapper
const li1 = document.createElement('li');
li1.textContent = 'one';
myList.append(li1);

const li2 = document.createElement('li');
li2.textContent = 'two';
myList.append(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
myList.append(li3);

myDiv.appendChild(myList);
// create an image
const myImage = document.createElement('img');
// set the source to an image
// set the width to 250
// add a class of cute
// add an alt of Cute Puppy
// Append that image to the wrapper
myImage.src = `https://picsum.photos/250`;
myImage.classList.add('cute');
myImage.alt = 'Cute Puppy';
myDiv.appendChild(myImage);
// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myString = `
<div>
<p>Paragraph One</p>
<p>Paragraph Two</p>
</div>
`;
const myFragment = document.createRange().createContextualFragment(myString);

myList.insertAdjacentElement('beforebegin', myFragment.querySelector('div'));
// add a class to the second paragraph called warning
const firstP = document.querySelector('p');
console.log(firstP);
firstP.classList.add('first');
// remove the first paragraph
firstP.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
function generatePlayerCard(name, age, height) {
    const html = `
      <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
      7}. That would be a tall dog!
          <button class="delete" type="button">&times; Delete</button>
      </p>
  
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

// make 4 player cards using generatePlayerCard

// append those cards to the div
// put the div into the DOM just before the wrapper element
// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
