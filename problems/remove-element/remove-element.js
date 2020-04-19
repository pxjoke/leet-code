// https://leetcode.com/problems/remove-element/

export const removeElement = (array, target) => {
    let ready = 0;
    const {length} = array;

    for (let current = 0; current < length; current++) {
        const el = array[current];
        if (el !== target) {
            array[ready] = el;
            ready++;
        }
    }
    return ready;
}
