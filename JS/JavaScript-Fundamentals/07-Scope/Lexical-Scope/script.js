function outer() {
  let outerVar = "I'm in outer";
  function inner() {
    let innerVar = "I'm in inner";
    console.log(outerVar); // Accessible (lexical scope)
    console.log(innerVar); // Accessible
  }
  inner();
  // console.log(innerVar); // ReferenceError
}
outer();
