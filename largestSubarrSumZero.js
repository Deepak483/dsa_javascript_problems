/**
 * @param {number} n
 * @param {number[]} arr
 * @return {number[]}
 */
function largestSubarraySumZero(n, arr) {
  // ! brute force approach
  // let maxLen = 0;
  // let startIndex = 0;
  // for (let i = 0; i < n; i++) {
  //   let currSum = 0;
  //   for (let j = i; j < n; j++) {
  //     currSum += arr[j];
  //     if (currSum === 0 && (j - i + 1) > maxLen) {
  //       maxLen = j - i + 1;
  //       startIndex = i;
  //     }
  //   }
  // }
  // if (startIndex === -1) {
  //   return null;
  // }
  // return arr.slice(startIndex, startIndex + maxLen);

  //! another approach of o(n) time complexity
  //also checking if all the element of array are positive or negative then simply return -1;
  if (arr.every(ele => ele > 0) || arr.every(ele => ele < 0)) {
    return -1;
  }
  let sum = 0, startIndex = -1, maxLength = 0;
  let sumIndexMap = new Map();
  for (let i = 0; i < n; i++){
    sum += arr[i];
    if (sum === 0) {
      startIndex = 0;
      maxLength = i + 1;
    } else if (sumIndexMap.has(sum)) {
      const prevIndex = sumIndexMap.get(sum);
      const subArrayLength = i - prevIndex;
      if (subArrayLength > maxLength) {
        maxLength = subArrayLength;
        startIndex = prevIndex + 1;
      }
    } else {
      sumIndexMap.set(sum,i);
    }
  }
  if (startIndex === -1) {
    return -1;
  }
  return  arr.slice(startIndex, startIndex + maxLength);
  
}
let n = 6;
let arr = [2, 3, 1, -4, 0, 6];
// let arr = [-1,-1,-1,-2,-2];
const result = largestSubarraySumZero(n, arr);
console.log(result);
//[2,5,6,2,2,8]
//*maxLen = 4
//* curr_sum = 0 i = 1 j=1
//cs = 3, j=2, cs=3+1= 4
//cs=4,j=3, cs=4-4 = 0 3-1+1=3
//cs=0,j=4,cs=0+0 = 0 maxLen = 3,4-1+1 = 3+1=4
