/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number[]}
 */
function sortArrayAbsolute(n, nums) {
  nums.sort((a, b) => Math.abs(a) - Math.abs(b));
  return nums;
}

