// https://leetcode.com/problems/reverse-integer/

const reverse = (x) => {
  let arr = x.toString().split("");

  let isNegative = false;

  if (arr[0] === "-") {
    arr.splice(0, 1);
    isNegative = true;
  }

  const length = arr.length;

  for (let i = 0; i < Math.floor(length / 2); i++) {
    const tmp = arr[i];
    arr[i] = arr[length - i - 1];
    arr[length - i - 1] = tmp;
  }

  let num = +arr.join("");

  if (num > 0x7fffffff) {
    return 0;
  }

  return isNegative ? -1 * num : num;
};
