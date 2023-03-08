function isPrime(n) {
  if (n == 0 || n == 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

const array = [1];
// sample output: [2,3,4,8,6]
let modify = (array) => {
  let newArray = [];
  array.forEach((element, index) => {
    if (element === 0) {
      newArray.push(element);
    } else if (isPrime(element)) {
      newArray.push(element + 1);
    } else {
      newArray.push(element * 2);
    }
  });
  return newArray;
};
const result = modify(array);
console.log(result);
