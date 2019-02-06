function reverseArr(arr) {
  // swap first and last
  // swap second and second to last
  // swap third and third to last and so on
  // write a for loop that runs arr.length / 2 times
  for (var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// console.log(reverseArr(test)); //[6, 5, 4, 3, 2, 1]
// console.log(reverseArr(test2)); //[5, 4, 3, 2, 1]
