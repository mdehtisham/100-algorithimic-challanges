function characterParity(symbol) {
  let integer = +symbol

  if (isNaN(integer)) return ("not a digit")

  return (+symbol % 2 === 0) ? "even" : "odd"

}

console.log(characterParity('5')) // odd
console.log(characterParity('8')) // even
console.log(characterParity('q')) // not a digit


