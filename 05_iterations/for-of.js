// "for...of" loop is used to iterate over arrays, strings, Maps, and other iterable objects.

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

// Iterating over the elements of an array using "for...of"
for (const num of arr) {
    // Each iteration will give a single element from the array
    // console.log(num);
}

const greetings = "Hello world!"

// Iterating over each character of a string using "for...of"
for (const greet of greetings) {
    // Each iteration will give one character of the string "greetings"
    // console.log(`Each char is ${greet}`)
}

// Maps
// Maps are a collection of key-value pairs, similar to objects, but with better support for iteration.

// Creating a new Map object and adding key-value pairs using map.set(key, value)
const map = new Map()
map.set('IN', "India")                   // 'IN' is the key, "India" is the value
map.set('USA', "United States of America")// 'USA' is the key, full country name is the value
map.set('Fr', "France")                  // 'Fr' is the key, "France" is the value
map.set('IN', "India")                   // Duplicate key 'IN', only one will be stored in the map

// Maps retain the insertion order, so when we loop through them, we get keys and values in order of insertion.

// console.log(map);

// Iterating over a Map with "for...of", which returns key-value pairs
for (const [key, value] of map) {
    // Each iteration returns an array [key, value] from the map
    // console.log(key, ':-', value); // Prints the country code and name
}

// Objects are not directly iterable with "for...of" like arrays or maps
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// The below code would throw an error because objects are not iterable using "for...of".
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
// To iterate over an object, you would typically use "for...in" or Object.entries().

// Example of iterating over an object using Object.entries:
for (const [key, value] of Object.entries(myObject)) {
    // Object.entries() converts the object into an array of key-value pairs
    console.log(key, ':-', value); // Prints each game with its key
}
