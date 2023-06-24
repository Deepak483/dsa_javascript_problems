function nextSmallerElement(arr, n) {
  let stack = [];
  let result = new Array(n).fill(-1);
  for (let i = n - 1; i >= 0; i--){
    while (stack.length > 0 && arr[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    if (stack.length > 0) {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}
let arr = [8, 2, 5, 10, 4];
let n = arr.length;
// const res = nextSmallerElement(arr, n);
// console.log(res);
function previousSmallerElements(arr,n) {
  let stack = [];
  let result = [];
  for (let i = 0; i < n; i++){
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }
    if (stack.length === 0) {
      result[i] = -1;
    } else {
      result[i] = stack[stack.length - 1];
    }
    stack.push(arr[i]);
  }
  return result;
}
const res = previousSmallerElements(arr, n);
console.log(res);




//[2]