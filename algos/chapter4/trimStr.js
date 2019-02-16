// String.trim

// String.trim() -remove whitespace (spaces, tabs, newlines) from both sides, and return a new string. Example: " \n hello goodbye \t ".trim() should return "hello goodbye" .
var test = " \n hello goodbye \t ";
// console.log(test.trim());
// console.log(test.slice(3, 16));
var test2 = "hello goodbye";
// console.log(test2.slice(0, 13));
// if the string starts or ends with a space characters remove those spaces
//create a new string
//where first string character equals not a space character have that be the string start
  // for loop forward
//where last string character equals not a space character have that be the string end
  // for loop backward
function isBlank(char){
  if (char === " " || char === "\n" || char === "\t"){
    return true;
  }
  return false;
}

function trim(str) {
  var start = 0;
  var end = str.length;
  //find start
  for( var i = 0; i < str.length; i++){
    if(isBlank(str[i])){
      start++;
    } else {
      break;
    }
  }
  for(var i = str.length - 1; i >= 0; i--){
    // console.log("str[i]:", str[i], "i:", i);
    if(isBlank(str[i])){
      end--;
    } else {
      break;
    }
  }
  if(start > end) {
    return "";
  }
  return str.slice(start, end);
}

console.log(trim(test));
console.log(trim(test2));
var test3 = "a    ";
console.log(trim(test3));

var test4 = "     ";
console.log(trim(test4));