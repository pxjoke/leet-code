// https://leetcode.com/problems/valid-parentheses/

const pairs = {
    '(': ')',
    '{': '}',
    '[': ']'
};

const isValid = function (str) {
    const stack = [];
    const stringLength = str.length;

    for (let i = 0; i < stringLength; i++) {
        const s = str[i];
        if (s === '(' || s === '[' || s === '{') {
            stack.push(s);
            continue;
        }

        const last = stack.pop();

        if (pairs[last] !== s) {
            return false;
        }
    }

    return !stack.length;
};
