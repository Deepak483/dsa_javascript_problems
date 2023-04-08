//matrix is already given i have to print in spiral order
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

let sprialOrder = function (matrix) {
  let ansArray = [];
  let row = matrix.length;
  let column = matrix[0].length;
  let topRow = 0;
  let bottomRow = matrix.length - 1;
  let leftColumn = 0,
    rightColumn = matrix.length - 1;
  // let count = 1;
  let direction = 0;

  while (ansArray.length < row * column) {
    if (direction === 0) {
      for (let i = leftColumn; i <= rightColumn; i++) {
        ansArray.push(matrix[topRow][i]);
      }
      topRow++;
      direction++;
    } else if (direction === 1) {
      for (let i = topRow; i <= bottomRow; i++) {
        ansArray.push(matrix[i][rightColumn]);
      }
      rightColumn--;
      direction++;
    } else if (direction === 2) {
      for (let i = rightColumn; i >= leftColumn; i--) {
        ansArray.push(matrix[bottomRow][i]);
      }
      bottomRow--;
      direction++;
    } else if (direction === 3) {
      for (let i = bottomRow; i >= topRow; i--) {
        ansArray.push(matrix[i][leftColumn]);
      }
      leftColumn++;
      direction++;
    }
    else if (direction === 4) direction = 0;
  }
  return ansArray;
};

const value = sprialOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// console.log(performance.now());
console.time('codezup');
console.log(value);
