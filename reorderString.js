let str = "abcd";
let n = 4;
const arr = [2, 4, 3, 1];
let ans_array = str.split("");
console.log(ans_array);

for (let i = 0; i < n; i++) {
  ans_array[arr[i] - 1] = str[i];
}
console.log(ans_array);
let ans_string = ans_array.join("");
console.log(ans_string);
