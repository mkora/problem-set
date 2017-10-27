/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  let i = 0;
  let j = (i + 1);

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      // if it's not a dub, move number closer to the beginnig
      nums[i + 1] = nums[j];
      i += 1;
    }
    j += 1; // continue while dubs
  }

  nums.length = i + 1;
  return nums.length;
}

module.exports = { removeDuplicates };
