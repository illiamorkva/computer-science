/**
122. Best Time to Buy and Sell Stock II
https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit.
You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times).
However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
*/

const prices = [7, 1, 5, 3, 6, 4];

/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let i = 0;
  let valley = prices[0];
  let peak = prices[0];
  let maxProfit = 0;
  
  while (i < prices.length - 1) {
      while (i < prices.length - 1 && prices[i] >= prices[i + 1]) {
          i++;
      }
      valley = prices[i];
      while (i < prices.length - 1 && prices[i] <= prices[i + 1]) {
          i++;
      }
      peak = prices[i];

      maxProfit += peak - valley;
  }
  return maxProfit;
};

console.log('the Peak Valley solution:')
console.log(maxProfit(prices)); // maxProfit: 4 + 3 = 7

/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit1 = function(prices) {
  let maxProfit = 0;

  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > prices[i - 1]) {
          maxProfit += prices[i] - prices[i - 1];
      }
  }

  return maxProfit;
};

console.log('the Simple One Pass solution:')
console.log(maxProfit1(prices)); // maxProfit: 4 + 3 = 7