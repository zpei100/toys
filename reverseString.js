var reverseString = function(s) {
  var output = [];
  for (var i = s.length - 1; i >= 0; i--) {
    output.push(s[i])
  }
  return output;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']))