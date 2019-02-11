var farthestNodes = function (strArr) {
  var longestPathStore = {}
  var graphStore = {}

  for (str of strArr) {
    var start = str[0]
    var end = str[2]
    if(graphStore[start]) graphStore[start].push(end);
    else graphStore[start] = [end];
  }

  var farthestNodesFromLetter = function (letter) {
    if (!graphStore[letter]) return 0;
    if (longestPathStore[letter]) return longestPathStore[letter];

    var longestPathFromLetter = 1 + Math.max(...graphStore[letter].map(farthestNodesFromLetter))
    longestPathStore[letter] = longestPathFromLetter;
    return longestPathFromLetter;
  }

  return Math.max(...Object.keys(graphStore).map(farthestNodesFromLetter))
}



var input = ['a-b', 'b-c', 'b-d', 'a-e', 'e-b']

console.log(farthestNodes(input))