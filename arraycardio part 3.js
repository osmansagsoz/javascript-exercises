/*
Callback Methods
*/

// find the first rating that talks about a burger with find()
//  function findFirstBurg(singleFeedback) {
//   return singleFeedback.comment.includes('burg');
//  }

function findByWord(word) {
return function (singleFeedback) {
  return singleFeedback.comment.includes(word);
};
}

const findFirstBurg = (singleFeedback) =>
singleFeedback.comment.includes('burg');
const firstBurger = feedback.find(findFirstBurg);
console.log(firstBurger);
// find all ratings that are above 2 with filter()

const filterGoodRatings = (x) => x.rating > 2;

const goodRatings = feedback.filter(filterGoodRatings);
console.table(goodRatings);
// find all ratings that talk about a burger with filter()
const aboutBurger = feedback.filter(
(burgerComment) =>
  burgerComment.comment.includes('burg') ||
  burgerComment.comment.includes('BURG')
);
console.table(aboutBurger);
// Remove the one star rating however you like!
const constructiveRatings = feedback.filter(
(singleFeedback) => singleFeedback.rating !== 1
);
console.log(constructiveRatings);

// check if there is at least 5 of one type of meat with some()
const someMeat = Object.values(meats).some((meatValue) => meatValue >= 5);
console.log(someMeat);
// make sure we have at least 3 of every meat with every()
const everyMeat = Object.values(meats).every((meatValue) => meatValue >= 3);
console.log(everyMeat);
// sort the toppings alphabetically with sort()
console.log(toppings.sort());
// sort the order totals from most expensive to least with .sort()
function numberSort(a, b) {
return a - b;
}
const sortedTotals = orderTotals.sort(numberSort);
console.log(sortedTotals);
// Sort the prices with sort()
const sortedPrices = Object.entries(prices).sort((a, b) => {
const aPrice = a[1];
const bPrice = b[1];
return aPrice - bPrice;
});

console.table(Object.fromEntries(sortedPrices));