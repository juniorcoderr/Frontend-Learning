// API Request using Promises ->
// let p = fetch("https://goweather.herokuapp.com/weather/Ny"); // p is a promise

// p.then((response) => {
//   // Error handling using response.ok
//   if (!response.ok) {
//     throw new Error(`HTTP Error: ${response.status}`);
//   }
//   return response.json(); // return actual JSON
// })
//   .then((data) => {
//     console.log("Weather Data (Promise):", data); // here data is in JSON format
//   })
//   .catch((error) => {
//     console.error("Error:", error.message);
//   });

// API Request using async/await
async function getWeather() {
  try {
    const response = await fetch("https://goweather.herokuapp.com/weather/Ny", {
      //   // Custom headers example (even though this API doesn't need it)
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
    });

    // error check
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    console.log("Weather Data (Async/Await):", data);
  } catch (error) {
    console.error("Error (Async/Await):", error.message);
  }
}

getWeather();

// 🔹 5. AbortController example (Cancel request after 2 seconds)
// const controller = new AbortController();

// setTimeout(() => controller.abort(), 2000); // cancel after 2 seconds

// fetch("https://goweather.herokuapp.com/weather/Ny", {
//   signal: controller.signal,
// })
//   .then((res) => res.json())
//   .then((data) => console.log("This may not log if aborted:", data))
//   .catch((err) => console.error("Request aborted:", err.name));
