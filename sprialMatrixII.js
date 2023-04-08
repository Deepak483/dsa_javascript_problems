/**
 * @param {number} n
 * @return {number[][]}
 */
// Print a 2-d matrix of size A x A satisfying the spiral order.
// Sample Input 1
// 3
// Sample Output 1
// 1 2 3
// 8 9 4
// 7 6 5

function generateMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  let count = 1;
  let leftColumn = 0, rightColumn = n - 1, topRow = 0, bottomRow = n - 1;
  while (count <= n * n) {
    //moving from left to right
    for (let i = leftColumn; i <= rightColumn; i++) {
      matrix[topRow][i] = count;
      count++;
    }
    topRow++;
    //moving from top to bottom
    for (let i = topRow; i <= bottomRow; i++) {
      matrix[i][rightColumn] = count;
      count++;
    }
    rightColumn--;
    //moving form right to left
    for (let i = rightColumn; i >= leftColumn; i--) {
      matrix[bottomRow][i] = count;
      count++;
    }
    bottomRow--;
    //moving from bottom to top
    for (let i = bottomRow; i >= topRow; i--) {
      matrix[i][leftColumn] = count;
      count++;
    }
    leftColumn++;
  }
  return matrix;
}
const result = generateMatrix(3);
console.log(result);