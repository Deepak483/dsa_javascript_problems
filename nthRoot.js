let x = 11;
let n = 2;
// let arr = [1,2,3,4,5,6,7,8,9];
function nthRoot(x, n) {
  if (x === 0) return 0;
  if (n === 1 || x === 1) return x;

  let low, high;
    low = 1;
    high = x;
  const epsilon = Math.pow(10,-9);
  let guess = (low + high) / 2;
  while (high-low>=epsilon) {
    if (Math.pow(guess, n) > x) high = guess;
    else low = guess;

    guess = (low + high) / 2;
    if(guess<1)
        break;
  }
  return Math.floor(high);
}
const _ans = nthRoot(x, n);
console.log(_ans);

// In the first step, the code checks if x is equal to 0. Since it's not, it proceeds to the next check.

// The code then checks if x is equal to 1 or n is equal to 1. In this case, neither condition is met, so it continues to the next step.

// Since x is greater than 1, the code sets low to 1 and high to x. These values define the range within which the nth root of x is expected to be.

// low = 1
// high = 9
// The code initializes epsilon to 0.0000001. This variable determines the precision of the result.

// The code initializes guess to the average of low and high. In this case, guess will be (1 + 9) / 2 = 5.

// The code enters a while loop that continues until the absolute difference between guess raised to the power of n and x is less than epsilon.

// Math.abs(Math.pow(guess, n) - x) calculates the absolute difference between the current guess raised to the power of n and x.
// If the difference is greater than or equal to epsilon, the loop continues.
// Within the while loop, the code checks if guess raised to the power of n is greater than x. If it is, the code updates high to guess; otherwise, it updates low to guess.

// Since Math.pow(guess, n) = 125 > 9, the code sets high to guess, narrowing down the range for the next guess.
// The code calculates a new guess as the average of the updated low and high values.

// In this case, guess becomes (1 + 5) / 2 = 3.
// The while loop continues until the condition (Math.abs(Math.pow(guess, n) - x) >= epsilon) is no longer met.

// In subsequent iterations, the loop refines the range and calculates a new guess based on whether the current guess is too high or too low.
// Finally, the code returns the floor value of the last guess.

// Math.floor(guess) returns the largest integer less than or equal to guess.
// In the given example, the code will output 2 because the floor value of the cube root of 9 is 2.