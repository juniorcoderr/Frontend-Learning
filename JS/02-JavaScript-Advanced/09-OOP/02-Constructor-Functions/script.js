function Student(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("Hi " + this.name);
  };
}

const student1 = new Student("Vinayak", 22);
student1.greet();

// Here -> this.name = name -> student1.name = name and this.age = age -> student1.age = age and this.greet = function(){...} -> student1.greet = function(){...}
// If we don't use this here then name and age will be the local variable and can't be accessed outside the function and nothing will be assigned in object student1 and student1.name will be undefined and greet will also not applied to the object
