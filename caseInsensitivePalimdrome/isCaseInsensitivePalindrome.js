function isCaseInsensitivePalindrome(inputStr){
  let inputLowrcase = inputStr.toLowerCase()
  let reverseStr = inputStr.toLowerCase().split('').reverse().join('')
  return inputLowrcase === reverseStr
}

console.log(isCaseInsensitivePalindrome("AaBaa")) // true
console.log(isCaseInsensitivePalindrome("abac")) // false



