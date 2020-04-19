// https://leetcode.com/problems/roman-to-integer/

const map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
  IV: 4,
  IX: 9,
  XL: 40,
  XC: 90,
  CD: 400,
  CM: 900,
};

const romanToInt = (s) => {
  const length = s.length;
  let i = 0;
  let sum = 0;

  while (i < length) {
    if (s[i + 1] && map[s[i] + s[i + 1]]) {
      sum += map[s[i] + s[i + 1]];
      i += 2;
    } else {
      sum += map[s[i]];
      i += 1;
    }
  }

  return sum;
};
