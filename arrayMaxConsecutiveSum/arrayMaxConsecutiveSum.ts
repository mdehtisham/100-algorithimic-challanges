function arrayMaxConsecutivesum(arr: number[], k: number): number {
  let left: number = 0,
  maxSum: number = 0,
  tempSum: number = 0
for(let right=0; right<arr.length; right++){
tempSum += arr[right]
if(right >= k-1){
  if(tempSum > maxSum) maxSum = tempSum
  tempSum -= arr[left]
  left++
}
}
return maxSum
}

console.log(arrayMaxConsecutivesum([2, 3, 5, 1, 6], 2));