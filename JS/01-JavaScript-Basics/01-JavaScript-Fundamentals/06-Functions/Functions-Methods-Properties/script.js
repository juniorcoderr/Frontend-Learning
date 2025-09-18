function example(a, b, c) {
  console.log(arguments.length); // Number of arguments passed
  console.log(arguments[0]); // First argument
}
console.log(example.name); // "example"

console.log(example.length); // 3 (number of parameters)

// call, apply, bind

// call() example

// let userDetailsOne = {
//   name: "Vinayak Yadav",
//   age: "22",
//   designation: "Software Engineer",
//   printDetails: function () {
//     console.log(this.name);
//   },
// };

// userDetailsOne.printDetails();

// let userDetailsTwo = {
//   name: "Anish Mehta",
//   age: "22",
//   designation: "Software Engineer",
// };

// // function borrowing
// userDetailsOne.printDetails.call(userDetailsTwo);

let userDetailsOne = {
  name: "Vinayak Yadav",
  age: "22",
  designation: "Software Engineer",
};

let printDetails = function (state, country) {
  console.log(this.name + " " + state + " " + country);
};

printDetails.call(userDetailsOne, "Uttar Pradesh", "India");

let userDetailsTwo = {
  name: "Anish Mehta",
  age: "22",
  designation: "Software Engineer",
};

// using apply()
printDetails.apply(userDetailsTwo, ["Haryana", "India"]);

// bind()
let newFunc = printDetails.bind(userDetailsOne, "Uttar Pradesh", "India");
newFunc();
