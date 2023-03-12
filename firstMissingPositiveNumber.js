// console.log("hello world");
function firstMissingPositive(n, arr) {
  arr.sort((a, b) => {
    return a - b;
  });
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      if (arr[i] == count) count++;
      else break;
    }
  }
  return count;
}
let arr = [3, 5, 4, 9, 2, -1, 1];
const result = firstMissingPositive(4, arr);
console.log(result);
arr.sort(function (a, b) {
  return a - b;
});

function anotherMissingApproach(arr) {
  let min = arr[0],
    max = arr[0];
  let map = new Map();
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
    map.get(arr[i], 1);
  }
  let newArr = [];
  for (let i = Math.max(1, min); i < max; i++) {
    if (i > 0 && map[i] == 0) return i;
  }
}
// another approach for the above problem
