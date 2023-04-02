function bigIntegerAddition(str1, str2) {
  let result = '';
  let carry = 0;
  let i = str1.length - 1;
  let j = str2.length - 1;
  
  while (i >= 0 || j >= 0) {
    const digit1 = i >= 0 ? parseInt(str1[i]) : 0;
    const digit2 = j >= 0 ? parseInt(str2[j]) : 0;
    const sum = digit1 + digit2 + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  
  if (carry > 0) {
    result = carry + result;
  }
  
  return parseInt(result);
}
let ans = bigIntegerAddition('2333', '33');
console.log(typeof ans);