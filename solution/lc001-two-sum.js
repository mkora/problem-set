/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target){ // 85 ms
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    let remain = target - nums[i];
    if (hash[remain] !== undefined) {
      return [hash[remain], i];
    }
    hash[nums[i]] = i;
  }
  return null;
};

module.exports.twoSum = twoSum;
