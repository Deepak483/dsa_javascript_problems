/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
/**
* Sample Input 1 
3 3
1 1 1
1 0 1
1 1 1
Sample Output 1
1 0 1
0 0 0
1 0 1
Sample Input 2
3 4
0 1 2 0
3 4 5 2
1 3 1 5
Sample Output 2
0 0 0 0
0 4 5 0
0 3 1 0
 */
function setMatrixZeroes(matrix) {
  //best approach
  let m = matrix.length;//row
  let n = matrix[0].length;//column
  let x = 1;
  let y = 1;
  for (let j = 0; j < n; j++){
    if (matrix[0][j] == 0)
      x = 0;
  }
  for (let i = 0; i < m; i++){
    if (matrix[i][0] == 0)
      y = 0;      
  }
  for (let i = 1; i < m; i++){
    for (let j = 1; j < n; j++){
      if (matrix[i][j] == 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }
  for(let j = 1; j < n; j++) {
    if (matrix[0][j] == 0) {
      for (let i = 1; i < m; i++){
        matrix[i][j] = 0;
      }
    }
  }
  for(let i = 1; i < n; i++) {
    if (matrix[i][0] == 0) {
      for (let j = 0; j < n; i++){
        matrix[i][j] = 0;
      }
    }
  }
  if (y == 0) {
    for (let i = 0; i < m; i++){
      matrix[i][0] = 0;
    }
  }
  if (x == 0) {
    for (let j = 0; j < n; j++){
      matrix[0][j] = 0;
    }
  }
  return matrix;
}

let m = [
  [1, 1, 1],
  [0, 0, 1],
  [1, 1, 1],
];
const result = setMatrixZeroes(m);
console.log(result);  