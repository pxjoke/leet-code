// https://leetcode.com/problems/search-insert-position

export const getCenter = (left, right) => Math.floor((right + left) / 2);

export const searchInsert = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;
    let center;

    while (left <= right) {
        center = getCenter(left, right);

        if (nums[center] === target) {
            return center;
        }

        if (nums[center] > target) {
            right = center - 1;
            continue;
        }

        if (nums[center] < target) {
            left = center + 1;
            continue;
        }
    }

    return left;
}
