/*
      Static Methods
    */

    // Array.of();
    Array.of('Osman', 'Sağsöz');
    // Make a function that creates a range from x to y with Array.from();
    function createRange(start, end) {
      const range = Array.from({ length: end - start + 1 }, (item, index) => index);
      return range;
    }

    // Check if the last array you created is really an array with Array.isArray();
    const myRange = createRange(4, 6);
    console.log(Array.isArray(myRange));

    // Take the meats object and make three arrays with Object.entries(), Object.keys, Object.values()
    console.log(Object.entries(meats));
    console.log(Object.keys(meats));
    console.log(Object.values(meats));

    /*
      Instance Methods
    */

    // Display all bun types with " or " - use join()
    console.log(buns.join(' or '));
    // We have a string "hot dogs,hamburgers,sausages,corn" - use split() to turn it into an array
    const myString = 'hot dogs,hamburgers,sausages,corn';
    console.log(myString.split(','));

    // take the last item off toppings with pop()
    toppings.pop();
    console.log(toppings);
    // add it back with push()
    toppings.push('cheese');
    console.log(toppings);
    // take the first item off toppings with shift()
    toppings.shift();
    console.log(toppings);
    // add it back in with unshift()
    toppings.unshift('Mushrooms');
    console.log(toppings);
    // Do the last four,but immutable (with spreads and new variables)
    const newToppings = toppings.slice(0, toppings.length - 1);
    console.log(newToppings);
    console.log(toppings);
    const pushToppings = [...newToppings, 'Cheese'];
    // const pushToppings = [...newToppings, toppings[toppings.length - 1]];
    console.log(pushToppings);
    const shiftToppings = toppings.slice(1, toppings.length);
    console.log(shiftToppings);
    const unshiftToppings = ['Mushrooms', ...shiftToppings];
    console.log(unshiftToppings);

    // Make a copy of the toppings array with slice()
    const copy1 = toppings.slice(0);
    console.log(copy1);
    // Make a copy of the toppings array with a spread
    const copy2 = [...toppings];
    console.log(copy2);
    // take out items 3 to 5 of your new toppings array with splice()
    const removed = copy2.splice(2, 3);
    console.log(removed);
    // find the index of Avocado with indexOf() / lastIndexOf()
    const avoIndex = copy2.indexOf('Avocado');
    console.log(avoIndex);
    // Check if hot sauce is in the toppings with includes()
    copy1.includes('Hot Sauce');
    // add it if it's not
    copy1.push('Hot Sauce');
    console.log(copy1);
    // flip those toppings around with reverse()
    const reversed = copy1.reverse(); // mutable
    // const copy1reversed = [...copy1].reverse();
    console.log(reversed);
