// Variables declared outside functions are global
var globalVar = "I'm global";
let globalLet = "I'm also global";
const globalConst = "Me too";

function accessGlobal() {
  console.log(globalVar); // Accessible
  console.log(globalLet); // Accessible
  console.log(globalConst); // Accessible
}

accessGlobal();
