/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const parens = [],
    mask = {'(' : ')', '{' : '}', '[' : ']'};
  for (let i = 0; i < s.length; i++) {
    if (mask[s[i]] !== undefined) {
      parens.push(s[i]);
      continue;
    }
    let tmp = parens.pop();
    if (mask[tmp] !== s[i])
      return false;
  }
  return parens.length === 0;
};

module.exports.isValid = isValid;
