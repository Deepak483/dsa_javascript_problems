/**
 * @param {number} n
 * @param {string[]} numbers
 * @return {string[]}
 */
function numSort(n, numbers) {
  numbers.sort((a, b) => {
    return parseInt(BigInt(intA) - BigInt(intB));
  });
  return numbers;
}
let n = 5;

let numbers = ["3 ", "30", "1", " 124", " 54644"];
let res = numSort(n, numbers);
console.log(res);
