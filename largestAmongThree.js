//find the largest among three number
let a = 5;
let b = 6;
let c = 8.5;
if (a > b && a > c) console.log(`a is greater`);
else if (b > a && b > c) console.log(`b is greater`);
else console.log("c is greater");

function findLargestNumber(a, b, c) {
  if (a >= b && a >= c) return a;
  else if (b >= a && b >= c) return b;
  else return c;
}
