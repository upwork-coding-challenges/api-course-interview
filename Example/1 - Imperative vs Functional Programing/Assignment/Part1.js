/**
 * Changes the state of a global variable.
 * Is this a pure or impure function.
 *
 * Answer:
 */
let isSet = false;

function changeStateAndReturnOne() {
  isSet = true;
  return 1;
}

/**
 * Counts the number of even numbers in the array.
 * Is this a pure or impure function?
 *
 * Answer:
 */
function countEvenNumbers(array) {
  let result = [];

  for (let number in array) {
    if (number % 2 === 0) {
      result.push(number);
    }
  }

  return result;
}

/**
 * Prints 'Hello!' to the console.
 * Is this a pure or impure function?
 *
 * Answer:
 */
function logHello() {
  console.log("Hello!");
}

/**
 * Returns the current date as a string.
 * Is this a pure or impure function?
 *
 * Answer:
 */
function getCurrentDate() {
  return new Date().toISOString();
}

/**
 * Adds the sum of all elements in the array as the last element of the array and returns that value.
 * Is this a pure or impure function?
 *
 * Answer:
 */
function sumArrayAndPushToEnd(array) {
  let sum = 0;

  for (let number in array) {
    sum += number;
  }

  array.push(sum);
  return sum;
}
