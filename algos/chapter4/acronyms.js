// Acronyms

// Create a function that, given a string, returns the string’s acronym(first letters only, capitalized).Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW".Given "Live from New York, it's Saturday Night!", return "LFNYISN".

// how might we build the caplitalize function?
// var letterMap = {
//   'a': 'A',
//   'b': 'B',
// }

// var str = "apple"
// console.log(letterMap[str[0]], str[0]);

function acronyms(str) {
  // create a new string
  var newString = '';
  str = " " + str;
  // keep any letter that comes after a space
  // start for loop at index 1??
  for(var i = 0; i < str.length - 1; i++) {
    if(str[i] == " " && str[i + 1] != " ") {
      newString += str[i + 1];
    }
  }
  return newString.toUpperCase();
}
tester = "     there's no free lunch - gotta pay yer way.    ";
test = "Live from New York, it's Saturday Night!";
console.log(acronyms(tester));
console.log(acronyms(test));
console.log(test);