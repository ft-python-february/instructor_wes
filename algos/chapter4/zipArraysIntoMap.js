// for demo purposes
var test = {
  "abc": 42,
  3: "wassup",
  "yo": true,
  "key": "THIS ISN'T RIGHT",
  "hello-world": "Hey there" 
}

// console.log(test["hello-world"]);

// for(var key in test) {
//   console.log(key);
//   // console.log(test.key);
//   console.log(test[key]);
// }


// Associative arrays are sometimes called maps because a key(string) maps to a value.Given two arrays, create an associative array(map) containing keys of the first, and values of the second.For arr1 = ["abc", 3, "yo"] and arr2 = [42, "wassup", true], return {"abc": 42, 3: "wassup", "yo": true }.

function zipArraysIntoMap(keys, values) {
  // create a new assoc array
  var newObj =  {}
  // run loop until end of keys length
  for (var i = 0; i < keys.length; i++){
    newObj[keys[i]] = values[i];
    // if index is out of values range, insert null
    if( i > values.length - 1 ){
      newObj[keys[i]] = null;
    }
  }
  return newObj;
}

var arr1 = ["abc", 3, "yo", 'extraVal'];
var arr2 = [42, "wassup", true];
console.log(zipArraysIntoMap(arr1, arr2));