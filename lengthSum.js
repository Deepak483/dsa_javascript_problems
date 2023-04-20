class Length {
  constructor(ft, inch) {
    this.ft = ft;
    this.inch = inch;
  }
  isValidObject(lengthObj) {
    if (lengthObj.ft >= 0 && lengthObj.inch >= 0) return true;
    else return false;
  }
  addLength(lengthObj) {
    if (this.isValidObject(lengthObj) && this.ft>=0 && this.inch>=0) {
      const totalInches = this.inch + lengthObj.inch;
      const carryFt = Math.floor(totalInches / 12);
      const totalFt = carryFt + this.ft + lengthObj.ft;
      const remaingInches = totalInches % 12;
      return [totalFt, remaingInches];
    } else
      return [0, 0];
  }
}

const length1 = new Length(5, 11) //corresponding to 5 ft 11 inches

const length2 = new Length(2, 8) // corresponding to 2 ft 8 inches.

const sum = length1.addLength(length2) // the sum will be an array containing `[8, 7]`
console.log(sum);
