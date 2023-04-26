const person = {
  firstName: "John",
  surName: "Doe",
  age: function (){
  return 30;
  },
  eyeColor: "blue",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName);
//adding new property to object person
person.nationality = "India";
console.log(person);
//delete keyword deletes  a property from an object
delete person.age;
// console.log(person);
//nested objects
const myObj = {
  name: "John",
  age: 30,
  cars: {
    car1: "Ford",
    car2: "Volvo",
    car3: "Tata",
  },
};
console.log(myObj);
// console.log(myObj.cars.car3);
myObj.cars.car2 = "Telsa";
// console.log(myObj.cars.car2);
console.log(myObj);
person.name = function () {
  return `${this.firstName} ${this.surName}`.toUpperCase();
};
console.log(person.name());
console.log(JSON.stringify(person));
let myString = JSON.stringify();
console.log(myString);

//create an object
const car = {
  model: 'Safari',
  company: 'Tata',
  originality: 'Indian',
  color:'',
  set carColor(color) {
    this.color = color
  },
  get fullName() {
    return `${this.company} ${this.model}`;
  }
  
}