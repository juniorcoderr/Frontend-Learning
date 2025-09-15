// Object - Stores key-value pairs

let person = {
  name: "Vinayak",
  age: 22,
};
console.log(person.name, person.age); // Vinayak

// Array - Holds multiple values
let fruits = ["apple", "banana", "mango"];
console.log(fruits[1]); // banana

// Function
function greet() {
  console.log("Hello!");
}
greet(); // Hello!

// Date
let now = new Date();
let specificDate = new Date("2024-01-01");
console.log(now, specificDate);

// RegExp

let pattern = /[a-z]+/gi;

// / ... / → RegExp literal.

// [a-z]+ → pattern (means we can use more than 1 letter from a to z).

// g → global flag (search in whole string).

// i → case-insensitive flag (A-Z aur a-z both matches).

let regex = new RegExp("[a-z]+", "gi");
