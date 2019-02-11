// var isOneEditDistance = function(s, t) {
//   [s, t] = s.length <= t.length ? [s, t] : [t, s];
//   if(!s.length) return t.length === 1;
//   var ss = s.slice(0, s.length-1), st = t.slice(0, t.length-1);
//   return s.last() === t.last() ? isOneEditDistance(ss, st) : ss === st || ss === t || s === st;
// }

// String.prototype.last = function() {
//   return this[this.length-1]
// }


var isOneEditDistance = function(s, t) {
  [s,t] = s.length <= t.length ? [s,t] : [t,s];
  for(var i = 0; i < s.length; i++) {
    var [ls, lt] = [s[i], t[i]];
    if(ls !== lt) {
      if(s.length === t.length) return s.slice(i+1) === t.slice(i+1);
      else return s.slice(i) === t.slice(i+1);
    }
  }
  return t.length === s.length + 1;
}


console.log(isOneEditDistance('', ''))
