function arrayMaximalAdjacentDifference(arr: number[]): number {
  let maxDiff: number = Math.abs(arr[0] - arr[1])
  for(let i=1; i<arr.length; i++){
    let currentDiff : number = Math.abs(arr[i]-arr[i+1])
    if(currentDiff > maxDiff) maxDiff = currentDiff    
  }
  return maxDiff

}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));