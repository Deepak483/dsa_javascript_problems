let n = 3;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < n; i++) {
  for (let j = i; j < n; j++) {
    const temp = matrix[i][j];
    matrix[i][j] = matrix[j][i];
    matrix[j][i] = temp;
  }
}
console.log(matrix);
/*1 2 3 (0,0) (0,1) (0,2)
  4 5 6 (1,0) (1,1) (1,2)
  7 8 9 (2,0) (2,1) (2,2)

  1,4,7
  2,5,8
  3,6,9

  7,4,1
  8,5,2
  9,6,3
    */
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n / 2; j++) {
    const temp = matrix[i][j];
    matrix[i][j] = matrix[i][n - j - 1];
    matrix[i][n - j - 1] = temp;
  }
}
console.log(matrix);
