/** //!
 * sample input : 1,0,0
 * sample ouput: 1,0,1 
 * explanation 100 + 1 = 101
 */

function incrementNumber(N, A) {
  let newArray = [];
  let carry = 1;
  for (let i = A.length - 1; i >= 0; i--) {
    let sum = A[i] + carry;
    newArray.push(sum % 10);
    carry = Math.floor(sum / 10);
  }
  if (carry) newArray.push(carry);
  return newArray.reverse().join("");
}
const result = incrementNumber(3, [1, 0, 0]);
console.log(result);
let string = "hello";
console.log(string.split("").reverse().join(""));
