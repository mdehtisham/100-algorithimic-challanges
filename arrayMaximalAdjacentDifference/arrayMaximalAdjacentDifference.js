function arrayMaxAdjacentDiff(arr){
  let maxDiff = Math.abs(arr[0] - arr[1])
  for(let i=1; i<arr.length; i++){
    let currentDiff = Math.abs(arr[i]-arr[i+1])
    if(currentDiff > maxDiff) maxDiff = currentDiff    
  }
  return maxDiff
}
console.log(arrayMaxAdjacentDiff([2, 4, 1, 0])) // 3
console.log(arrayMaxAdjacentDiff([8, 4, 6, 9])) // 4
console.log(arrayMaxAdjacentDiff([1, 2, 4, 6, 0])) // 6

