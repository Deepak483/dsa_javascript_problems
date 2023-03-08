//find given element in array
function findElement(n, arr, x) {
  for (let i = 0; i < arr.length; ++i) {
    if (arr[i] === x) {
      return i;
    }
  }
  return -1;
}
let n = 5;
let arr = [1, 3, 4, 2, 1];
let x = 1;
let elementPosition = findElement(n, arr, x);
console.log(elementPosition);
// console.log(typeof arr[3]);
