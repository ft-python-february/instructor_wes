// Given array, remove and return the value at the beginning of the array.Do this without using any built -in array methods except pop().

function popFront(arr) {
  // length is -1
  // all elements moved to the left by 1
  // reverse the array
  // use pop
  // reverse it again
  arr = reverseArr(arr);
  var val = arr.pop();
  arr = reverseArr(arr);
  return val;
}

var test = [1, 2, 3, 4, 5, 6];
// var returnedValue = popFront(test); // [2, 3, 4, 5, 6]
// console.log(test, returnedValue); // 1

function popFront2(arr) {
  // hold on to arr[0] in a variable to return later
  // move every element to the left by one
  // pop the extra value
  var result = arr[0];
  for(var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  console.log(arr);
  return result;
}

var test2 = [1, 2, 3, 4, 5];
console.log(popFront2(test2));

function reverseArr(arr) {
  // swap first and last
    // swap second and second to last
    // swap third and third to last and so on
  // write a for loop that runs arr.length / 2 times
  for(var i = 0; i < arr.length / 2; i++) {
    var temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
}

// console.log(reverseArr(test)); //[6, 5, 4, 3, 2, 1]
// console.log(reverseArr(test2)); //[5, 4, 3, 2, 1]
