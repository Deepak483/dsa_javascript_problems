function findOddNumbers(N) {
  const arr = [];
  for (let i = 0; i <= N; i++) {
    if (i % 2 != 0) {
      // console.log(i);
      arr.push(i);
    }
  }
  return arr;
}
const result = findOddNumbers(5);
console.log(result);
