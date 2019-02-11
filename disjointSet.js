const DSU = function() {
  this.dictionary = {};
  this.count = 0;
}

DSU.prototype.createSet = function(val) {
  const node = new Node(val);
  this.dictionary[val] = node;
  this.count++;
}

DSU.prototype.findSet = function(val) {
  var node = this.dictionary[val];
  if(!node) return null;
  return this.findParentByNode(node);
}

DSU.prototype.mergeSets = function(val1, val2) {
  var node1 = this.dictionary[val1];
  var node2 = this.dictionary[val2];
  if(!(node1 && node2)) return null;
  
  var parent1 = this.findSet(val1);
  var parent2 = this.findSet(val2);
  if(parent1.rank >= parent2.rank) {
    parent2.parent = parent1;
    parent1.rank++;
  } else {
    parent1.parent = parent2;
    parent2.rank++;
  }
  this.count--;
}

DSU.prototype.findParentByNode = function(node) {
  if(node !== node.parent) node.parent = this.findParentByNode(node.parent);
  return node.parent;
}

const Node = function(val) {
  this.val = val;
  this.parent = this;
  this.rank = 0;
};

var dsu = new DSU();
dsu.createSet(1);
dsu.createSet(2);
dsu.createSet(3);
dsu.createSet(4);
dsu.mergeSets(1, 2);
console.log(dsu.findSet(1));
console.log(dsu.findSet(2));