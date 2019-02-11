var lengthOfLongestSubstringKDistinct = function(s, k) {
  var letterTracker = {};
  var max = 0;
  var [left, right] = [0, 0]

  while(right < s.length) {
    while(Object.keys(letterTracker).length <= k && right < s.length) {
      if(!letterTracker[s[right]]) letterTracker[s[right++]] = 1
      else letterTracker[s[right++]]++;
      if(Object.keys(letterTracker).length <= k) max = Math.max(max, right - left); 
    }
    
    while(Object.keys(letterTracker).length > k) {
      var letter = s[left];
      letterTracker[letter]--;
      if(letterTracker[letter] === 0) delete letterTracker[letter];
      left++;
    }
  }

  return Math.max(max, right - left);
}

console.log(lengthOfLongestSubstringKDistinct('eceab', 2))