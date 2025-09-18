// Basic for-loop
for (let i = 0; i < 5; i++) {
  console.log(`Iteration ${i}`);
}

// for...in (Objects) - Iterates over the keys of the object
let person = { name: "Vinayak", age: 22, city: "Noida" };

for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}

// for...of (arrays/iterables) - Iterates over the values of the Array
let fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}

// for...of with index - If user wants both Array index and value
for (let [index, fruit] of fruits.entries()) {
  console.log(`${index}: ${fruit}`);
}
