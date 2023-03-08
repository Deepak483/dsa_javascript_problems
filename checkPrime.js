//check if given number is prime or not
function checkPrime(n) {
  // let count = 0;
  for (let i = 2; i <=Math.floor(Math.sqrt(n)); i++) {
    if (n % i == 0) {
      // count++;
      return false;
    }
  }
  // if (count == 2) {
  //   return true;
  // }
  // else
  //   return false;
  return true;
}
const resultPrime = checkPrime(11);
console.log(resultPrime);
