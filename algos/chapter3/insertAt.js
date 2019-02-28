// Given array, index, and additional value, insert the value into array at given index.Do this without using built -in array methods.You can think of pushFront(arr, val) as equivalent to insertAt(arr, 0, val).

function insertAt(arr, val, idx) {
  // deal with idx out of bounds
  // if greater than length, idx == (remainder of idx/length) - 1
  if (idx > arr.length || idx < 0) {
    throw new Error("Index out of bounds");
  }

  if(idx > arr.length) {
    idx = (idx % arr.length) - 1;
    console.log(idx);
  }

  // if less than 0, idx == remainder of idx/length + 1
  if(idx < 0) {
    idx = (idx % arr.length) + 1;
    console.log(idx);
  }

  arr.push(val);// push val into arr
  for ( var i=arr.length-1; i>idx; i--){// for each index down to idx
    var temp = arr[i-1];// set current idx in temp
    arr[i-1] = arr[i];// swap with val
    arr[i] = temp;// return arr
  }
  return(arr);
}

// var test = [2, 4, 6, -2];
// insertAt(test, -10, 7); // out of bounds >
// insertAt(test, -10, 0); // lower bound
// insertAt(test, -10, 4); // upper bound
// insertAt(test, -10, -1); // out of bounds <
// insertAt(test, -10, 2); // somewhere in the middle

// edge cases
  // idx is 0
  // idx is arr.length - 1
  // index out of bounds

// [2,4,6,-2]
// [2,4,6,-2,-10]
// [2,4,6,-10,-2]
// [2,4,-10,6,-2]
// [2,-10,4,6,-2]

module.exports = {
  insertAt: insertAt
};