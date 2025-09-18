let arr = [2, 4, 8];

let a = arr.map((value, index, array) => {
  console.log(value, index, array);
  return value * value;
});

console.log(a);
