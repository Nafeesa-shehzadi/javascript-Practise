console.log("Nafeesa Shehzadi"); //print anything in console
//Variables in JS
let fullName = "Nafeesa Shehzadi";
let age = 22;
const pi = 3.14;
console.log(fullName); //printing variables in console
console.log(age);
const student = {
  //const object
  name: "Nafeesa Shehzadi",
  age: 22,
  cgpa: 3.5,
  isPassed: true,
};
console.log(student); //printing object in console
console.log(student.age);
console.log("student name :", student["name"]);
console.log(typeof age); //check the data types
console.log(typeof 10n); // "bigint"
//Arrays in js
let fruits = ["apple", "banana", "cherry", "mangoes"];
console.log(fruits[0]); // "apple"
console.log(fruits.length); // 4
//operators
let x = 1;
x++; //unary op
alert(x); //pop up window show values
//Exponentiation operator a ** b
console.log(2 ** 3); // 8
//Arithmetic operators(+,-,*,%)
console.log(10 + 5);
let score = 85;
//Loops
for (let i = 0; i < 5; i++) {
  //for loop
  console.log(i);
}
let i = 0;
while (i < 5) {
  //while loop
  console.log(i);
  i++;
}
let j = 0;
do {
  // do while loop
  console.log(i);
  j++;
} while (j < 5);
//if else
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
//switch statement
let color = "red";
switch (color) {
  case "red":
    console.log("Stop!");
    break;
  case "green":
    console.log("Go!");
    break;
  default:
    console.log("Caution!");
}
//SUM of two number by user input
let num1 = 10;
let num2 = prompt("Enter 2nd number"); //user input
let userNumber = Number(num2); //change it to Numbers data type
console.log("2nd num :", num2);
console.log(`sum is :${num1 + userNumber}`);
//Print all even numbers from 0 to 100 and store in array.
//looping ,if else and array in js
let arr = [];
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
    arr.push(i);
  }
}
console.log(arr);
//Functions
/*Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/
function findvowels(str) {
  let count = 0;
  for (let char of str) {
    char = char.toLowerCase(); // Convert character to lowercase
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
}
let totalVowel = findvowels("Gsoftconsulting");
console.log(`total vowels ${totalVowel}`); //template Literals
//arrow back func with foreach
//print square of every number
let array = [1, 2, 3, 4, 5];
let calcsquare = (num) => {
  //arrow function
  console.log(num * num);
};
//higher order function
array.forEach(calcsquare); //function calling
//Array Methods (Map)
let newarr = array.map((val) => {
  return val ** 2;
});
console.log(newarr); //printing the new array with square of original array
//Array Methods (Filter)
let newarr2 = array.filter((val) => {
  return val % 2 != 0;
});
console.log(newarr2); //printing the new array with square of original array
//Array Methods (Map)
let findLargest = array.reduce((res, cur) => {
  return res > cur ? res : cur;
});
console.log(findLargest); //printing the Larrgest number of Array
