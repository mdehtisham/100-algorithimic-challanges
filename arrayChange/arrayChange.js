// solution 1 -> time complexity O(n^2)
function arrayChange(arr){
  let count = 0;

  for(let i = 0; i< arr.length; i++){
    while(arr[i] >= arr[i+1]){
      arr[i+1] += 1
      count++
    }
  }
  return count
}

// console.log(arrayChange([1,1,1])) // 3
// console.log(arrayChange([1,2,1])) // 2
// console.log(arrayChange([1,1,3])) // 1


// solution 2 -> time complexity O(n)
function arrayChange2(arr){
  let count = 0
  for(let i=0; i<arr.length; i++){
    if(arr[i]>= arr[i+1]){
      const difference = (arr[i] + 1) - arr[i+1]
      arr[i+1] = arr[i] + 1
      count += difference
    }
  }
  return count
}

console.log(arrayChange2([1,1,1])) // 3
console.log(arrayChange2([1,2,1])) // 2
console.log(arrayChange2([1,1,3])) // 1