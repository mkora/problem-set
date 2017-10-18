/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
  let res = 0, tmp;
  while (x) {
    tmp = x % 10;
    res = res * 10 + tmp;
    x = (x - tmp) / 10;
  }

  const MAX_VALUE = 2147483647, MIN_VALUE = -2147483648;
  let overflow = r =>
    r > MAX_VALUE || r < MIN_VALUE ;

  return overflow(res) ? 0 : res;
};

module.exports.reverse = reverse;
