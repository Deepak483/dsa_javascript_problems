function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++){
    let minIndx = i;
    for (let j = i + 1; j < arr.length; j++){
      if (arr[j] < arr[minIndx])
        minIndx = j;
    }
    [arr[i], arr[minIndx]] = [arr[minIndx], arr[i]];
  }
  return arr;
}
let arr = [2, 1, 0, 9, 7, 3, 4];
const result = selectionSort(arr);
console.log(result);