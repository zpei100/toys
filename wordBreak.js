var wordBreak = function(s, wordDict, dictionary = null, DP = null) {
  if(!s) return true;
  var DP = DP || [];
  var dictionary = dictionary || buildDictionary(wordDict);
  var len = dictionary.len;
  
  for(var i = len.length - 1; i >= 0; i--) {
    var index = s.length - len[i];
    var word = s.slice(index)
  
    if(i === 0 && !dictionary[word]) return false;
        
    if(dictionary[word]) {
      if(word === s) return true;
      if(DP[i-1]) return true;
      else var result = wordBreak(s.slice(0, index), wordDict, dictionary, DP);
      DP[i-1] = result;
      if(result) return result;
    } 
  }
  return false;
};

var buildDictionary = function(wordDict) {
  var output = {};
  var lengths = {};
  for(word of wordDict) {
    output[word] = true;
    lengths[word.length] = true;
  }
  output.len = Object.keys(lengths).map(Number)
  
  return output;
}

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaa",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))