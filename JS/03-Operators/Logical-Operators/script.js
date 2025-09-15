// && → All conditions must be true.

// || → If one condition is true then also it will works.

// ! → Opposite of the value (negation).

// AND(&&) Example
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}
// Output: Allowed

// OR(||) Example
let Age = 16;
let hasPermission = true;

if (Age >= 18 || hasPermission) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}
// Output: Allowed

// NOT(!) Example
let isLoggedIn = false;

if (!isLoggedIn) {
  console.log("Please log in");
}
// Output: Please log in
