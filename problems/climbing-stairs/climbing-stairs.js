// https://leetcode.com/explore/interview/card/top-interview-questions-easy/97/dynamic-programming/569/

export function climbStairs(n) {
  const nodes = new Array(n + 1).fill(0);
  nodes[0] = 1;
  const queue = [0];

  while (queue.length) {
    const currentNodeIdx = queue.shift();

    for (let i = currentNodeIdx + 1; i <= currentNodeIdx + 2 && i <= n; i++) {
      nodes[i] += nodes[currentNodeIdx];
      if (!queue.includes(i)) {
        queue.push(i);
      }
    }
  }
  return nodes.pop();
}
