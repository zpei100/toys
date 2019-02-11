var isPalindrome = function(s) {
  s = s.toLowerCase();
  var [left, right] = [0, s.length-1];
  while(left < right) {
    if(!isAlphaNumeric(s[left])) {
      left++;
      continue;
    }
    
    if(!isAlphaNumeric(s[right])) {
      right--;
      continue;
    }
    
    if(s[left++] !== s[right--]) return false;
  }
  return true;
}

var isAlphaNumeric = function(letter) {
  var code = letter.charCodeAt();
  return (
    (code > 47 && code < 58) ||
    (code > 96 && code < 123) 
  )
}