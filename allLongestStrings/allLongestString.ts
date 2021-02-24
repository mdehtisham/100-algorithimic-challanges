function allLongestString(arr: string[]): string[]{
  let longestLength: number = -Infinity;
  arr.forEach(v => {
    if(v.length > longestLength) longestLength = v.length;
  })

  return arr.filter(val => val.length === longestLength)
}

console.log(allLongestString(["aba", "aa", "ad", "vcd", "aba"]))