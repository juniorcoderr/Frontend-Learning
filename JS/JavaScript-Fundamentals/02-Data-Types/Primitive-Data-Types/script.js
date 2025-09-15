// String
let text = "Hello World";
let char = "A";

let name = "Vinayak";
let template = `Hello ${name}`; // Template literals
console.log(template);

// Number
let integer = 42;
let decimal = 3.14;
let scientific = 1e6; // 1000000
let infinity = Infinity;
let notANumber = NaN;
console.log(integer, decimal, scientific, infinity, notANumber);

// Boolean
let isTrue = true;
let isFalse = false;
console.log(isTrue, isFalse);

// Undefined
let undefinedVar;
console.log(undefinedVar); // undefined

// Null
let nullVar = null;
console.log(nullVar);

// Symbol (ES6)

// every Symbol() creates a unique value, wheather they have same description or not. Symbols() use to create a unique keys and used in objects, to avoid accidental overwritting.

let sym = Symbol("description");
let sym2 = Symbol("description");
console.log(sym === sym2); // false (unique)

// BigInt (ES2020)
let bigNumber = 123n;
let anotherBig = BigInt(456);
console.log(bigNumber, anotherBig);
