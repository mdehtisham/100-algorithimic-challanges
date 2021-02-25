// s = "effg" or s = "cdce", the output should be
//   alphabetSubsequence(s) = false

// s = "ace" or s = "bxz", the output should be
//   alphabetSubsequence(s) = true.


function alphabetSubsequence(str){
  let lettersHash = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
    'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
    'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26    
  }
  let flag = false
  for(let i=1; i< str.length; i++){
    if(lettersHash[str[i]] > lettersHash[str[i - 1]]) flag = true
    else return false
  }
  return flag
}

console.log(alphabetSubsequence("ace")) // true
console.log(alphabetSubsequence("bxz")) // true
console.log(alphabetSubsequence("effg")) // false
console.log(alphabetSubsequence("cdce")) // false
console.log(alphabetSubsequence("axyz")) // true
console.log(alphabetSubsequence("zop")) // false
console.log(alphabetSubsequence("ho")) // true