var isValidBST = function(root) {
  if(!root) return true;
  var DP = {};
  
  var findSmallest = function(root) {
    var key = root.val;
    if(DP[key]) return DP[key].smallest;
    if(!root.left) {
      DP[key] = {};
      DP[key].smallest = key;
      return key;
    }
    return findSmallest(root.left);
  }
  
  var findLargest = function(root) {
    var key = root.val;
    if(DP[key]) return DP[key].largest;
    if(!root.right) {
      DP[key] = {};
      DP[key].largest = key;
      return key;
    }
    return findLargest(root.right);
  }

  if(root.right) console.log(findSmallest(root.right))
  if(root.right) console.log(root.val)
  
  return root.left ? (isValidBST(root.left) && findLargest(root.left) < root.val) : true 
  && root.right ? (isValidBST(root.right) && findSmallest(root.right) > root.val) : true;
};

var Node = function(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

var root = new Node(5);
root.left = new Node(1);
root.right = new Node(4);
root.right.left = new Node(3);
root.right.right = new Node(6);

console.log(isValidBST(root))
