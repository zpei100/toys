var LRUCache = function(capacity) {
  this.cap = capacity;
  this.size = 0;
  this.linkedList = new linkedList();
  this.nodes = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.nodes[key]) {
    var node = this.nodes[key];
    if(node !== this.linkedList.head) {
      if(node === this.linkedList.tail) {
        this.linkedList.tail = node.prev;
      }
      node.prev.next = node.next;
      if(node.next)node.next.prev = node.prev;
      this.linkedList.addHead(node);
      
    } 
    
    return node.val[1];
  }
  return -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(!this.nodes[key]) {
    var node = new Node(key, value);
    this.nodes[key] = node;
    this.linkedList.addHead(node);
    this.size++;
    if(this.size > this.cap) {
      this.size--;
      delete this.nodes[this.linkedList.removeTail()];
    }
  } else {
    var node = this.nodes[key];
    if(node === this.linkedList.tail) {
      this.linkedList.tail = node.prev;
    }
    node.prev.next = node.next;
    if(node.next)node.next.prev = node.prev;
    this.linkedList.addHead(node);
  }
};

var linkedList = function() {
  this.head = null;
  this.tail = null;
}

linkedList.prototype.addHead = function(node) {
  if(!this.head) {
    this.head = node;
  } else {
    if(!this.tail) {
      var head = this.head;
      this.head = node;
      node.next = head;
      head.prev = node;
      this.tail = head;
    } else {
      var head = this.head;
      this.head = node;
      node.next = head;
      head.prev = node;
    }
  } 
}

linkedList.prototype.removeTail = function() {
  if(this.tail) {
    var tail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return tail.val[0];
  
  } else if (this.head) {
    var tail = this.head;
    this.head = null;
    return tail.val[0];
  }
}

var Node = function(key, val) {
  this.val = [key, val];
  this.next = null;
  this.prev = null;
}

var lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.linkedList);
lru.get(1);
console.log(lru.linkedList);
lru.put(3,3);
console.log(lru.linkedList);