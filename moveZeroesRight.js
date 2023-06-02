function moveZeroes(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }
  for (; j < nums.length; j++){
    nums[j] = 0;
  }
  return nums;
}
let nums = [0, 1, 0, 3, 0, 21];
const res = moveZeroes(nums);
console.log(res);
