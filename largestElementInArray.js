//largest element in array
let arr = [2, 999, 1, 3, 1000, 1002, 0];
let highest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > highest) highest = arr[i];
}
console.log(highest);
