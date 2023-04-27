// /**
//  * @param {string} s
//  * @param {number} k
//  * @return {number}
//  */
//!brute force approach

// function lengthOfLongestSubstringKDistinct(str, k) {
//   if (str.length === 0 || k === 0) {
//     return 0;
//   }
  
//   let longest_substr_len = 1;
  
//   for (let i = 0; i < str.length; i++) {
//     for (let j = i + 1; j <= str.length; j++) {
//       if (getNumDistinctCharsInString(str.substring(i, j)) <= k) {
//         longest_substr_len = Math.max(longest_substr_len, j - i);
//       }
//     }
//   }
  
//   return longest_substr_len;
// }
// function getNumDistinctCharsInString(str) {
//   const characterSet = new Set();
//   for (let i = 0; i < str.length; i++){
//     characterSet.add(str.charAt(i));
//   }
//   return characterSet.size;
// }

function lengthOfLongestSubstringKDistinct(str, k) {
  // const charCount = new Map();
  // let left = 0;
  // let longest = 0;
  // //Xyyzy
  // for (let right = 0; right < str.length; right++) {
  //   const char = str[right];
  //   charCount.set(char, (charCount.get(char) || 0) + 1);
    
  //   while (charCount.size > k) {
  //     const leftChar = str[left];
  //     charCount.set(leftChar, charCount.get(leftChar) - 1);
  //     if (charCount.get(leftChar) === 0) {
  //       charCount.delete(leftChar);
  //     }
  //     left++;
  //   }
    
  //   longest = Math.max(longest, right - left + 1);
  // }
  
  // return longest;
  let windowStart = 0;
  let max = 0;
  const soFar = new Map();
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd];
    if (!soFar.get(rightChar)) soFar.set(rightChar, 1);
    else soFar.set(rightChar, soFar.get(rightChar) + 1);
    while (soFar.size > k) {
      let leftChar = str[windowStart];
      if (soFar.get(leftChar) > 1) soFar.set(leftChar, soFar.get(leftChar) - 1);
      else soFar.delete(leftChar);
      windowStart++;
    }
    max = Math.max(max, windowEnd - windowStart + 1);
  }
  return max;
}
/**
 * char = X,chatCount = X:0 longest:1
 * char = y,charCount = y:1 longest:2
 * char = y, charCount= y:2 longest:3
 * char = z,charCount=z z:0 
 */
let s = 'Xyyzy';
let k = 3;
const result = lengthOfLongestSubstringKDistinct(s, k);
console.log(result);





