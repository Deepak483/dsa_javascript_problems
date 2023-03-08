// function stringPermutation(n, s, arr) {
//   let newString = '';
//   for (let i = 0; i < n; i++){
//     newString += s[arr[i] - 1];
//   }
//   return newString;
// }
// let n = 4;
// let s = 'abcd';
// let arr = [2, 4, 3, 1];
// const result = stringPermutation(n,s,arr);
// console.log(result);
// let returnString = 'dacb';
/**
 * a b c d
 * 0 1 2 3
 * arr = 2 4 3 1
 *       1 3 2 0
 * first we have to iterate to array
 * that we have to take each value arr[i]
 * form new string newString  and push newString(arr[i]-1)=(s[i])
 */
// console.log(s[3]);
function stringPermutation(n, s, arr) {
  let newStr = "";
  for (let i = 0; i < n; i++) {
    newStr += s[arr[i] - 1];
  }
  return newStr;
}
// Example usage:
const n = 4;
const s = "abcd";
const arr = [2, 4, 3, 1];

const newStr = stringPermutation(n, s, arr);
console.log(newStr); // outputs "dacb"
