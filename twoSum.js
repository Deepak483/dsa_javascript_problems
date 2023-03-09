// given array we have to find the sum of array element which should match
// with target
let target = 7;
let array = [2, 5, 7, 9, 10];
let left = array[0];
let right = array.length - 1;
function targetSum(array, left, right) {
  // while (left <= right) {
  //   if (array[left] + array[right] < target) left++;
  //   else if (array[left] + array[right] > target) right--;
  //   else return true;
  // }
  // return false;
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        console.log(array[i], array[j]);
        break;
      }
      // return true;
      else return false;
    }
  }
}
const result = targetSum(array, left, right);
console.log(result);
var twoSum = function (nums, target) {
  // Array to store the result
  result = [];
  // Map to store the difference and its index
  index_map = new Map();
  // Loop for each element in the array
  for (let i = 0; i < nums.length; i++) {
      let difference = target - nums[i];
      if (index_map.has(difference)) {
          result[0] = i;
          result[1] = index_map.get(difference);
          break;
      } else {
          index_map.set(nums[i], i);
      }
  }
  return result;
};