/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) return "";

  let minLength = (strs) => {
    let lengths = strs.map((v) => v.length);
    return Math.min(...lengths);
  }

  let isSame = (strs, sub) => {
    for (let i = 1; i < strs.length; i++) {
      if (!strs[i].startsWith(sub))
        return false;
    }
    return true;
  }

  let left = 1, right = minLength(strs),
    item = strs[0], i, middle;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (isSame(strs, item.substr(0, middle)))
      left = middle + 1;
    else
      right = middle - 1;
  }

  return item.substr(0, Math.floor((left + right) / 2));
};

module.exports.longestCommonPrefix = longestCommonPrefix;
