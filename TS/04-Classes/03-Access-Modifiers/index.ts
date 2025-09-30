class Employee {
  public name: string; // accessible everywhere
  private salary: number; // only inside this class

  constructor(name: string, salary: number) {
    this.name = name;
    this.salary = salary;
  }

  public showName() {
    console.log(this.name); // allowed
  }

  private showSalary() {
    console.log(this.salary); // allowed
  }
}

let emp = new Employee("Rahul", 50000);
console.log(emp.name); // allowed (public)
// console.log(emp.salary);  // Error (private)
