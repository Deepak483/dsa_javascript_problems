// // function removeDuplicatesFromSortedArrayII(n, nums) {
  
// // }
function removeDuplicates(nums) {
  let i = 0;
  let count = 1;
  for (let j = 1; j < nums.length; j++){
    if (nums[i] === nums[j])
      count++;
    else
      count = 1;
    if (count <= 2) {
      i++;
      nums[i] = nums[j];
    }
  }
  return { newLength: i + 1,newArr:nums};
}
const nums = [1, 1, 1, 2, 2, 3];

const newLength = removeDuplicates(nums);
// console.log(nums.slice(0, newLength)); // Output: [1, 1, 2, 2, 3]
console.log(newLength);
// let index=2;
// for(let i =2;i<nums.length;i++){
//     if(nums[i]!==nums[index-2]){
//         nums[index]=nums[i];
//         index++;
//     }
// }
// console.log({ newLength: index, newArr: nums });




