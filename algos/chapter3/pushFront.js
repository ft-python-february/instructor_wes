// Given array and an additional value, insert this value at the beginning of the array.Do this without using any built -in array methods.
function pushIt(arr, val){
  arr.push(val);
  for(var i = arr.length - 1; i > 0; i--){
    var temp = arr[i-1];
    arr[i-1] = arr[i];
    arr[i] = temp;
  }
  // console.log(arr);
  return arr;
}

var test = [2, 3, 4];
// console.log(pushIt(test, 1));

function pushFront(arr, val) {
  for(var i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = val;
  return arr;
}

console.log(pushFront(test, 1));

// console.log(test);

var num = 1;
var otherNum = num;
otherNum = num + 10;
// console.log(num);

var arr = [1, 2, 3];
var otherArr = arr;
otherArr[2] = 10;
// console.log(arr);