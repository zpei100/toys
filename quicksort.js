var quickSort = function(arr, left = 0, right = arr.length-1) {
  if(arr.length === 1) return arr;
  if(!arr.length) return [];

  var pivot = partition(arr, left, right);
  if(pivot > left) quickSort(arr, left, pivot - 1);
  if(pivot < right) quickSort(arr, pivot + 1, right);

  return arr;
}

var partition = function(arr, left, right) {
  var pivotValue = arr[right];
  var newPivot = left;

  for (j = left; j < right; j++) {
    if (arr[j] < pivotValue) {
      arr.swap(newPivot, j);
      newPivot++;
    }
  }

  arr.swap(newPivot, right);
  return newPivot;
}

Array.prototype.swap = function(i, j) {
  [this[i], this[j]] = [this[j], this[i]];
}

console.log(quickSort([1,7,9,2,4,6,4,8,2,1,5,7,3,7,1,6,5,6,5,5,1]))