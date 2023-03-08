//! TODO: Implement this method
function additionOfMatrix(matrix1, matrix2) {
  const numRows = matrix1.length;
  const numCols = matrix1[0].length;
  let resultMatrix = [];
  for (let i = 0; i < numRows; i++) {
    let resultMatrix[i] = new Array(n);
    for (let j = 0; j < numCols; j++) {
      resultMatrix[i][j] = matrix1[i][j] + matrix2[i][j];
    }
  }
  return resultMatrix;

}

/**
 *  [2(0,0),2(0,1)][1(0,0),2(0,1)]= 2 + 1,
 *  [3(1,0),2(1,1)][4(1,0),5(1,1)]
 */
let matrix1 = [[1, 2],[2, 1]];
let matrix2 = [[2, 4],[3, 9]];
console.log(additionOfMatrix(matrix1, matrix2));