function intermediateSums(arr) {
  // start from left
  // add each num to sum
  // if idx is divisible by 10 (i + 1 % 10 == 0)
    // add sum to sums array
    // reset sum to 0
  // after loop, add sum to sums array
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum = arr[i] + sum;
  }

}

console.log(intermediateSums([1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2]));