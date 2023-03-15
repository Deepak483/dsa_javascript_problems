function twoSum(nums, target) {
  let indices = new Map();
  for (let i = 0; i < nums.length; i++) {
    let compliment = target - nums[i];
    if (indices.has(compliment)) {
      return [indices.get(compliment), i];
    }
    indices.set(nums[i], i);
  }
}
const nums = [2, 4, 5, 9, 8];
const target = 7;

const result = twoSum(nums, target);

console.log(result);
