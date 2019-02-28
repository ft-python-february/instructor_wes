const insertAt = require('../insertAt').insertAt;

describe('insertAt()', function() {
  it('should insert a value somewhere in the middle of the array', function() {
    const value = 2;
    const idx = 2;
    let arr = [0, 1, 3, 4];
    expect(insertAt(arr, value, idx)).toEqual([0, 1, 2, 3, 4]);
  });

  it('should push value into an empty array', function() {
    expect(insertAt([], 2, 0)).toEqual([2]);
  });

  it('should throw and error given an index out of range (idx < arr.length + 1 || idx < 0)', function() {
    expect(function(){
      insertAt([], 2, 2)
    }).toThrow(new Error("Index out of bounds"));
  });

  it('should insert a value at index 0', function() {
    expect(insertAt([1, 2, 3, 4], 0, 0)).toEqual([0,1,2,3,4]);
  });
});