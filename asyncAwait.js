// const loadData = async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   const res = await fetch(url);
//   const data = await  res.json();
//   console.log(data);
  
// };
// loadData();
// console.log('hello hero');

//create a function maskPalindrome(sentence) 
// and return a string with all palindrome words replaced with * sign
// we can also break logic as isPalindrome(sentence)
// and maskPalindrome for masking the passed string
function isPalindrome(str) {
  let array = [];
  let newString = str.toLowerCase();
  let reverseString = '';
  for (let i = newString.length-1; i >=0; i--) {
    // reverseing[str.length - i - 1] = str[i]; 
    array.push(newString[i]);
  }
  reverseString = array.join('');
  if (newString === reverseString)
    return true;
  else
    return false;
  
}
let str = 'Dad';
const result = isPalindrome(str);
console.log(result);
let carry = 1;
if(carry)
  console.log('true');
else
  console.log('false');

