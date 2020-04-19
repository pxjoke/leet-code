// https://leetcode.com/problems/longest-common-prefix/

const findCommonPrefix = (a, b) => {
  const length = Math.min(a.length, b.length);
  let prefix = "";

  for (let i = 0; i < length; i++) {
    if (a[i] !== b[i]) {
      return prefix;
    }
    prefix += a[i];
  }
  return prefix;
};

const longestCommonPrefix = function (strs) {
  const length = strs.length;

  if (!length) {
    return "";
  }

  let prefix = strs[0];

  for (let i = 1; i < length; i++) {
    prefix = findCommonPrefix(prefix, strs[i]);
    if (!prefix) {
      break;
    }
  }

  return prefix;
};
