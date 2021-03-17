function areSimilar(arr1, arr2){
  let strForArr1 = '',
      strForArr2 = ''
  if(arr1.length !== arr2.length) return false    
  if(arr1.toString() === arr2.toString()) return true

  for(let i=0; i<arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      strForArr1 += arr1[i]
      strForArr2 += arr2[i]
    }
  }
  strForArr2 = strForArr2.split('').reverse().join('')
  
  if(strForArr1.length === 2 && strForArr1 === strForArr2) return true  

  return false
}

console.log(areSimilar([1, 2, 3], [1, 2, 3])) // true
console.log(areSimilar([1, 2, 3], [2, 1, 3])) // true
console.log(areSimilar([1, 2, 2], [2, 1, 1])) // false




