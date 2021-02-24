function addBorder(picture){
  
  let wall = '*'.repeat(picture[0].length + 2)

  picture.unshift(wall)
  picture.push(wall)

  for(let i=1; i<picture.length-1; i++){
    picture[i] = '*'.concat(picture[i])
    picture[i] = picture[i].concat('*')
  }
  return picture
}

console.log(addBorder(["abc","ded"]))
// console.table(addBorder(["abc","ded"]))