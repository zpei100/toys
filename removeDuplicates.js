var removeDuplicates = function(nums) {
  var pointer = 1;
  for (var i = 1; i < nums.length; i++) if(nums[i] !== nums[i-1]) nums[pointer++] = nums[i];
  return pointer;
}

Array.prototype.swap = function(i, j) {
  [this[i],this[j]] = [this[j],this[i]]
}

var input = [0,0,1,1,1,2,2,3,3,4];
console.log(removeDuplicates(input))