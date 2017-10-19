/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false;

  let last = 0;
  // compare just half of digits
  while (x > last) {
    last = (x % 10) + (last * 10);
    x = (x - x % 10) / 10;
  }

  return (x === last ||
    // if len(x) = odd number then in the end deal with len(x) -> 1 != len(last) -> 2
    // thus, get the first digit of last ->last/10
    x === (last - last % 10) / 10);
};

module.exports.isPalindrome = isPalindrome;
