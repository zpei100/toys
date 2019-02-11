var moveZeroes = function(nums) {
  var last = nums.length - 1
  var start = 0

  while (start < last) {
    while (nums[start] !== 0) {
      if (start === nums.length - 1) return nums
      start ++
    } 

    while (nums[last] === 0) {
      if (start === last) break
      last--
    }

    for (var i = last; i > start; i--) {
      if (nums[i] === 0) {
        if (nums[i+1] !== 0 && nums[i+1]) {
          nums[i] = nums[i+1]
          nums[i+1] = 0
        }
        continue
      } 
      var temp = nums[start]
      nums[start] = nums[i]
      nums[i] = temp 
    }
    start++
  }
  return nums
}

console.log(moveZeroes(
  [2,1]))

// [0,1,0,3,12]
// [12,1,0,3,0]
// [3,1,0,12,0]
// [3,1,12,0,0]
// [1,3,12,0,0]