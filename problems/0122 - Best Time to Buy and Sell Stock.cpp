#include <iostream>
#include <vector>
using namespace std;
class Solution
{
public:
  int maxProfit(vector<int> &prices)
  {
    int maxProfit = 0;
    for (int i = 1; i < prices.size(); i++)
    {
      // if the current day price is greater than previous day, sell it...
      if (prices[i] > prices[i - 1])
        // add profits
        maxProfit = maxProfit + prices[i] - prices[i - 1];
    }
    return maxProfit; // return the max profit
  }
};

int main()
{
  Solution s;
  vector<int> prices = {7, 1, 5, 3, 6, 4};
  cout << s.maxProfit(prices) << endl;
  return 0;
}