function longestSubarrayHavingSumK(N, K, nums) {
  //* brute force approach
  // let len = 0;
  //   for (let i = 0; i < N; i++) {
  //     for (let j = i; j < N; j++){
  //       let sum = 0;
  //       for (let k = i; k < j; k++){
  //         sum += nums[k];
  //         if (sum === K)
  //           len = Math.max(len, j - i + 1);
  //       }
  //     }
  //   }
  // return len;

  //* better approach
  let preSumMap = new Map();
  let sum = 0,
    maxLen = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === K) {
      maxLen = Math.max(maxLen, i + 1);
    }
    let rem = sum - K;
    if (preSumMap.has(rem)) {
      let len = i - preSumMap.get(rem);
      maxLen = Math.max(maxLen, len);
    }
    if (!preSumMap.has(sum)) preSumMap.set(sum, i);
  }
  return maxLen;
}
// Sample Input 1
let N = 6,
  K = 15;
let nums = [10, 5, 2, 7, 1, 9];
let res = longestSubarrayHavingSumK(N, K, nums);
console.log(res);
// 10 5 2 7 1 9

// Sample Output 1
// 4

// Explanation
// The longest subarray is [5, 2, 7, 1].

// Sample Input 1.9

// int longestSubarrayWithSumK(vector < int > a, long long k){
//   map < long long, int > preSumMap;
//   long long sum = 0;
//   int maxLen = 0;
//   for (int i = 0; i < a.size(); i++) {
//     sum += a[i];
//     if (sum == k) {
//       maxLen = max(maxLen, i + 1);
//     }
//     int rem = sum - k;
//     if (preSumMap.find(rem) != preSumMap.end()) {
//       int len = i - preSumMap[rem];
//       maxLen = max(maxLen, len);
//     }
//     preSumMap[sum] = i;
//   }
//   return maxLen;
// }
