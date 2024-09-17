// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"]

// Loop through each element in the 'coding' array and log the value
// coding.forEach( function (val){
//     console.log(val);  // Logs each element: "js", "ruby", "java", etc.
// })

// Using an arrow function to iterate over each element in 'coding' array
// coding.forEach( (item) => {
//     console.log(item);  // Simplified syntax of the previous example, logs each element
// })

// A named function 'printMe' is defined to log each item
// function printMe(item){
//     console.log(item);  // The function logs the item passed as argument
// }

// Passing 'printMe' as the callback to forEach
// coding.forEach(printMe)  // Calls 'printMe' for each element in the 'coding' array

// Accessing the element, index, and entire array in forEach
// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);  // Logs each item, its index, and the entire array
// })

// An array of objects representing programming languages with name and file extension
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

// Iterate through the 'myCoding' array and log the 'languageName' of each object
myCoding.forEach( (item) => {
    // Access the 'languageName' property of each object in the array
    console.log(item.languageName);  // Logs: "javascript", "java", "python"
})
