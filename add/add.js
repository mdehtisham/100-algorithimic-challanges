function add(...values){
  return values.reduce((acc, cur) => acc+cur)
}

console.log(add(1,2,3,4,5)) // 15
console.log(add(1,2)) // 3
console.log(add(12,45,65)) // 122