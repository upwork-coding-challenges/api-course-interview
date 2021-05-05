/**
 * Changes the state of a global variable.
 * Is this a pure or impure function.
 *
 * Answer: Impure. While the function always has the same result,
 * it has a side effect on a global variable.
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
 * Answer: Pure. Even though there are imperative for-loops in this function,
 * it still meets the definition of a pure function since there are no side effects and
 * any identical array will produce the same output.
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
 * Answer: Impure. Even though the function result is always the same,
 * logging to the console is considered a side effect.
 */
function logHello() {
  console.log("Hello!");
}

/**
 * Returns the current date as a string.
 * Is this a pure or impure function?
 *
 * Answer: Impure. The result of the function called on one day is
 * different when called again the next day.
 */
function getCurrentDate() {
  return new Date().toISOString();
}

/**
 * Adds the sum of all elements in the array as the last element of the array and returns that value.
 * Is this a pure or impure function?
 *
 * Answer: Impure. Even though for the same array the function will always return
 * the same result, modifying an input variable in this way is considered as side effect.
 */
function sumArrayAndPushToEnd(array) {
  let sum = 0;

  for (let number in array) {
    sum += number;
  }

  array.push(sum);
  return sum;
}
