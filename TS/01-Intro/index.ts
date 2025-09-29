function greet(name: string) {
  return "Hello " + name;
}

// greet("Vinayak"); // OK
// greet(123);      // Error at compile time (wrong type)

console.log(greet("Vinayak"));
