{
  let blockVariable = "Block scoped";
  const anotherBlock = "Also block scoped";
  var functionVariable = "Function scoped";
}
// console.log(blockVariable); // ReferenceError
// console.log(anotherBlock); // ReferenceError
console.log(functionVariable); // Accessible

for (let i = 0; i < 3; i++) {
  let message = "Inside block";
  console.log(i, message); // Accessible here
}

console.log(message); // Error: message is not defined (block scope)
console.log(i); // Error: i is not defined (block scope)
