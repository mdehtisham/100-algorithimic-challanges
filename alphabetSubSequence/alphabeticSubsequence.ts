function alphabeticSubsequence(str: string): boolean{
  let lettersHash = {
    'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
    'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
    'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
    'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
    'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26    
  }
  let flag: boolean = false
  for(let i=1; i< str.length; i++){
    if(lettersHash[str[i]] > lettersHash[str[i - 1]]) flag = true
    else return false
  }
  return flag
}

console.log(alphabeticSubsequence("ace")) // true
console.log(alphabeticSubsequence("bxz")) // true
console.log(alphabeticSubsequence("effg")) // false
console.log(alphabeticSubsequence("cdce")) // false
console.log(alphabeticSubsequence("axyz")) // true
console.log(alphabeticSubsequence("zop")) // false
console.log(alphabeticSubsequence("ho")) // true