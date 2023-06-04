/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  let N = nums.length;
  nums.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < N - 2; i++){
    if (i > 0 && nums[i] === nums[i - 1])
      continue;
    let j = i + 1, k = N - 1;
    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k];
      if (sum === 0) {
        result.push([nums[i], nums[j], nums[k]]);
        // skip duplicate
        while (j < k && nums[j] === nums[j + 1]) {
          j++;
        }
        while (j < k && nums[k] === nums[k - 1]) {
          k--;
        }
        j++;
        k--;
      } else if (sum < 0) {
        j++;
      }else{
        k--;
      }
    }
  }
  return result;
}
//! Sample Input 2
// 7
let nums = [-3, 0, 1, 2, -1, 1, -2];
let result = threeSum(nums);
console.log(result);
//! Sample Output 2
// -3 1 2
// -2 0 2
// -2 1 1
// -1 0 1

// let N = nums.length;
// nums.sort((a, b) => a - b);
// let res = [];
// for (let i = 0; i < N - 2; i++) {
//   if (i > 0 && nums[i] === nums[i - 1]) continue;
//   let j = i + 1,
//     k = N - 1;
//   while (j < k) {
//     const sum = nums[i] + nums[j] + nums[k];
//     if (sum === 0) {
//       res.push([nums[i], nums[j], nums[k]]);
//       while (j < k && nums[j] === nums[j + 1]) j++;
//       while (j < k && nums[k] === nums[k - 1]) k--;
//       j++;
//       k--;
//     } else if (sum < 0) j++;
//     else k--;
//   }
// }
