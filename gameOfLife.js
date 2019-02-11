var gameOfLife = function(board) {
  //2 => 0 into 1;
  //3 => 1 into 0;

  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[0].length; c++) {
      preChangeCell(board, r, c);
    }
  }

  for (var r = 0; r < board.length; r++) {
    for (var c = 0; c < board[0].length; c++) {
      updateCell(board, r, c);
    }
  }

  return board;
}

var countOnes = function(board, r, c) {
  var ones = 0;
  if(r > 0) {
    ones += checkCell(board, r-1, c); 
    if(c > 0) ones += checkCell(board, r-1, c-1); 
    if(c < board[0].length - 1) ones += checkCell(board, r-1, c+1)
  }

  if(c > 0) ones += checkCell(board, r, c-1); 
  if(c < board[0].length -1) ones += checkCell(board, r, c+1);

  if(r < board.length - 1) {
    ones += checkCell(board, r+1, c);
    if(c > 0) ones += checkCell(board, r+1, c-1);
    if(c < board[0].length - 1) ones += checkCell(board, r+1, c+1);
  }

  return ones;
}

var preChangeCell = function(board, r, c) {
  var value = board[r][c];
  var zeroes = countOnes(board, r, c);
  if(!value && zeroes === 3) board[r][c] = 2;
  if(value === 1 && (zeroes < 2 || zeroes > 3)) board[r][c] = 3;
}

var updateCell = function(board, r, c) {
  var value = board[r][c];
  if(value === 3) board[r][c] = 0;
  if(value === 2) board[r][c] = 1;
}

var checkCell = function(board, r, c) {
  return board[r][c] === 1 || board[r][c] === 3 ? 1 : 0;
}