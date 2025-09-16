function testScope() {
  let message = "Hello inside function"; // function scope

  console.log(message); // Accessible here
}

testScope();

console.log(message); // Error: message is not defined
