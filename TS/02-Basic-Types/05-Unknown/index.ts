let text: unknown = "Hello";

if (typeof text === "string") {
  console.log(text.toUpperCase()); // safe
}
