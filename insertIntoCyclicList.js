var insert = function(head, insertValue) {
  var node = new Node(insertValue);
  if(!head) {
    node.next = node;
    return node;
  }

  var start, current = head;
  while(current.next !== head) {
    if(current.next.val < current.val) start = current.next;
    current = current.next;
  }

  if(!start) start = head;

  current = start;
  var inserted = false;

  var insertNode = function(current) {
    node.next = current.next;
    current.next = node;
    inserted = true;
  }

  while(!inserted) {
    if(current.next.val > insertValue && insertValue > current.value) insertNode(current);
    else if(current.next === start) insertNode(current);
    current = current.next;
  }

  return head;
}

var Node = function(val, next = null) {
  this.val = val;
  this.next = next;
}

var insert = function(head, insertValue) {
  var node = new Node(insertValue);
  if(!head) {
    node.next = node;
    return node;
  }

  var current = head;
  var inserted = false;
  var insertNode = function(current) {
    node.next = current.next;
    current.next = node;
    inserted = true;
  }

  while(!inserted) {
    if(current.next.val >= insertValue && insertValue >= current.val) insertNode(current);
    else if(current.next === head) insertNode(current);
    current = current.next;
  }

  return head;
}