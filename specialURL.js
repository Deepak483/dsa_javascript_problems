function specialURL(s) {
  return s.split(" ").join("%20");
}
let string = "hello world";
let array = string.split(" ");
console.log(array);
console.log(array.join("%20"));
