let count = 0;
let result = count ?? 5; // 0 (kyunki null/undefined nahi hai)
console.log(result);

let x = null;
let y = x ?? "default"; // "default"
console.log(y);
