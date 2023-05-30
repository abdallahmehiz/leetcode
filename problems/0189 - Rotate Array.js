/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k === 0) return nums;
  if (k > nums.length) k = k % nums.length;
  // re-add the elements that need to be rotated at the end of the array
  for (let i = nums.length - 1; i >= 0; i--) nums[i + k] = nums[i];
  // re-add the elements that need to be rotated at the beginning of the array
  for (let i = k - 1; i >= 0; i--) nums[i] = nums.pop();
  return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 99999999999)); // [5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); // [3,99,-1,-100]
console.log(rotate([1, 2], 3)); // [2,1]
console.log(rotate([1, 2, 3], 4)); // [3,1,2]
