//merget overlap
/**
 * //*Sample Input 1
4

1 3
2 6
8 10
15 18
//*Sample Output 1
1 6
8 10
15 18
//*Explanation 1
Since intervals [1 3] and [2 6] overlap, merge them into [1 6]
//*Sample Input 2
2
1 4
4 5
//*Sample Output 2
1 5
//*Explanation 2
Intervals [1 4] and [4 5] overlap and get merged into [1 5]
 */
/**
 * @param {number} n
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function mergeIntervals(n, intervals) {
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  console.log(intervals);
  let ans = [];
  let currStart = intervals[0][0],
    currEnd = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= currStart && intervals[i][0] <= currEnd) {
      // currStart = Math.min(curr)
      currEnd = Math.max(currEnd, intervals[i][1]);
      console.log(currEnd);
    } else {
      ans.push([currStart, currEnd]);
      currStart = intervals[i][0];
      currEnd = intervals[i][1];
    }
  }
  ans.push([currStart, currEnd]);
  return ans;
}
const result = mergeIntervals(5, [
  [1, 5],
  [6, 10],
  [11, 15],
  [16, 20],
  [5, 16],
]);
console.log(result);

// 5
// 1 5
// 6 10
// 11 15
// 16 20
// 5 16
// //output
// 1 20
