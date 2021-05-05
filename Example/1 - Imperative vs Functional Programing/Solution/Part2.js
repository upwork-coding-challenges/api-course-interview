/**
 * Returns an array where each element in the input array is doubled.
 */
function double(array) {
  return array.map((number) => number * 2);
}

/**
 * Given an array of strings, return an array of booleans
 * indicating whether the string element has even length.
 *
 * For example arrayOfIsEvenStrings(['hello', 'even', 'car'])
 * would return [false, true, false].
 */
function arrayOfIsEvenStrings(arrayOfStrings) {
  return arrayOfStrings
    .map((string) => string.length)
    .map((length) => length % 2 === 0);

  // Or simply:  arrayOfStrings.map(string => string.length % 2 === 0);
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
  return arrayOfStrings
    .map((string) => string.length)
    .filter((number) => number % 2 === 0);
}
