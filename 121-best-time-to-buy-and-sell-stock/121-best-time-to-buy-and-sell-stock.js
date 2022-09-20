/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
   let current_value = prices[0];
   let maxx_profit= 0;
   for (let i = 1; i < prices.length; i++) {
    if (prices[i] -current_value>=0) {
     maxx_profit = Math.max(maxx_profit, prices[i]-current_value);
    }
    else{
        current_value = prices[i];
    }
   }
   return maxx_profit
};