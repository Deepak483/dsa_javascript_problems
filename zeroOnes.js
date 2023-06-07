/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function zeroOnes(n, arr) {
  // for (let i = 0; i < n; i++) {
  //   if (arr[i] == 1) return i;
  //   return -1;
  // }
  let l = 0, r = n - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] === 1 && (mid === 0 || arr[mid - 1] === 0))
      return mid;
    else if (arr[mid] === 1) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
    return -1;
  }
}
let arr = [0, 0, 0, 0, 0, 0, 1, 1, 1, 1];
let n = arr.length;
const _ans = zeroOnes(n, arr);
console.log(_ans);
