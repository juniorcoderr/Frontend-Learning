document.getElementById("btn").addEventListener("click", async () => {
  // load module on runtime
  const module = await import("./math.js");
  console.log(module.add(2, 3)); // Output: 5
});
