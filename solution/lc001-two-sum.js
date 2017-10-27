/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
  const hash = {};

  for (let i = 0; i < nums.length; i += 1) {
    const remain = target - nums[i];

    if (hash[remain] !== undefined) {
      return [hash[remain], i];
    }

    hash[nums[i]] = i;
  }

  return null;
}

module.exports = { twoSum };
