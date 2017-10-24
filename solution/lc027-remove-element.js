/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let i = 0, j = i;
  while (j < nums.length) {
    if (nums[j] != val) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }
  return nums.length = i;
};

module.exports.removeElement = removeElement;
