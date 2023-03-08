const arr = [3, 4, 2, 1, 10, 100, 9, 0];
const value = arr.sort((a, b) => {
  return a - b;
});
const fisherYateMethod = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = arr[i];
    arr[i] = arr[j];
    arr[j] = k;
  }
  return arr;
};
console.log(fisherYateMethod(arr));
console.log(value);
