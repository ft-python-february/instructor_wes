// Braces Valid

// Given a sequence of parentheses, braces and brackets, determine whether it is valid.Example: "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!" => true. "D(i{a}l[ t]o)n{e" => false. "A(1)s[O (n]0{t) 0}k" => false.

function bracesValid(str) {
  // build braces map
  var bracesMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  }

  // make an empty array "eliminator" for keeping track of open brackets in order
  var openBraces = [];
  // start from left side, go all the way to the end
  for(var i = 0; i < str.length ; i++) {
    // if currIdx == open brace, add it to array
    if(str[i] === "(" || str[i] === "[" || str[i] === "{") {
      openBraces.push(str[i]);
    }
    // if currIdx == close brace
    if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      // if it does not correspond with last value in array, return false
        // get last value arr[arr.length - 1] OR arr.pop()
        // get currIdx using str[i]
        // check which open corresponds with bracesMap[str[i]]
        // does bracesMap[str[i]] == last value in arr?
      if(bracesMap[str[i]] !== openBraces.pop()) {
        return false;
      }
    }

  }
  // after we're done checking characters
    // if arr.length > 0
      // return false
    // else
      // return true
  // condition ? if true : if false;
  return openBraces.length > 0 ? false : true;
}

// console.log(bracesValid("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")); // true
// console.log(bracesValid("D(i{a}l[ t]o)n{e")); // false
// console.log(bracesValid("A(1)s[O (n]0{t) 0}k")); // false

function bracesValid2(str) {
  var bracesMap = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  var closingBraces = [];
  for(var i = 0; i < str.length; i++) {
    if (str[i] === "(" || str[i] === "[" || str[i] === "{") {
      closingBraces.push(bracesMap[str[i]]);
    }
    if (str[i] === ")" || str[i] === "]" || str[i] === "}") {
      if(str[i] !== closingBraces.pop()) {
        return false;
      }
    }
  }
  return !closingBraces.length;
}

console.log(bracesValid2("W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!")); // true
console.log(bracesValid2("D(i{a}l[ t]o)n{e")); // false
console.log(bracesValid2("A(1)s[O (n]0{t) 0}k")); // false