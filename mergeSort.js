const mergeSort = function(arr) {

  if(arr.length === 1) return arr;
  var middle = Math.floor(arr.length / 2);
  return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)))


}

const merge = function(arr1, arr2) {
  var output = [];
  var i = 0;
  var j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr1[i] <= arr2[j]) {
      output.push(arr1[i]);
      i++;
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  return output.concat(arr1.slice(i)).concat(arr2.slice(j))
}

console.log(mergeSort([2,6,1,9,8,3,13,5]))