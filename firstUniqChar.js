var firstUniqChar = function(s) {
  var tracker = {};
  for(var letter of s) {
    if(!tracker[letter]) tracker[letter] = 0;
    tracker[letter]++;
  }

  for(var i = 0; i < s.length; i++) {
    if(tracker[s[i]] === 1) return i; 
  }

  return -1
}