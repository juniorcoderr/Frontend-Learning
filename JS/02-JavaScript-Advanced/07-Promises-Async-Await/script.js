// How async/await relates to Promises
function fetchData() {
  // this function will return a Promise
  return new Promise((resolve) => {
    setTimeout(() => resolve("Data received"), 2000);
  });
}

// Promise style
// fetchData().then((data) => console.log(data));

// async/await style (cleaner)
async function getData() {
  const data = await fetchData(); // wait until Promise resolves
  console.log(data);
}
getData();

const p1 = new Promise((res) => setTimeout(() => res("P1"), 1000));
const p2 = new Promise((res) => setTimeout(() => res("P2"), 2000));

// Promise APIs (comman)
Promise.all([p1, p2]).then((values) => console.log(values));
Promise.race([p1, p2]).then((values) => console.log(values));
Promise.allSettled([p1, p2]).then((values) => console.log(values));
Promise.any([p1, p2]).then((values) => console.log(values));

// Handling Errors in Promises and async/await
// (a) - Promise style (with the help of .catch())
const p = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

p.then((result) => console.log(result)).catch((err) =>
  console.error("Error:", err)
);

// (b) - async/await style
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => reject("Error fetching data"), 1000);
  });
}

async function getData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error("Caught Error:", err);
  }
}
getData();
