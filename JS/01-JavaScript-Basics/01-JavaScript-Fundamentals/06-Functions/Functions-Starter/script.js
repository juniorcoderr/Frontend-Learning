// Function declaration
function greet(name) {
  return `Hello, ${name}!`;
}

// Function call
console.log(greet("Vinayak"));

// Function with default parameters
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 2));

// Function with rest parameters
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// Function expression
const add = function (a, b) {
  return a + b;
};

console.log(add(5, 3));

// Arrow functions (ES6)
const subtract = (a, b) => a - b;

console.log(subtract(4, 2));

// Arrow function with block body
const divide = (a, b) => {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
};

console.log(divide(8, 2));

// Single parameter arrow function
const square = (x) => x * x;

console.log(square(4));

// No parameters arrow function
const random = () => Math.random();

console.log(random());
