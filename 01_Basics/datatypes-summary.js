/**
 * Primitive Datatypes:
 * When it get assigned to a variable a the value is copied no memory reference is given
 * 
 * 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt
 * 
 * const score = 100;
 * const scoreValue = 100.3;
 * 
 * const isLoggedIn = false;
 * const outsideTemp = null;
 * let userEmail;
 * 
 * const id = Symbol('123')
 * const anotherId = Symbol('123')
 * 
 * console.log(id === anotherId);
 * 
 * const bigNumber = 3456543576654356754n
 * 
 * 
 * Reference (Non Primitive)
 * => Array, Objects, Functions
 * 
 * const heros = ["shaktiman", "naagraj", "doga"];
 * let myObj = {
 *     name: "hitesh",
 *     age: 22,
 * }
 * 
 * const myFunction = function(){
 *     console.log("Hello world");
 * }
 * 
 * console.log(typeof anotherId);
 * 
 * https://262.ecma-international.org/5.1/#sec-11.4.3
 * 
 * Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function (object function)
       Object  =>  object 
 * */

/**
 * Stack (Primitive)
 * => Usually primitives kept in stack.
 * => Values only be copied during assignment
 * 
 * Heap (Non-Primitive)
 * => Usually non-primitives kept in Heap.
 * => Values only be refered during assignment, but not copied
 * 
*/

let myName = "Swapnil"; // => variable kept in Stack
let anotherName = myName; // => value is copied

anotherName = "Omkar"; // => value replaced
console.log(myName);    // => Swapnil
console.log(anotherName); //=> Omkar


let userOne = {   //=> Object kept in Heap
      email: "swapnil@one.com",
      upi:"userone@tbl"
}

let userTwo = userOne;  //=> Object memory reference is given
userTwo.email = "omkar@one.com"

console.log(userOne.email); //omkar@one.com
console.log(userTwo.email); //omkar@one.com
