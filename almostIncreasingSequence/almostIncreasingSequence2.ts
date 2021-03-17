function almostIncreasingSequence2(arr: number[]): boolean{
  let count: number = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i] <= arr[i-1] || arr[i-1] >= arr[i+1]) count++
  }
  return count <= 1 ? true : false
}

console.log(almostIncreasingSequence2([1, 3, 2, 1])) // false
console.log(almostIncreasingSequence2([1, 3, 2])) // true