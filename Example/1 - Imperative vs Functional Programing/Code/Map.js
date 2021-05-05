import _ from "lodash";

const arrayOfStrings = ["house", "banana", "apple", "car", "radio"];

// Suppose you have an array of strings and you need to find the length
// of each string in the array.

// The imperative approach would be:
let arrayOfLengths = [];

for (let index = 0; index <= arrayOfStrings.length; index++) {
  let currentString = arrayOfStrings[index];
  arrayOfLengths.push(currentString.length);
}

console.log(arrayOfLengths);

// Maybe if you in tune with the latest JS syntax you might do:
let arrayOfLengths = [];

for (let currentString in arrayOfLengths) {
  arrayOfLengths.push(currentString.length);
}

console.log(arrayOfLengths); // [5, 6, 5, 3, 5]

// But the problem is still the same: you need to run the program in your head
// to figure out what the result of arrayOfLengths is!

// There is another way - the JavaScript "map" function.
// Map operates on any JavaScript array, accepts a FUNCTION as input, and returns
// a new array where each element if the result of apply that function to the array.

// Sounds confusing? Let's see it in action:
function getStringLength(string) {
  return string.length;
}

const arrayOfLengths = arrayOfStrings.map(getStringLength);
console.log(arrayOfLengths); // [5, 6, 5, 3, 5]

// As you can see, the argument to map is a function, which is applied to each element.
// This is why the result is the same as the imperative approach.

// But we didn't even to define getStringLength if we don't want to.
// We can use anonymous functions to define our function in the same line as our code.
const arrayOfLengths = arrayOfStrings.map((string) => string.length);
console.log(arrayOfLengths); // [5, 6, 5, 3, 5]

// Pretty cool eh? We were able to do all that work we did in the imperative approach
// in single line using functional programming techniques.

// Here's a bit of history before you go:
// Before the days "map" was added to JavaScript, the library "lodash" was created to
// to add useful pure functions to JavaScipt back when it didn't have it.

// You can use Lodash's map in two ways:
_.map(arrayOfStrings, (string) => string.length);
// Or:
_(arrayOfStrings)
  .map((string) => string.length)
  .value();
