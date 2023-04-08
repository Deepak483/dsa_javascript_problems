// //print spiral matrix
// // let arr = [
// //   [1, 2, 3, 4],
// //   [12, 13, 14, 5],
// //   [11, 16, 15, 6],
// //   [10, 9, 8, 7],
// // ];


// let count = 1;
// while (count <= n * n) {
//   //move to the right
//   for (let i = leftColumn; i <= rightColumn; i++) {
//     arr[topRow][i] = count;
//     count++;
//   }
//   topRow++;
//   //move to the bottom
//   for (let i = topRow; i <= bottomRow; i++) {
//     arr[i][rightColumn] = count;
//     count++;
//   }
//   rightColumn--;
//   //move to the left
//   for (let i = rightColumn; i >= leftColumn; i--) {
//     arr[bottomRow][i] = count;
//     count++;
//   }
//   bottomRow--;
//   //move to the top
//   for (let i = bottomRow; i >= topRow; i--) {
//     arr[i][leftColumn] = count;
//     count++;
//   }
//   leftColumn++;
// }
// console.log(arr);

let n = 3;
function spiralMatrixII(n) {
  let matrix = [];
  for (let i = 0; i < n; i++){
    matrix.push(new Array(n).fill(0));
  }
  let count = 1;
  let topRow = 0;
  let bottomRow = n - 1;
  let leftColumn = 0;
  let rightColumn = n - 1;

  while (count <= n * n) {
    // fill the top row from left to right
    for (let i = leftColumn; i <= rightColumn; i++){
      matrix[topRow][i] = count;
      count++;
    }
    topRow++;
    //fill the right column from top to bottom
    for (let i = topRow; i <= bottomRow; i++){
      matrix[i][rightColumn] = count;
      count++;
    }
    rightColumn--;
    //fill the bottomRow from right to left
    for (let i = rightColumn; i >= leftColumn; i--){
      matrix[bottomRow][i] = count;
      count++;
    }
    bottomRow--;
    //fill the leftColumn from bottom to top
    for (let i = bottomRow; i >= topRow; i--){
      matrix[i][leftColumn] = count;
      count++;
    }
    leftColumn++;

    //print the matrix
    
    


  }
  // for (let i = 0; i < n; i++){
  //   console.log(matrix[i].join(' '));
  // }
  return matrix;
}

const value = spiralMatrixII(4);
console.log(value);