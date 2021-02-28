function areEquallystrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean{
  return Math.max(yourLeft, yourRight) === Math.max(friendsLeft, friendsRight) && 
         Math.min(yourLeft, yourRight) === Math.min(friendsLeft, friendsRight)
  }
  
  console.log(areEquallystrong(10,15,15,10)) // true
  console.log(areEquallystrong(15,10,15,10)) // true
  console.log(areEquallystrong(15,10,15,9)) // false
  
  
  