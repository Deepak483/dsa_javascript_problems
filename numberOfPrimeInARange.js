function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function numberOfPrimeInARange(l, r) {
  let count = 0;
  for (let i = l; i <= r; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count;
}
const result = numberOfPrimeInARange(2, 10);
console.log(result);
/**
 * 2,3,5,7
 */