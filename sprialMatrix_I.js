//matrix is already given i have to print in spiral order
// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]

let sprialOrder = function (matrix) {
  // let ansArray = [];
  // let row = matrix.length;
  // let column = matrix[0].length;
  // let topRow = 0;
  // let bottomRow = column-1;
  // let leftColumn = 0,
  //   rightColumn = matrix.length - 1;
  // // let count = 1;
  // let direction = 0;

  // while (ansArray.length < row * column) {
  //   if (direction === 0) {
  //     for (let i = leftColumn; i <= rightColumn; i++) {
  //       ansArray.push(matrix[topRow][i]);
  //     }
  //     topRow++;
  //     direction++;
  //   } else if (direction === 1) {
  //     for (let i = topRow; i <= bottomRow; i++) {
  //       ansArray.push(matrix[i][rightColumn]);
  //     }
  //     rightColumn--;
  //     direction++;
  //   } else if (direction === 2) {
  //     for (let i = rightColumn; i >= leftColumn; i--) {
  //       ansArray.push(matrix[bottomRow][i]);
  //     }
  //     bottomRow--;
  //     direction++;
  //   } else if (direction === 3) {
  //     for (let i = bottomRow; i >= topRow; i--) {
  //       ansArray.push(matrix[i][leftColumn]);
  //     }
  //     leftColumn++;
  //     direction++;
  //   }
  //   if (direction === 4) direction = 0;
  // }
  // return ansArray;
  
  let arr = []
    let r = matrix.length;
    let c = matrix[0].length;
    let direction = 0;
    let left = 0;
    let right = c-1;
    let bottom = 0;
    let top = r-1;

    while(arr.length<r*c){
        if(direction == 0){
            for(let i = left; i<=right; i++){
                arr.push(matrix[bottom][i])
            }
            bottom++
            direction++
        }
        else if(direction == 1){
            for(let i = bottom; i<=top; i++){
                arr.push(matrix[i][right])
            }
            right--
            direction++
        }
        else if(direction == 2){
            for(let i = right; i>=left;i--){
                arr.push(matrix[top][i])
            }
            top--
            direction++
        }
        else if(direction==3){
            for(let i =top; i>=bottom; i--){
                arr.push(matrix[i][left])
            }
            left++
            direction++
        }
        if(direction == 4) direction = 0;
    }
    return arr;
};

const value = sprialOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
// console.log(performance.now());
console.time('codezup');
console.log(value);
