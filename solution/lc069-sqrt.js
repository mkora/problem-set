/**
 * @param {number} x
 * @return {number}
 */
function mySqrtNewton(x) {
  // newton's method is x[n+1] = x[n] - f(x[n]) / f'(x[n])
  // sqrt is x^a = a  =>  f(x) = x^2 - a = 0
  // thus x[n+1] = 1/2 * (x[n] + a / x[n])
  if (x == 0) return x;
  let res = 1, prev = 0, delta = 0.1;
  while (Math.abs(res - prev) > delta) {
    prev = res;
    res = 0.5 * (res + (x / res));
  }
  return Math.floor(res);
};

function mySqrtBinary(x) {
  if (x == 0) return x;
  let min = 1, max = x;
  while (min <= max) {
    let mid = Math.round((min + max) / 2),
      root = mid * mid;
    if (root == x) return mid;
    if (root > x) max = mid - 1;
    else min = mid + 1;
  }
  return max;
};

module.exports.mySqrtNewton = mySqrtNewton;
module.exports.mySqrtBinary = mySqrtBinary;
