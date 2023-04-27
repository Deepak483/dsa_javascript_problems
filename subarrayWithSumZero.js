/**
 * @param {number} n
 * @param {number[]} arr
 * @return {string}
 */
function subarraySumZero(n, arr) {
  let preSum = [];
  let sumSubarr = new Map();
  preSum[0] = arr[0];
  for (let i = 1; i < arr.length; i++){
    preSum[i] = preSum[i - 1] + arr[i];
  }
  console.log(preSum);

  for (let i = 0; i < preSum.length; i++){
    if (preSum[i] === 0 || sumSubarr.has(preSum[i]) )
      return "Yes";
    sumSubarr.set(preSum[i], true);
    // let count = 1;
    // if(preSum[i])
  }
  return "No";
  

  // If no subarray with sum 0 is found
  // return "No";
}
// Sample Input 1
// 2
// 4
// 4 2 -2 5
// 3
// 3 2 -1
// Sample Output 1
// Yes
// No
let arr = [4, 2, -2, 5];
let n = arr.length;
const result = subarraySumZero(n, arr);
console.log(result);