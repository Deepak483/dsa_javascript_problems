var search = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let mid;
  let ans=-1;
  // console.log(start, end);
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
};

let nums = [-1, 0, 3, 5, 9, 12];
let target = 9;
let result = search(nums, target);
console.log(result);
