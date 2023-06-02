/**
 * @param {number} n
 * @return {number}
 */
function nextGreaterElementWithSameSetOfDigits(n) {
  //first convert the number into string then into array so that operation can be done in easy way
  const digits = String(n).split('').map(Number);
  //Find the pivot
  let i = digits.length - 2;
  while (i >= 0 && digits[i] >= digits[i + 1])
    i--;
  
  if (i < 0)
    return -1;
  
  // find the successor digit
  let j = digits.length - 1;
  while (j > i && digits[j] <= digits[i])
    j--;
  
  //swap the digit at i to digit at j
  [digits[i], digits[j]] = [digits[j], digits[i]];

  //reverse the subarray to the right of pivot
  let left = i + 1;
  let right = digits.length - 1;
  while (left < right) {
    [digits[left], digits[right]] = [digits[right], digits[left]];
    left++;
    right--;
  }
  const result = Number(digits.join(''));
  return result <= n ? -1 : result;
}
const n = 2147483486;
const result = nextGreaterElementWithSameSetOfDigits(n);
console.log(result);
const value = String(n).split('').map(Number);
console.log(Number(value.join('')));
/**
 * *  4 6 2 3 9 4 3
 * *  4 6 2 4 9 3 3
 * *  4 6 2 4 3 3 9
 * i=5 digit[i]= 4
 * i>=0 ;i--
 * i=4;
 * i=3,digit[i]=3
 * 
 * j=6 ;digit[j]=3
 * j>i 6>3; digit[j]<=digit[i]
 * j-- j=5 digit[5] = 4
 * left =i+1 = 4 digit[left] = 9
 * right = 6;digit[right] = 3
 * left=5 digit[left]=3
 * right = 5;digit[right] = 3
 * 
 */