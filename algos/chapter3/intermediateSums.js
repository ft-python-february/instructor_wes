var insertAt = require('./insertAt').insertAt;
// Intermediate Sums
// You will be given an array of numbers.After every tenth element, add an additional element containing the sum of those ten values.If the array does not end aligned evenly with ten elements, add one last sum that includes those last elements not yet been included in one of the earlier sums.Given the array[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2], change it to[1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 15, 1, 2, 1, 2, 6].


function intermediateSums(arr) {
  // start from left
  // add each num to sum
  // if idx is divisible by 10 (i + 1 % 10 == 0)
    // add sum to sums array
    // reset sum to 0
  // after loop, add sum to sums array
  var sum = 0;
  var sumsArray = [];
  for(var i = 0; i < arr.length; i++){
    sum = arr[i] + sum;
    if((i + 1) % 10 == 0) {
      sumsArray.push(sum);
      sum = 0;
    }
  }
  sumsArray.push(sum);
  // index 10, index 21, index 32
  for(var i = 0; i < sumsArray.length - 1; i++) {
    var insertIndex = 10 * (i + 1) + i;
    insertAt(arr, sumsArray[i], insertIndex);
  }
  arr.push(sumsArray[sumsArray.length - 1]);
  return arr;
}

console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));