// String: Reverse

// Implement reverseString(str) that, given string, returns that string with characters reversed.Given "creature", return "erutaerc".Tempting as it seems, do not use the built -in reverse()!
function reverseString(str) {
  // start at end of string
  // for each character, add each character in order to the new string
  // return new string
  var newstr = "";
  for (var i = str.length -1 ; i >= 0; i--){
    newstr += str[i];
  }
  return newstr;
}
console.log(reverseString("creature"));