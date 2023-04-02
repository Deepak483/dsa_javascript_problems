function numberOfDivisorsAndSum(n) {
  let sum = 0;
  let count = 0;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      count++;
      sum += i;
    }
  }
  arr.push(count);
  arr.push(sum);
  return arr;
}
const value = numberOfDivisorsAndSum(10);
console.log(value);
