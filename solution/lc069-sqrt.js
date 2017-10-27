/**
 * @param {number} x
 * @return {number}
 */
function mySqrtNewton(x) {
  // newton's method is x[n+1] = x[n] - f(x[n]) / f'(x[n])
  // sqrt is x^a = a  =>  f(x) = x^2 - a = 0
  // thus x[n+1] = 1/2 * (x[n] + a / x[n])
  if (x === 0) {
    return x;
  }

  let res = 1;
  let prev = 0;
  const delta = 0.1;

  while (Math.abs(res - prev) > delta) {
    prev = res;
    res = 0.5 * (res + (x / res));
  }

  return Math.floor(res);
}

function mySqrtBinary(x) {
  if (x === 0) {
    return x;
  }

  let min = 1;
  let max = x;

  while (min <= max) {
    const mid = Math.round((min + max) / 2);
    const root = mid * mid;

    if (root === x) return mid;
    if (root > x) max = mid - 1;
    else min = mid + 1;
  }

  return max;
}

module.exports = {
  mySqrtNewton,
  mySqrtBinary,
};
