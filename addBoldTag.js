var addBoldTag = function(s, dict) {
  var intervals = [];

  for(word of dict) {
    var found = true;
    var str = s;
    while(found) {
      var position = str.indexOf(word);
      if(position === -1) found = false;
      else {
        intervals.push([position, word.length + position - 1]);
        str = str.slice(position + 1);
      }
    }
  }

  var prev = 0;

  return mergeIntervals(intervals).reduce(function(accumulator, [start, end]) {

    var result = accumulator + `${s.slice(prev, start)}<b>${s.slice(start, end+1)}</b>`
    prev = end+1;
    return result;

  }, '') + s.slice(intervals[intervals.length - 1][1]+1);
}

var mergeIntervals = function(intervals) {
  intervals.sort((a,b) => a[0] - b[0]);

  var output = [];

  for (interval of intervals) {
    if(output.length === 0) output.push(interval);
    else {
      if(output[output.length - 1][1] >= (interval[0] - 1)) output[output.length - 1][1] = Math.max(interval[1], output[output.length -1][1])
      else output.push(interval);
    }
  }

  return output;
}