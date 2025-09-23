// Classes and Objects (ES6 style) -> Memory benefit = create multiple objects, there will be only a single copy of the greet function in the memory

class Student {
  constructor(name, age) {
    // constructor = function which initialize object
    this.name = name;
    this.age = age;
  }
  greet() {
    // prototype method means all objects will share a single function
    console.log(`Hello ${this.name}`);
  }
}

const student1 = new Student("Vinayak", 22);
student1.greet();
