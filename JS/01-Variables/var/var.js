// var example

// Function-scoped, can be redeclared and updated
var name = "John";
var name = "Jane"; // No error
name = "Bob"; // No error

console.log(name);

// // Hoisted and initialized with undefined
console.log(age); // undefined (not error)
var age = 25;

// // Function scoped
function example() {
  if (true) {
    var x = 1;
  }
  console.log(x); // 1 (accessible outside block)
}

example();
