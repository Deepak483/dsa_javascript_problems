/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function minDiff(n, arr) {
  arr.sort((a, b) => a - b);
  let minDiff = Infinity;
  for (let i = 1; i < arr.length; i++) {
    let diff = arr[i] - arr[i - 1];
    if (diff < minDiff) {
      minDiff = diff;
    }
  }
  return minDiff;
}
let n = 3;
let arr = [1, 2, 4];
let ans = minDiff(n, arr);
console.log(ans);
