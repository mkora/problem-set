/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert (nums, target) {
  let left = 0, 
    right = nums.length - 1;
  while (left <= right) {
    let i = Math.round((right + left) / 2);
    if (target < nums[i]) {
      right = (i - 1);
    } else if (target > nums[i]) {
      left = (i + 1);
    } else {
      return i;
    }
  }
  return left;
};

module.exports.searchInsert = searchInsert;
