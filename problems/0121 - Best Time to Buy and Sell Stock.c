#include <stdio.h>
#include <stdlib.h>

int maxProfit(int *prices, int pricesSize)
{
  if (pricesSize == 0 || pricesSize == 1 || pricesSize < 0) // quick check
    return 0;
  int maxProfit = 0;
  int minPrice = prices[0];
  for (int i = 0; i < pricesSize; i++)
  {
    if (prices[i] < minPrice) // check if current price is lower than minPrice, if so, set minPrice to current price
      minPrice = prices[i];
    // check if current price - minPrice is higher than maxProfit, if so, set maxProfit to current price - minPrice
    else if (prices[i] - minPrice > maxProfit)
      maxProfit = prices[i] - minPrice;
  }
  return maxProfit;
}

int main()
{
  int prices[] = {7, 1, 5, 3, 6, 4};
  int pricesSize = sizeof(prices) / sizeof(prices[0]);
  int profit = maxProfit(prices, pricesSize);
  printf("%d\n", profit);
  return 0;
}