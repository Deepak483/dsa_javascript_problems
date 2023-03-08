function findElementQuery(n, arr, x) {
  let start = 0;
  let end = arr.length - 1;
  let mid;
  let ans = -1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] < x) {
      start = mid + 1;
    } else if (arr[mid] > x) {
      end = mid - 1;
    } else {
      ans = mid;
      end = mid - 1;
    }
  }
  return ans;
}
let arr = [2, 3, 9, 8, 9, 9, 4];
let n = 5;
let q = 9;
// for(let i = 0;i<q;i++){
//   for(let j = 0;j<n;i++){
//     if(arr[i]==q){
//       // console.log(i);
//       return i;
//     }
//   }
//   return -1;
// }

const value = findElementQuery(n, arr, q);
console.log(value);
