/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 1;
  let earlierCount = 0;
  let majority = nums[0];
  for (let i = 0; i < nums.length; i++) {
    count = 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] == nums[j]) {
        count++;
      }
    }
    if (count > earlierCount) {
      majority = nums[i];
      earlierCount = count;
    }
    if (count > nums.length / 2) return nums[i];
  }
  return majority;
};

console.log(majorityElement([3, 2, 3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([1]));
console.log(majorityElement([1, 2]));
console.log(majorityElement([2, 2, 3, 3, 3, 3, 2]));
console.log(majorityElement([6, 6, 6, 7, 7]));

// javascript is slow af
