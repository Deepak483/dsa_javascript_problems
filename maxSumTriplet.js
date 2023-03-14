//max sum triplet
/**Sample Input 1
3

7
3 7 4 2 5 7 5

4
5 2 4 5

3
3 2 1
Sample Output 1
16
11
0 */

function maxSumTriplet(n, nums) {
  //brute force approach
  // let ans = 0;
  // for (let i = 0; i < n - 2; i++) {
  //   for (let j = i + 1; j < n - 1; j++) {
  //     for (let k = j + 1; k < n; k++) {
  //       let currSumTriplet = nums[i] + nums[j] + nums[k];
  //       if (ans < currSumTriplet) {
  //         ans = currSumTriplet;
  //       }
  //   }
  // }
  // }
  // return ans;
  
  let ans = 0;
  for (let i = 1; i < n - 1; i++){
    let max1 = 0, max2 = 0;
    for (let j = 0; j < i; j++){
      if (nums[j] < nums[i]) {
        max1 = Math.max(max1, nums[j]);
      }
    }
    for (let j = i + 1; j < n; j++){
      if (nums[j] > nums[i]) {
        max2 = Math.max(max2, nums[j]);
      }
    }
    if (max1 != 0 && max2 != 0) {
      ans = Math.max(ans, (nums[i] + max1 + max2));
    }
  }
  return ans;
}
const maxSum = maxSumTriplet(3, [7,4,3]);
console.log(maxSum);