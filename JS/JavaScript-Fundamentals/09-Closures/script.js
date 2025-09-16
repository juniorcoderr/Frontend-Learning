function outer() {
  let counter = 0; // outer variable

  function inner() {
    counter++;
    console.log(counter);
  }

  return inner; // return inner function
}

const myFunc = outer(); // outer() call -> inner function milta hai

myFunc(); // 1
myFunc(); // 2
myFunc(); // 3
