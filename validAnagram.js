// check one string is anagram of others
function validAnagram(s, t) {
  if (s === " " && t === " ") return false;
  if ((s === undefined && t.length != 0) || (s.length != 0 && t === undefined))
    return false;
  if (s === "" && t === "") return true;
  let newS = s.split("").sort().join("");
  let newT = t.split("").sort().join("");
  if (newS.length != newT.length) return false;

  //sort both the string
  for (let i = 0; i < newS.length; i++) {
    if (newS[i] != newT[i]) return false;
  }
  return true;

}
let result = validAnagram(" ", " ");
console.log(result);
// let str = '';
// let str2 = '';
// console.log(str.length);
// let isTrueOrFalse = str === str2 ? 'true' : 'false';
// console.log(isTrueOrFalse);
// let newStr = str.split('').sort().join('');
// console.log(newStr);
let str = undefined;
let str2 = undefined;
if (str === undefined && str2 === undefined) console.log("true");
else console.log("false");


