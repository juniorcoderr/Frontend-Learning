// Callback Hell example, Problems - Code looks ugly and can't be maintain easily. Also, error handling and data passing is tricky
// setTimeout(() => {
//   console.log("Step 1");
//   setTimeout(() => {
//     console.log("Step 2");
//     setTimeout(() => {
//       console.log("Step 3");
//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Solution - Using Promises
// function step1() {
//   return new Promise((res) =>
//     setTimeout(() => {
//       console.log("Step 1");
//       res();
//     }, 1000)
//   );
// }
// function step2() {
//   return new Promise((res) =>
//     setTimeout(() => {
//       console.log("Step 2");
//       res();
//     }, 1000)
//   );
// }
// function step3() {
//   return new Promise((res) =>
//     setTimeout(() => {
//       console.log("Step 3");
//       res();
//     }, 1000)
//   );
// }

// step1().then(step2).then(step3);

// Another Solution - Using async/await
function step1() {
  return new Promise((res) =>
    setTimeout(() => {
      console.log("Step 1");
      res();
    }, 1000)
  );
}
function step2() {
  return new Promise((res) =>
    setTimeout(() => {
      console.log("Step 2");
      res();
    }, 1000)
  );
}
function step3() {
  return new Promise((res) =>
    setTimeout(() => {
      console.log("Step 3");
      res();
    }, 1000)
  );
}

async function run() {
  await step1();
  await step2();
  await step3();
}
run();
