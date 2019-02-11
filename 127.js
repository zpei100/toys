var ladderLength = function(beginWord, endWord, wordList) {
  var dictionary = makeDictionary(wordList);
  var result = recurse(beginWord, endWord, dictionary);
  return result ? result + 1 : 0;
};

var recurse = function(beginWord, endWord, wordDictionary) {
  if(!wordDictionary[endWord]) return 0;
  delete wordDictionary[endWord];
  var dupDictionary = {...wordDictionary}
  if(isCloseMatch(beginWord, endWord)) return 1;
  var neighbors = findNearest(endWord, wordDictionary); //array
  
  for(word of neighbors) delete dupDictionary[word];
  
  var temp = neighbors.map(newEndWord => {
    return recurse(beginWord, newEndWord, dupDictionary);
  })
  var minimum = Infinity;

  for(number of temp) {
    if(number && number < minimum) minimum = number;
  };
  
  return minimum === Infinity ? 0 : minimum + 1;
};

var findNearest = function(word, dictionary) {
  //return array of words, that are 1 letter apart from input word;
  var output = [];
  for(dword in dictionary) {
    if(isCloseMatch(word, dword)) output.push(dword);
  }
  return output;
}

var isCloseMatch = function(word1, word2) {
  var diff = 0;
  for (var i = 0; i < word1.length; i++) {
    if(word1[i] !== word2[i]) diff++;
  }
  return diff === 1;
}

var makeDictionary = function(wordList) {
  var output = {};
  for(word of wordList) {
    output[word] = true;
  }
  return output;
}

var wordList = ["hot","dot","dog","lot","log","cog"]
// ["hot","dot","lot","cog"]
// ["hot","lot","cog"]
console.log(ladderLength('hit', 'cog', wordList))