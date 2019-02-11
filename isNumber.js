var isNumber = function(s) {
  s = s.trim();
  if(!s.length) return false;
  var [base, power, exponent, signed, decimal, float, unit] = [false, false, false, false, false, false, false]
  for(letter of s) {
    if(!exponent) {
      if(letter === 'e') {
        if(!base) return false;
        exponent = true;
        signed = false;
        continue;
      }

      if(!signed && isSign(letter)) {
        if(base) return false;
        if(decimal) return false;
        signed = true;
        continue;
      }

      if(!decimal && letter === '.') {
        decimal = true;
        continue;
      }

      if(!isNumeric(letter)) return false;

      if(decimal) float = true;
      if(!decimal) unit = true;
      base = true;

    } else {
      if(letter === '.') return false;
      if(!signed && isSign(letter)) {
        if(power) return false;
        signed = true;
        continue;
      }
      if(!isNumeric(letter)) return false;
      power = true;
    }
  }
  
  if(exponent && !power) return false;
  if(!unit && decimal && !float) return false;
  return true;
}

var isSign = function(letter) {
  return letter === '-' || letter === '+';
}

var isNumeric = function(letter) {
  var code = letter.charCodeAt();
  return (code > 47 && code < 58);
}