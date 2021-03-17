function alphabeticshift(str: string): string{
  let lettersStr: string = 'abcdefghijklmnopqrstuvwxyz',
      lettersArr: string[] = lettersStr.split(''),
      strArr: string[] = str.split(''),
      result:string[] = []

      strArr.forEach(val =>{
        let index = lettersArr.indexOf(val) === 25 ? 0 : lettersArr.indexOf(val) + 1
        result.push(lettersArr[index])
      })

      return result.join('')    
}

console.log(alphabeticshift("crazy")) // dsbaz
console.log(alphabeticshift("abc")) // bcd
console.log(alphabeticshift("xyz")) // yza
