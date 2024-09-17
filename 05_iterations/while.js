// Initializing index to 0
let index = 0

// A commented-out while loop that runs until index is less than or equal to 10
// The index is incremented by 2 on each iteration
// while (index <= 10) {
//     console.log(`Value of index is ${index}`);  // Prints the value of index
//     index = index + 2  // Increment index by 2
// }

// Defining an array with superhero names
let myArray = ['flash', "batman", "superman"]

// Initializing arr to 0 for iteration
let arr = 0

// A while loop that iterates through the array and prints each element
// The loop continues until arr is less than the length of the array
while (arr < myArray.length) {
    // Commented-out code to print the array values at the index arr
    // console.log(`Value is ${myArray[arr]}`);
    
    arr = arr + 1  // Increment arr to move to the next element in the array
}

// Initializing score to 11
let score = 11

// do-while loop guarantees execution at least once, even if the condition is false
do {
    console.log(`Score is ${score}`);  // Print the current score
    score++  // Increment score by 1
} while (score <= 10);  // The loop will run as long as score is less than or equal to 10
// In this case, the loop only runs once because score starts at 11
