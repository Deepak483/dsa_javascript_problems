function removeDuplicatesFromSortedArrayII(n, nums) {
  /**
 * @param {number[]} nums
 * @param {number} n
 * @return {object}
 */
  //creating array
  const newArray = [];
  let count = 1;
  let index = 1;
  for (let i = 1; i < n; i++){
    if (nums[i] === nums[i - 1]) {
      newArray.push(nums[index]);
      count++;
      
    }
    else
      count = 1;
    if (count <= 2) {
      nums[index] = nums[i];
      newArray.push(nums[i]);
      index++;
    }
  }
  return { index, newArray };
  // return index;

  //* another approach 
  // let i = 0;
  // nums.forEach(element => {
  //   if (nums[i - 2] !== element) {
  //     nums[i] = element;
  //     i++;
  //   }
  // });
  // return i;
}
let nums = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 5];
let n = nums.length;
const result = removeDuplicatesFromSortedArrayII(n, nums);
console.log(result);
const newLength = 8;
//  nums = [1, 1, 2, 2, 3, 3, 4, 5];
console.log(nums.slice(0, newLength).join(" "));
//count = 1;
//index = 1;
//traverse array if(nums[i]===nums[i-1]) then count++ else count=1;
//if(count<=2) then nums[index ]= nums[i]; and iincrement index;
//at last return index
