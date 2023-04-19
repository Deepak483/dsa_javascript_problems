//parent base class
// class Student {
//   constructor(fullName) {
//     this.fullName = fullName;
//   }
//   markAttendance() {
//     console.log(this.fullName + " " + "is present");
//   }
// }
//Derived Class Implementation
// class SportCaptain extends Student{
//   playFootball() {
//     this.markAttendance();
//     console.log(`${this.fullName} can play football`);
//   }
// }
// const firstStudent = new Student("Deepak Tiwari");
// firstStudent.markAttendance();
// console.log(firstStudent.fullName);

// const s1 = new SportCaptain("Jack Conrad");
// s1.markAttendance();
// s1.playFootball();

// class Employee{
//   constructor(name, department) {
//     this.name = name;
//     this.department = department;
//   }
//   markPresent() {
//     console.log(`${this.fullName} is present`);
//   }
//   test() {
//     console.log(`TEST`);
//   }
// }

// class Developer extends Employee{
//   //method overriding
//   markPresent() {
//     console.log(`Employee name ${this.name} is present`);
//   }
//   submitCode() {
//     console.log(super.test());
//     console.log(`Code submitted by ${this.name} from ${this.department} department`);
//   }
// }

// const p1 = new Employee('Sonu', 'Fashion');
// console.log(p1);
// const emp = new Developer("Test")
// console.log(p1.name);
// console.log(p1.department);

// const emp = new Developer('Deepak', 'Software Engineer');
// console.log(emp);
// emp.markPresent();
// emp.submitCode();

// new example
class Student{
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  markAttendance() {
    console.log(`${this.name} is present`);
  }
  test() {
    console.log(`TEST ${this.rollNo}`);
  }
}
class LibraryStudent extends Student{
  constructor(age, name, rollNo) {
    super(name, rollNo);
    this.age = age;
  }
  markAttendance() {
    console.log(`${this.name} library boy is present`);
  }
  readingBook() {
    super.test();
    console.log(`${this.name} is reading boook`);
  }
  printAge() {
    console.log(`${this.name} is of ${this.age}`);
  }
}
const lb = new LibraryStudent(25, 'Sonu', 2829);
console.log(lb.name);
lb.markAttendance();
lb.readingBook();
lb.printAge();
