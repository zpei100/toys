var findMaxConsecutiveOnes = function(nums) {
  var [left, right] = [0, 0];
  var zeroes = 0;
  var output = 0;

  while(right < nums.length || zeroes > 1) {
    if(zeroes <= 1) {
      if(!nums[right]) zeroes++;
      right++;
    }
    while(zeroes > 1) if(!nums[left++]) zeroes--;
    output = Math.max(output, right - left);
  }
  return output;
}


var input = [0, 1, 1, 0, 1, 0, 1, 1, 1, 0 , 1, 1];
console.log(findMaxConsecutiveOnes(input))