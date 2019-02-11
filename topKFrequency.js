var topKFrequent = function(nums, k) {
  var tracker = {};
  for (number of nums) {
    if(!tracker[number]) tracker[number] = 1;
    else tracker[number] ++;
  }
  
  var heap = new Heap();

  
  Object.keys(tracker).forEach(key => {
    heap.add({key, freq: tracker[key]})
  });
  
  var output = [];
  while(output.length < k) {
    output.push(heap.poll())
  }
  
  return output;
}

/*
  insert objects w/keys: val, frequency into max heap;
*/

var Heap = function() {
  this.store = [];
}

var Node = function(key, freq) {
  return {key, freq}
}

Heap.prototype.findIndexOfParent = function(idx) {
  return Math.floor(idx/2-0.5);
}

Heap.prototype.add = function(node) {
  var idx = this.store.length;
  var parent = this.findIndexOfParent(idx);
  this.store.push(node);
  while(idx !== 0) {
    if(this.store[idx].freq > this.store[parent].freq) {
      this.store.swap(idx, parent);
      idx = parent;
      parent = this.findIndexOfParent(idx);
      continue;
    } break;
  }
}

Heap.prototype.poll = function() {
  var output = this.store[0].key;
  this.store[0] = this.store.pop();
  var idx = 0;
  while(this.store[2*idx + 1]) {
    console.log('forever', idx)
    if(this.store[2*idx + 2]) {
      var next = 2*idx + (this.store[2*idx + 1].freq > this.store[2*idx + 2].freq ? 1 : 2);  
    } else {
      var next = 2*idx + 1;
    };
    
    if(this.store[idx].freq > this.store[next].freq) break;
    this.store.swap(idx, next);
    idx = next;
  }
  return output;
}

Array.prototype.swap = function(i, j) {
  [this[i], this[j]] = [this[j], this[i]];
}

console.log(topKFrequent([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6],
  10))