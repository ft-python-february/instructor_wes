// Parens Valid

// Create a function that, given an input string str, returns a boolean whether parentheses in str are valid.Valid sets of parentheses always open before they close, for example.For "Y(3(p)p(3)r)s", return true.Given "N(0(p)3", return false : not every parenthesis is closed.Given "N(0)t ) 0(k", return false, because the underlined ")" is premature: there is nothing open for it to close.

function parensValid(str) {
  // start at the beginning of the string
  // if character is "(", add 1 to opens
  // if character is ")" add 1 to closes
  // if closes > opens
    // return false
  // after we're done
    // if opens == closes
      // return true
    // else 
      // return false

  var open = 0;
  var close = 0;
  for (var i = 0; i < str.length; i++){
    if (str[i] == '('){
      open += 1;
    } else if (str[i] == ')') {
      close += 1;
    }
    if (close > open){
      return false;
    }
  }
  // if (open == close){
  //   return true;
  // } else {
  //   return false;
  // }

  // ternary operator
  return open == close ? true : false;
}

console.log(parensValid("Y(3(p)p(3)r)s")); // true
console.log(parensValid("N(0(p)3")); // false
console.log(parensValid("N(0)t ) 0(k")); // false