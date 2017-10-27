/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  const n = s.length;
  let res = roman[s[n - 1]];

  for (let i = n - 2; i >= 0; i -= 1) {
    if (roman[s[i]] >= roman[s[i + 1]]) {
      res += roman[s[i]];
    } else {
      res -= roman[s[i]];
    }
  }

  return res;
}

module.exports = { romanToInt };
