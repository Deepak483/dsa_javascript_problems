class Car{
  constructor(brand) {
    // this.carname = brand;
    this._carname = brand;
  }
  //getter
  // get cnam() {
  //   return this.carname;
  // }
  //setter
  // set cnam(x) {
  //   this.carname = x;
  // }
  // Many programmers use an underscore character _ before the property name to separate the getter/setter from the actual property
  get carname() {
    return this._carname;
  }
  set carname(cname) {
    this._carname = cname;
  }
}
const myCar = new Car('Tesla');
//getter use
const value = myCar.carname;
console.log(value);
//setter use
myCar.carname = "Volvo";
console.log(myCar.carname);