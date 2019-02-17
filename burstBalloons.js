var maxCoins = function(nums) {
  if(!nums.length) return 0;
  var DP = [...Array(nums.length+1)].map(e => Array(nums.length).fill(0));
  
  for(var j = 0; j < nums.length; j++) {
    for(var i = 0; i < nums.length-j; i++) {
      for(var k = i; k <= i+j; k++) {
        var leftMax, rightMax, lastMax;
        
        if(k===i) leftMax = 0;
        else leftMax = DP[i][k-1];
        
        if(k===i+j) rightMax = 0;
        else rightMax = DP[k+1][i+j];
        
        lastMax = nums[k] * (nums[i-1] || 1) * (nums[i+j+1] || 1);
  
        DP[i][i+j] = Math.max(DP[i][i+j], leftMax + rightMax + lastMax);
      }
    }
  }
    
  return DP[0][nums.length-1];
};