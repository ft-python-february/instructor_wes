// Array: Binary Search

// Given a sorted array and a value, return whether the array contains that value.Do not sequentially iterate the array.Instead, ‘divide and conquer’, taking advantage of the fact that the array is sorted.As always, only use built -in functions that you are prepared to recreate(write yourself) on demand!

describe('binarySearch() - Array', () => {
  describe('odd length array', () => {
    beforeEach(() => {
      sortedArray = [0, 1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12];
    });

    it("should return true if value in array", () => {
      console.log(sortedArray);
      expect(binarySearch(sortedArray, 2)).toBe(true);
    });
  });
  describe('even length array', () => {
    beforeEach(() => {
      sortedArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    });
    
  });
});