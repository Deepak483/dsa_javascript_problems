/**
 * @param {number} n
 * @param {number[][]} matrix
 * @return {number[][]} 
 */
function rotateImage(n, matrix) {
  /*1 2 3 (0,0) (0,1) (0,2)
    4 5 6 (1,0) (1,1) (1,2)
    7 8 9 (2,0) (2,1) (2,2)
    */
  /**Output: matrix after rotation
   *7 4 1 (2,0) (1,0) (0,0)
   *8 5 2 (2,1) (1,1) (0,1)
   *9 6 3 (2,2) (1,2) (0,2)
   */
  let matrix1 = [];
  // for (let i = 0; i < n; i++){
  //   matrix1.push(new Array(n).fill(0));
  // }
  let arr = [];
  let temp;
  console.log(matrix1);
  for (let j = 0; j < n; j++){
    for (let i = n - 1; i >= 0; i--){
      // console.log(matrix[i
      console.log(matrix[i][j]);
      arr.push(matrix[i][j]);
    }
  }
  console.log(arr);
  console.log(matrix1);
  for (let i = 0; i < n; i++){
    matrix1.push(new Array(n).fill(arr[i]));
  }
  console.log(matrix1);
  return matrix1;
}
const n = 3;
const matrix = [[1, 2, 3],
[4, 5, 6],
  [7, 8, 9]];
console.log(matrix);
const result =rotateImage(n, matrix);
console.log(result);

function rotate(matrix,n) {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < i; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n / 2; j++){
      let temp = matrix[i][j];
      matrix[i][j] = matrix[i][n - j - 1];
      matrix[i][n - j - 1] = temp;
    }
  }
}
const result1 = rotate(matrix, n);
console.log(result);