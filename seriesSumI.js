let n = 3;
let sum = 0;
for (let i = 1; i <= n; i++){
  sum = (2 * i - 1) * (2 * i + 1) + sum;
}
console.log(sum);
