/**
 * Returns an array where each element in the input array is doubled.
 */
function double(array) {
  // TODO: Refactor to use "map"
  let result = [];

  for (let index = 0; index <= array.length; index++) {
    let currentNumber = array[index];
    result.push(currentNumber * 2);
  }

  return result;
}

/**
 * Given an array of strings, return an array of booleans
 * indicating whether the string element has even length.
 *
 * For example arrayOfIsEvenStrings(['hello', 'even', 'car'])
 * would return [false, true, false].
 */
function arrayOfIsEvenStrings(arrayOfStrings) {
  // TODO: Refactor to use "map"

  let stringLengths = [];
  let result = [];

  for (let string in arrayOfStrings) {
    stringLengths.push(string.length);
  }

  for (let length in stringLengths) {
    result.push(length % 2 === 0);
  }

  return result;
}

/**
 * Given an array of strings, return an array containing the lengths of only
 * the even string lengths.
 *
 * For example getCountsOfEvenStrings(['hello', 'even', 'car', 'nineteen'])
 * would return [2, 8].
 *
 * HINT: Use what you know about "map" to learn about the JavaScript "filter" function:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */
function getCountsOfEvenStrings(arrayOfStrings) {
  // TODO: Refactor to use "map" and "filter"

  let result = [];

  for (let string in arrayOfStrings) {
    if (string.length % 2 === 0) {
      result.push(string.length);
    }
  }

  return result;
}
