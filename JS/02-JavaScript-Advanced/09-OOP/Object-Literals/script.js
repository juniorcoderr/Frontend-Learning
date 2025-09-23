const student = {
  name: "Vinayak",
  age: 22,
  greet: function () {
    console.log("Hello " + this.name);
  },
};

student.greet();
