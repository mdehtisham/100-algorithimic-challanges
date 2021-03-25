function equalCandies(n,m){
    let equalNumOfCandies = Math.floor(m/n)
    return n * equalNumOfCandies
}

console.log(equalCandies(3,10)) // 9
console.log(equalCandies(4,15)) // 12
console.log(equalCandies(3,18)) // 18
console.log(equalCandies(3,13)) // 12

