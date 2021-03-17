function adjacentElementsProduct(arr){
let result = 0
for(let i=1; i<arr.length; i++){
  if(result < arr[i]*arr[i-1]) result = arr[i]*arr[i-1]
  else continue
}
return result
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]))