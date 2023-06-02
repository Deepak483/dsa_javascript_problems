function countSort(n,str) {
  //Create a array to store the count of each character
  let count = new Array(26).fill(0);
  console.log(count);
  
  //Traverse the string and increment the count of each character
  for (let i = 0; i < n; i++){
    console.log(count[str.charCodeAt(i) - 97]++);
  }
  //traverse the count array and create a sorted string
  let sortedStr = '';
  for (let i = 0; i < 26; i++){
    sortedStr += String.fromCharCode(i + 97).repeat(count[i]);
  }
  return sortedStr;

}
// string countSort(string arr){
//   vector < int > count(26, 0);
//   string s(arr.length(), ' ');
//   for (int i = 0; i < arr.size(); i++) {
//     count[arr[i] - 'a']++;
//   }
//   for (int i = 1; i < 26; i++) {
//     count[i] += count[i - 1];
//   }
//   for (int i = 0; i < arr.size(); i++) {
//     int x = --count[arr[i] - 'a'];
//     s[x] = arr[i];
//   }
//   return s;
// }
let str = 'abcdeedcba';
let n = str.length;
const result = countSort(n, str);
console.log(result);
console.log(n);