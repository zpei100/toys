var countSubstrings = function(s) {
  var store = [] 
  var result = 0 

  for (var j = 0; j < s.length; j++) {
    for (var i = 0; i < s.length - j; i++) {
      if (!store[i] || store[i].length === 0) store[i] = []
      if (j === 0) {
        store[i][i+j] = 1
        result += 1
        continue
      }      

      if (j === 1) {
        var value = s[i] === s[i+1] ? 1 : 0
        store[i][i+j] = value
        result += value
        continue
      }

      if (s[i] === s[i+j]) {
        store[i][i+j] = store[i+1][i+j-1]
        result += store[i+1][i+j-1]
      } else store[i][i+j] = 0
    }
  }
  return result
}


