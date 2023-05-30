/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // look for duplicates
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
        i--;
        j--;
      }
    }
  }
  return nums.length;
};

// execution time of 6000+ ms
// its pretty slow
