/** //!
 * sample input : 1,0,0
 * sample ouput: 1,0,1
 * explanation 100 + 1 = 101
 */

// function incrementNumber(N, A) {
//   let newArray = [];
//   let carry = 1;
//   for (let i = A.length - 1; i >= 0; i--) {
//     let sum = A[i] + carry;
//     newArray.push(sum % 10);
//     carry = Math.floor(sum / 10);
//   }
//   if (carry) newArray.push(carry);
//   return newArray.reverse().join("");
// }
// const result = incrementNumber(3, [1, 9]);
// console.log(result);


// function plusOne(digits) {
//   const num = BigInt(digits.join('')) + 1n;
//   console.log(num);
//   const numToString = num.toString();
//   console.log(numToString);
  
//   const arr = [];
//   for (let i = 0; i < numToString.length; i++){
//     const num = parseInt(numToString[i]);
//     console.log(num);
//     arr.push(num);
//   }
//   console.log(arr);
//   return arr;
// }
// const res = plusOne([9,9,99,9]);
// console.log(res);

function plusOne(digits) {
  const num = BigInt(digits.join('')) + 1n;
  const numToString = num.toString();
  const ansArray = [];
  for (let i = 0; i < numToString.length; i++){
    const num = parseInt(numToString[i]);
    ansArray.push(num);
  }
  return ansArray;
}
function incrementNumber(N, A) {
  let sum, carry = 1, ansArray = [];
  for (let i = A.length - 1; i >= 0; i--){
    sum = A[i] + carry;
    ansArray.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry) ansArray.push(carry);
  return ansArray.reverse().join('');
}
const res = plusOne([9,9,99,9]);
console.log(res);