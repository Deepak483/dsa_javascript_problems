function bestTimeToBuySellStocks(prices) {
  let buyingPrice = prices[0];
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] < buyingPrice) buyingPrice = prices[i];
    else {
      profit += prices[i] - buyingPrice;
      buyingPrice = prices[i];
    }
  }
  return profit;
}

const result = bestTimeToBuySellStocks([7, 1, 3, 5, 6, 4]);
console.log(result);
/**
 * bp = 7;
 * profit = 0;
 * 1<7
 * bp = 1;
 * 3// 3<1 // profit = 3-1 = 2, bp = 3
 * 5// 5<3 profit = 2+5-3 = 4; bp = 5
 * 6// 6<5 profit = 4+6-5 = 5; bp = 6
 * 4 // 4<6 bp = 4
 */
