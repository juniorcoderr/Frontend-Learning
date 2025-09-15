// Ternary operator
let age = 18;
let status = age >= 18 ? "adult" : "minor";
console.log(status);

// typeof
console.log(typeof "hello"); // "string"

// instanceof
console.log([] instanceof Array); // true

// in operator
let obj = { name: "John" };
console.log("name" in obj); // true

// Spread operator
let arr1 = [1, 2, 3];
let arr2 = [...arr1, 4, 5]; // [1, 2, 3, 4, 5]

// Rest operator
function greet(firstName, ...otherNames) {
  console.log("First name:", firstName);
  console.log("Other names:", otherNames);
}

greet("Vinayak", "Golu", "juniorcoderr");
