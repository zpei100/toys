//Union Find Approach;

var UnionFind = function() {
  this.parent = [];
  this.rank = [];
  this.multiplier = [];
}

UnionFind.prototype.add = function(value, multiplier = 1) {
  if(!this.parent[value]) {
    this.parent[value] = value;
    this.multiplier[value] = multiplier;
    this.rank[value] = 0;
  }
}

UnionFind.prototype.find = function(value) {
  if(!this.parent[value]) return null;
  if(this.parent[value] !== value) {
    this.multiplier[value] *= this.multiplier[this.parent[value]];
    this.parent[value] = this.find(this.parent[value]);
  }
  return this.parent[value];
}

UnionFind.prototype.merge = function(val1, val2, multiplier) {
  var [parent1, parent2] = [this.find(val1), this.find(val2)];
  if(parent1 === parent2) return;
  if (this.rank[parent1] >= this.rank[parent2]) {
    this.multiplier[parent2] = this.multiplier[val1] * multiplier / this.multiplier[val2];
    this.parent[parent2] = parent1;
    this.rank[parent1]++;
  } else {
    this.multiplier[parent1] = this.multiplier[val2] / (this.multiplier[val1] * multiplier);
    this.parent[parent1] = parent2;
    this.rank[parent2]++;
  }
}

var code = function(char) {
  return char.charCodeAt() - 97;
}

var encode = function(str) {
  var result = 0;
  for(var i = 0; i < str.length; i++) {
    result += code(str[i]) + 26 ** i;
  }
  return result;
}

var calcEquation = function(equations, values, queries) {
  var uf = new UnionFind();
  for(var i = 0; i < equations.length; i++) {
    var [equation, multiplier] = [equations[i], values[i]];
    var [p, q] = equation;
    [p, q] = [encode(p), encode(q)];
    
    uf.add(p);
    uf.add(q);
    uf.merge(p, q, multiplier);
 }
  
 return queries.map(([p, q]) => {
   [p, q] = [encode(p), encode(q)];
   if(uf.find(p) === null || uf.find(q) === null || uf.find(p) !== uf.find(q)) return -1;
   return uf.multiplier[q] / uf.multiplier[p];
 })
}



/*
equations = [ ["a", "b"], ["b", "c"] ],
values = [2.0, 3.0],
queries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. 
*/


//Graph Approach;

var calcEquation = function(equations, values, queries) {
  var graph = {};

  for (var i = 0; i < equations.length; i++) {
    var [p, q] = equations[i];
    var multiplier = values[i];

    if(!graph[p]) graph[p] = {};
    graph[p][q] = 1/multiplier;

    if(!graph[q]) graph[q] = {};
    graph[q][p] = multiplier;
  }

  var traverse = function(p, q, visited) {
    visited.add(q);
    if(q === p) return 1;

    var neighbors = Object.keys(graph[q]);
    for(var i = 0; i < neighbors.length; i++) {
      var neighbor = neighbors[i];
      if(!visited.has(neighbor)) {
        var result = traverse(p, neighbor, visited);
        if(result !== -1) return graph[q][neighbor] * result;
      }
    }
    
    visited.delete(q);
    return -1;
  }

  return queries.map(([p, q]) => {
    if(!graph[p] || !graph[q]) return -1;

    var visited = new Set();
    return traverse(p, q, visited);
  })
}