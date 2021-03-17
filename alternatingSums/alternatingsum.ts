function alternatingsums(arr: number[]): number[]{
  let even: number[] = [],
      odd: number[] = [], 
      result: number[] = []
  for(let i=0; i<arr.length; i++){
    if(i%2===0) even.push(arr[i])
    else odd.push(arr[i])
  }
  result.push(even.reduce((acc, cur) => acc + cur))
  result.push(odd.reduce((acc, cur) => acc + cur))
  return result
}
console.log(alternatingsums([50, 60, 60, 45, 70])) //[180, 105]


