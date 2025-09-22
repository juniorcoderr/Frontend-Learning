// Brute Force
// function sendChatMessage(message) {
//   console.log(`Sending Message`, message);
// }

// sendChatMessage("Hi");
// sendChatMessage("Hello");
// sendChatMessage("Hello Sir");
// sendChatMessage("How are you?");
// sendChatMessage("Hieee");
// sendChatMessage("Hello World!");

function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
}

function sendChatMessage(message) {
  console.log(`Sending Message:`, message);
}

const sendChatMessageWithSlowMode = throttle(sendChatMessage, 2 * 1000);

sendChatMessageWithSlowMode("Hi");
sendChatMessageWithSlowMode("Hello");
sendChatMessageWithSlowMode("Hello Sir");
sendChatMessageWithSlowMode("How are you?");
sendChatMessageWithSlowMode("Hieee");
sendChatMessageWithSlowMode("Hello World!");
