// String.slice

// String.slice(start, end) - extract part of a string and return in a new one.Start and end are indices into the string, with the first character at index 0. End param is optional and if present, refers to one beyond the last character to include.

//   Bonus : include support for negative indices, representing offsets from string - end.Example: String.slice(-1) returns the string’s last character.

var test = "Hello World";
console.log(test.slice(0, 2));
console.log(test);

function slice(str, start, end=str.length) {
  var result = "";
  for(var i = start; i < end; i++) {
    result += str[i];
  }
  return result;
}

console.log(slice(test, 1, 2));