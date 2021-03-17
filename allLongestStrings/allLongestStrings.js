/* For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"]. */

function allLongestStrings(arr){
  let longestLength = -Infinity;
  arr.forEach(v => {
    if(v.length > longestLength) longestLength = v.length;
  })

  return arr.filter(val => val.length === longestLength)
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]))