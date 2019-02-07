// Implement rotateArr(arr, shift) that accepts array and offset.Shift arr ’s values to th e right by that amount.‘Wrap - around’ any values that shift off array’s end to the other side, s o that no data is lost.Operate in -place: given([1, 2, 3], 1), change the array to[3, 1, 2].Don’ t use built -in functions.Second: allow negative shift(shift L, not R).Third: minimize memory usage.With no new array, handle arrays / shift s in the millions.Fourth: minimize the touches of each element.

function rotateArr(arr, shift) {
  // store arr[arr.length - 1] in temp
  // move all values to right by 1
  // arr[0] = temp
  // for(var i=0; i < arr.length - 1; i++){
  //   arr[arr.length - 1 - i] = arr[arr.length - 2 - i];
  // }
  shift = shift % arr.length;
  if(shift < 0) {
    shift = arr.length + shift;
  }

  for(var i = 0; i < shift; i++) {
    var temp = arr[arr.length - 1];
    for(var j = arr.length -1; j > 0; j--) {
      arr[j] = arr[j - 1];
    }
    arr[0] = temp;
    // console.log(arr);
  }
  return arr;
}

console.log(rotateArr([1,2,3,4,5], -3)); // [5, 1, 2, 3, 4]
