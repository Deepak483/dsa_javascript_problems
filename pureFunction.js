//Pure Function: In simple terms, pure functions do not have an internal state. Therefore, all operations performed in pure functions are not affected by their state. As a result, the same input parameters will give the same deterministic output regardless of how many times you run the function.
function pureSum(a, b) {
  return a + b;
}
