// Parse JSON string to object
const jsonString = '{"name": "John", "age": 30}';
const obj = JSON.parse(jsonString);
console.log(obj.name); // "John"

// Convert object to JSON string
const person = { name: "Jane", age: 25 };
const json = JSON.stringify(person);
console.log(json); // '{"name":"Jane","age":25}'

// Pretty print JSON
const prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);
/*
{
 "name": "Jane",
 "age": 25
}
*/
