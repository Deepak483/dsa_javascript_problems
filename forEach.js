let arr = [1, 2, 2, 3, 1, 2];
let newArr = [];
const result = arr.forEach((ele, index) => {
  newArr.push(ele * [index + 1]);
});
console.log(newArr);
