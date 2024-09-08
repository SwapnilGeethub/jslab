// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

//Never compare two separate datatypes
// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

/**
 * The reason is that an equality check == and comparisons > < >= <= work differently.
 * Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.
 */

// ===

console.log("2" === 2); //false: datatype is different




