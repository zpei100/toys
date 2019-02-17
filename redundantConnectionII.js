var findRedundantDirectedConnection = function(edges) {
  var graph = {};
  for(edge of edges) {
    var [parent, child] = edge;
    addEdge(graph, parent, child);
  }

  var problemEdges = [];

  for(var i = edges.length-1; i >= 0; i--) {
    var [parent, child] = edges[i];
    if(graph[child].parents.length === 2) problemEdges.push([parent, child]); 
  }

  if(problemEdges.length === 2) {
    if(inCycle(graph, problemEdges[1][0])) return problemEdges[1];
    return problemEdges[0];
  }

  for(var i = edges.length-1; i >= 0; i--) {
    var [parent, child] = edges[i];
    if(inCycle(graph, parent)) return edges[i];
  }
}

var addEdge = function(graph, parent, child) {
  if(!graph[parent]) graph[parent] = {parents: [], children: []};
  graph[parent].children.push(child);

  if(!graph[child]) graph[child] = {parents: [], children: []};
  graph[child].parents.push(parent);
}

var inCycle = function(graph, start) {
  var visited = new Set();
  visited.add(start);
  var q = new Queue();
  graph[start].children.forEach(q.enqueue);

  while(q.size > 0) {
    var next = q.dequeue();
    if(next === start) return true;
    if(visited.has(next)) return false;
    visited.add(next);
    graph[next].children.forEach(q.enqueue);
  }
  return false;
}

var Queue = function() {
  this.store = {};
  this.start = 0;
  this.end = 0;
  this.size = 0;
}

Queue.prototype.enqueue = function(val) {
  this.store[this.end] = val;
  this.size++;
}

Queue.prototype.dequeue = function() {
  if(this.size) {
    var result = this.store[this.start];
    delete this.store[this.start];
    this.start++;
    this.size--;
    return result;
  } else return null;
}