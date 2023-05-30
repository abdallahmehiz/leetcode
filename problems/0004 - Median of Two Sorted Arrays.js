/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let yes = nums1.concat(nums2);
  // bubble sort
  for (let i = 0; i < yes.length; i++) {
    for (let j = 0; j < yes.length; j++) {
      if (yes[j] > yes[j + 1]) {
        let temp = yes[j];
        yes[j] = yes[j + 1];
        yes[j + 1] = temp;
      }
    }
  }
  if (yes.length % 2 === 0)
    return (yes[yes.length / 2] + yes[yes.length / 2 - 1]) / 2;
  else return yes[Math.floor(yes.length / 2)];
};
