// Defining an object `myObject` with key-value pairs representing programming languages
const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// Using a `for...in` loop to iterate over the keys in `myObject`
// `key` represents each property (e.g., 'js', 'cpp') in `myObject`
for (const key in myObject) {
    // Uncomment the line below to print each key and its corresponding value
    // Example: "js shortcut is for javascript"
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

// Defining an array `programming` containing shorthand names of various programming languages
const programming = ["js", "rb", "py", "java", "cpp"]

// Using `for...in` to iterate over the indexes of the `programming` array
// In this case, `key` represents the index (0, 1, 2...) of the array
for (const key in programming) {
    // Uncomment the line below to print each element at the current index
    // Example: "js", "rb", "py", etc.
    // console.log(programming[key]);
}

// Defining a `Map` object which stores key-value pairs in a different way than an object
// Maps are iterated using `for...of`, not `for...in`, because `for...in` is for enumerable properties
// const map = new Map()
// map.set('IN', "India") // Adding key 'IN' with value "India"
// map.set('USA', "United States of America") // Adding key 'USA' with value "United States of America"
// map.set('Fr', "France") // Adding key 'Fr' with value "France"
// map.set('IN', "India") // Key 'IN' is added again, but no duplicates are allowed, it simply overwrites

// `for...in` does not work with `Map`. Uncomment the correct loop (e.g., `for...of`) for proper iteration.
// for (const key in map) { 
//     This will not work with Map. Use for...of to iterate over Map entries.
//     console.log(key); 
// }
