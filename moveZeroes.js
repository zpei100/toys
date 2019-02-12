var moveZeroes = function(nums) {
  var zeroPointer = 0;
  for(var i = 0; i < nums.length; i++) if(nums[i] !== 0) nums.swap(zeroPointer++, i);
  return nums;
}

Array.prototype.swap = function(i, j) {
  [this[i], this[j]] = [this[j], this[i]]
}