// Array initialization
const myArr = [0, 1, 2, 3, 4, 5];
const myColors = ["Red", "Green", "Yellow", "Blue", "White"];

// Create array using new Array() constructor
const myArr2 = new Array(1, 2, 3, 4, 5);
console.log(myArr2[1]); // Logs 2

// Array methods
// Add elements to the end of the array
// myArr.push(6); // myArr is now [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7); // myArr is now [0, 1, 2, 3, 4, 5, 6, 7]

// Remove the last element from the array
// myArr.pop(); // myArr is now [0, 1, 2, 3, 4, 5, 6]

// Add elements to the beginning of the array
// myArr.unshift(0); // myArr is now [0, 0, 1, 2, 3, 4, 5, 6]

// Remove the first element from the array
// myArr.shift(); // myArr is now [0, 1, 2, 3, 4, 5, 6]

// Check if the array contains a specific value
// console.log(myArr.includes(9)); // Logs false

// Find the index of a specific value
// console.log(myArr.indexOf(3)); // Logs 3

// Convert array to a string, elements separated by commas
// const newArr = myArr.join(); // newArr is "0,1,2,3,4,5,6"

// Logs the array to the console
// console.log(myArr);

// Slice creates a new array from a portion of the original array
console.log("A", myArr);
const myn1 = myArr.slice(1, 3); // Extracts elements from index 1 to 2
console.log(myn1); // Logs [1, 2]
console.log("B", myArr); // Original array remains unchanged

// Splice modifies the original array by adding/removing elements
const myn2 = myArr.splice(1, 3); // Removes 3 elements starting from index 1
console.log("C", myArr); // Modified array
console.log(myn2); // Logs removed elements [1, 2, 3]


