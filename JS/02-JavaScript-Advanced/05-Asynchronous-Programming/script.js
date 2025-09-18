// -----------------------Problem----------------------

// const data = [
//   { name: "Vinayak", Profession: "Software Engineer" },
//   { name: "Anish", Profession: "Software Engineer" },
// ];

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     data.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newData) {
//   setTimeout(() => {
//     data.push(newData);
//   }, 2000);
// }

// getData();

// createData({ name: "Sugam", Profession: "Software Intern" });

// ----------------Solution using Callback-----------------

// const data = [
//   { name: "Vinayak", Profession: "Software Engineer" },
//   { name: "Anish", Profession: "Software Engineer" },
// ];

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     data.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newData, Callback) {
//   setTimeout(() => {
//     data.push(newData);
//     Callback();
//   }, 2000);
// }

// getData();

// createData({ name: "Sugam", Profession: "Software Intern" }, getData);

// ----------------Solution using Promises-----------------

// const data = [
//   { name: "Vinayak", Profession: "Software Engineer" },
//   { name: "Anish", Profession: "Software Engineer" },
// ];

// function getData() {
//   setTimeout(() => {
//     let output = "";
//     data.forEach((data, index) => {
//       output += `<li>${data.name}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createData(newData) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       data.push(newData);
//       let error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error!!");
//       }
//     }, 2000);
//   });
// }

// getData();

// createData({ name: "Sugam", Profession: "Software Intern" })
//   .then(getData)
//   .catch((err) => console.log(err));

// ----------------Solution using async/await-----------------

const data = [
  { name: "Vinayak", Profession: "Software Engineer" },
  { name: "Anish", Profession: "Software Engineer" },
];

function getData() {
  setTimeout(() => {
    let output = "";
    data.forEach((data, index) => {
      output += `<li>${data.name}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createData(newData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      data.push(newData);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error!!");
      }
    }, 2000);
  });
}

// await will wait until and unless promise doesn't get resolved, after that getData() is called which will show new data
async function init() {
  // first create new data
  await createData({ name: "Sugam", Profession: "Software Intern" });
  // after creating new data call getData()
  getData();
}

init();
