// Remove Blanks

// Create a function that, given a string, returns all of that string’s contents, but without blanks.If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

function removeBlanks(str) {
  // build a new string
  // look at each charachter
  // for loop, go through entire string
  // check to see if the charachter is a space
  // if (str[i] == " ")
  // skip
  var newString = '';
  for (var i=0; i<str.length; i++){
    if (str[i] != ' '){
      newString += str[i];
    }
  }

  return newString;
}

var test = " Pl ayTha tF u   nkyM usi c ";
console.log(removeBlanks(test));