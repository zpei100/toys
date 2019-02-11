var spiralOrder = function(matrix) {
  if(matrix.length === 0) return matrix;
  var output = [matrix[0][0]];

  var [rb, bb, lb, ub] = [matrix[0].length - 1, matrix.length - 1, 0, 1]
  var [r, c] = [0, 0];
  while(output.length < matrix.length * matrix[0].length) {
    while(c < rb) output.push(matrix[r][++c])
    rb--

    while(r < bb) output.push(matrix[++r][c])
    bb--

    while(c > lb) output.push(matrix[r][--c])
    lb++

    while(r > ub) output.push(matrix[--r][c])
    ub++
  }

  return output
};