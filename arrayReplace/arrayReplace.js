const arrayReplace = (array, elemToReplace, substituteElem) => {
   return array.map(val => val === elemToReplace ? substituteElem : val)
}

console.log(arrayReplace([1, 2, 1], 1, 3)) // [3, 2, 3]
console.log(arrayReplace([4, 2, 1, 4], 4, 3)) // [3, 2, 1, 3]


