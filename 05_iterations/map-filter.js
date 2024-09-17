// An array of numbers from 1 to 10
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Mapping each number in myNumers to a new value by multiplying it by 10
// Then, mapping again to add 1 to each value
// Finally, filtering to keep only numbers that are greater than or equal to 40
const newNums = myNumers
                .map((num) => num * 10)  // Multiply each number by 10
                .map((num) => num + 1)   // Add 1 to each resulting number
                .filter((num) => num >= 40) // Keep only numbers >= 40

// Output the resulting array
console.log(newNums);  // Logs: [41, 51, 61, 71, 81, 91, 101]
