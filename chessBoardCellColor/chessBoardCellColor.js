function chessBoardCellColor(cell1, cell2) {
  const board = {
    "A": 1,
    "B": 2,
    "C": 3,
    "D": 4,
    "E": 5,
    "F": 6,
    "G": 7,
    "H": 8
  }
  // we are comparing the cell 1 total and cell 2 total and if then are even then they will have same color else not.
  let cell1Total = (board[cell1[0]] + parseInt(cell1[1])) % 2;
  let cell2Total = (board[cell2[0]] + parseInt(cell2[1])) % 2;

  return cell1Total === cell2Total;
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
