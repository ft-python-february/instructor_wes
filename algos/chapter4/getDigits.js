// String: Get Digits

// Create a JavaScript function that given a string, returns the integer made from the string’s digits.Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

function getDigits(str) {
  // var digits = new RegExp(/[0-9]/);
  // digits.test()
  var numberStr = '';
  for(var i = 0; i < str.length; i++) {
    if(/[0-9]/.test(str[i])) {
      numberStr += str[i];
    }
  }
  return parseInt(numberStr);
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));