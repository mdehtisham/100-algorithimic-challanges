function arrayMaxConsecutiveSum(arr, k){
  let left = 0,
      maxSum = 0,
      tempSum = 0
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
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2)); // 8
console.log(arrayMaxConsecutiveSum([2,3,5,1,5,3,6,9,6], 3)); // 21
console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 9], 2)); // 10

