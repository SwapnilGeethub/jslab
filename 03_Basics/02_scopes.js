// Variable declaration using var, let, and const
var c = 300; // 'var' has function or global scope
let a = 300; // 'let' is block-scoped

if (true) {
    let a = 10; // New block-scoped 'a' within this if-block, not affecting outer 'a'
    const b = 20; // 'b' is block-scoped, only accessible within this if block
    var c = 30;  // 'var' is function or globally scoped, this re-declares 'c' from the outer scope
    console.log("Inner: ", a);  // Output: Inner: 10 (block-scoped variable a)
    
}

//console.log(a); // Would print 300, as 'a' outside the block is not affected by the inner block's 'a'
//console.log(b); // Error: 'b' is block-scoped and not accessible here
//console.log(c); // Output: 30, as 'var' allows 'c' to be reassigned inside the block, affecting the outer 'c'


// Nested functions and lexical scope
function one(){
    const username = "Suresh";  // 'username' is scoped to the 'one' function

    function two(){
        const website = "youtube"; // 'website' is scoped to the 'two' function
        console.log(username); // Output: "Suresh", 'username' is accessible here due to closure (lexical scoping)
    }
    
    //console.log(website); // Error: 'website' is not accessible here, since it's scoped to 'two'
    
    two(); // Calls the inner function 'two'
}

//one(); // Uncommenting this will execute the 'one' function, showing closure in action


// Another example of block scoping with if-statements
if (true) {
    const username = "hemant";  // Block-scoped constant 'username'
    if (username === "hemant") {
        const website = "youtube";  // Block-scoped 'website'
        console.log(username + website);  // Output: "hemantyoutube"
    }
    //console.log(website); // Error: 'website' is not accessible outside the inner block
}
//console.log(username); // Error: 'username' is block-scoped and not accessible outside the if-block


// ******** Interesting Example **********************
// Function hoisting allows calling functions before they are defined
addOne(5);  // Output: 6
function addOne(num) {
    return num + 1; // This function declaration is hoisted, so it's available before the definition
}

//addTwo(5);  // Error: Cannot access 'addTwo' before initialization
const addTwo = function (num) {
    return num + 2; // This is a function expression, not hoisted like function declarations
}
