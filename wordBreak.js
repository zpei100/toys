var wordBreak = function(s, wordDict) {
  var dict = new Set(wordDict);
  var DP = Array(s.length + 1).fill(false);
  DP[0] = true;

  for(var i = 1; i <= s.length; i++) {
    for(var j = 0; j < i; j++) {
      if(DP[j] && dict.has(s.slice(j, i))) {
        DP[i] = true; 
        break;
      }
    }
  } 

  return DP[s.length]
}

