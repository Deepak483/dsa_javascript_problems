class WordKit{
  reverse(str) {
    const ansStr = str.split('');
    const newArr = [];
    for (let i = ansStr.length; i >= 0; i--){
      newArr.push(ansStr[i]);
    }
    return newArr.join('');
  }
  isPalindrome(str) {
    return str === this.reverse(str) ? true : false;
  }
  makePalindrome(str) {
    if (this.isPalindrome(str))
      return str;
    else {
      const reversedStr = this.reverse(str);
      const palindrome = str + reversedStr;
      return palindrome;
    }
  }
}
const wordkit = new WordKit();
const result = wordkit.isPalindrome('racecar');
console.log(result);