//solution activity
class Employee {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
  markPresent() {
    console.log(`${this.name} is Present`);
  }
  getRole() {
    console.log(`Employee of office`);
  }
}
class Developer extends Employee {
  constructor(name,department, lang) {
    super(name,department);
    this.prefLanguage = lang;
  }
  getRole() {
    console.log(`Works with ${this.prefLanguage}`);
  }
  submitCode() {
    console.log(`Code submitted by ${this.name} from ${this.department}`);
  }
}
const vivek = new Developer("Sonu", "JS", "CBC");
vivek.submitCode();
vivek.getRole();
const g1 = new Employee('Deepak', 'CDE');
g1.getRole();

