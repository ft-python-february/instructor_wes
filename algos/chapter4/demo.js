var str = "hello world";

var newString = "";
for(var i = 0; i < str.length; i++) {
  if(i != 4) {
    newString = newString + str[i];
  } else {
    newString += "a";
  }
}

console.log(newString);
str = newString;