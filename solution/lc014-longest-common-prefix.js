/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
  if (strs === null || strs.length === 0) return '';

  const minLength = (arr) => {
    const lengths = arr.map(v => v.length);
    return Math.min(...lengths);
  };

  const isSame = (arr, sub) => {
    for (let i = 1; i < arr.length; i += 1) {
      if (!strs[i].startsWith(sub)) {
        return false;
      }
    }
    return true;
  };

  let left = 1;
  let right = minLength(strs);
  let middle;
  const item = strs[0];

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (isSame(strs, item.substr(0, middle))) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return item.substr(0, Math.floor((left + right) / 2));
}

module.exports = { longestCommonPrefix };
