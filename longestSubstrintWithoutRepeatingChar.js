function longestSubstringWithoutRepeatingCharacters(s) {
  let charMap = new Map();
  let start = 0;
  let max = 0;
  for (let end = 0; end < s.length; end++){
    let rightChar = s.charAt(end);
    if (charMap.has(rightChar) && charMap.get(rightChar) >= start)
      start = charMap.get(rightChar) + 1;
    charMap.set(rightChar, end);
    max = Math.max(max, end - start + 1);
  }
  return max;
}
let s = 'aabcccbcb';
const result = longestSubstringWithoutRepeatingCharacters(s);
console.log(result);
