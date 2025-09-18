// Function Hoisting -  function call before its declaration
greet(); // ✅ Works fine

function greet() {
  console.log("Hello!");
}

// Variable Hoisting (var)
console.log(x); // undefined (but no error)
var x = 5;
console.log(x); // 5

// Variable Hoisting (let/const)
console.log(y); // ReferenceError
let y = 10;
