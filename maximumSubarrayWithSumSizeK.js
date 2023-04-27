/**
 * @param {number} N
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
function maximumSubarraySumSizeK(N, A, K) {
  // let maxSum = 0;
  // for (let i = 0; i < N-K; i++){
  //   let currSum = 0;
  //   for (let j = i; j < i+K; j++){
  //     currSum += A[j];
  //   }
  //   //
  //   maxSum = Math.max(maxSum, currSum);
  // }
  // return maxSum;
  let max_sum = 0;
  for (let i = 0; i < K; i++) {
    max_sum += A[i];
  }
  let subarray_sum = max_sum;
  for (let i = K; i < N; i++) {
    subarray_sum += A[i] - A[i - K];
    max_sum = Math.max(max_sum, subarray_sum);
  }
  return max_sum;
  /**
   * i=0;maxsum = 100
   * subsum = 100;i=2 100+300-100=300 maxSum =300
   * subsum = 100;i=3;100+400-200=300
   * i=1;maxsum=100+200 = 300;
   * subsum = 300;i=2;300+300-100=500 maxsum=500
   * i=3;300+400-200=500; maxsum=500
   * i=2;maxSum=500
   */
  
}
let N = 4;
let K = 2;
let A = [100, 200, 300, 400];
const result = maximumSubarraySumSizeK(N, A, K);
console.log(result);