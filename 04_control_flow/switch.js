// A switch statement is used to perform different actions based on different conditions
// The value of the "key" (or variable) is compared against the "cases"
// When a match is found, the corresponding block of code is executed

const month = "march";  // The variable "month" is set to "march"

switch (month) {
    // The switch compares the value of "month" with each case
    case "jan":
        console.log("January");  // If "month" is "jan", it prints "January"
        break; // break stops the execution of the following cases once a match is found

    case "feb":
        console.log("feb");  // If "month" is "feb", it prints "feb"
        break;

    case "march":
        console.log("march");  // If "month" is "march", it prints "march"
        break;

    case "april":
        console.log("april");  // If "month" is "april", it prints "april"
        break;

    // If none of the above cases match, the default block is executed
    default:
        console.log("default case match");  // This handles any unexpected values
        break;
}

// In this example, since the value of "month" is "march", the third case will be executed,
// and the output will be "march".
