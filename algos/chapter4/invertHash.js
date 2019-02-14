// Associative arrays are also called hashes(we’ll learn why later).Build invertHash(assocArr) to convert hash keys to values, and values to keys.Example: given { "name": "Zaphod", "charm": "high", "morals": "dicey" } , return object { "Zaphod": "name", "high": "charm", "dicey": "morals" } .

function invertHash(obj) {
  var newObj = {};    //Create new object
  //for loop
  for (var key in obj) {
    // to get the key: key
    // to get the value: obj[key]
    newObj[obj[key]] = key;
  }

  return newObj;
  //Inside loop: create temp variable to hold either key or value
  //Inside loop: switch value 
}
var test = {
  'a': 1,
  'b': 2,
  'c': 3
}
console.log(invertHash(test));