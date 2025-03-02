//1. Sibgle line comment (//)
//2. Multi line comment(/**/)

/*
Primitive datatypes
String, number, null, boolean, undefined

- Default datatype: String

Complex datatypes
Object
 Object
 Array
 Date

*/

const string = "saugat chand is a hero."; // Chracter, Word, sentence, paragraph
const pi = 3.14;
const largeNumber = BigInt(314);

console.log(largeNumber);
// const string = "saugat chand is a hero."; // Character, Word, Sentence, paragraph
// const pi = 3.14;
let x;
const d = null;
const isMale = true;

//Type COrrection / Type coercion

const value = "13";
console.log(typeof value); //type checking
const actualNumber = Number(value); //type conversion
console.log(actualNumber);
console.log(typeof actualNumber);

//Convert number to string
const num = 13;

const numToString = String(num);
console.log(num, numToString);

const num1 = prompt("enter the first number");
const num2 = prompt("enter the second number");

const result = num1 / num2;
alert(`the result of division between ${num1} and ${num2} is ${result}`);

console.log(typeof num1);



