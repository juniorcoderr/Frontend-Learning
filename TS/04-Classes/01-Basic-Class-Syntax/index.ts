class Person {
  name: string;
  age: number;

  // constructor runs when object is created
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age}`);
  }
}

let p1 = new Person("Vinayak", 22);
p1.greet();
