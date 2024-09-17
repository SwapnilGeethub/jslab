// Loop from 0 to 10
for (let i = 0; i <= 10; i++) {
    const element = i;
    
    // Check if element equals 5
    if (element == 5) {
        // The console.log here is commented out, but it would log "5 is best number"
        // console.log("5 is best number");
    }
    
    // This would log the value of 'element' at each iteration
    // console.log(element);
}

// This will throw an error because 'element' is not defined outside the loop's block scope
// console.log(element);

// Nested loops example
for (let i = 1; i <= 10; i++) {
    // Outer loop: 'i' goes from 1 to 10
    // console.log(`Outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // Inner loop: 'j' goes from 1 to 10 for each iteration of 'i'
        // This logs the inner loop value of 'j' and the current outer loop value of 'i'
        // console.log(`Inner loop value ${j} and outer loop value ${i}`);
        
        // This logs the multiplication of 'i' and 'j' in the form of a times table
        // console.log(i + '*' + j + ' = ' + i * j);
    }
}

// Iterating over an array
let myArray = ["flash", "batman", "superman"];
// Logs the length of the array, which is 3
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    
    // This logs each element of the array, i.e., "flash", "batman", and "superman"
    // console.log(element);
}

// Break and continue example

// Break example (commented out):
// for (let index = 1; index <= 20; index++) {
//     // Stops the loop if the index reaches 5
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break; // Exits the loop completely
//     }
//     // Logs the current value of 'index' until it reaches 5
//     console.log(`Value of i is ${index}`);
// }

// Continue example:
for (let index = 1; index <= 20; index++) {
    // Skips the current iteration when index equals 5
    if (index == 5) {
        console.log(`Detected 5`);
        continue; // Skips to the next iteration without logging index 5
    }
    // Logs the current value of 'index' except when it is 5
    console.log(`Value of i is ${index}`);
}
