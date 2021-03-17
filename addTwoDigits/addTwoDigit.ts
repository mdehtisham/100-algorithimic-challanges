function addTwoDigit(num: any): number{
  let nums = num.toString().split('')
  return +nums.reduce((acc: string, cur: string) => {
    return parseInt(acc) + parseInt(cur)
  })
}

console.log(addTwoDigit(43)) // 7