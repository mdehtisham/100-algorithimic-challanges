function checkPalindrome(inputString) {
  return inputString === inputString.toLowerCase().split('').reverse().join('')
}

console.log(checkPalindrome('aabaa'));
console.log(checkPalindrome('abac'));
console.log(checkPalindrome('a'));
