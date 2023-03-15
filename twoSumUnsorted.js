// //! Sample Input 1
// //* 5 --> Number of elements in array
// //* 2 4 5 9 8 --> Array elements
// // 7 --> Target sum value
// //! Sample Output 1
// // 0 2
// /**
//  * @param {number[]} nums
//  * @param {number} target
//  * @return {number[]}
//  */
// function twoSum(nums, target) {
//   // let newNum = nums.sort((a, b) => { return a - b; });
//   // console.log(newNum);
//   // let start = 0, end = nums.length - 1;
//   // while (start < end) {
//   //   if (newNum[start] + newNum[end] < target)
//   //     start++;
//   //   else if (newNum[start] + newNum[end] > target)
//   //     end--;
//   //   else {
//   //     if()
//   //   }
//   let i = 0, j = i + 1;
//   for (i; i < nums.length - 1; i++){
//     for (j; j < nums.length; j++){
//       if (nums[i] + nums[j] === target)
//         return [i, j];
//     }
//   }
//   return -1;
//   }
//   // return [0,0];

// const result = twoSum([1, 2, 3, 2, 1], 2);
// console.log(result);
function twoSum(nums, target) {
  // Create a Map to store the indices of elements in the array
  // The key is the element and the value is its index
  const indices = new Map();

  // Check if there is a pair of elements in the array that add up to the target
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (indices.has(complement)) {
      return [indices.get(complement), i];
    }
    indices.set(nums[i], i);
  }

  // If no such pair is found, return an empty array
  return [];
}
const nums = [2, 4, 5, 9, 8];
const target = 7;

const result = twoSum(nums, target);

console.log(result);

