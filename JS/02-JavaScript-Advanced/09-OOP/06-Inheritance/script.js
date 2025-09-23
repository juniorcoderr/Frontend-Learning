// [Parent Class]
class Car {
  setName(name) {
    this.name = name;
  }

  startEngine() {
    console.log("Engine started for " + this.name);
  }

  stopEngine() {
    console.log("Engine stopped for " + this.name);
  }
}

// [Child Class -> will contain all the properties of the parent class]
class Toyota extends Car {
  topSpeed(speed) {
    console.log("Top speed for " + this.name + " is " + speed);
  }
}

let myCar = new Toyota();
myCar.setName("Fortuner");
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(200);
