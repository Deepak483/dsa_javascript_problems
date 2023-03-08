function pyramidPatter(n) {
  let row;
  for (let i = 1; i <= n; i++){
    row = "* ".repeat(i);
    console.log(row);
  }
  // return row;
}
pyramidPatter(5);

let n = 4;
let ans = [];
let temp = '';
for (let i = 0; i < n; i++){
  // for (let j = 0; j < i + 1; j++){
  //   temp += '* ';
  //   ans.push(temp);
  // }
  temp += '* ';
  ans.push(temp);
  // temp = '';
}
console.log(ans);