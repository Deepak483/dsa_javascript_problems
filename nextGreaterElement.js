let arr = [4, 6, 3, 2, 8, 1, 9];
//first define stack variable which will store the index of the arr and also define thre result 
function nextGreaterElement(arr,n) {
  const stack = [];
  const result = new Array(arr.length).fill(-1);
  for (let i = 0; i < arr.length; i++){
    while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
      result[stack.pop()] = arr[i];
    }
    stack.push(i);
  }
  return result;
}
let n = arr.length;
const ans = nextGreaterElement(arr, n);
console.log(ans);
[4, 6, 3, 2, 8, 1, 9]
[6,]
// st = [];
// i = 0; push index st = [0] 
// i = 1; if (arr[i] > arr[st[st.length - 1]])
// pop st result[st.pop()] = arr[i];
//i = 2; arr[2] = 3
// st.push(2)
// st = [2,3];
// //i=3; arr[3] = 2 st.push(3)
// i = 4;arr[4] = 8 8>arr[st[1]]
// result = [6, -1, -1, -1, -1, -1, -1];
