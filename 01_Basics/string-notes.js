/* JavaScript Strings: A Comprehensive Guide
JavaScript strings are one of the most commonly used data types in web development. They represent sequences of characters and are used to handle textual data in an application. JavaScript provides a variety of constructors, static methods, and instance methods for working with strings. This blog covers the key methods available in the String object. */

/* Constructor
String() constructor
The String() constructor creates a string object from a value (like a number or a boolean). If the value passed is null or undefined, the constructor returns a string "null" or "undefined".

 
 
let str = new String('Hello, World!');
console.log(str);  // Output: [String: 'Hello, World!']
Static Methods
String.fromCharCode()
This static method returns a string created from the specified sequence of Unicode values.

 
 
console.log(String.fromCharCode(65, 66, 67)); // Output: 'ABC'
String.fromCodePoint()
Similar to fromCharCode(), this method returns a string from a sequence of Unicode code points but supports larger values (more than 0xFFFF).

 
 
console.log(String.fromCodePoint(9731, 9733, 9842)); // Output: '☃★♲'
String.raw()
This static method returns a raw string representation of a template literal, meaning it doesn’t process escape sequences like \n.

 
 
console.log(String.raw`Hello\nWorld`);  // Output: Hello\nWorld
Instance Methods
String.prototype.at()
This method returns the character at the specified index, supporting negative indices.

 
 
let str = 'JavaScript';
console.log(str.at(4));   // Output: 'S'
console.log(str.at(-1));  // Output: 't'
String.prototype.charAt()
Returns the character at the specified index. Negative values return an empty string.

 
 
console.log('JavaScript'.charAt(4));  // Output: 'S'
String.prototype.charCodeAt()
Returns the Unicode of the character at the specified index.

 
 
console.log('ABC'.charCodeAt(0));  // Output: 65
String.prototype.codePointAt()
Returns the Unicode code point of the character at the specified position.

 
 
console.log('ABC'.codePointAt(0));  // Output: 65
String.prototype.concat()
Concatenates one or more strings to the end of the calling string and returns a new string.

 
 
let greet = 'Hello';
console.log(greet.concat(', ', 'World!'));  // Output: 'Hello, World!'
String.prototype.endsWith()
Checks if a string ends with the specified string or characters.

 
 
console.log('Hello World!'.endsWith('!'));  // Output: true
String.prototype.includes()
Determines whether a string contains the specified characters.

 
 
console.log('Hello World!'.includes('World'));  // Output: true
String.prototype.indexOf()
Returns the index of the first occurrence of the specified value. Returns -1 if the value is not found.

 
 
console.log('Hello World!'.indexOf('World'));  // Output: 6
String.prototype.isWellFormed()
Checks if the string is well-formed, ensuring all characters are valid Unicode sequences.

 
 
console.log('Hello'.isWellFormed());  // Output: true
String.prototype.lastIndexOf()
Returns the last occurrence of a specified value. Returns -1 if the value is not found.

 
 
console.log('Hello World! Hello Again!'.lastIndexOf('Hello'));  // Output: 13
String.prototype.localeCompare()
Compares two strings in the current locale. Returns 0 if equal, a negative number if less, and a positive number if greater.

 
 
console.log('apple'.localeCompare('banana'));  // Output: -1
String.prototype.match()
Matches a string against a regular expression and returns the result.

 
 
console.log('Hello World!'.match(/World/));  // Output: ['World']
String.prototype.matchAll()
Returns an iterator for all matches of a regular expression in the string.

 
 
const iterator = 'test1test2'.matchAll(/test\d/g);
for (const match of iterator) {
    console.log(match);  // Output: ['test1'], ['test2']
}
String.prototype.normalize()
Normalizes the string using a specified Unicode normalization form.

 
 
console.log('\u1E9B\u0323'.normalize('NFC'));  // Output: 'ẛ̣'
String.prototype.padEnd()
Pads the current string with a specified character from the end.

 
 
console.log('Hello'.padEnd(10, '!'));  // Output: 'Hello!!!!!'
String.prototype.padStart()
Pads the current string with a specified character from the start.

 
 
console.log('Hello'.padStart(10, '!'));  // Output: '!!!!!Hello'
String.prototype.repeat()
Returns a new string with the specified number of copies of the string it was called on.

 
 
console.log('Ha!'.repeat(3));  // Output: 'Ha!Ha!Ha!'
String.prototype.replace()
Replaces occurrences of a substring or a regular expression with a new string.

 
 
console.log('Hello World!'.replace('World', 'JavaScript'));  // Output: 'Hello JavaScript!'
String.prototype.replaceAll()
Replaces all occurrences of a substring or a regular expression with a new string.

 
 
console.log('Hello World! World!'.replaceAll('World', 'JavaScript'));  // Output: 'Hello JavaScript! JavaScript!'
String.prototype.search()
Searches a string for a match against a regular expression and returns the index of the match.

 
 
console.log('Hello World!'.search('World'));  // Output: 6
String.prototype.slice()
Extracts a section of a string and returns it as a new string.

 
 
console.log('Hello World!'.slice(6, 11));  // Output: 'World'
String.prototype.split()
Splits a string into an array of substrings.

 
 
console.log('Hello World!'.split(' '));  // Output: ['Hello', 'World!']
String.prototype.startsWith()
Determines whether a string starts with the specified characters.

 
 
console.log('Hello World!'.startsWith('Hello'));  // Output: true
String.prototype.substring()
Returns the part of the string between the start and end indexes.

 
 
console.log('Hello World!'.substring(0, 5));  // Output: 'Hello'
String.prototype[Symbol.iterator]()
Allows strings to be iterable, making them compatible with loops like for...of.

 
 
for (let char of 'Hello') {
    console.log(char);  // Output: 'H', 'e', 'l', 'l', 'o'
}
String.prototype.toLocaleLowerCase()
Converts the string to lowercase, respecting locale-specific case mappings.

 
 
console.log('İstanbul'.toLocaleLowerCase('tr'));  // Output: 'istanbul'
String.prototype.toLocaleUpperCase()
Converts the string to uppercase, respecting locale-specific case mappings.

 
 
console.log('istanbul'.toLocaleUpperCase('tr'));  // Output: 'İSTANBUL'
String.prototype.toLowerCase()
Converts the string to lowercase.

 
 
console.log('HELLO'.toLowerCase());  // Output: 'hello'
String.prototype.toString()
Returns the string itself.

 
 
let strObj = new String('Hello');
console.log(strObj.toString());  // Output: 'Hello'
String.prototype.toUpperCase()
Converts the string to uppercase.

 
 
console.log('hello'.toUpperCase());  // Output: 'HELLO'
String.prototype.toWellFormed()
Ensures that the string is valid according to Unicode encoding.

 
 
console.log('A valid string'.toWellFormed());  // Output: 'A valid string'
String.prototype.trim()
Removes whitespace from both ends of a string.

 
 
console.log('  Hello World!  '.trim());  // Output: 'Hello World!'
String.prototype.trimEnd()
Removes trailing whitespace from the string.

 
 
console.log('  Hello World!  '.trimEnd());  // Output: '  Hello World!'
String.prototype.trimStart()
Removes leading whitespace from the string.

 
 
console.log('  Hello World!  '.trimStart());  // Output: 'Hello World!  '
String.prototype.valueOf()
Returns the primitive value of a string object.

 
 
let str */