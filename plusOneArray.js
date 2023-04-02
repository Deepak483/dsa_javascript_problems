let digits = [99];
// iterate from last to first
// 1 2 3 4
// carry = 1;
// digits[3] = 9 + 1 = 10
// sum>10 carry = 1;digit = sum -10;
//else digit = sum; carry = 0;
//at last if there any carry

function plusOne(digits) {
  let carry = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    let sum = 0;
    sum = digits[i] + carry;
    if (sum >= 10) {
      carry = 1;
      digits[i] = sum - 10;
    } else {
      carry = 0;
      digits[i] = sum;
      break;
    }
  }
  if (carry) {
    digits.unshift(carry);
  }
  return digits;
}
const result = plusOne(digits);
console.log(result);
