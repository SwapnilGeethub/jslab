// Check if the user is logged in and temperature value.
const isUserloggedIn = true;
const temperature = 41;

// Example of an if-else condition:
// '===' checks for both value and type equality (strict equality).
// If temperature is exactly 40 (both value and type), this block executes.
if (temperature === 40) {
    console.log("Temperature is 40 degrees.");
} else {
    // Executes if the temperature is not exactly 40.
    console.log("Temperature is not 40 degrees.");
}

console.log("Execute"); // This line will always run after the if-else block.

// Comparison operators: <, >, <=, >=, ==, !=, ===, !==
// '<' is less than, '>' is greater than, '===' is strict equality, '==' checks only value, etc.

const score = 200;

// Simple if statement with a block of code.
// If the score is greater than 100, this block executes.
// 'let' defines a variable scoped to this block.
if (score > 100) {
    let power = "fly";
    console.log(`User power: ${power}`); // Output: "User power: fly"
}

// This line will cause an error because 'power' is declared with 'let' inside the if block and is not accessible here.
// console.log(`User power: ${power}`);

const balance = 1000;

// If balance is greater than 500, both console.log statements will execute.
// Multiple statements can be separated by a comma after the if condition.
if (balance > 500) console.log("test"), console.log("test2");

// Example of multiple 'else if' conditions:
// The first condition that evaluates to true will execute and the rest are skipped.
// Since balance = 1000, only the 'else' block will execute here.
if (balance < 500) {
    console.log("Balance is less than 500.");
} else if (balance < 750) {
    console.log("Balance is less than 750.");
} else if (balance < 900) {
    console.log("Balance is less than 900.");
} else {
    // This block executes since the balance is 1000, which is greater than all previous conditions.
    console.log("Balance is less than 1200.");
}

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// Logical AND (&&) operator checks if all conditions are true.
// Here, '2 == 3' is false, so this block will not execute, even though userLoggedIn and debitCard are true.
if (userLoggedIn && debitCard && 2 == 3) {
    console.log("Allow to buy course"); // This will not run due to '2 == 3' being false.
}

// Logical OR (||) operator: This condition checks if *either* loggedInFromGoogle or loggedInFromEmail is true.
// Since 'loggedInFromEmail' is true, this block will execute.
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in"); // Output: "User logged in"
}
