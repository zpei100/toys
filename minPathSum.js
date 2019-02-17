var minPathSum = function(grid) {
  var DP = grid[grid.length-1];
  for(var i = lastRow.length-1; i >= 0; i--) {
    DP[i] = DP[i] + DP[i+1] || 0;
  }

  for(var r = grid.length-2; r >= 0; r--) {
    for(var c = grid[0].length-1; c >= 0; c--) {
      DP[c] = grid[r][c] + Math.min(DP[c], (grid[r][c+1] || Infinity) + DP[c+1])
    }
  }
  
  return DP[0];
}

