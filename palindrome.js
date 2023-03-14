//* two pointers approach for finding the palindrome or not

function isPalindrome(str) {
  // let start = 0, end = str.length - 1;
  // while (start <= end) {
  //   if (str[start] != str[end])
  //     return false;
  //   else {
  //     start++;
  //     end--;
  //   }
  // }
  // return true;
  for (let i = 0; i < Math.floor(str.length / 2); i++){
    if (str[i] != str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

const result = isPalindrome('malayalam');
console.log(result);