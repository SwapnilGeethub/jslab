// Arrays of Marvel and DC heroes
const marvelHeros = ["Thor", "Ironman", "Spiderman"];
const dcHeros = ["superman", "flash", "batman"];

// Example of adding an array to another array (nested)
marvelHeros.push(dcHeros); // Adds dcHeros as a nested array inside marvelHeros
console.log(marvelHeros); // Logs: ["Thor", "Ironman", "Spiderman", ["superman", "flash", "batman"]]
console.log(marvelHeros[3][1]); // Logs: "flash" (second item in the nested array)

// Concatenate two arrays into one new array
const allHeros = marvelHeros.concat(dcHeros); // Combines marvelHeros and dcHeros into a new array
console.log(allHeros); // Logs combined array with nested dcHeros

// Spread syntax to merge arrays into a new array (flat structure)
const allNewHeros = [...marvelHeros, ...dcHeros]; // Combines arrays into one flat array
console.log(allNewHeros); // Logs merged array without nesting

// Example of nested arrays
const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// Flatten nested arrays into a single array
const realAnotherArray = anotherArray.flat(Infinity); // Flattens all levels of nesting
console.log(realAnotherArray); // Logs: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// Check if a value is an array
console.log(Array.isArray("red")); // Logs: false (not an array)
console.log(Array.isArray([1, 2, 3])); // Logs: true (is an array)

// Create arrays from various inputs
console.log(Array.from("Yellow")); // Logs: ["Y", "e", "l", "l", "o", "w"] (from string to array)
console.log(Array.from({ name: "Swapnil" })); // Logs: [undefined] (object with no length property)

// Create a new array with the given elements
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3)); // Logs: [100, 200, 300] (creates array from individual values)

