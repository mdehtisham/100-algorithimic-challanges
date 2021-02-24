function addTwoDigits(num){
  let nums = num.toString().split('')
  return nums.reduce((acc, cur) => +acc + +cur)
}

console.log(addTwoDigits(43)) // 7