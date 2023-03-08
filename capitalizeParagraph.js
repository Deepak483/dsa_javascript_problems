// function isCapitalize(paragraph) {
//   let ans = "";
//   for (let i = 0; i < paragraph.length; i++) {
//     if (
//       (i == 0 && isLowerCaseAlphabet(paragraph[i])) ||
//       (i > 0 && paragraph[i - 1] == "" && isLowerCaseAlphabet(paragraph[i]))
//     )
//       ans += capitalize(paragraph[i]);
//     else ans += paragraph[i];
//   }
//   function capitalize(ch) {
//     let diff = "a".charCodeAt(0) - "A".charCodeAt(0);
//     return String.fromCharCode(ch.charCodeAt(0) - diff);
//   }
//   return ans;
// }
// function isLowerCaseAlphabet(ch) {
//   if (ch.charCodeAt(0) >= "a".charCodeAt(0) && ch <= "z".charCodeAt(0))
//     return true;
//   else return false;
// }

// const result = isCapitalize("quick brown fox Under the Table");
// console.log(result);

function capitalize(paragraph) {
  let ans = '';
  let diff = 'a'.charCodeAt(0) - 'A'.charCodeAt(0);
  for (let i = 0; i < paragraph.length; i++)
  {
    if (paragraph[i].charCodeAt(0) >= 'a'.charCodeAt(0) && paragraph[i].charCodeAt(0) <= 'z'.charCodeAt(0)) {
      if (i == 0 || (i > 0 && paragraph[i - 1] == '')) {
        ans += String.fromCharCode(paragraph[i].charCodeAt(0) - diff);
      } else {
        ans += paragraph[i];
      }
    } else {
      ans += paragraph[i];
    }
  }
  return ans;
}