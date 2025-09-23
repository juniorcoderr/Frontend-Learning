// Here we are packing up the data in a 'capsule' and  accessing them with the help of methods only. And suppose we have to validate the data (suppose checking the phone number), we can achieve the same using set method without changing the remaining code

class Employee {
  setEmpDetails(name, id, phoneNo) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
  }

  // Using get() methods to get desired values
  getEmpName() {
    return this.name;
  }

  getEmpId() {
    return this.id;
  }

  getEmpPhoneNo() {
    return this.phoneNo;
  }
}
let emp1 = new Employee();

// with the help of encapsulation we are able to access the information using the functions and only after creating the class
emp1.setEmpDetails("Vinayak", 1001, 8218880473);
console.log(emp1.getEmpName());
console.log(emp1.getEmpId());
console.log(emp1.getEmpPhoneNo());
