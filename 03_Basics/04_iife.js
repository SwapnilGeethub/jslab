// Immediately Invoked Function Expression (IIFE)
// IIFE is a JavaScript function that runs as soon as it is defined.
// It is used to avoid polluting the global namespace and create private scopes.

// Old-style function declaration
// function coffee(){
//     console.log('DB CONNECTED');
// }
// coffee();

// Named IIFE
// This function is defined and immediately executed. 
// The name "coffee" can be used for recursion or debugging purposes.
(function coffee(){ 
    console.log('DB CONNECTED'); // Simulates the process of connecting to a database.
})(); 
// Note: Semi-colon is crucial here to avoid errors if this script is concatenated with other scripts.


// Unnamed (Anonymous) IIFE using arrow function
// IIFE can also be written with arrow functions. Here, we pass a parameter ('hemant') immediately.
// The parameter 'name' receives 'hemant' and logs the second database connection.
( (name) => { 
    console.log('DB Connected Two'); // Another DB connection process is simulated here.
    console.log(`Hello, ${name}`); // Logs a personalized message using the passed name ('hemant').
})('hemant'); 


