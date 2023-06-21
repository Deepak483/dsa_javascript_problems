/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
function kthSmallestElementInMatrix(matrix, k) {
  //* brute force approach
  // let newArray = [];
  // for (let i = 0; i < matrix.length; i++) {
  //   for (let j = 0; j < matrix[0].length; j++){
  //     newArray.push(matrix[i][j]);
  //   }
  // }
  // newArray.sort((a,b)=>a-b);
  // return newArray[k-1];
  let n = matrix.length;
  let low = matrix[0][0],
    high = matrix[n - 1][n - 1];
  while (low < high) {
    let mid = Math.floor((low + high) / 2);
    if (findRank(matrix, mid) < k) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
function findRank(matrix, target) {
  let n = matrix.length;
  let row = n - 1,
    col = 0;
  let count = 0;
  while (row >= 0 && col < n) {
    if (matrix[row][col] <= target) {
      count += row + 1;
      col++;
    } else {
      row--;
    }
  }
  return count;
}
let n = 3,
  k = 8;

let matrix = [
  [1, 5, 9],
  [10, 11, 13],
  [12, 13, 15],
];
const _result = kthSmallestElementInMatrix(matrix, k);
console.log(_result);
