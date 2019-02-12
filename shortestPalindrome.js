var shortestPalindrome = function(s) {
  var attach = '';
  for(var i = s.length-1; i >= 0; i--) {
    if(!isPalindrome(s.slice(0, i))) attach = s[i] + attach;
    else return attach + s;
  }
}

var isPalindrome = function(s) {
  if(s.length <= 1) return true;
  return s[0] === s[s.length-1] && isPalindrome(s.slice(1, s.length-1))
}
