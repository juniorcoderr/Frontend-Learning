// Must be initialized, cannot be reassigned
const PI = 3.14159;
// const RADIUS; // SyntaxError
// PI = 3.14; // TypeError
console.log(PI);

// Objects and arrays are mutable (contents can change)
const person = { name: "John", age: 30 };
person.age = 31; // OK
person.city = "New York"; // OK
// person = {}; // TypeError
console.log(person);

const numbers = [1, 2, 3];
numbers.push(4); // OK
// numbers = []; // TypeError
console.log(numbers);

// Block scoped like let
if (true) {
  const temp = "temporary";
}
// console.log(temp); // ReferenceError
