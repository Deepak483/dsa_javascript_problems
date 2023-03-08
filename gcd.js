function gcd(a, b) {
  //!first approach to find the gcd of two number
  // let _result = Math.min(a, b);
  // while (_result > 0) {
  //   if (a % _result == 0 && b % _result == 0)
  //     break;
  //   _result--;
  //   }
  //   return _result;
  //! Recurive approach to the above sum
  // if (a == 0)
  //   return b;
  // if (b == 0)
  //   return a;
  // if (a == b)
  //   return a;
  // if (a > b)
  //   return gcd(a - b, b);
  // return gcd(a, b - a);
  //!Best approach to solve the above sum
  let _gcd = b == 0 ? a : gcd(b, a % b);
  return _gcd;
}
const gcdNumber = gcd(16, 20);
console.log(gcdNumber);