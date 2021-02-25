function alphabeticShift(str){
  let lettersStr = 'abcdefghijklmnopqrstuvwxyz',
      lettersArr = lettersStr.split(''),
      strArr = str.split(''),
      result = []

      strArr.forEach(val =>{
        let index = lettersArr.indexOf(val) === 25 ? 0 : lettersArr.indexOf(val) + 1
        result.push(lettersArr[index])
      })

      return result.join('')    

}

console.log(alphabeticShift("crazy")) // dsbaz
console.log(alphabeticShift("abc")) // bcd
console.log(alphabeticShift("xyz")) // yza





