// Array of programming languages
const coding = ["js", "ruby", "java", "python", "cpp"];

// .forEach iterates over the array elements
// But note that .forEach doesn't return anything
// Here, 'return item' has no effect on the outcome of the forEach loop
const values = coding.forEach( (item) => {
    // Logs each item in the array
    //console.log(item);
    return item;  // This return is ignored by forEach
});

// values will be undefined because forEach doesn't return any new array
console.log(values); // Output: undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .filter returns a new array with elements that match the condition
// In this case, only numbers greater than 4 will be in the newNums array
// const newNums = myNums.filter( (num) => {
//     return num > 4; // Keeps numbers greater than 4
// });

// Alternatively, you could use .forEach for the same purpose,
// but you'd need to manually push the matching elements into an empty array
// .forEach doesn't create a new array like .filter
const newNums = [];

// Looping through myNums and manually pushing numbers greater than 4
myNums.forEach( (num) => {
    if (num > 4) {  
        newNums.push(num);  // Add numbers greater than 4 to newNums array
    }
});

console.log(newNums);  // Output: [5, 6, 7, 8, 9, 10]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

// Filtering books that belong to the 'History' genre
let userBooks = books.filter( (bk) => bk.genre === 'History');

// Now filtering books that are published after 1995 and are in the 'History' genre
userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History";  // Condition to filter books
});

console.log(userBooks);  
// Output: [{ title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 }]
