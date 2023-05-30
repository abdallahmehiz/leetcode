/**
 * @param {number} x
 * @return {boolean}
 */
public class Solution {
    public bool IsPalindrome(int x) {
        int tempNum = x;
            int reverseNum = 0, remaining;
            while (tempNum>0)
            {
                remaining = tempNum % 10;
                reverseNum = reverseNum * 10 + remaining;
                tempNum = tempNum / 10;
            }
            reverseNum == x ? return true : return false;
    }
}