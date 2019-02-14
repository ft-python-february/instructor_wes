// String.concat(str2, str3, ..., strX) - add string(s) to end of existing one.Return new string.

function concat(str, ...args) {
  for(var val of args) {
    str = str + val;
  }
  return str;
}

test = "hello";
console.log(concat(test, " ", "world", "!"));
console.log(test);

var arr = [1, 2, 3, 4];

function concatenate(...args) {
  var newString = this.toString();
  for(var val of args) {
    newString += val;
  }
  return newString;
}

String.prototype.concatenate = concatenate;
console.log(test.concatenate(" ", "world"));