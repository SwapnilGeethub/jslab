// Initializing an empty array for user emails
const userEmail = []

// Checking if userEmail exists (i.e., not falsy)
// Since an empty array is a truthy value, the first condition will be true
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// Note: Even though userEmail is an empty array, it will still be truthy.
// In JavaScript, only specific values are considered falsy. 

// Falsy values in JavaScript:
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// Truthy values in JavaScript:
// Non-empty strings, even if they contain '0' or 'false', empty arrays [], empty objects {}, and functions

// To check if the array is actually empty, we check the length:
if (userEmail.length === 0) {
    console.log("Array is empty");
}
// This will log "Array is empty" since userEmail is indeed an empty array.


// Checking if an object is empty
const emptyObj = {}

// Object.keys() returns an array of the object's keys. If the length is 0, the object is empty.
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// This will log "Object is empty" because `emptyObj` has no properties.


// Nullish Coalescing Operator (??) checks for `null` or `undefined`
// It returns the first value that is not null or undefined

let val1;

// Testing different values with the Nullish Coalescing Operator:
// val1 = 5 ?? 10 // Would return 5 because it's not null or undefined
// val1 = null ?? 10 // Would return 10 because null is found, and 10 is the fallback
// val1 = undefined ?? 15 // Would return 15 because undefined is found, and 15 is the fallback

// Multiple ?? operators: only the first non-null/undefined value is returned
val1 = null ?? 10 ?? 20
// Here, it will return 10 since it's the first non-null/undefined value

console.log(val1); // Outputs: 10


// Ternary Operator: Shortened conditional expression
// Syntax: condition ? expression_if_true : expression_if_false

const iceTeaPrice = 100

// Checking if iceTeaPrice is less than or equal to 80
// If true, it logs "less than 80"; if false, it logs "more than 80"
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
// This will log "more than 80" since iceTeaPrice is 100, which is greater than 80.
