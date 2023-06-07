/**
 * @param {number} N
 * @param {number[]} nums
 * @return {number}
 */
function peakElement(N, nums) {
  //* brute force approach
  // for (let i = 0; i < N; i++){
  //   if (nums[i] > nums[i + 1] && nums[i] > nums[i - 1]) {
  //     return i;
  //   }
  // }
  // return -1;
}
let n = 4;
let nums = [1, 2, 3, 1];
let ans = peakElement(n, nums);
console.log(ans);