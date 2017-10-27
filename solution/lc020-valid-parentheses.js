/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
  const parens = [];
  const mask = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < s.length; i += 1) {
    if (mask[s[i]] === undefined) {
      const tmp = parens.pop();
      if (mask[tmp] !== s[i]) {
        return false;
      }
    } else {
      parens.push(s[i]);
    }
  }

  return (parens.length === 0);
}

module.exports = { isValid };
