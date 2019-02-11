var mergeKLists = function(lists) {
  var heap = new Heap();
  var output;
  
  for (l of lists) {
    heap.insert(l);
  }
  
  output = heap.delete();
  var current = output;
  
  if(current.next) heap.insert(current.next);

  

  while(heap.nodes.length > 0) {
    node = heap.delete();
    if(node.next) heap.insert(node.next)
    current.next = node;
    current = node;
  }
  
  return output;
};

var Heap = function() {
  this.nodes = [];
}

Heap.prototype.insert = function(node) {
  if(!this.nodes.length) this.nodes.push(node);
  else {
    this.nodes.push(node);
    this.heapify();
  }
}

Heap.prototype.delete = function() {
  var output = this.nodes[0];
  var node = this.nodes.pop();
  if(this.nodes.length) this.nodes[0] = node;
  this.balance();
  return output;
}

Heap.prototype.balance = function() {
  var inode = 0;
  var node = this.nodes[inode];
  var ileft = inode*2 + 1;
  var iright = inode*2 + 2;
  
  var leftNode = this.nodes[ileft];
  var rightNode = this.nodes[iright];
  
  var resetHead = () => {
    ileft = inode*2 + 1;
    iright = inode*2 + 2;
    leftNode = this.nodes[ileft];
    rightNode = this.nodes[iright];
  }
  
  while(leftNode) {
    if(leftNode.val < node.val) {
      if(rightNode) {
        if(rightNode.val < leftNode.val) {
          this.nodes.swap(iright, inode);
          inode = iright;
          resetHead();
        } else {
          this.nodes.swap(ileft, inode);
          inode = ileft;
          resetHead();
        }
      } else {
        this.nodes.swap(ileft, inode);
        inode = ileft;
        resetHead();
      }
    } else if (rightNode && rightNode.val < node.val) {
      this.nodes.swap(inode, iright);
      inode = iright;
      resetHead();
    } else break;
  }
}

Heap.prototype.heapify = function() {
  var node = this.nodes[this.nodes.length - 1];
  var inode = this.nodes.length - 1;
  
  var iparent = Math.floor((inode - 1) / 2);
  var parent = this.nodes[iparent];
  while(inode !== 0 && parent && parent.val > node.val) {
    this.nodes.swap(inode, iparent);
    inode = iparent;
    node = this.nodes[inode];
    
    iparent = Math.floor((inode - 1) / 2);
    parent = this.nodes[iparent];
  }
}

Array.prototype.swap = function(i, j) {
  [this[i], this[j]] = [this[j], this[i]]
}

var Node = function(val) {
  this.val = val;
  this.next = null;
}

var l1 = new Node(1);
l1.next = new Node(4);
l1.next.next = new Node(5);

var l2 = new Node(1);
l2.next = new Node(3);
l2.next.next = new Node(4);

var l3 = new Node(2);
l3.next = new Node(6);

console.log(mergeKLists([l1, l2, l3]))