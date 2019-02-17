var cherryPickup = function(grid) {
  var memo = [...Array(grid.length)].map(e => [...Array(grid.length)].map(e => Array(grid.length)))
  
  var DP = function(r1, c1, r2) {
    var result;
    if(r1 === grid.length 
       || r2 === grid.length 
       || c1 === grid.length 
       || r1 + c1 - r2 === grid.length) return -Infinity;
    
    if(memo[r1][c1][r2] !== undefined) return memo[r1][c1][r2];
    else if(grid[r1][c1] === -1 || grid[r2][r1+c1-r2] === -1) return result = -Infinity;
    else if(r1 === grid.length-1 && c1 === grid.length-1) return grid[r1][c1]
    else 
    result = grid[r1][c1] + (r1 === r2 ? 0 : grid[r2][r1+c1-r2]) + Math.max(
      DP(r1+1, c1, r2), DP(r1+1, c1, r2+1), DP(r1, c1+1, r2), DP(r1, c1+1, r2+1)
    )
    
    memo[r1][c1][r2] = result;
    return result;
  }
  
  var ans = DP(0, 0, 0);
  return ans === -Infinity ? 0 : ans;
};

/*
Assumes 2 pickers. Their position can be uniquely defined by r1, c1, and r2
dp(r1, c1, r2) represents the max number of cherries they can pick starting at this pair of coordinates
memo records the results to avoid duplicate computation
*/