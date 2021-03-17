function absoluteValuesSumMinimization(arr){
  const isEven = arr.length % 2 === 0;
  return   isEven ? arr[arr.length / 2 - 1] : arr[Math.floor(arr.length / 2)]
}


console.log(absoluteValuesSumMinimization([2,4,7])) // 4

console.log(absoluteValuesSumMinimization([2, 4, 7, 6])) // 4


console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6])) // 7

console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8])) // 7
