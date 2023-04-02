// TODO: Implement this method
function modularExponentiation(x, p) {
  x = BigInt(x);
  p = BigInt(p);
  let sum = 0n;
  sum = BigInt(x ** p) % (BigInt(10 ** 9) + 7n);
  return sum.toString();
}

let array = [2, 8, 9, 10, 99, 101];
let target = 10;
function twoPointersApproach(array,target) {
  let left = array[0]
  let right = array.length - 1;
  while (left <= right) {
    if (array[left] + array[right] < target)
      left++;
    else if (array[left] + array[right] > target)
      right--;
    else return true;
  }
  return false;
}
const result = twoPointersApproach(array,target);
console.log(result);
const value = modularExponentiation(100000000, 2);
console.log(value);