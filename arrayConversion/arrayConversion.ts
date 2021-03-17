function arrayConversion(arr: number[]): number{
  let isOdd: boolean = true

  while(arr.length > 1){
    arr = sumAndProduct(arr, isOdd)
    isOdd = !isOdd
  }
  return arr[0]
}

function sumAndProduct(arr, isOdd){
  let sumAndProductResult: number[] = []
  
  if(isOdd){
    for(let i=0; i<arr.length; i+=2){
      sumAndProductResult.push(arr[i] + arr[i+1])
    }
  } else {
    for(let i=0; i<arr.length; i+=2){
      sumAndProductResult.push(arr[i]*arr[i+1])
    }
  }
  return sumAndProductResult
}
console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8])) //186




