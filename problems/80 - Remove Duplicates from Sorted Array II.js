var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let occurences = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        occurences++;
        if (occurences > 1) {
          nums.splice(j, 1);
          j--;
        }
      }
    }
  }
  console.log(nums);
  let unique = 0;
  for (let i = 0; i < nums.length; i++) if (nums[i] !== nums[i + 1]) unique++;
  return unique.length;
};

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]));
console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3]));
