function chunkyMonkey(arr, size) {
  let firstGroup = arr.splice(0, size);
  let secondGroup = arr;

  return [firstGroup, secondGroup]
}

console.log(chunkyMonkey(["a", "b", "c", "d"], 2)); // [ [ 'a', 'b' ], [ 'c', 'd' ] ] 
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4)); // [ [ 0, 1, 2, 3 ], [ 4, 5 ] ] 