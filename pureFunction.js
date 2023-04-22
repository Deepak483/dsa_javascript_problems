//Pure Function: In simple terms, pure functions do not have an internal state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.
function pureSum(a, b) {
  return a + b;
}
let temp = {
  name: "Deepak",
  profession: "SE",
};
function impureSum(inputObj) {
  inputObj.test = "TEST";
  return inputObj;
}
impureSum(temp);
console.log(temp);
// impureSum(temp) // 8
/**
 * The following JavaScript functions are inherently impure:
 * Math.random()
 * Date.now()
 * arr.splice()
 * arr.push()
 * arr.sort()
 * console.log() and alert() are also impure functions (although they generate the same behavior and always return the same value for identical calls).
 * JavaScript is synchronous by its nature. Therefore, asynchronous functions such as fetch and promise are impure.
 *
 * Advantages of impure functions:
 * Impure functions can use an in-place solution to reduce the space complexity.
 * In impure functions, the state can be modified to use the parent variable and call for the function compiling.
 */

//imperative code
// const password = ['123456', 'password', 'admin', 'helloworld', 'mypasswords'];
//telling what to do and how to do looks complex and hard to test
// let longPassword = [];
// for (let i = 0; i < password.length; i++){
//   if (password[i].length >= 9) {
//     longPassword.push(password[i]);
//  }
// }
// console.log(longPassword);
//declarative code
// const longPassWord = password.filter(element => element.length >= 9);
// console.log(longPassWord);

//pure function
function addTwoNum(a, b) {
  return a + b;
}
//impure function
function addTwo(a, b) {
  console.log(a + b);
}
//converting impure to pure function
function greetings(name) {
  return `Hello ${name}`;
}
console.log(greetings("Deepak"));
function addProperty(obj, property, value) {
  const test = { ...obj };
  test[property] = value;
  return test;
}

const olderObj = {
  name: "Test",
  roll: 7,
  address: {
    city: "Bangalore",
    country: "India",
  },
};
console.log("Obj", olderObj);

const newerObj = {
  ...olderObj,
  address: {
    ...olderObj.address,
  },
};
const newObj = JSON.parse(JSON.stringify(newerObj));
console.log(newObj);

olderObj.name = "Deepak";
olderObj.address.city = "Mumbai";
console.log("OlderObj", olderObj);

console.log("NewerObj", newerObj);

//immutablity
// function purePush(arr, value) {
//   const nextArr = [...arr];
//   nextArr.push(value);
//   return nextArr;
// }
function purePush(arr, value) {
  return [...arr, value];
}
let todoDB = [];
function addTodo(item, priority) {
  const newtodoDB = [...todoDB];
  if (priority === "high") {
    newtodoDB.unshift(item);
    return newtodoDB;
  } else {
    newtodoDB.push(item);
    return newtodoDB;
  }
}

