let n = 3;
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
function rotateImage(n, matrix) {
  
  let rotatedImage = [];
  for (let i = 0; i < n; i++){
    rotatedImage.push(new Array(n).fill(0));
  }
  // swap along the main diagonal
  for (let i = 0; i < n; i++){
    for (let j = i; j < n; j++){
      rotatedImage[i][j] = matrix[j][i];
      rotatedImage[j][i] = matrix[i][j];
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
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n / 2; j++){
      const temp = rotatedImage[i][j];
      rotatedImage[i][j] = rotatedImage[i][n - j - 1];
      rotatedImage[i][n - j - 1] = temp;
    }
  }
  return rotatedImage;
}
// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n / 2; j++) {
//     const temp = matrix[i][j];
//     matrix[i][j] = matrix[i][n - j - 1];
//     matrix[i][n - j - 1] = temp;
//   }
// }
// 0 1 temp = 0 2
console.log(matrix);
