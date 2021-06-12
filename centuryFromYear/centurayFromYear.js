function centuryFromYear(year) {
  let temp = Math.floor(year / 100);
  return (temp === year / 100) ? temp : temp + 1;
}


console.log(centuryFromYear(1905)) // 20
console.log(centuryFromYear(1700)) // 17
console.log(centuryFromYear(1701)) // 18

