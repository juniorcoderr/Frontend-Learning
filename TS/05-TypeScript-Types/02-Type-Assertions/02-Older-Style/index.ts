let val: unknown = "Hello TypeScript";

let stringLength: number = (<string>val).length;
console.log(stringLength);
