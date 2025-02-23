// const pi = 3.14;
// function area(radius) {
//   const result = pi * radius * radius;
//   return result;
// }

// const rad = +prompt("enter the radius of circle");
// const result = area(rad);
// alert(result);

// function are the building block of application

// how it works?
// function take input, uses ;ogixc and returns output
// function must do only 1 task

// Syntax

// ES5

// function fnName(inputs){
//   logic
//   return outputs
// }

// ES6
// Write a function to add 2 numbers

// function declaration /intalization
// input are called parameters, argumnets

// function sum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
// Input Data
// const value1 = +prompt("enter first number"):
// const value2 = +prompt("enter second number");

// const answer = sum(value1, value2);
// alert(answer);
// DRY
// console.log(sum(1, 0));
// console.log(sum(3, 2));
// console.log(sum(1, 5));
// console.log(sum(-1, -10));
// console.log(sum(0, 0));
// console.log(sum("saugat", "chand"));

//ES6 Arrow function (ES6)

// function sum(num1, num2) {
//   const result = num1 + num2;
//   return result;
// }
//function define
// const sum = (num1, num2) => {
//   const result = num1 + num2;
//   return result;
// };
// // function call
// console.log(sum(1, 2));

//default function

// const pagination =(page=1)=>{
//   return`page number`${page};
// };
// console.log(pagination(2));
// console.log(pagination(2));

// const welcome = (user = "user") => {
//   return `welcome ${user}`;
// };
// console.log(welcome("saugat"));
// console.log(welcome());

//Parameterized function

// const volume = ({ length, breadth, height }) => {
//   return `The volume=${+length * +breadth * +height}`;
// };
// console.log(volume({ length: "4", breadth: "5", height: "7" }));

// //IIFEs (Immediately invoked functional experession)
// ((a = "1")={

// })

const counter = () => {
  let count = 1;
  return () => {
    const increment = count++;
    return increment;
  };
};

const counterA = counter();
const counterB = counter();

console.log(counterA()); //dashain
console.log(counterA()); //dashain
console.log(counterA()); //dashain

console.log(counterB()); //tihar
console.log(counterB()); //tihar

//Explicit function

const summer = () => {
  return0;
};
const addition = (a, b) => {
  const sum = a + b;
  return sum;
};

//Implicit function

const summerI = () => 0;

const additionI = (a, b) => a + b;

console.log(summerI());
console.log(additionI(4, 5));

//Callback function
//Callback function is a function that accepts another function as an parameter

const print = (data) => {
  console.log(`hello ${data}`);
};

const main = (user = "user", callbacFn) => {
  const information = `Mr ${user}`;
  return callbackFn(information);
};

main("raktim", print);

//Write a js function that calculates the volume of cuboid
// v = l*b*h
const volume = ({ length = 1, breadth = 1, height = 1 }) =>
  length * breadth * height;

console.log(volume({ length: 5, breadth: 6, height: 7 }));

//callback function
const taxCal = ()