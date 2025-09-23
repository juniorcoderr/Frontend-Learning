// Brute force
// const search = (query) => {
//   console.log(`Searching for`, query);
// };

// search("Ha");
// search("Hard");
// search("Hard JS");
// search("Hard JS Interview");
// search("Hard JS Interview Questions");

// Debounce function
function debounce(func, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId); // Clear previous timer
    timeoutId = setTimeout(() => {
      // Set new timer
      func(...args);
    }, delay);
  };
}

const search = (query) => {
  console.log(`Searching for`, query);
};

const searchWithDebounce = debounce(search, 1000);

searchWithDebounce("Ha");
searchWithDebounce("Hard");
searchWithDebounce("Hard JS");
searchWithDebounce("Hard JS Interview");
searchWithDebounce("Hard JS Interview Questions");
