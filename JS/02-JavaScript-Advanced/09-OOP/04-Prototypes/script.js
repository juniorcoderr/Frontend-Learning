function Student(name) {
  this.name = name;
}

Student.prototype.greet = function () {
  // here greet() method is in prototype. It means that this method is available to all the objects wihtout making the copy
  console.log("Hi " + this.name);
};

const student = new Student("Vinayak");
student.greet();
