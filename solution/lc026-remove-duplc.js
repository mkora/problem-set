/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let i = 0, j = (i + 1);
  while (j < nums.length) {
    if (nums[i] != nums[j]) {
      // if it's not a dub, move number closer to the beginnig
      nums[i+1] = nums[j];
      i++;
    }
    j++; // continue while dubs
  }
  return nums.length = i + 1;
};

module.exports.removeDuplicates = removeDuplicates;
