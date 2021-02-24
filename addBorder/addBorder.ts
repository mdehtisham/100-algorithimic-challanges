function addBorders(picture: string[]): string[]{
  let wall = '*'.repeat(picture[0].length + 2)

  picture.unshift(wall)
  picture.push(wall)

  for(let i=1; i<picture.length-1; i++){
    picture[i] = '*'.concat(picture[i])
    picture[i] = picture[i].concat('*')
  }
  return picture
}

console.log(addBorders(["abc","ded"]))