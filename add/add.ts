function addAll(...values: number[]): number{
  return values.reduce((acc, cur) => acc+cur)
}

console.log(addAll(1,2,3,4,5)) // 15
console.log(addAll(1,2)) // 3
console.log(addAll(12,45,65)) // 122
console.log(addAll(12,45,63)) // 120


