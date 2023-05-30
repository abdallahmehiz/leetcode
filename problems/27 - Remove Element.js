/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let occurences = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) nums[occurences++] = nums[i];
  }
  return occurences;
};
