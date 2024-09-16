const user = {
    username: "hemant",
    price: 999,

    // Method to log a welcome message for the user
    welcomeMessage: function() {
        // 'this' refers to the object (user) that calls the method
        console.log(`${this.username}, Welcome to website`);        
        console.log(this); // logs the current object context (user object)
    }
}

// Uncomment the following lines to see behavior:

// user.welcomeMessage(); // Calls the method, logs the original 'username' (hemant) and object

// user.username = "Sameer"; // Updates the 'username' property of the user object

// user.welcomeMessage(); // Now logs the updated 'username' (Sameer) and the object

// console.log(this); // In the global scope, 'this' refers to the global object in browsers (or undefined in strict mode)

// Function declaration (non-arrow function)
function coffee(){
    let username = "hemant"; // Local variable
    // In a non-method function, 'this' refers to the global object (window in browser)
    console.log(this.username); // undefined, since 'this' doesn't refer to the current function's scope
}

coffee(); // 'this' is the global object, so it tries to access 'username' from the global scope, resulting in undefined

// Function expression (non-arrow function)
const juice = function (){
    let username = "hemant"; // Local variable
    console.log(this.username); // undefined, since 'this' still refers to the global object
}
juice(); // Behaves similarly to 'coffee()' due to non-arrow function

// Arrow function
const milk = () => {
    let username = "hemant"; // Local variable
    console.log(this); // In arrow functions, 'this' is lexically bound (inherits from surrounding context, not global object)
}
milk(); // Logs the outer context (likely the global object or undefined depending on the environment)

// Function with an explicit return
// Different styles of writing the same function using arrow function syntax
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Shortened syntax: implicit return (no need for curly braces or 'return' keyword)
//const addTwo = (num1, num2) => num1 + num2; // implicit return

// Can also use parentheses for implicit return if returning an expression
//const addTwo = (num1, num2) => (num1 + num2); // implicit return

// Returning an object: when returning an object in arrow functions, wrap it in parentheses
const addTwo = (num1, num2) => ({ username: "hemant" }); // implicit return of an object

console.log(addTwo(3,4)); // Logs the object {username: "hemant"}
