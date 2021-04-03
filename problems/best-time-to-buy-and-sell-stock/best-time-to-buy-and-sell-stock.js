//https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/564/

export function maxProfit(prices) {
  const length = prices.length;

  return prices.reduce(
    (acc, currentPrice, i) => {
      const { profit, localMin, isGrowing } = acc;

      const nextPrice = prices[i + 1];
      const isLast = i === length - 1;

      const isLocalMax = isGrowing && (isLast || nextPrice < currentPrice);

      if (isLocalMax) {
        return {
          ...acc,
          profit: profit + currentPrice - localMin,
          isGrowing: false,
        };
      }

      const isLocalMin = !isGrowing && nextPrice > currentPrice;

      if (isLocalMin) {
        return {
          ...acc,
          localMin: prices[i],
          isGrowing: true,
        };
      }

      return acc;
    },
    { profit: 0, isGrowing: false, localMin: undefined }
  ).profit;
}
