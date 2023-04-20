class Combinatorics{
  //method to calculate the factorial of number
  factorial(num) {
    if (num === 0 )
      return 1;
    return num * this.factorial(num - 1);
  }
  //method  to calculate the number of combinations of N and R
  findCombinations(N, R) {
    if (R >= N)
      return 0;
    const numerator = this.factorial(N);
    const denominator = this.factorial(R) * this.factorial(N - R);
    return numerator / denominator;
  }
  //method to calculate the number of permutation of N and R
  findPermutations(N, R) {
    if (R >= N)
      return 0;
    const numerator = this.factorial(N);
    const denominator = this.factorial(N - R);
    return numerator / denominator;
  }
}

const c1 = new Combinatorics();
console.log(c1.factorial(5));
console.log(c1.findCombinations(5,2));
console.log(c1.findPermutations(5,2));
