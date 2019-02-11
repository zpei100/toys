var singleNumber = function(nums) {
  var store = {}
  var sum = 0
  for (num of nums) {
    if (!store[num]) store[num] = 1
    sum += num
  }

  return 2*((Object.keys(store).map(Number)).reduce(function(accumulator, current) {
    return accumulator + current
  }, 0)) - sum
}

//input: [2,2,1]
//output: 1

//input: [4,1,2,1,2]
//output: 4

//Linear runtime. No extra memory

console.log(singleNumber([2,2,1]))