// https://leetcode.com/problems/palindrome-number/

const isPalindrome = function (x) {
  if (x < 0) {
    return false;
  }

  const { pow, floor, log10 } = Math;
  const digits = floor(log10(x) + 1);

  for (let i = 0; i < floor(digits / 2); i++) {
    const firstDigit = floor(x / pow(10, digits - i - 1)) % 10;
    const lastDigit = floor((x % pow(10, i + 1)) / pow(10, i));

    if (firstDigit !== lastDigit) {
      return false;
    }
  }

  return true;
};
