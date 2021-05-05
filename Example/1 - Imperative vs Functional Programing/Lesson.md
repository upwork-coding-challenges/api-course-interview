# Imperative vs Functional Programming

An overview of the differences between imperative and functional techniques, including using map to replace for-loops.

## Introduction

- How would you count all even numbers in an array? Many people would do:

```js
let count = 0;

for (let i = 0; i <= array.length; i++) {
  if (array[i] % 2 === 0) {
    count++;
  }
}

console.log(count);
```

- Problem with this is there are lots of lines to do this relatively simple task
- And you need to simulate the program in your head to understand what is going on.
- This approach is called "imperative", which means using statements to alter a program's state.
- There is another simpler approach to this problem:

```js
const numberOfEven = (array) =>
  array.filter((number) => number % 2 === 0).length;

console.log(numberOfEven(array));
```

- This is called "functional", meaning calling the function will always return the same result for any identical input you give it.
- Functional programming techniques can make your JavaScript code easier to write, read, test, and reason about.

## The pure function

- The heart of the functional program is the "pure function", which is defined as a function which:

1. Given identical inputs will always return the same output.
2. Has no side effect.

- A "side effect" is some change in the state of a program. Examples of side effects include changing global variables, logging, even making HTTP requests.
- While we can rarely eliminate side effects, functional programming allows us to isolate side effects in our programs. This makes our programs much easier to reason about.
- Consider:

```js
let count = 0;

function incrementAndGetCount() {
  this.count += 1;
  return count;
}
```

- Is incrementAndGetCount a pure function? No, because incrementAndGetCount can return a different value given the same input (`incrementAndGetCount()` called once returns 0, `incrementAndGetCount()` called again returns 1, and so on).
- Now consider:

```js
function getTemparatureInCelcius(temperatureInFahrenheit) {
  return ((temperatureInFahrenheit + 32) * 5) / 9;
}
```

- This is a pure function: if I call `getTemparatureInCelcius` with any input multiple times I will always get the same result.
- What about:

```js
function isEven(number) {
  console.log(`Checking if ${number} is even...`);
  return number % 2 === 0;
}
```

- This is NOT a pure function. Even though it does return the same result for each identical input, it affects the program state each time it is called by logging to the console.

## How are functional techniques typically used?

- You will see functional programming used a lot in JavaScript code when dealing with arrays.
- A typically imperative approach is to use a for loop, which uses state to iterate through the array.
- However, you can use built in JavaScript functions to perform the same task with fewer lines of code.
- To see this in action, let's go to the [code sample]('./Code/MapAndFilter.js').

## Conclusion

- Functional programming techniques can help you write fewer lines of code and make your program easier to reason about.
- Use pure functions where the output is always identical to your input where possible so that you can isolate your stateful logic in your program.
- If you need to do something to each element of your array, consider using "map" instead of a for loop. This will make your program more readable and it will take fewer lines of code to solve your problem.
