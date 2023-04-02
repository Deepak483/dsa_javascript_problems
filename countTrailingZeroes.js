// 1000000000000000000
// 249999999999999995
function trailingZeros(n) {
  let count = 0;
  let num = BigInt(n);

  while (num > 0n) {
    count += Number(num / 5n);
    num = num / 5n;
  }
  return count;
}

  // let count = 0;
  // let i = 5n;
  // while (i <= n) {
  //   count += BigInt(Math.floor(n / i));
  //   i *= 5n;
  // }
  // return count.toString();
// let n = 3
//   let numZeroes = 0;
//   let powerOfFive = BigInt(5);
//   while (powerOfFive <= n) {
//     numZeroes += BigInt(Math.floor(n / powerOfFive));
//     powerOfFive *= BigInt(5);
//   }
//   return numZeroes.toString();
// // }
// const ans = trailingZeros(1000000000000000000);
// console.log(ans);

let n = 4;
let array = new Array(n);
for (let i = 0; i < n; i++){
  // console.log(array[i]);
  let newArray = new Array(3);
  array.push(newArray);
}
console.log(array);
let dd = new Array(3).fill(0);
console.log(dd);
array[0] = dd;
array[3] = dd;
console.log(array);

