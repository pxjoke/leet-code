import {removeElement} from "./remove-element";

test('[4, 5], val = 5', () => {
    const inputArray = [4, 5];

    expect(removeElement(inputArray, 5)).toBe(1);
    expect(inputArray).toEqual([4, 5]);
})

test('[1, 2, 5, 3, 5, 5], val = 5', () => {
    const inputArray = [1, 2, 5, 3, 5, 5];

    expect(removeElement(inputArray, 5)).toBe(3);
    expect(inputArray).toEqual([1, 2, 3, 3, 5, 5]);
})

test('[3,2,2,3], val = 3', () => {
    const inputArray = [3, 2, 2, 3];

    expect(removeElement(inputArray, 3)).toBe(2);
    expect(inputArray).toEqual([2, 2, 2, 3]);
})

test('[2,2], val = 3', () => {
    const inputArray = [2, 2];

    expect(removeElement(inputArray, 3)).toBe(2);
    expect(inputArray).toEqual([2, 2]);
})

test('[2], val = 3', () => {
    const inputArray = [2];

    expect(removeElement(inputArray, 3)).toBe(1);
    expect(inputArray).toEqual([2]);
})


test('[3], val = 3', () => {
    const inputArray = [3];

    expect(removeElement(inputArray, 3)).toBe(0);
    expect(inputArray).toEqual([3]);
})

test('[3, 3], val = 3', () => {
    const inputArray = [3, 3];

    expect(removeElement(inputArray, 3)).toBe(0);
    expect(inputArray).toEqual([3, 3]);
})

