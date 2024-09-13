// Create a new Date object with the current date and time
let myDate = new Date();
console.log(myDate.toString());         // Logs date and time in a readable string format
console.log(myDate.toDateString());     // Logs just the date (without time)
console.log(myDate.toLocaleString());   // Logs date and time in a locale-specific format
console.log(typeof myDate);             // Logs the type of myDate (object)

// Create a new Date object for a specific date
// Note: Months are zero-indexed (0 = January, 11 = December)
let myCreatedDate = new Date(2023, 0, 23); // January 23, 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3); // January 23, 2023 at 05:03
let myCreatedDate = new Date('01-14-2024'); // Date format MM-DD-YYYY (Locale specific)
// Console log to show the formatted date
console.log(myCreatedDate.toLocaleString()); // Logs the created date in a locale-specific format

// Get the current timestamp in milliseconds since January 1, 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp);                // Logs the current timestamp
console.log(myCreatedDate.getTime());    // Logs the timestamp for myCreatedDate

// Convert timestamp to seconds (since Date.now() returns milliseconds)
console.log(Math.floor(Date.now() / 1000)); // Logs the current time in seconds

// Create a new Date object with the current date and time
let newDate = new Date();
console.log(newDate);                    // Logs the current date and time
console.log(newDate.getMonth());         // Logs the month (0 = January, 11 = December)
console.log(newDate.getDay());           // Logs the day of the week (0 = Sunday, 6 = Saturday)

// Get the full weekday name (e.g., "Monday")
console.log(newDate.toLocaleString('default', {
    weekday: "long"                     // Format option to get full weekday name
}));
