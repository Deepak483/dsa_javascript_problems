// An array sorted in ascending order is rotated about a pivot unknown to you. Such an array is referred to as a rotated sorted array or a sorted-pivoted array. For example : [1,2,3,4,5] is a sorted array while [3,4,5,1,2] is a rotated sorted array.

// function findPivot(nums, l, r) {
// while (l <= r) {
//   let mid = l + Math.floor((r - 1) / 2);
//   if (nums[mid] < nums[0]) r = mid - 1;
//   else l = mid + 1;
//   if (nums[mid] > nums[mid + 1]) return mid;
// }
// return -1;

//   while (l < r) {
//     let mid = l + Math.floor((r - l) / 2);
//     if (nums[mid] > nums[r]) {
//       // If the middle element is greater than the right element, pivot is in the right half.
//       l = mid + 1;
//     } else {
//       // If the middle element is less than or equal to the right element, pivot is in the left half.
//       r = mid;
//     }
//   }

//   return l; // Pivot index
// }

// this should be in while(l<=r) loop
// if (arr[mid] < arr[0])
// search left
// else search right

// if (arr[mid] > arr[mid + 1])
//   return mid;
// after every thing is done and pivot is not find return -1;

// p = findPivot(arr,0,n-1)
// if(p===-1) then it means array is not rotated
// simply apply binary search to whole array
// binarySearch(arr,0,n-1,X) where X is target
//if(arr[p]===X)  return true;
// if(arr[0]<X)
// binarySearch(arr,0,p-1,X)
// else binarySearch(arr,p+1,n-1,X)

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let n = 7;
let nums = [4, 5, 6, 9, 10, 2, 3];
function search(nums, target) {
  // let l = 0, r = nums.length - 1;
  // while (l <= r) {
  //   let mid = l + Math.floor((r - l) / 2);
  //   let p = findPivot(nums, 0, nums.length - 1);
  //   if (p === -1)
  // }

  // [4,5,6,7,0,1,2] suppose target = 3
  // let nums = [4, 5, 6, 9, 10, 2, 3];
  let l = 0,
    r = nums.length - 1;
  while (l <= r) {
    let mid = l + Math.floor((r - l) / 2);
    if (nums[mid] === target) return mid;
    //left half is sorted it means
    if (nums[l] <= nums[mid]) {
      if (target >= nums[l] && target <= nums[mid])
        r = mid - 1;
      else
        l = mid + 1;
    }
    //it means right half is sorted and check if target is present or not
    else {
      if (target >= nums[mid] && target <= nums[r])
        l = mid + 1;
      else
        r = mid - 1;
    }
  }
  return -1;
}
const s = search(nums, 9);
console.log(s);
