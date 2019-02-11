var uniquePathsIII = function(grid) {
  var {todos, start, end} = analyze(grid);
  grid[start[0]][start[1]] = -1;
  return neighborsOf(grid, start[0], start[1]).reduce(function(accumulator, space) {
    return accumulator + findPaths(grid, space, end, todos-1);
  }, 0)
};

var findPaths = function(grid, start, end, todos) {
  var [r, c] = start;
  todos--;


  if(todos === 0 && grid[r][c] === 2) return 1;
  if(todos === 0) return 0;
  if(grid[r][c] === 2) return 0;
  
  grid[r][c] = -1;
  
  var output = 0;
  
  neighborsOf(grid, r, c).forEach(space => output += findPaths(grid, space, end, todos))
                                  
  grid[r][c] = 0;
  return output;
}

var neighborsOf = function(grid, r, c) {
  var neighbors = [];
  if(r >= 1 && grid[r-1][c] !== -1) neighbors.push([r-1, c]);
  if(r < grid.length - 1 && grid[r+1][c] !== -1) neighbors.push([r+1, c]);
  if(c >= 1 && grid[r][c-1] !== -1) neighbors.push([r, c-1]);
  if(c < grid[0].length - 1 && grid[r][c+1] !== -1) neighbors.push([r, c+1]);
  return neighbors;
}

var analyze = function(grid) {
  var todos = 0;
  var start;
  var end;
  
  for(var r = 0; r < grid.length; r++) {
    for (var c = 0; c < grid[0].length; c++) {
      if (grid[r][c] !== -1) todos++;
      if (grid[r][c] === 2) end = [r, c];
      if (grid[r][c] === 1) start = [r, c];
    }
  }
  return {todos, start, end}
}

console.log(uniquePathsIII([[1,0,0,0],[0,0,0,0],[0,0,2,-1]]))