// function reverseNum(n) {
//   let reverseNum = 0;
//   for (let i = 0; i < n; i++) {
//     let lastDigit = n % 10;
//     reverseNum = (reverseNum * 10 )+ lastDigit;
//     n = Math.floor(n / 10);
//   }
// let reverseNum = 0;
// while (n != 0) {
//   let remainder = n % 10;
//   reverseNum = (reverseNum * 10) + remainder;
//   n /= 10;
// }
//   return reverseNum;
// }
// let n = 1119;
// let reverse = reverseNum(1119);
// console.log(reverse);

// firt method to reverse a number
// let n = 12333;
// let result = 0;
// while (n > 0) {
//   rightmost = n % 10;
//   result = result * 10 + rightmost;

// }
// function reverseNum(n) {
//   let result = 0;
//   while (n > 10) {
//     let rightmost = n % 10;
//     result = result * 10 + rightmost;
//     n = Math.floor(n / 10);
//   }
//   return result;
// }


// let number = 1119;

// // Initializing the result variable 
// let result = 0;

// while(number>0){
//     // Getting the rightmost digit
//     rightmost = number%10;
    
//     result = result*10 + rightmost;
    
//     // Removing the rightmost digit from the number
//     number = Math.floor(number/10);
// }
// console.log("Reversed number is : " + result)


// function reverseNum(n){
//   let result = 0;
//   result = Number(String(n).split('').reverse().join(''));
//   return result;
// }
// let reverse = reverseNum(1119);
// console.log(reverse);

function reverse(n){
  let reversed = 0;
  let rightmost;
  while(n>0){
    rightmost = n%10;
    reversed = reversed*10 + rightmost;
    n = Math.floor(n/10);
  }
  return reversed;
}
let reverseNumber = reverse(122333);
console.log(reverseNumber);

const newDate = new Date();
console.log(newDate);