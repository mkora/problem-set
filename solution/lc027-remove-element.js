/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
  let i = 0;
  let j = i;

  while (j < nums.length) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i += 1;
    }
    j += 1;
  }

  nums.length = i;
  return nums.length;
}

module.exports = { removeElement };
