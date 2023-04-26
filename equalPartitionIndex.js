/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number}
 */
function equalPartition(n, arr) {
  //first find the leftSum then rightSum
  let l = 0;
  let r = arr.length;
  let leftSum = [];
  leftSum[l] = arr[0];
  for (let i = 1; i < n; i++) {
    leftSum[i] = leftSum[i - 1] + arr[i];
  }
  let rightSum = [];
  rightSum[n - 1] = arr[n - 1];
  for (let i = n - 2; i >= 0; i--){
    rightSum[i] = rightSum[i + 1] + arr[i];
  }
  // console.log(rightSum);
  // return leftSum;
  for (let i = 1; i < n-1; i++){
    if (rightSum[i + 1] === leftSum[i - 1]);
      return i;
      // console.log(i);
  }
  return -1;
}
let n = 2;
// let arr = [1, 4, 2, 5];
let arr = [98,98]
const result = equalPartition(n,arr);
console.log(result);
