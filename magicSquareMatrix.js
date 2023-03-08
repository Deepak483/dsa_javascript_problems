let n = 3;
let arr = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

function checkMagicSquare(n, matrix) {
  //first find the sum of diagonal 1 of matrix and diagonal 2
  let sumd1 = 0,
    sumd2 = 0,
    sumRow = 0,
    sumCol = 0;
  for (let i = 0; i < n; i++) {
    sumd1 = sumd1 + matrix[i][i];
    // console.log(sumd1);
    sumd2 = sumd2 + matrix[i][n - 1 - i];
    // console.log(sumd2);
  }
  if (sumd1 != sumd2) return false;

  for (let i = 0; i < n; i++) {
    sumRow = 0;
    sumCol = 0;
    for (let j = 0; j < n; j++) {
      sumRow = sumRow + matrix[i][j];
      // console.log(sumRow);
      sumCol = sumCol + matrix[j][i];
      // console.log(sumCol);
    }
    // console.log(sumRow);
    if (sumRow != sumRow || sumCol != sumd1) {
      return false;
    }
  }
  return true;
}
