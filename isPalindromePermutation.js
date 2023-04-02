function isPalindromePermutation(s) {
  //find the odd count if the odd count is 1 then it is
  // possible that it can form palindrome
  // declare a variable
  //* let obj = {};
  //* for (let i = 0; i < s.length; i++) {
  //*   if (obj[s[i]] == undefined) {
  //*     obj[s[i]] = 1;
  //*   } else {
  //*     obj[s[i]] = obj[s[i]]+1;
  //*   }
  //* }
  //* let oddCount = 0;
  //* let keys = Object.keys(obj);
  //* for (let i = 0; i < keys.length; i++){
  //*   if (obj[keys[i]] % 2 != 0)
  //*     oddCount++;
  //* }
  //* if (oddCount <= 1)
  //*   return true;
  //* else
  //*   return false;
  let charCount = new Map();
  for (let i = 0; i < s.length; i++){
    let c = s.charAt(i);
    charCount.set(c, (charCount.get(c) || 0) + 1);
  }
  let oddCount = 0;
    for (const count of charCount.values()) {
      if (count % 2 != 0)
        oddCount++;
    }
  if (oddCount > 1)
      return false;
  return true;
}
const result = isPalindromePermutation("abbbcba");
console.log(result);
let newMap = new Map();
newMap.set('s', 1);
console.log(newMap.get('s'));
console.log(newMap);
