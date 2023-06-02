function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++){
    let X = arr[i];
    j = i - 1;
    while (arr[j] > X && j >= 0) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = X;
  }
  return arr;
}
const arr = [2, 8, 0, 9, 7, 11, 3];
const result = insertionSort(arr);
console.log(result);