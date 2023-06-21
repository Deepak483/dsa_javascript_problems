/**
 * @param {number} n
 * @param {number} k
 * @param {number[]} arr
 * @return {number}
 */
function countOccurrences(n, k, arr) {
  // let res = 0;
  // for (let i = 0; i < n; i++){
  //   if (arr[i] === k) {
  //     res++;
  //   }
  // }
  // return res;
  let fi = findFirstIndex(arr, k);
  let li = findLastIndex(arr, k);
  if (fi === -1) {
    return 0;
  }
  return li - fi + 1;
}
function findFirstIndex(arr, k) {
  let l = 0,
    r = arr.length - 1;
  let firstIndex = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === k) {
      firstIndex = mid;
      r = mid - 1;
    } else if (arr[mid] > k) {
      r = mid - 1;
    } else l = mid + 1;
  }
  return firstIndex;
}

function findLastIndex(arr,k) {
  let l = 0, r = arr.length - 1;
  let lastIndex = -1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === k) {
      lastIndex = mid;
      l = mid + 1;
    } else if (arr[mid] > k) r = mid - 1;
    else
      l = mid + 1;
  }
  return lastIndex;
}
let arr = [1, 2, 2, 2, 2, 3, 4, 7, 8, 8];
let n = arr.length;
let k = 2;
let sol = countOccurrences(n, k, arr);
console.log(sol);
