var topKFrequent = function(nums, k) {
  var result = [];
  
  for (var i = 0; i < k; i++) {
      result.push(0)
  }
  
  var countStore = {};
  
  for (num of nums) {
      if(!countStore[num]) countStore[num] = 1;
      else countStore[num]++
      
      var count = countStore[num];
      var sorted = false;
      var position = result.length - 1;
      
      while (!sorted && position >= 0) {
        console.log(position)
        console.log(result)
        if(count <= countStore[result[position]]) {
          sorted = true;
          break;
        }
        if(position = result.length - 1) {
          result[position] = num;
        } else {
          var temp = result[position - 1];
          result[position - 1] = result[position];
          result[position] = temp;
        }
        position--;
      }
  }
  
  return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2))