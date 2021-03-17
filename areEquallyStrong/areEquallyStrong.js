function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight){
return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) && 
       Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
}

console.log(areEquallyStrong(10,15,15,10)) // true
console.log(areEquallyStrong(15,10,15,10)) // true
console.log(areEquallyStrong(15,10,15,9)) // false


