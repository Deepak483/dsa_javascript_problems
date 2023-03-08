let personName = "Deepak";
let surName = "Tiwari";
function personDetail(a, b) {
  let nameObject = {
    firstName: a,
    lastName: b,
    fullName: `${a} ${b}`,
  };
  return nameObject;
}

const value = personDetails(personName, surName);
console.log(value);
