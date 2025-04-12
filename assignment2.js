// Task 1
let age = 25;
let isAdult = age >= 18; // true if age is 18 or more

// Task 2
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

// Task 3
let n = 7; // you can change this number to test
let evenOrOdd = (n % 2 === 0) ? "Even" : "Odd";

// Task 4
let numbersArray = [];
for (let i = 1; i <= 5; i++) {
  numbersArray.push(i);
}

// Task 5
function square(num) {
  return num * num;
}

// Console log outputs (optional, for checking)
console.log("Is Adult:", isAdult);
console.log("Addition:", addition);
console.log("Multiplication:", multiplication);
console.log("Modulus:", modulus);
console.log(`Number ${n} is:`, evenOrOdd);
console.log("Array from 1 to 5:", numbersArray);
console.log("Square of 4:", square(4));
