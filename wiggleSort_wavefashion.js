/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number[]}
 */
function wiggleSort(arr, n) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (i % 2 === 0) {
      //even case
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    } else {
      //odd case
      if (arr[i] < arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}
let n = 6;
let arr = [1, 5, 1, 1, 6, 4];
const result = wiggleSort(arr, n);
console.log(result);
