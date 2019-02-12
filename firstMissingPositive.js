var firstMissingPositive = function(nums) {
  for(var i = 0; i < nums.length; i++) {
    if(nums[i] !== i+1 && nums[i] >= 1 && nums[i] <= nums.length && nums[i] !== nums[nums[i]-1]) {
      nums.swap(i, nums[i]-1);
      i--; 
    }
  }

  for(var i = 0; i < nums.length; i++) {
    if(nums[i] !== i+1) return i+1;
  }

  return nums.length + 1;
}

Array.prototype.swap = function(i, j) {
  [this[i], this[j]] = [this[j], this[i]]
}