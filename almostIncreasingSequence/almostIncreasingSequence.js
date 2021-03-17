function almostIncreasingSequence(arr){
  let count = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i] <= arr[i-1] || arr[i-1] >= arr[i+1]) count++
  }
  return count <= 1 ? true : false
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) // false
console.log(almostIncreasingSequence([1, 3, 2])) // true