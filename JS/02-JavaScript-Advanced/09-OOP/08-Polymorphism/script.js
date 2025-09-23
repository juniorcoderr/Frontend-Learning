class Animal {
  speak() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Meow");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((a) => a.speak());
// Output:
// Animal sound
// Bark
// Meow
