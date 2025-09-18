// Block-scoped, cannot be redeclared in same scope
let username = "Alice";
// let username = "Bob"; // SyntaxError
username = "Charlie"; // OK
console.log(username);

// Not hoisted (temporal dead zone)
// console.log(score); // ReferenceError
let score = 100;

// Block scoped
function example() {
  if (true) {
    let y = 1;
  }
  // console.log(y); // ReferenceError
}

// Loop variables
for (let i = 0; i < 3; i++) {
  console.log(i); // Prints 0, 1, 2
}
