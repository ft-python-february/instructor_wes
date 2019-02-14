// Max / Min / Average with Object

// Given an array, return an object containing the array’s max, min and average values.

function maxMinAvg(arr){
  var result = {
    max : arr[0],
    min : arr[0],
  };
  var sum = 0;
  for( var i = 0; i < arr.length; i++){
    if( arr[i] > result.max){
      result.max = arr[i];
    }
    if( arr[i] < result.min){
      result.min = arr[i];
    }
    sum = sum + arr[i];
  }
  result.avg = sum/arr.length;
  return result;
}

console.log(maxMinAvg([1, -100, 100, 5, -1]));