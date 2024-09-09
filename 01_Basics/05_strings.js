const name = "swapnil";
const score = 50;

//console.log(name + score + "Value");

console.log(`Hello my name is ${name} and my score is ${score}`);

// String Declaration
const gameName = new String('NFS');
console.log(gameName); //=> String Object

console.log(gameName[1]);

console.log(gameName.__proto__);

console.log(gameName.length);

console.log(gameName.toUpperCase());
console.log(gameName.charAt('2'));
console.log(gameName.indexOf('S'));

const newString = gameName.substring(0,2);
console.log(newString);

const anotherString = gameName.slice(0,3);
console.log(anotherString);

const untrimString  = "     Swapnil     ";
console.log(untrimString);
console.log(untrimString.trim());

const url = "https://google.com/search?k=cricket%20worldcup"

console.log(url.replace('%20','-'));
console.log(url.includes('cricket'));

let sampleString = "amazon-12 may-3000-credit"
console.log(sampleString.split('-'));

