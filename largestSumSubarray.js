// Sample Input 1
let n = 8;

let arr = [-2, -3, 4, -1, -2, 1, 5, -3];
function contigiousSequence(n, arr) {
  //brute force approach
  // let max = 0;
  // for (let i = 0; i < n; i++){
  //   let sum = 0;
  //   for (let j = i; j < n; j++){
  //     sum = sum + arr[j];
  //     console.log(sum);
  //     max = Math.max(sum, max);
  //   }
  // }
  // return max;

  //pseudo code
  //first we are declaring the currSum and maxsum and then looping to the arr find the currSum with next element
  //then checking if it is less than one then skip and start fresh
  //if maxSum is less than currSum then maxsum will be currSum at last returning the maxsum;
  if (n === 1)
    return arr[n - 1];
  
  let currSum=0;
  // let maxSum = -(Math.pow(2,53))-1;
  let maxSum = arr[0];
  for (let i = 0; i < n; i++) {
    currSum = currSum + arr[i];
    if (maxSum < currSum) maxSum = currSum;
    if (currSum < 0) currSum = 0;
  }
  return maxSum;
  //!best one which passed all the testcases
  // let max = arr[0];
  //   let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //       sum += arr[i];
  //       if (sum > max) {
  //           max = sum;
  //       }
  //       if (sum < 0) {
  //           sum = 0;
  //       }
  //   }
  //   return max;
}
const result = contigiousSequence(n, arr);
console.log(result);
