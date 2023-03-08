function cyclicRotation(n, arr, k) {}
let arr = [1, 2, 3, 4, 5];
let k = 2;
let n = 5;
for (let i = arr.length - 1; i > k; i--) {
  let newArray = [];
  newArray.push(arr[i]);
  arr.pop(arr[i]);
  let cyclicArray = [];
  cyclicArray.unshift(newArray);
}
