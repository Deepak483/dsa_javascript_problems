let m = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
function setMatrixZeroes(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let firstRowZero = false;
  let firstColZero = false;

  //check if the first row is zero
  for (let col = 0; col < cols; col++) {
    if (matrix[0][col] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // check if the first col is zero
  for (let row = 0; row < rows; row++) {
    if (matrix[row][0] === 0) {
      firstColZero = true;
      break;
    }
  }
  //use first row and col as markers,scan the matrix and update markers accordingly
  for (let row = 1; row < rows; row++) {
    for (let col = 1; col < cols; col++) {
      if (matrix[row][col] === 0) {
        matrix[0][row] = 0;
        matrix[col][0] = 0;
      }
    }
  }

  //nullify all the row based on markers in first column
  for (let row = 1; row < rows; row++) {
    if (matrix[row][0] === 0) {
      for (let col = 1; col < cols; col++) {
        matrix[row][col] = 0;
      }
    }
  }

  //nullify all the col based on markers in first row
  for (let col = 1; col < cols; col++) {
    if (matrix[0][col] === 0) {
      for (let row = 1; row < rows; row++) {
        matrix[row][col] = 0;
      }
    }
  }

  //nullify first row if necessary
  if (firstRowZero) {
    for (let col = 0; col < cols; col++) {
      matrix[0][col] = 0;
    }
  }

  //nullify first col if necessary
  if (firstColZero) {
    for (let row = 0; row < rows; row++) {
      matrix[row][0] = 0;
    }
  }

  return matrix;
}

const result = setMatrixZeroes(m);
console.log(result);
