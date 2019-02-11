var imageSmoother = function(M) {
  for(var r = 0; r < M.length; r++) {
    for(var c = 0; c < M[0].length; c++) {
      average(r, c, M);
    }
  }

  for(var r = 0; r < M.length; r++) {
    for(var c = 0; c < M[0].length; c++) {
      M[r][c] = decodeResult(M[r][c]);
    }
  }
  
  return M
}

var average = function(r, c, M) {
  var isValid = function(r, c) {
    return (r >= 0 && r < M.length && c >= 0 && c < M[0].length)
  }

  var [sum, count] = [0, 0];

  for(var i = r-1; i <= r+1; i++) {
    for(var j = c-1; j <= c+1; j++) {
      if(isValid(i, j)) {
        sum += decodeOriginal(M[i][j]);
        count++;
      }
    }
  }

  var result = ~~(sum/count);
  M[r][c] = encode(M[r][c], result);
}

var encode = function(original, result) {
  return original + 256 * result;
}

var decodeOriginal = function(number) {
  return number % 256;
}

var decodeResult = function(number) {
  return ~~(number/256);
}