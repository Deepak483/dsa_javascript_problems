function findLength(arr) {
  arr = arr.map((str) => {
    if (str === undefined || str === null) {
      return 0;
    } else {
      const value = str.length;
      return value;
    }
  });
  return arr;
}
// const value = findLength(['a','aa','aaa',undefined,'hello']);
const value = findLength(["a", "aa", "aaa", "hello", undefined]);
console.log(value);
